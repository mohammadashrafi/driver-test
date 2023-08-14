import { emptySplitApi as api } from 'libs/redux/services/emptyApi'
export const addTagTypes = ['driver-pickup-api'] as const
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      consignmentEdit: build.mutation<
        ConsignmentEditApiResponse,
        ConsignmentEditApiArg
      >({
        query: (queryArg) => ({
          url: `/consignment-api/driver/pickup/consignmentEdit`,
          method: 'PUT',
          body: queryArg.driverConsignmentEditDto,
        }),
        invalidatesTags: ['driver-pickup-api'],
      }),
      selectReceiverAccept: build.mutation<
        SelectReceiverAcceptApiResponse,
        SelectReceiverAcceptApiArg
      >({
        query: (queryArg) => ({
          url: `/consignment-api/driver/pickup/selectReceiver_Accept`,
          method: 'POST',
          body: queryArg.body,
          params: { description: queryArg.description },
        }),
        invalidatesTags: ['driver-pickup-api'],
      }),
      pickUp: build.mutation<PickUpApiResponse, PickUpApiArg>({
        query: (queryArg) => ({
          url: `/consignment-api/driver/pickup/pickUp`,
          method: 'POST',
          body: queryArg.driverConsignmentConfirmationDto,
        }),
        invalidatesTags: ['driver-pickup-api'],
      }),
      payment: build.mutation<PaymentApiResponse, PaymentApiArg>({
        query: (queryArg) => ({
          url: `/consignment-api/driver/pickup/payment`,
          method: 'POST',
          body: queryArg.driverPaymentDto,
        }),
        invalidatesTags: ['driver-pickup-api'],
      }),
      paymentCost: build.mutation<PaymentCostApiResponse, PaymentCostApiArg>({
        query: (queryArg) => ({
          url: `/consignment-api/driver/pickup/paymentCost`,
          method: 'POST',
          body: queryArg.paymentCostDto,
        }),
        invalidatesTags: ['driver-pickup-api'],
      }),
      labelPrint: build.mutation<LabelPrintApiResponse, LabelPrintApiArg>({
        query: (queryArg) => ({
          url: `/consignment-api/driver/pickup/labelPrint`,
          method: 'POST',
          body: queryArg.labelPrintDto,
        }),
        invalidatesTags: ['driver-pickup-api'],
      }),
      getPickupByDriverId: build.mutation<
        GetPickupByDriverIdApiResponse,
        GetPickupByDriverIdApiArg
      >({
        query: (queryArg) => ({
          url: `/consignment-api/driver/pickup/getByDriverId`,
          method: 'POST',
          body: queryArg.driverInfoDto,
        }),
        invalidatesTags: ['driver-pickup-api'],
      }),
      driverPickUpFailure: build.mutation<
        DriverPickUpFailureApiResponse,
        DriverPickUpFailureApiArg
      >({
        query: (queryArg) => ({
          url: `/consignment-api/driver/pickup/driverPickUpFailure`,
          method: 'POST',
          body: queryArg.driverPickUpFailureDto,
        }),
        invalidatesTags: ['driver-pickup-api'],
      }),
      driverPickUpFailedReason: build.mutation<
        DriverPickUpFailedReasonApiResponse,
        DriverPickUpFailedReasonApiArg
      >({
        query: (queryArg) => ({
          url: `/consignment-api/driver/pickup/driverPickUpFailedReason`,
          method: 'POST',
          body: queryArg.driverConsignmentFailedReasonDto,
        }),
        invalidatesTags: ['driver-pickup-api'],
      }),
      barcodeScan: build.mutation<BarcodeScanApiResponse, BarcodeScanApiArg>({
        query: (queryArg) => ({
          url: `/consignment-api/driver/pickup/barcodeScan`,
          method: 'POST',
          body: queryArg.barcodeScanDto,
        }),
        invalidatesTags: ['driver-pickup-api'],
      }),
      acceptPickUp: build.mutation<AcceptPickUpApiResponse, AcceptPickUpApiArg>(
        {
          query: (queryArg) => ({
            url: `/consignment-api/driver/pickup/acceptPickUp`,
            method: 'POST',
            body: queryArg.acceptPickUpDto,
          }),
          invalidatesTags: ['driver-pickup-api'],
        }
      ),
      getPickUpListByDriverId: build.query<
        GetPickUpListByDriverIdApiResponse,
        GetPickUpListByDriverIdApiArg
      >({
        query: (queryArg) => ({
          url: `/consignment-api/driver/pickup/getPickUpListByDriverId/${queryArg.id}`,
        }),
        providesTags: ['driver-pickup-api'],
      }),
      getPickUpTimeFromAndToByPickUpId: build.query<
        GetPickUpTimeFromAndToByPickUpIdApiResponse,
        GetPickUpTimeFromAndToByPickUpIdApiArg
      >({
        query: (queryArg) => ({
          url: `/consignment-api/driver/pickup/getPRSInformationByPickUpId/${queryArg.id}`,
        }),
        providesTags: ['driver-pickup-api'],
      }),
      getContradictionListByDriverId: build.query<
        GetContradictionListByDriverIdApiResponse,
        GetContradictionListByDriverIdApiArg
      >({
        query: (queryArg) => ({
          url: `/consignment-api/driver/pickup/getContradictionListByDriverId/${queryArg.id}`,
        }),
        providesTags: ['driver-pickup-api'],
      }),
      getAcceptedPickUpListByDriverId: build.query<
        GetAcceptedPickUpListByDriverIdApiResponse,
        GetAcceptedPickUpListByDriverIdApiArg
      >({
        query: (queryArg) => ({
          url: `/consignment-api/driver/pickup/getAcceptedPickUpListByDriverId/${queryArg.id}`,
        }),
        providesTags: ['driver-pickup-api'],
      }),
      findDriverInformationByCprNumber: build.query<
        FindDriverInformationByCprNumberApiResponse,
        FindDriverInformationByCprNumberApiArg
      >({
        query: (queryArg) => ({
          url: `/consignment-api/driver/pickup/findDriverInformationByCprNumber/${queryArg.cprNumber}`,
        }),
        providesTags: ['driver-pickup-api'],
      }),
      findConsignmentByPickUp: build.query<
        FindConsignmentByPickUpApiResponse,
        FindConsignmentByPickUpApiArg
      >({
        query: (queryArg) => ({
          url: `/consignment-api/driver/pickup/findConsignmentByPickup/${queryArg.id}`,
        }),
        providesTags: ['driver-pickup-api'],
      }),
      consignmentsCountByPickUp: build.query<
        ConsignmentsCountByPickUpApiResponse,
        ConsignmentsCountByPickUpApiArg
      >({
        query: (queryArg) => ({
          url: `/consignment-api/driver/pickup/consignmentsCountByPickUp/${queryArg.id}`,
        }),
        providesTags: ['driver-pickup-api'],
      }),
    }),
    overrideExisting: false,
  })
