import type { Validations } from 'utils/interfaces/validations'

export const regex = {
  device: /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i,
  email:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  phoneNumber: /^(\+98|0)?9\d{9}$/im,
  // fullname: /^.+ .+$/,
  fullname: /^[a-zA-Zآ-ی]+(([',. -][a-zA-Zآ-ی ])?[a-zA-Zآ-ی]*)*$/g,
  otpCode: /^[0-9]{6}$/g,
  numberOnly: /^[0-9]$/g,
  nationalCode: /^[0-9]{10}$/g,
  registrationNo: /^[0-9]{1,6}$/g,
  telephoneNumber: /^0[0-9]{2,}[0-9]{8,}$/g,
}

export const validation: Validations = {
  FULL_NAME: [
    {
      required: true,
      message: 'نام و نام خانوادگی الزامی است',
    },
    {
      pattern: regex['fullname'],
      message: 'نام و نام خانوادگی اشتباه وارد شده است',
    },
  ],
  NATIONAL_CODE: [
    { required: true, message: 'کد ملی الزامی است' },
    { pattern: regex['nationalCode'], message: 'کد ملی باید ۱۰ رقم باشد' },
  ],
  PERSONNEL_CODE: [{ required: true, message: 'کد پرسنلی الزامی است' }],
  PHONE_NUMBER: [
    { required: true, message: 'شماره همراه الزامی است' },
    {
      pattern: regex['phoneNumber'],
      message: 'شماره همراه اشتباه وارد شده است',
    },
  ],
}
