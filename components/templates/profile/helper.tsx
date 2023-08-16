import { useState } from 'react'
import ImgCrop from 'antd-img-crop'
import ConfigProvider from 'antd/lib/config-provider'
import Upload, {
  type UploadProps,
  type RcFile,
  type UploadChangeParam,
  type UploadFile,
} from 'antd/lib/upload'
import message from 'antd/lib/message'
import Image from 'next/image'
import Icon from 'components/atoms/icon'
import cn from 'classnames'

import type { ThemeConfig } from 'antd/lib/config-provider'
import styles from './profile.module.scss'

export const profileThemeConfig: ThemeConfig = {
  components: {
    Upload: {
      colorFillAlter: '#fff',
      colorBorder: '#EBEBEB',
    },
  },
}

export function CustomAvatar() {
  const [imageUrl, setImageUrl] = useState<string>()

  const getBase64 = (img: RcFile, callback: (url: string) => void) => {
    const reader = new FileReader()
    reader.addEventListener('load', () => callback(reader.result as string))
    reader.readAsDataURL(img)
  }

  const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!')
    }
    //   const isLt2M = file.size / 1024 / 1024 < 2
    //   if (!isLt2M) {
    //     message.error('Image must smaller than 2MB!')
    //   }
    return isJpgOrPng
  }

  const handleChange: UploadProps['onChange'] = (
    info: UploadChangeParam<UploadFile>
  ) => {
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj as RcFile, (url) => {
        setImageUrl(url)
      })
    }
  }

  return (
    <ConfigProvider theme={profileThemeConfig}>
      <ImgCrop
        quality={1}
        cropShape='round'
        modalTitle='ویرایش عکس'
        modalCancel='لغو'
        modalOk='تایید'
        resetText='بازگشت به حالت اولیه'
        rotationSlider
        showGrid
        showReset
      >
        <Upload
          name='avatar'
          listType='picture-circle'
          className={cn(styles['profile__avatar--upload'], 'profile-upload')}
          showUploadList={false}
          beforeUpload={beforeUpload}
          onChange={handleChange}
        >
          {imageUrl ? (
            <Image
              className={styles['profile__avatar--image']}
              src={imageUrl}
              alt='avatar'
              fill
            />
          ) : (
            <Icon
              className='fill-neutral-black-60'
              id='camera'
              width={48}
              height={48}
            />
          )}
        </Upload>
      </ImgCrop>
    </ConfigProvider>
  )
}