export { injectedRtkApi as pickupApi }
export type ConsignmentEditApiResponse = /** status 200 OK */ Response
export type ConsignmentEditApiArg = {
  driverConsignmentEditDto: DriverConsignmentEditDto
}
export type SelectReceiverAcceptApiResponse = /** status 200 OK */ Response
export type SelectReceiverAcceptApiArg = {
  description: string
  body: SelectResponse[]
}
export type PickUpApiResponse = /** status 200 OK */ Response
export type PickUpApiArg = {
  driverConsignmentConfirmationDto: DriverConsignmentConfirmationDto
}
export type PaymentApiResponse = /** status 200 OK */ Response
export type PaymentApiArg = {
  driverPaymentDto: DriverPaymentDto
}
export type PaymentCostApiResponse = /** status 200 OK */ Response
export type PaymentCostApiArg = {
  paymentCostDto: PaymentCostDto
}
export type LabelPrintApiResponse = /** status 200 OK */ Response
export type LabelPrintApiArg = {
  labelPrintDto: LabelPrintDto
}
export type GetPickupByDriverIdApiResponse = /** status 200 OK */ Response
export type GetPickupByDriverIdApiArg = {
  driverInfoDto: DriverInfoDto
}
export type DriverPickUpFailureApiResponse = /** status 200 OK */ Response
export type DriverPickUpFailureApiArg = {
  driverPickUpFailureDto: DriverPickUpFailureDto
}
export type DriverPickUpFailedReasonApiResponse = /** status 200 OK */ Response
export type DriverPickUpFailedReasonApiArg = {
  driverConsignmentFailedReasonDto: DriverConsignmentFailedReasonDto
}
export type BarcodeScanApiResponse = /** status 200 OK */ Response
export type BarcodeScanApiArg = {
  barcodeScanDto: BarcodeScanDto
}
export type AcceptPickUpApiResponse =
  /** status 200 There is an order with the given orderId */ ConsignmentDto
export type AcceptPickUpApiArg = {
  acceptPickUpDto: AcceptPickUpDto
}
export type GetPickUpListByDriverIdApiResponse = /** status 200 OK */ Response
export type GetPickUpListByDriverIdApiArg = {
  id: number
}
export type GetPickUpTimeFromAndToByPickUpIdApiResponse =
  /** status 200 OK */ Response
export type GetPickUpTimeFromAndToByPickUpIdApiArg = {
  id: number
}
export type GetContradictionListByDriverIdApiResponse =
  /** status 200 OK */ Response
export type GetContradictionListByDriverIdApiArg = {
  id: number
}
export type GetAcceptedPickUpListByDriverIdApiResponse =
  /** status 200 OK */ Response
export type GetAcceptedPickUpListByDriverIdApiArg = {
  id: number
}
export type FindDriverInformationByCprNumberApiResponse =
  /** status 200 OK */ Response
export type FindDriverInformationByCprNumberApiArg = {
  cprNumber: number
}
export type FindConsignmentByPickUpApiResponse = /** status 200 OK */ Response
export type FindConsignmentByPickUpApiArg = {
  id: number
}
export type ConsignmentsCountByPickUpApiResponse = /** status 200 OK */ Response
export type ConsignmentsCountByPickUpApiArg = {
  id: number
}
export type Response = {
  status?:
    | 'OK'
    | 'BAD_REQUEST'
    | 'UNAUTHORIZED'
    | 'EXCEPTION'
    | 'WRONG_CREDENTIALS'
    | 'ACCESS_DENIED'
    | 'NOT_FOUND'
    | 'DUPLICATE_ENTITY'
    | 'VALIDATION_EXCEPTION'
  payload?: object
  errors?: object
  metadata?: object
}
export type SelectResponse = {
  id?: number
  text?: string
}
export type DriverInfoDto = {
  selectDriver: SelectResponse
  selectUser: SelectResponse
  selectType: SelectResponse
  selectVehicle: SelectResponse
}
export type DriverConsignmentEditDto = {
  selectConsignment: SelectResponse
  driverInfoDto: DriverInfoDto
  weight?: number
  length?: number
  height?: number
  width?: number
}
export type DriverConsignmentConfirmationDto = {
  selectPickUp?: SelectResponse
  selectDelivery?: SelectResponse
  selectConsignmentList: SelectResponse[]
  driverInfoDto: DriverInfoDto
}
export type DriverPaymentDto = {
  paymentCost: string
  selectCustomer: SelectResponse
  driverInfoDto: DriverInfoDto
}
export type PaymentCostDto = {
  selectOrder: SelectResponse
  driverInfoDto: DriverInfoDto
}
export type LabelPrintDto = {
  labelNumber: string
  cprNumber: number
  driverInfoDto: DriverInfoDto
}
export type DriverPickUpFailureDto = {
  selectPickUp: SelectResponse
  selectFailedReasons: SelectResponse
  driverInfoDto: DriverInfoDto
  description?: string
}
export type DriverConsignmentFailedReasonDto = {
  selectPickUp: SelectResponse
  selectFailedReasons: SelectResponse
  selectConsignmentList: SelectResponse[]
  driverInfoDto: DriverInfoDto
  description?: string
}
export type BarcodeScanDto = {
  selectConsignment: SelectResponse
  labelNumber: string
  driverInfoDto: DriverInfoDto
}
export type DateDto = {
  day?: number
  month?: number
  year?: number
}
export type OrderServices = {
  id?: number
  serviceId?: number
  price?: number
  order?: Order
}
export type InvoiceDetail = {
  id?: number
  isDeleted?: boolean
  code?: string
  description?: string
  grossPrice?: number
  discount?: number
  netPrice?: number
  invoice?: Invoice
  discountCode?: string
  discountCodePrice?: number
  paymentBy?: 'SENDER' | 'RECIEVER'
}
export type Invoice = {
  id?: number
  isActive?: boolean
  isDeleted?: boolean
  invoiceNumber?: string
  description?: string
  grossPrice?: number
  discount?: number
  valueAddedTax?: number
  netPrice?: number
  invoiceStatus?: 'FREE' | 'ASSIGN' | 'RESERVED'
  invoiceDetails?: InvoiceDetail[]
  settlementDate?: string
}
export type Order = {
  id?: number
  isActive?: boolean
  isDeleted?: boolean
  trackingCode?: string
  orderDate?: string
  paymentMethod?: 'CASH' | 'CREDIT'
  orderStatus?: 'ISSUE' | 'FINAL' | 'CANCEL' | 'DISTRIBUTING' | 'DISTRIBUTED'
  salesChannelId?: number
  consignments?: Consignment[]
  orderServices?: OrderServices[]
  customerId?: number
  senderAddressId?: number
  senderPhoneId?: number
  returnAddressId?: number
  pickupAddressId?: number
  holdingHubId?: number
  pickupHubId?: number
  returnHubId?: number
  orderRegistrationHub?: number
  pickUpDate?: string
  pickUpTimeFrom?: string
  pickUpTimeTo?: string
  senderHubId?: number
  invoices?: Invoice[]
}
export type LabelRequest = {
  id?: number
  requestNo?: string
  requestDate?: string
  requestType?: 'PRINTED' | 'BARCODE_REPOSITORY_USING'
  hubId?: number
  customerId?: number
  status?: 'DRAFT' | 'ALLOCATION_WAITING' | 'ALLOCATED' | 'RECIEVE_DOWNLOAD'
  requestedNumber?: number
  labels?: Label[]
}
export type Label = {
  id?: number
  isActive?: boolean
  isDeleted?: boolean
  preCode?: string
  serialNumber?: string
  labelNumber?: string
  status?: 'FREE' | 'ASSIGN' | 'RESERVED'
  isGlobal?: boolean
  hubId?: number
  customerId?: number
  usableBy?: boolean
  consignments?: Consignment[]
  labelRequest?: LabelRequest
  creatorHubId?: number
}
export type Trip = {
  id?: number
  isActive?: boolean
  tripNo?: string
  transitTime?: number
  timeStoppage?: number
  transitDistance?: number
  startTime?: string
  endTime?: string
  tripDate?: string
  routeId?: number
  vehicleId?: number
  firstDriverId?: number
  secondDriverId?: number
  connectionInstances?: ConnectionInstance[]
  tripType?: 'PICKUP' | 'DELIVERY' | 'PICKUPDELIVERY' | 'INTERCITY'
  description?: string
  status?: 'STARTED' | 'FINISHED' | 'CANCEL'
  parent?: Trip
  tripCreatorHubId?: number
}
export type Delivery = {
  id?: number
  isActive?: boolean
  isDeleted?: boolean
  code?: string
  deliveryDate?: string
  deliveryTime?: string
  totalWeight?: number
  totalCapacity?: number
  status?:
    | 'PENDING'
    | 'DELIVERED'
    | 'FAILED'
    | 'UNDELIVERED'
    | 'CANCELLED'
    | 'CONFIRMATION_OF_THE_DRIVER_FOR_DELIVERY'
    | 'REJECT_OF_THE_DRIVER_FOR_DELIVERY'
  addressId?: number
  deliveryHubId?: number
  customerId?: number
  prospectId?: number
  consignments?: Consignment[]
  trip?: Trip
  deliveryRegionId?: number
  deliveryLatitude?: number
  deliveryLongitude?: number
  destinationHubId?: number
  connectionInstances?: ConnectionInstance[]
}
export type ConnectionInstance = {
  id?: number
  isActive?: boolean
  arrivalTime?: string
  departureTime?: string
  mode?: 'ROAD' | 'SEA' | 'RAILWAYS' | 'AIR'
  transitTime?: number
  timeStoppage?: number
  transitDistance?: number
  connectionId?: number
  gateId?: number
  dockId?: number
  dockArrivalTime?: string
  unloadingStartTime?: string
  unloadiningEndTime?: string
  loadingStartTime?: string
  loadingEndTime?: string
  dockDepartureTime?: string
  inoutGateDescription?: string
  inoutDockDescription?: string
  routeInstance?: Trip
  pickup?: Pickup
  delivery?: Delivery
  longtitude?: number
  latitude?: number
}
export type Pickup = {
  id?: number
  isActive?: boolean
  isDeleted?: boolean
  code?: string
  pickUpDate?: string
  pickUpTimeFrom?: string
  pickUpTimeTo?: string
  totalWeight?: number
  totalCapacity?: number
  status?:
    | 'PENDING'
    | 'SUCCESS'
    | 'FAILED'
    | 'UNRESOLVED'
    | 'CANCELLED'
    | 'CONFIRMATION_OF_THE_DRIVER_FOR_PICKUP'
    | 'REJECT_OF_THE_DRIVER_FOR_PICKUP'
  hubAllocateType?: 'MANUAL' | 'AUTOMATIC'
  priorotyType?: 'FORCEMAJEURE' | 'NORMAL'
  zoneAllocate?: boolean
  loadType?: 'DOCUMENT' | 'NONEDOCUMENT'
  customerId?: number
  addressId?: number
  allocatedHubId?: number
  pudoHubId?: number
  consignments?: Consignment[]
  connectionInstances?: ConnectionInstance[]
  trip?: Trip
  pickupRegionId?: number
  pickupLatitude?: number
  pickupLongitude?: number
}
export type ContentOfConsignment = {
  id?: number
  isActive?: boolean
  isDeleted?: boolean
  code?: string
  name?: string
}
export type FailedReason = {
  id?: number
  isActive?: boolean
  isDeleted?: boolean
  code?: string
  name?: string
  type?: 'PICKUP' | 'DELIVERY' | 'PICKUPDELIVERY'
}
export type ConsignmentFailedReason = {
  id?: number
  description?: string
  consignment?: Consignment
  failedReason?: FailedReason
}
export type ConsignmentHistory = {
  id?: number
  action?:
    | '\u067E\u06CC\u0634\u0646\u0648\u06CC\u0633'
    | '\u0642\u0628\u0648\u0644 \u0628\u0633\u062A\u0647 \u067E\u0633\u062A\u06CC'
    | '\u0628\u0633\u062A\u0647 \u062F\u0631 \u0645\u0633\u06CC\u0631 \u0634\u0647\u0631 \u0645\u0642\u0635\u062F'
    | '\u062F\u0631\u06CC\u0627\u0641\u062A \u062F\u0631 \u0634\u0647\u0631 \u0645\u0642\u0635\u062F'
    | '\u0628\u0633\u062A\u0647 \u062F\u0631 \u0645\u0633\u06CC\u0631 \u0647\u0627\u0628 \u062A\u0648\u0632\u06CC\u0639'
    | ' \u062F\u0631\u06CC\u0627\u0641\u062A \u0628\u0633\u062A\u0647 \u062F\u0631 \u0647\u0627\u0628 \u062A\u0648\u0632\u06CC\u0639'
    | '\u062A\u062D\u0648\u06CC\u0644 \u0628\u0647 \u0645\u0648\u0632\u0639'
    | '\u062A\u062D\u0648\u06CC\u0644 \u0634\u062F\u0647'
    | '\u062A\u062D\u0648\u06CC\u0644 \u0645\u0627\u0645\u0648\u0631 \u0628\u0647 \u0645\u0631\u0627\u06A9\u0632 \u0645\u062C\u0627\u0632 \u0628\u0627\u06A9\u0633\u06CC'
    | '\u062A\u062D\u0648\u06CC\u0644 \u0646\u0627\u0645\u0648\u0641\u0642 \u0627\u0648\u0644'
    | '\u062A\u062D\u0648\u06CC\u0644 \u0646\u0627\u0645\u0648\u0641\u0642 \u062F\u0648\u0645'
    | '\u062A\u062D\u0648\u06CC\u0644 \u0646\u0627\u0645\u0648\u0641\u0642 \u0633\u0648\u0645'
    | ' \u0639\u062F\u0645 \u062C\u0645\u0639 \u0622\u0648\u0631\u06CC \u0645\u0648\u0641\u0642 \u0627\u0648\u0644'
    | ' \u0639\u062F\u0645 \u062C\u0645\u0639 \u0622\u0648\u0631\u06CC \u0645\u0648\u0641\u0642 \u062F\u0648\u0645'
    | ' \u0639\u062F\u0645 \u062C\u0645\u0639 \u0622\u0648\u0631\u06CC \u0645\u0648\u0641\u0642 \u0633\u0648\u0645'
    | '\u062C\u0645\u0639 \u0622\u0648\u0631\u06CC \u0634\u062F\u0647 '
    | '\u062F\u0631\u06CC\u0627\u0641\u062A \u0627\u0632 \u0628\u0633\u062A\u0647 \u062F\u0648\u0645 \u0627\u0632 \u06AF\u06CC\u0631\u0646\u062F\u0647'
    | '\u062A\u062D\u0648\u06CC\u0644 \u0628\u0647 \u0647\u0627\u0628 \u062C\u0647\u062A \u0639\u0648\u062F\u062A'
    | '\u062C\u0645\u0639 \u0622\u0648\u0631\u06CC \u0645\u0627\u0645\u0648\u0631 \u0627\u0632 \u0645\u0631\u06A9\u0632 \u0628\u0627\u06A9\u0633\u06CC'
    | '\u067E\u0627\u06CC\u0627\u0646'
  description?: string
  hubId?: number
  cityId?: number
  tripId?: number
  parentId?: number
  cnDirection?:
    | '\u0628\u0647 \u062C\u0644\u0648'
    | '\u0628\u0631\u06AF\u0634\u062A\u06CC'
  consignment?: Consignment
  status?:
    | 'DRAFT'
    | 'PICKUP_WAIT'
    | 'PICKED_UP'
    | 'WAIT_FOR_ACCEPT'
    | 'ACCEPTED'
    | 'DELIVERY_TO_HUB'
    | 'NO_NEED_FOR_SORT'
    | 'SORTED'
    | 'DELIVERY_TO_DRIVER'
    | 'DELIVERY_TO_DROP_BOX'
    | 'DELIVERY_TO_DESTINATION'
    | 'NEXT_VISIT'
    | 'RETURN_TO_DESTINATION_HUB'
    | 'DELIVERY_TO_ORIGIN_HUB'
    | 'NOT_PICKED_UP'
    | 'DELIVERY_TO_DROP_BOX_FOR_PICKUP'
    | 'RESCHEDULED_FOR_PICKED_UP'
    | 'RESCHEDULED_FOR_DELIVERY'
    | 'WAIT_FOR_PICKED_UP_BY_DROP_BOX'
    | 'PICKED_UP_BY_DROP_BOX'
    | 'SENT_TO_DELIVER'
    | 'HUB_SCAN_IN'
    | 'HUB_SCAN_OUT'
    | 'WAIT_FOR_BAG_IN'
    | 'BAGE_IN'
    | 'RE_BAGE_IN'
    | 'CANCEL'
    | 'DELIVERY_PENDING_DRIVER_CONFIRM_PENDING'
    | 'DELIVERY_PENDING_DELIVERY_TO_DRIVER'
    | 'DELIVERY_PENDING_FAILURE_ACCEPT_DRIVER'
    | 'DELIVERY_PENDING_WAITING_APPROVAL_HUB'
    | 'PickUp_Failure_First'
    | 'PickUp_Failure_Second'
    | 'PickUp_Failure_Third'
    | 'DELIVERY_FAILED_FIRST'
    | 'DELIVERY_FAILED_SECOND'
    | 'DELIVERY_FAILED_THIRD'
    | 'PICKUP_PENDING_DRIVER_CONFIRM_PENDING'
    | 'PICKUP_PENDING_DELIVERY_TO_DRIVER'
    | 'PICKUP_PENDING_FAILURE_ACCEPT_DRIVER'
    | 'PICKUP_PENDING_WAITING_APPROVAL_HUB'
  latitude?: number
  longtitude?: number
}
export type Consignment = {
  id?: number
  isActive?: boolean
  isDeleted?: boolean
  consignmentType?: 'ENVELOPE' | 'PACKAGE' | 'POSTALCARD'
  contentType?: 'DOCUMENT' | 'NON_DOCUMENT' | 'NEWS_PAPER'
  cprNumber?: number
  declarativeWeight?: number
  weight?: number
  declarativeVolume?: number
  volume?: number
  declarativeLength?: number
  length?: number
  declarativeWidth?: number
  width?: number
  declarativeHeight?: number
  height?: number
  declarativeValue?: number
  status?:
    | 'DRAFT'
    | 'PICKUP_WAIT'
    | 'PICKED_UP'
    | 'WAIT_FOR_ACCEPT'
    | 'ACCEPTED'
    | 'DELIVERY_TO_HUB'
    | 'NO_NEED_FOR_SORT'
    | 'SORTED'
    | 'DELIVERY_TO_DRIVER'
    | 'DELIVERY_TO_DROP_BOX'
    | 'DELIVERY_TO_DESTINATION'
    | 'NEXT_VISIT'
    | 'RETURN_TO_DESTINATION_HUB'
    | 'DELIVERY_TO_ORIGIN_HUB'
    | 'NOT_PICKED_UP'
    | 'DELIVERY_TO_DROP_BOX_FOR_PICKUP'
    | 'RESCHEDULED_FOR_PICKED_UP'
    | 'RESCHEDULED_FOR_DELIVERY'
    | 'WAIT_FOR_PICKED_UP_BY_DROP_BOX'
    | 'PICKED_UP_BY_DROP_BOX'
    | 'SENT_TO_DELIVER'
    | 'HUB_SCAN_IN'
    | 'HUB_SCAN_OUT'
    | 'WAIT_FOR_BAG_IN'
    | 'BAGE_IN'
    | 'RE_BAGE_IN'
    | 'CANCEL'
    | 'DELIVERY_PENDING_DRIVER_CONFIRM_PENDING'
    | 'DELIVERY_PENDING_DELIVERY_TO_DRIVER'
    | 'DELIVERY_PENDING_FAILURE_ACCEPT_DRIVER'
    | 'DELIVERY_PENDING_WAITING_APPROVAL_HUB'
    | 'PickUp_Failure_First'
    | 'PickUp_Failure_Second'
    | 'PickUp_Failure_Third'
    | 'DELIVERY_FAILED_FIRST'
    | 'DELIVERY_FAILED_SECOND'
    | 'DELIVERY_FAILED_THIRD'
    | 'PICKUP_PENDING_DRIVER_CONFIRM_PENDING'
    | 'PICKUP_PENDING_DELIVERY_TO_DRIVER'
    | 'PICKUP_PENDING_FAILURE_ACCEPT_DRIVER'
    | 'PICKUP_PENDING_WAITING_APPROVAL_HUB'
  pickUpType?:
    | 'PICKUP_FROM_SENDER'
    | 'PICKUP_FROM_HUB'
    | 'PICKUP_FROM_OTHER_PLACE'
  pickUpDate?: string
  pickUpTimeFrom?: string
  pickUpTimeTo?: string
  deliveryType?: 'DELIVERY_IN_DESTINATION' | 'DELIVERY_IN_HUB' | 'NEWS_PAPER'
  returnType?: 'RETURN_TO_SENDER' | 'RETURN_TO_PICKUP' | 'RETURN_HUB'
  isTripAssigned?: boolean
  numberOfPieces?: number
  rescheduledDate?: string
  orderServiceTime?: string
  cnDirection?:
    | '\u0628\u0647 \u062C\u0644\u0648'
    | '\u0628\u0631\u06AF\u0634\u062A\u06CC'
  senderCustomerId?: number
  receiverCustomerId?: number
  receiverProspectId?: number
  deliveryAddressId?: number
  pickupAddressId?: number
  receiverAddressId?: number
  senderAddressId?: number
  deliveryHubId?: number
  currentHubId?: number
  pickupHubId?: number
  holdingHubId?: number
  originHubId?: number
  destinationHubId?: number
  receiverPhoneId?: number
  senderPhoneId?: number
  bagId?: number
  thirdPartyId?: number
  consignmentServices?: ConsignmentServices[]
  order?: Order
  label?: Label
  pickup?: Pickup
  hubTripNumberId?: number
  lastPickUpTripNumberId?: number
  lastDeliveryTripNumberId?: number
  lastExceptionId?: number
  originHubOfLastTripId?: number
  destinationHubOfLastTripId?: number
  delivery?: Delivery
  returnAddressId?: number
  returnHubId?: number
  content?: ContentOfConsignment
  contentofOthers?: string
  senderDescription?: string
  messageForReciever?: string
  messageForDriver?: string
  orderRegistrationHubId?: number
  discountCode?: string
  consignmentFailedReasons?: ConsignmentFailedReason[]
  deliveryFrom?: string
  deliveryTo?: string
  consignmentHistories?: ConsignmentHistory[]
  trackingCode?: string
  twoDestinations?: boolean
  needToPack?: boolean
  needToReciveCostOfGoods?: boolean
  costOfGoods?: number
  nextConsignments?: Consignment[]
  mainConsignment?: Consignment
  shelfId?: number
  orginHubOfLastTrip?: number
  myParcelId?: number
  currentHub?: number
}
export type ConsignmentServices = {
  id?: number
  serviceId?: number
  price?: number
  consignment?: Consignment
}
export type DateTimeDto = {
  day?: number
  month?: number
  year?: number
  hour?: string
  minute?: string
}
export type OrderServicesDto = {
  id?: number
  selectService?: SelectResponse
  price?: number
  order?: OrderDto
}
export type InvoiceDetailDto = {
  id?: number
  code?: string
  description?: string
  grossPrice?: number
  discount?: number
  netPrice?: number
  invoice?: SelectResponse
  consignment?: SelectResponse
  discountCode?: string
  discountCodePrice?: number
  paymentBy?: SelectResponse
  listOfService?: SelectResponse[]
}
export type InvoiceDto = {
  id?: number
  invoiceNumber?: string
  description?: string
  grossPrice?: number
  discount?: number
  valueAddedTax?: number
  netPrice?: number
  selectInvoiceStatus?: SelectResponse
  customerId?: number
  hubId?: number
  invoiceDetails?: InvoiceDetailDto[]
  createDateTime?: DateTimeDto
  selectOrder?: SelectResponse
  settlementDate?: DateTimeDto
}
export type OrderDto = {
  id?: number
  isActive?: boolean
  isDeleted?: boolean
  createdDate?: DateTimeDto
  trackingCode?: string
  orderDateDto?: DateDto
  selectPaymentMethod?: SelectResponse
  selectStatus?: SelectResponse
  consignments?: ConsignmentDto[]
  orderServices?: OrderServicesDto[]
  selectCustomer?: SelectResponse
  selectSenderAddress?: SelectResponse
  selectSenderPhone?: SelectResponse
  selectReturnAddress?: SelectResponse
  selectPickupAddress?: SelectResponse
  selectHoldingHub?: SelectResponse
  selectPickupHub?: SelectResponse
  selectReturnHub?: SelectResponse
  pickUpDateDto?: DateDto
  pickUpTimeFrom?: string
  pickUpTimeTo?: string
  orderRegistrationHub?: SelectResponse
  senderHubId?: number
  invoiceDtoList?: InvoiceDto[]
  consignmentCount?: number
}
export type LabelRequestDto = {
  id?: number
  requestNo: string
  requestDate: DateDto
  requestType?: SelectResponse
  selectHub?: SelectResponse
  status?: SelectResponse
  selectCustomer?: SelectResponse
  requestedNumber: number
}
export type LabelDto = {
  id?: number
  isActive?: boolean
  isDeleted?: boolean
  preCode?: string
  serialNumber?: number
  labelNumber?: string
  status?: number
  isGlobal?: boolean
  selectHub?: number
  selectCustomer?: number
  selectCreatorHub?: SelectResponse
  labelRequest?: LabelRequestDto
}
export type ConsignmentDto = {
  id?: number
  selectDeliveryHub?: SelectResponse
  selectPickupHub?: SelectResponse
  selectHoldingHub?: SelectResponse
  selectOriginHub?: SelectResponse
  destinationHubId?: SelectResponse
  isActive?: boolean
  selectConsignmentType?: SelectResponse
  cprNumber?: number
  status?:
    | 'DRAFT'
    | 'PICKUP_WAIT'
    | 'PICKED_UP'
    | 'WAIT_FOR_ACCEPT'
    | 'ACCEPTED'
    | 'DELIVERY_TO_HUB'
    | 'NO_NEED_FOR_SORT'
    | 'SORTED'
    | 'DELIVERY_TO_DRIVER'
    | 'DELIVERY_TO_DROP_BOX'
    | 'DELIVERY_TO_DESTINATION'
    | 'NEXT_VISIT'
    | 'RETURN_TO_DESTINATION_HUB'
    | 'DELIVERY_TO_ORIGIN_HUB'
    | 'NOT_PICKED_UP'
    | 'DELIVERY_TO_DROP_BOX_FOR_PICKUP'
    | 'RESCHEDULED_FOR_PICKED_UP'
    | 'RESCHEDULED_FOR_DELIVERY'
    | 'WAIT_FOR_PICKED_UP_BY_DROP_BOX'
    | 'PICKED_UP_BY_DROP_BOX'
    | 'SENT_TO_DELIVER'
    | 'HUB_SCAN_IN'
    | 'HUB_SCAN_OUT'
    | 'WAIT_FOR_BAG_IN'
    | 'BAGE_IN'
    | 'RE_BAGE_IN'
    | 'CANCEL'
    | 'DELIVERY_PENDING_DRIVER_CONFIRM_PENDING'
    | 'DELIVERY_PENDING_DELIVERY_TO_DRIVER'
    | 'DELIVERY_PENDING_FAILURE_ACCEPT_DRIVER'
    | 'DELIVERY_PENDING_WAITING_APPROVAL_HUB'
    | 'PickUp_Failure_First'
    | 'PickUp_Failure_Second'
    | 'PickUp_Failure_Third'
    | 'DELIVERY_FAILED_FIRST'
    | 'DELIVERY_FAILED_SECOND'
    | 'DELIVERY_FAILED_THIRD'
    | 'PICKUP_PENDING_DRIVER_CONFIRM_PENDING'
    | 'PICKUP_PENDING_DELIVERY_TO_DRIVER'
    | 'PICKUP_PENDING_FAILURE_ACCEPT_DRIVER'
    | 'PICKUP_PENDING_WAITING_APPROVAL_HUB'
  selectPickUpType?: SelectResponse
  width?: number
  height?: number
  value?: number
  length?: number
  volume?: number
  weight?: number
  contentType?: SelectResponse
  needToReciveCostOfGoods?: boolean
  costOfGoods?: number
  needToPack?: boolean
  numberOfPieces?: number
  selectDeliveryType?: SelectResponse
  selectReturnType?: SelectResponse
  isTripAssigned?: boolean
  rescheduledDate?: DateDto
  orderServiceTime?: string
  selectCnDirection?:
    | '\u0628\u0647 \u062C\u0644\u0648'
    | '\u0628\u0631\u06AF\u0634\u062A\u06CC'
  pickupAddressId?: number
  bagId?: number
  thirdPartyId?: number
  consignmentServices?: ConsignmentServices[]
  orderDto?: OrderDto
  labeldto?: LabelDto
  content?: SelectResponse
  contentofOthers?: string
  senderDescription?: string
  messageForReciever?: string
  messageForDriver?: string
  deliveryAddressId?: number
  receiverAddressId?: number
  receiverPhoneId?: number
  receiverCustomerId?: number
  receiverProspectId?: number
  parent?: ConsignmentDto
  nextConsignment?: ConsignmentDto[]
  trackingCode?: string
}
export type EntityNotFoundException = {
  cause?: {
    stackTrace?: {
      classLoaderName?: string
      moduleName?: string
      moduleVersion?: string
      methodName?: string
      fileName?: string
      lineNumber?: number
      className?: string
      nativeMethod?: boolean
    }[]
    message?: string
    suppressed?: {
      stackTrace?: {
        classLoaderName?: string
        moduleName?: string
        moduleVersion?: string
        methodName?: string
        fileName?: string
        lineNumber?: number
        className?: string
        nativeMethod?: boolean
      }[]
      message?: string
      localizedMessage?: string
    }[]
    localizedMessage?: string
  }
  stackTrace?: {
    classLoaderName?: string
    moduleName?: string
    moduleVersion?: string
    methodName?: string
    fileName?: string
    lineNumber?: number
    className?: string
    nativeMethod?: boolean
  }[]
  message?: string
  suppressed?: {
    stackTrace?: {
      classLoaderName?: string
      moduleName?: string
      moduleVersion?: string
      methodName?: string
      fileName?: string
      lineNumber?: number
      className?: string
      nativeMethod?: boolean
    }[]
    message?: string
    localizedMessage?: string
  }[]
  localizedMessage?: string
}
export type AcceptPickUpDto = {
  selectPickUp: SelectResponse
  driverInfoDto: DriverInfoDto
}
export const {
  useConsignmentEditMutation,
  useSelectReceiverAcceptMutation,
  usePickUpMutation,
  usePaymentMutation,
  usePaymentCostMutation,
  useLabelPrintMutation,
  useGetPickupByDriverIdMutation,
  useDriverPickUpFailureMutation,
  useDriverPickUpFailedReasonMutation,
  useBarcodeScanMutation,
  useAcceptPickUpMutation,
  useGetPickUpListByDriverIdQuery,
  useLazyGetPickUpListByDriverIdQuery,
  useGetPickUpTimeFromAndToByPickUpIdQuery,
  useLazyGetPickUpTimeFromAndToByPickUpIdQuery,
  useGetContradictionListByDriverIdQuery,
  useLazyGetContradictionListByDriverIdQuery,
  useGetAcceptedPickUpListByDriverIdQuery,
  useLazyGetAcceptedPickUpListByDriverIdQuery,
  useFindDriverInformationByCprNumberQuery,
  useLazyFindDriverInformationByCprNumberQuery,
  useFindConsignmentByPickUpQuery,
  useLazyFindConsignmentByPickUpQuery,
  useConsignmentsCountByPickUpQuery,
  useLazyConsignmentsCountByPickUpQuery,
} = injectedRtkApi
