import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

/**
 * <p>An activity that adds other attributes based on existing attributes in the message.</p>
 */
export interface AddAttributesActivity {
  /**
   * <p>The name of the addAttributes activity.</p>
   */
  name: string | undefined;

  /**
   * <p>A list of 1-50 <code>AttributeNameMapping</code> objects that map an existing attribute to
   *       a new attribute.</p>
   *          <note>
   *             <p>The existing attributes remain in the message, so if you want to remove the originals,
   *         use <code>RemoveAttributeActivity</code>.</p>
   *          </note>
   */
  attributes: { [key: string]: string } | undefined;

  /**
   * <p>The next activity in the pipeline.</p>
   */
  next?: string;
}

export namespace AddAttributesActivity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddAttributesActivity): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a message.</p>
 */
export interface Message {
  /**
   * <p>The ID you want to assign to the message. Each <code>messageId</code> must be unique
   *          within each batch sent.</p>
   */
  messageId: string | undefined;

  /**
   * <p>The payload of the message. This can be a JSON string or a base64-encoded string
   *          representing binary data, in which case you must decode it by means of a pipeline
   *          activity.</p>
   */
  payload: Uint8Array | undefined;
}

export namespace Message {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Message): any => ({
    ...obj,
  });
}

export interface BatchPutMessageRequest {
  /**
   * <p>The name of the channel where the messages are sent.</p>
   */
  channelName: string | undefined;

  /**
   * <p>The list of messages to be sent. Each message has the format: { "messageId": "string",
   *          "payload": "string"}.</p>
   *          <p>The field names of message payloads (data) that you send to IoT Analytics:</p>
   *         <ul>
   *             <li>
   *                <p>Must contain only alphanumeric characters and undescores (_). No other special characters are
   *                allowed.</p>
   *             </li>
   *             <li>
   *                <p>Must begin with an alphabetic character or single underscore (_).</p>
   *             </li>
   *             <li>
   *                <p>Cannot contain hyphens (-).</p>
   *             </li>
   *             <li>
   *                <p>In regular expression terms: "^[A-Za-z_]([A-Za-z0-9]*|[A-Za-z0-9][A-Za-z0-9_]*)$".
   *             </p>
   *             </li>
   *             <li>
   *                <p>Cannot be more than 255 characters.</p>
   *             </li>
   *             <li>
   *                <p>Are case insensitive. (Fields named foo and FOO in the same payload are considered
   *                duplicates.)</p>
   *             </li>
   *          </ul>
   *          <p>For example, {"temp_01": 29} or {"_temp_01": 29} are valid, but {"temp-01": 29},
   *  {"01_temp": 29} or {"__temp_01": 29} are invalid in message payloads.  </p>
   */
  messages: Message[] | undefined;
}

export namespace BatchPutMessageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchPutMessageRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains informations about errors.</p>
 */
export interface BatchPutMessageErrorEntry {
  /**
   * <p>The ID of the message that caused the error. See the value corresponding to the
   *             <code>messageId</code> key in the message object.</p>
   */
  messageId?: string;

  /**
   * <p>The code associated with the error.</p>
   */
  errorCode?: string;

  /**
   * <p>The message associated with the error.</p>
   */
  errorMessage?: string;
}

export namespace BatchPutMessageErrorEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchPutMessageErrorEntry): any => ({
    ...obj,
  });
}

export interface BatchPutMessageResponse {
  /**
   * <p>A list of any errors encountered when sending the messages to the channel.</p>
   */
  batchPutMessageErrorEntries?: BatchPutMessageErrorEntry[];
}

export namespace BatchPutMessageResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchPutMessageResponse): any => ({
    ...obj,
  });
}

/**
 * <p>There was an internal failure.</p>
 */
export interface InternalFailureException extends __SmithyException, $MetadataBearer {
  name: "InternalFailureException";
  $fault: "server";
  message?: string;
}

export namespace InternalFailureException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InternalFailureException): any => ({
    ...obj,
  });
}

/**
 * <p>The request was not valid.</p>
 */
export interface InvalidRequestException extends __SmithyException, $MetadataBearer {
  name: "InvalidRequestException";
  $fault: "client";
  message?: string;
}

export namespace InvalidRequestException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidRequestException): any => ({
    ...obj,
  });
}

/**
 * <p>A resource with the specified name could not be found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace ResourceNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>The service is temporarily unavailable.</p>
 */
export interface ServiceUnavailableException extends __SmithyException, $MetadataBearer {
  name: "ServiceUnavailableException";
  $fault: "server";
  message?: string;
}

export namespace ServiceUnavailableException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceUnavailableException): any => ({
    ...obj,
  });
}

/**
 * <p>The request was denied due to request throttling.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  message?: string;
}

export namespace ThrottlingException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj,
  });
}

export interface CancelPipelineReprocessingRequest {
  /**
   * <p>The name of pipeline for which data reprocessing is canceled.</p>
   */
  pipelineName: string | undefined;

  /**
   * <p>The ID of the reprocessing task (returned by
   *       <code>StartPipelineReprocessing</code>).</p>
   */
  reprocessingId: string | undefined;
}

export namespace CancelPipelineReprocessingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelPipelineReprocessingRequest): any => ({
    ...obj,
  });
}

export interface CancelPipelineReprocessingResponse {}

export namespace CancelPipelineReprocessingResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelPipelineReprocessingResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Used to store channel data in an S3 bucket that you manage. If customer-managed storage is
 *       selected, the <code>retentionPeriod</code> parameter is ignored. You can't change the choice
 *       of S3 storage after the data store is created.</p>
 */
export interface CustomerManagedChannelS3Storage {
  /**
   * <p>The name of the S3 bucket in which channel data is stored.</p>
   */
  bucket: string | undefined;

  /**
   * <p>(Optional) The prefix used to create the keys of the channel data objects. Each object in
   *       an S3 bucket has a key that is its unique identifier in the bucket. Each object in a bucket
   *       has exactly one key. The prefix must end with a forward slash (/).</p>
   */
  keyPrefix?: string;

  /**
   * <p>The ARN of the role that grants IoT Analytics permission to interact with your Amazon S3
   *       resources.</p>
   */
  roleArn: string | undefined;
}

export namespace CustomerManagedChannelS3Storage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CustomerManagedChannelS3Storage): any => ({
    ...obj,
  });
}

/**
 * <p>Used to store channel data in an S3 bucket managed by IoT Analytics. You can't change the choice
 *       of S3 storage after the data store is created.</p>
 */
export interface ServiceManagedChannelS3Storage {}

export namespace ServiceManagedChannelS3Storage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceManagedChannelS3Storage): any => ({
    ...obj,
  });
}

/**
 * <p>Where channel data is stored. You may choose one of <code>serviceManagedS3</code>,
 *         <code>customerManagedS3</code> storage. If not specified, the default is
 *         <code>serviceManagedS3</code>. This can't be changed after creation of the channel.</p>
 */
export interface ChannelStorage {
  /**
   * <p>Used to store channel data in an S3 bucket managed by IoT Analytics. You can't change the choice
   *       of S3 storage after the data store is created.</p>
   */
  serviceManagedS3?: ServiceManagedChannelS3Storage;

  /**
   * <p>Used to store channel data in an S3 bucket that you manage. If customer managed storage is
   *       selected, the <code>retentionPeriod</code> parameter is ignored. You can't change the choice
   *       of S3 storage after the data store is created.</p>
   */
  customerManagedS3?: CustomerManagedChannelS3Storage;
}

export namespace ChannelStorage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChannelStorage): any => ({
    ...obj,
  });
}

/**
 * <p>How long, in days, message data is kept.</p>
 */
export interface RetentionPeriod {
  /**
   * <p>If true, message data is kept indefinitely.</p>
   */
  unlimited?: boolean;

  /**
   * <p>The number of days that message data is kept. The <code>unlimited</code> parameter must be
   *       false.</p>
   */
  numberOfDays?: number;
}

export namespace RetentionPeriod {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RetentionPeriod): any => ({
    ...obj,
  });
}

/**
 * <p>A set of key-value pairs that are used to manage the resource.</p>
 */
export interface Tag {
  /**
   * <p>The tag's key.</p>
   */
  key: string | undefined;

  /**
   * <p>The tag's value.</p>
   */
  value: string | undefined;
}

export namespace Tag {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

export interface CreateChannelRequest {
  /**
   * <p>The name of the channel.</p>
   */
  channelName: string | undefined;

  /**
   * <p>Where channel data is stored. You can choose one of <code>serviceManagedS3</code> or
   *         <code>customerManagedS3</code> storage. If not specified, the default is
   *         <code>serviceManagedS3</code>. You can't change this storage option after the channel is
   *       created.</p>
   */
  channelStorage?: ChannelStorage;

  /**
   * <p>How long, in days, message data is kept for the channel. When
   *         <code>customerManagedS3</code> storage is selected, this parameter is ignored.</p>
   */
  retentionPeriod?: RetentionPeriod;

  /**
   * <p>Metadata which can be used to manage the channel.</p>
   */
  tags?: Tag[];
}

export namespace CreateChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateChannelRequest): any => ({
    ...obj,
  });
}

export interface CreateChannelResponse {
  /**
   * <p>The name of the channel.</p>
   */
  channelName?: string;

  /**
   * <p>The ARN of the channel.</p>
   */
  channelArn?: string;

  /**
   * <p>How long, in days, message data is kept for the channel.</p>
   */
  retentionPeriod?: RetentionPeriod;
}

export namespace CreateChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateChannelResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The command caused an internal limit to be exceeded.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  message?: string;
}

export namespace LimitExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>A resource with the same name already exists.</p>
 */
export interface ResourceAlreadyExistsException extends __SmithyException, $MetadataBearer {
  name: "ResourceAlreadyExistsException";
  $fault: "client";
  message?: string;
  /**
   * <p>The ID of the resource.</p>
   */
  resourceId?: string;

  /**
   * <p>The ARN of the resource.</p>
   */
  resourceArn?: string;
}

export namespace ResourceAlreadyExistsException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceAlreadyExistsException): any => ({
    ...obj,
  });
}

export enum ComputeType {
  ACU_1 = "ACU_1",
  ACU_2 = "ACU_2",
}

/**
 * <p>The configuration of the resource used to execute the <code>containerAction</code>.</p>
 */
export interface ResourceConfiguration {
  /**
   * <p>The type of the compute resource used to execute the <code>containerAction</code>.
   *       Possible values are: <code>ACU_1</code> (vCPU=4, memory=16 GiB) or <code>ACU_2</code> (vCPU=8,
   *       memory=32 GiB).</p>
   */
  computeType: ComputeType | string | undefined;

  /**
   * <p>The size, in GB, of the persistent storage available to the resource instance used to
   *       execute the <code>containerAction</code> (min: 1, max: 50).</p>
   */
  volumeSizeInGB: number | undefined;
}

export namespace ResourceConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>The dataset whose latest contents are used as input to the notebook or application.</p>
 */
export interface DatasetContentVersionValue {
  /**
   * <p>The name of the dataset whose latest contents are used as input to the notebook or
   *       application.</p>
   */
  datasetName: string | undefined;
}

export namespace DatasetContentVersionValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DatasetContentVersionValue): any => ({
    ...obj,
  });
}

/**
 * <p>The value of the variable as a structure that specifies an output file URI.</p>
 */
export interface OutputFileUriValue {
  /**
   * <p>The URI of the location where dataset contents are stored, usually the URI of a file in an
   *       S3 bucket.</p>
   */
  fileName: string | undefined;
}

export namespace OutputFileUriValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OutputFileUriValue): any => ({
    ...obj,
  });
}

/**
 * <p>An instance of a variable to be passed to the <code>containerAction</code> execution. Each
 *       variable must have a name and a value given by one of <code>stringValue</code>,
 *         <code>datasetContentVersionValue</code>, or <code>outputFileUriValue</code>.</p>
 */
export interface Variable {
  /**
   * <p>The name of the variable.</p>
   */
  name: string | undefined;

  /**
   * <p>The value of the variable as a string.</p>
   */
  stringValue?: string;

  /**
   * <p>The value of the variable as a double (numeric).</p>
   */
  doubleValue?: number;

  /**
   * <p>The value of the variable as a structure that specifies a dataset content version.</p>
   */
  datasetContentVersionValue?: DatasetContentVersionValue;

  /**
   * <p>The value of the variable as a structure that specifies an output file URI.</p>
   */
  outputFileUriValue?: OutputFileUriValue;
}

export namespace Variable {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Variable): any => ({
    ...obj,
  });
}

/**
 * <p>Information required to run the <code>containerAction</code> to produce dataset
 *       contents.</p>
 */
export interface ContainerDatasetAction {
  /**
   * <p>The ARN of the Docker container stored in your account. The Docker container contains an
   *       application and required support libraries and is used to generate dataset contents.</p>
   */
  image: string | undefined;

  /**
   * <p>The ARN of the role that gives permission to the system to access required resources to
   *       run the <code>containerAction</code>. This includes, at minimum, permission to retrieve the
   *       dataset contents that are the input to the containerized application.</p>
   */
  executionRoleArn: string | undefined;

  /**
   * <p>Configuration of the resource that executes the <code>containerAction</code>.</p>
   */
  resourceConfiguration: ResourceConfiguration | undefined;

  /**
   * <p>The values of variables used in the context of the execution of the containerized
   *       application (basically, parameters passed to the application). Each variable must have a name
   *       and a value given by one of <code>stringValue</code>, <code>datasetContentVersionValue</code>,
   *       or <code>outputFileUriValue</code>.</p>
   */
  variables?: Variable[];
}

export namespace ContainerDatasetAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContainerDatasetAction): any => ({
    ...obj,
  });
}

/**
 * <p>Used to limit data to that which has arrived since the last execution of the
 *       action.</p>
 */
export interface DeltaTime {
  /**
   * <p>The number of seconds of estimated in-flight lag time of message data. When you create
   *       dataset contents using message data from a specified timeframe, some message data might still
   *       be in flight when processing begins, and so do not arrive in time to be processed. Use this
   *       field to make allowances for the in flight time of your message data, so that data not
   *       processed from a previous timeframe is included with the next timeframe. Otherwise, missed
   *       message data would be excluded from processing during the next timeframe too, because its
   *       timestamp places it within the previous timeframe.</p>
   */
  offsetSeconds: number | undefined;

  /**
   * <p>An expression by which the time of the message data might be determined. This can be the
   *       name of a timestamp field or a SQL expression that is used to derive the time the message data
   *       was generated.</p>
   */
  timeExpression: string | undefined;
}

export namespace DeltaTime {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeltaTime): any => ({
    ...obj,
  });
}

/**
 * <p>Information that is used to filter message data, to segregate it according to the
 *       timeframe in which it arrives.</p>
 */
export interface QueryFilter {
  /**
   * <p>Used to limit data to that which has arrived since the last execution of the
   *       action.</p>
   */
  deltaTime?: DeltaTime;
}

export namespace QueryFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: QueryFilter): any => ({
    ...obj,
  });
}

/**
 * <p>The SQL query to modify the message.</p>
 */
export interface SqlQueryDatasetAction {
  /**
   * <p>A SQL query string.</p>
   */
  sqlQuery: string | undefined;

  /**
   * <p>Prefilters applied to message data.</p>
   */
  filters?: QueryFilter[];
}

export namespace SqlQueryDatasetAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SqlQueryDatasetAction): any => ({
    ...obj,
  });
}

/**
 * <p>A <code>DatasetAction</code> object that specifies how dataset contents are automatically
 *       created.</p>
 */
export interface DatasetAction {
  /**
   * <p>The name of the dataset action by which dataset contents are automatically created.</p>
   */
  actionName?: string;

  /**
   * <p>An <code>SqlQueryDatasetAction</code> object that uses an SQL query to automatically
   *       create dataset contents.</p>
   */
  queryAction?: SqlQueryDatasetAction;

  /**
   * <p>Information that allows the system to run a containerized application to create the
   *       dataset contents. The application must be in a Docker container along with any required
   *       support libraries.</p>
   */
  containerAction?: ContainerDatasetAction;
}

export namespace DatasetAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DatasetAction): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration information for delivery of dataset contents to IoT Events.</p>
 */
export interface IotEventsDestinationConfiguration {
  /**
   * <p>The name of the IoT Events input to which dataset contents are delivered.</p>
   */
  inputName: string | undefined;

  /**
   * <p>The ARN of the role that grants IoT Analytics permission to deliver dataset contents to an IoT Events
   *       input.</p>
   */
  roleArn: string | undefined;
}

export namespace IotEventsDestinationConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IotEventsDestinationConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration information for coordination with Glue, a fully managed extract, transform
 *       and load (ETL) service.</p>
 */
export interface GlueConfiguration {
  /**
   * <p>The name of the table in your Glue Data Catalog that is used to perform the ETL
   *       operations. An Glue Data Catalog table contains partitioned data and descriptions of data
   *       sources and targets.</p>
   */
  tableName: string | undefined;

  /**
   * <p>The name of the database in your Glue Data Catalog in which the table is located. An
   *       Glue Data Catalog database contains metadata tables.</p>
   */
  databaseName: string | undefined;
}

export namespace GlueConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GlueConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration information for delivery of dataset contents to Amazon Simple Storage Service (Amazon S3).</p>
 */
export interface S3DestinationConfiguration {
  /**
   * <p>The name of the S3 bucket to which dataset contents are delivered.</p>
   */
  bucket: string | undefined;

  /**
   * <p>The key of the dataset contents object in an S3 bucket. Each object has a key that is a
   *       unique identifier. Each object has exactly one key.</p>
   *          <p>You can create a unique key with the following options:</p>
   *          <ul>
   *             <li>
   *                <p>Use <code>!{iotanalytics:scheduleTime}</code> to insert the time of a scheduled SQL
   *           query run.</p>
   *             </li>
   *             <li>
   *                <p>Use <code>!{iotanalytics:versionId}</code> to insert a unique hash that identifies a
   *           dataset content.</p>
   *             </li>
   *             <li>
   *                <p>Use <code>!{iotanalytics:creationTime}</code> to insert the creation time of a dataset
   *           content.</p>
   *             </li>
   *          </ul>
   *          <p>The following example creates a unique key for a CSV file:
   *         <code>dataset/mydataset/!{iotanalytics:scheduleTime}/!{iotanalytics:versionId}.csv</code>
   *          </p>
   *          <note>
   *             <p>If you don't use <code>!{iotanalytics:versionId}</code> to specify the key, you might
   *         get duplicate keys. For example, you might have two dataset contents with the same
   *           <code>scheduleTime</code> but different <code>versionId</code>s. This means that one
   *         dataset content overwrites the other. </p>
   *          </note>
   */
  key: string | undefined;

  /**
   * <p>Configuration information for coordination with Glue, a fully managed extract, transform
   *       and load (ETL) service.</p>
   */
  glueConfiguration?: GlueConfiguration;

  /**
   * <p>The ARN of the role that grants IoT Analytics permission to interact with your Amazon S3 and Glue
   *       resources.</p>
   */
  roleArn: string | undefined;
}

export namespace S3DestinationConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3DestinationConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>The destination to which dataset contents are delivered.</p>
 */
export interface DatasetContentDeliveryDestination {
  /**
   * <p>Configuration information for delivery of dataset contents to IoT Events.</p>
   */
  iotEventsDestinationConfiguration?: IotEventsDestinationConfiguration;

  /**
   * <p>Configuration information for delivery of dataset contents to Amazon S3.</p>
   */
  s3DestinationConfiguration?: S3DestinationConfiguration;
}

export namespace DatasetContentDeliveryDestination {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DatasetContentDeliveryDestination): any => ({
    ...obj,
  });
}

/**
 * <p>When dataset contents are created, they are delivered to destination specified
 *       here.</p>
 */
export interface DatasetContentDeliveryRule {
  /**
   * <p>The name of the dataset content delivery rules entry.</p>
   */
  entryName?: string;

  /**
   * <p>The destination to which dataset contents are delivered.</p>
   */
  destination: DatasetContentDeliveryDestination | undefined;
}

export namespace DatasetContentDeliveryRule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DatasetContentDeliveryRule): any => ({
    ...obj,
  });
}

/**
 * <p>A structure that contains the configuration information of a delta time session
 *       window.</p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DeltaTime.html">
 *                <code>DeltaTime</code>
 *             </a> specifies a time interval. You can use
 *         <code>DeltaTime</code> to create dataset contents with data that has arrived in the data
 *       store since the last execution. For an example of <code>DeltaTime</code>, see <a href="https://docs.aws.amazon.com/iotanalytics/latest/userguide/automate-create-dataset.html#automate-example6"> Creating
 *         a SQL dataset with a delta window (CLI)</a> in the
 *         <i>IoT Analytics User Guide</i>.</p>
 */
export interface DeltaTimeSessionWindowConfiguration {
  /**
   * <p>A time interval. You can use <code>timeoutInMinutes</code> so that IoT Analytics can batch up late
   *       data notifications that have been generated since the last execution. IoT Analytics sends one batch of
   *       notifications to Amazon CloudWatch Events at one time.</p>
   *          <p>For more information about how to write a timestamp expression, see <a href="https://prestodb.io/docs/0.172/functions/datetime.html">Date and Time Functions and
   *         Operators</a>, in the <i>Presto 0.172 Documentation</i>.</p>
   */
  timeoutInMinutes: number | undefined;
}

export namespace DeltaTimeSessionWindowConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeltaTimeSessionWindowConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>The information needed to configure a delta time session window.</p>
 */
export interface LateDataRuleConfiguration {
  /**
   * <p>The information needed to configure a delta time session window.</p>
   */
  deltaTimeSessionWindowConfiguration?: DeltaTimeSessionWindowConfiguration;
}

export namespace LateDataRuleConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LateDataRuleConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>A structure that contains the name and configuration information of a late data
 *       rule.</p>
 */
export interface LateDataRule {
  /**
   * <p>The name of the late data rule.</p>
   */
  ruleName?: string;

  /**
   * <p>The information needed to configure the late data rule.</p>
   */
  ruleConfiguration: LateDataRuleConfiguration | undefined;
}

export namespace LateDataRule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LateDataRule): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the dataset whose content generation triggers the new dataset content
 *       generation.</p>
 */
export interface TriggeringDataset {
  /**
   * <p>The name of the dataset whose content generation triggers the new dataset content
   *       generation.</p>
   */
  name: string | undefined;
}

export namespace TriggeringDataset {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TriggeringDataset): any => ({
    ...obj,
  });
}

/**
 * <p>The schedule for when to trigger an update.</p>
 */
export interface Schedule {
  /**
   * <p>The expression that defines when to trigger an update. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html">Schedule
   *         Expressions for Rules</a> in the <i>Amazon CloudWatch Events User
   *         Guide</i>.</p>
   */
  expression?: string;
}

export namespace Schedule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Schedule): any => ({
    ...obj,
  });
}

/**
 * <p>The <code>DatasetTrigger</code> that specifies when the dataset is automatically
 *       updated.</p>
 */
export interface DatasetTrigger {
  /**
   * <p>The Schedule when the trigger is initiated.</p>
   */
  schedule?: Schedule;

  /**
   * <p>The dataset whose content creation triggers the creation of this dataset's
   *       contents.</p>
   */
  dataset?: TriggeringDataset;
}

export namespace DatasetTrigger {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DatasetTrigger): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the versioning of dataset contents.</p>
 */
export interface VersioningConfiguration {
  /**
   * <p>If true, unlimited versions of dataset contents are kept.</p>
   */
  unlimited?: boolean;

  /**
   * <p>How many versions of dataset contents are kept. The <code>unlimited</code> parameter must
   *       be <code>false</code>.</p>
   */
  maxVersions?: number;
}

export namespace VersioningConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VersioningConfiguration): any => ({
    ...obj,
  });
}

export interface CreateDatasetRequest {
  /**
   * <p>The name of the dataset.</p>
   */
  datasetName: string | undefined;

  /**
   * <p>A list of actions that create the dataset contents.</p>
   */
  actions: DatasetAction[] | undefined;

  /**
   * <p>A list of triggers. A trigger causes dataset contents to be populated at a specified time
   *       interval or when another dataset's contents are created. The list of triggers can be empty or
   *       contain up to five <code>DataSetTrigger</code> objects.</p>
   */
  triggers?: DatasetTrigger[];

  /**
   * <p>When dataset contents are created, they are delivered to destinations specified
   *       here.</p>
   */
  contentDeliveryRules?: DatasetContentDeliveryRule[];

  /**
   * <p>Optional. How long, in days, versions of dataset contents are kept for the dataset. If not
   *       specified or set to <code>null</code>, versions of dataset contents are retained for at most
   *       90 days. The number of versions of dataset contents retained is determined by the
   *         <code>versioningConfiguration</code> parameter. For more information, see <a href="https://docs.aws.amazon.com/iotanalytics/latest/userguide/getting-started.html#aws-iot-analytics-dataset-versions">
   *         Keeping Multiple Versions of IoT Analytics datasets</a> in the
   *         <i>IoT Analytics User Guide</i>.</p>
   */
  retentionPeriod?: RetentionPeriod;

  /**
   * <p>Optional. How many versions of dataset contents are kept. If not specified or set to null,
   *       only the latest version plus the latest succeeded version (if they are different) are kept for
   *       the time period specified by the <code>retentionPeriod</code> parameter. For more information,
   *       see <a href="https://docs.aws.amazon.com/iotanalytics/latest/userguide/getting-started.html#aws-iot-analytics-dataset-versions">Keeping Multiple Versions of IoT Analytics datasets</a> in the
   *         <i>IoT Analytics User Guide</i>.</p>
   */
  versioningConfiguration?: VersioningConfiguration;

  /**
   * <p>Metadata which can be used to manage the dataset.</p>
   */
  tags?: Tag[];

  /**
   * <p>A list of data rules that send notifications to CloudWatch, when data arrives late. To specify <code>lateDataRules</code>, the dataset must use a <a href="https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DeltaTime.html">DeltaTimer</a> filter.</p>
   */
  lateDataRules?: LateDataRule[];
}

export namespace CreateDatasetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDatasetRequest): any => ({
    ...obj,
  });
}

export interface CreateDatasetResponse {
  /**
   * <p>The name of the dataset.</p>
   */
  datasetName?: string;

  /**
   * <p>The ARN of the dataset.</p>
   */
  datasetArn?: string;

  /**
   * <p>How long, in days, dataset contents are kept for the dataset.</p>
   */
  retentionPeriod?: RetentionPeriod;
}

export namespace CreateDatasetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDatasetResponse): any => ({
    ...obj,
  });
}

export interface CreateDatasetContentRequest {
  /**
   * <p>The name of the dataset.</p>
   */
  datasetName: string | undefined;

  /**
   * <p>The version ID of the dataset content. To specify <code>versionId</code> for a dataset
   *       content, the dataset must use a <a href="https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DeltaTime.html">DeltaTimer</a> filter.</p>
   */
  versionId?: string;
}

export namespace CreateDatasetContentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDatasetContentRequest): any => ({
    ...obj,
  });
}

export interface CreateDatasetContentResponse {
  /**
   * <p>The version ID of the dataset contents that are being created.</p>
   */
  versionId?: string;
}

export namespace CreateDatasetContentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDatasetContentResponse): any => ({
    ...obj,
  });
}

/**
 * <p> A partition dimension defined by an attribute. </p>
 */
export interface Partition {
  /**
   * <p> The name of the attribute that defines a partition dimension. </p>
   */
  attributeName: string | undefined;
}

export namespace Partition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Partition): any => ({
    ...obj,
  });
}

/**
 * <p> A partition dimension defined by a timestamp attribute. </p>
 */
export interface TimestampPartition {
  /**
   * <p> The attribute name of the partition defined by a timestamp. </p>
   */
  attributeName: string | undefined;

  /**
   * <p> The timestamp format of a partition defined by a timestamp. The default format is seconds
   *       since epoch (January 1, 1970 at midnight UTC time). </p>
   */
  timestampFormat?: string;
}

export namespace TimestampPartition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TimestampPartition): any => ({
    ...obj,
  });
}

/**
 * <p> A single dimension to partition a data store. The dimension must be an
 *         <code>AttributePartition</code> or a <code>TimestampPartition</code>. </p>
 */
export interface DatastorePartition {
  /**
   * <p> A partition dimension defined by an <code>attributeName</code>. </p>
   */
  attributePartition?: Partition;

  /**
   * <p> A partition dimension defined by a timestamp attribute. </p>
   */
  timestampPartition?: TimestampPartition;
}

export namespace DatastorePartition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DatastorePartition): any => ({
    ...obj,
  });
}

/**
 * <p> Contains information about the partition dimensions in a data store. </p>
 */
export interface DatastorePartitions {
  /**
   * <p> A list of partition dimensions in a data store. </p>
   */
  partitions?: DatastorePartition[];
}

export namespace DatastorePartitions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DatastorePartitions): any => ({
    ...obj,
  });
}

/**
 * <p>S3-customer-managed; When you choose customer-managed storage, the <code>retentionPeriod</code> parameter is ignored. You can't change the choice of Amazon S3 storage after your data store is created.  </p>
 */
export interface CustomerManagedDatastoreS3Storage {
  /**
   * <p>The name of the Amazon S3 bucket where your data is stored.</p>
   */
  bucket: string | undefined;

  /**
   * <p>(Optional) The prefix used to create the keys of the data store data objects. Each object in an Amazon S3 bucket has a key that is its unique identifier in the bucket. Each object in a bucket has exactly one key. The prefix must end with a forward slash (/).</p>
   */
  keyPrefix?: string;

  /**
   * <p>The ARN of the role that grants IoT Analytics permission to interact with your Amazon S3 resources.</p>
   */
  roleArn: string | undefined;
}

export namespace CustomerManagedDatastoreS3Storage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CustomerManagedDatastoreS3Storage): any => ({
    ...obj,
  });
}

/**
 * <p> Used to store data used by IoT SiteWise in an Amazon S3 bucket that you manage. You can't change the choice of Amazon S3 storage after your data store is created.   </p>
 */
export interface IotSiteWiseCustomerManagedDatastoreS3Storage {
  /**
   * <p> The name of the Amazon S3 bucket where your data is stored. </p>
   */
  bucket: string | undefined;

  /**
   * <p> (Optional) The prefix used to create the keys of the data store data objects. Each object in an Amazon S3 bucket has a key that is its unique identifier in the bucket. Each object in a bucket has exactly one key. The prefix must end with a forward slash (/). </p>
   */
  keyPrefix?: string;
}

export namespace IotSiteWiseCustomerManagedDatastoreS3Storage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IotSiteWiseCustomerManagedDatastoreS3Storage): any => ({
    ...obj,
  });
}

/**
 * <p> Used to store data used by IoT SiteWise in an Amazon S3 bucket that you manage. You can't change the choice of Amazon S3 storage after your data store is created.   </p>
 */
export interface DatastoreIotSiteWiseMultiLayerStorage {
  /**
   * <p> Used to store data used by IoT SiteWise in an Amazon S3 bucket that you manage. </p>
   */
  customerManagedS3Storage: IotSiteWiseCustomerManagedDatastoreS3Storage | undefined;
}

export namespace DatastoreIotSiteWiseMultiLayerStorage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DatastoreIotSiteWiseMultiLayerStorage): any => ({
    ...obj,
  });
}

/**
 * <p>Used to store data in an Amazon S3 bucket managed by IoT Analytics. You can't change the choice of Amazon S3 storage after your data store is created.  </p>
 */
export interface ServiceManagedDatastoreS3Storage {}

export namespace ServiceManagedDatastoreS3Storage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceManagedDatastoreS3Storage): any => ({
    ...obj,
  });
}

/**
 * <p>Where data in a data store is stored.. You can choose <code>serviceManagedS3</code> storage, <code>customerManagedS3</code> storage, or <code>iotSiteWiseMultiLayerStorage</code> storage. The default is <code>serviceManagedS3</code>. You can't change the choice of Amazon S3 storage after your data store is created. </p>
 */
export type DatastoreStorage =
  | DatastoreStorage.CustomerManagedS3Member
  | DatastoreStorage.IotSiteWiseMultiLayerStorageMember
  | DatastoreStorage.ServiceManagedS3Member
  | DatastoreStorage.$UnknownMember;

export namespace DatastoreStorage {
  /**
   * <p>Used to store data in an Amazon S3 bucket managed by IoT Analytics. You can't change the choice of Amazon S3 storage after your data store is created.  </p>
   */
  export interface ServiceManagedS3Member {
    serviceManagedS3: ServiceManagedDatastoreS3Storage;
    customerManagedS3?: never;
    iotSiteWiseMultiLayerStorage?: never;
    $unknown?: never;
  }

  /**
   * <p>S3-customer-managed; When you choose customer-managed storage, the <code>retentionPeriod</code> parameter is ignored. You can't change the choice of Amazon S3 storage after your data store is created.  </p>
   */
  export interface CustomerManagedS3Member {
    serviceManagedS3?: never;
    customerManagedS3: CustomerManagedDatastoreS3Storage;
    iotSiteWiseMultiLayerStorage?: never;
    $unknown?: never;
  }

  /**
   * <p> Used to store data used by IoT SiteWise in an Amazon S3 bucket that you manage. You can't change the choice of Amazon S3 storage after your data store is created.   </p>
   */
  export interface IotSiteWiseMultiLayerStorageMember {
    serviceManagedS3?: never;
    customerManagedS3?: never;
    iotSiteWiseMultiLayerStorage: DatastoreIotSiteWiseMultiLayerStorage;
    $unknown?: never;
  }

  export interface $UnknownMember {
    serviceManagedS3?: never;
    customerManagedS3?: never;
    iotSiteWiseMultiLayerStorage?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    serviceManagedS3: (value: ServiceManagedDatastoreS3Storage) => T;
    customerManagedS3: (value: CustomerManagedDatastoreS3Storage) => T;
    iotSiteWiseMultiLayerStorage: (value: DatastoreIotSiteWiseMultiLayerStorage) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: DatastoreStorage, visitor: Visitor<T>): T => {
    if (value.serviceManagedS3 !== undefined) return visitor.serviceManagedS3(value.serviceManagedS3);
    if (value.customerManagedS3 !== undefined) return visitor.customerManagedS3(value.customerManagedS3);
    if (value.iotSiteWiseMultiLayerStorage !== undefined)
      return visitor.iotSiteWiseMultiLayerStorage(value.iotSiteWiseMultiLayerStorage);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DatastoreStorage): any => {
    if (obj.serviceManagedS3 !== undefined)
      return { serviceManagedS3: ServiceManagedDatastoreS3Storage.filterSensitiveLog(obj.serviceManagedS3) };
    if (obj.customerManagedS3 !== undefined)
      return { customerManagedS3: CustomerManagedDatastoreS3Storage.filterSensitiveLog(obj.customerManagedS3) };
    if (obj.iotSiteWiseMultiLayerStorage !== undefined)
      return {
        iotSiteWiseMultiLayerStorage: DatastoreIotSiteWiseMultiLayerStorage.filterSensitiveLog(
          obj.iotSiteWiseMultiLayerStorage
        ),
      };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

/**
 * <p>Contains the configuration information of the JSON format.</p>
 */
export interface JsonConfiguration {}

export namespace JsonConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JsonConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about a column that stores your data.</p>
 */
export interface Column {
  /**
   * <p>The name of the column.</p>
   */
  name: string | undefined;

  /**
   * <p>The type of data. For more information about the supported data types, see <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-common.html">Common data types</a>
   *       in the <i>Glue Developer Guide</i>.</p>
   */
  type: string | undefined;
}

export namespace Column {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Column): any => ({
    ...obj,
  });
}

/**
 * <p>Information needed to define a schema.</p>
 */
export interface SchemaDefinition {
  /**
   * <p>Specifies one or more columns that store your data.</p>
   *          <p>Each schema can have up to 100 columns. Each column can have up to 100 nested
   *       types.</p>
   */
  columns?: Column[];
}

export namespace SchemaDefinition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SchemaDefinition): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the configuration information of the Parquet format.</p>
 */
export interface ParquetConfiguration {
  /**
   * <p>Information needed to define a schema.</p>
   */
  schemaDefinition?: SchemaDefinition;
}

export namespace ParquetConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ParquetConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the configuration information of file formats.  IoT Analytics data stores support JSON and <a href="https://parquet.apache.org/">Parquet</a>.</p>
 *          <p>The default file format is JSON. You can specify only one format.</p>
 *          <p>You can't change the file format after you create the data store.</p>
 */
export interface FileFormatConfiguration {
  /**
   * <p>Contains the configuration information of the JSON format.</p>
   */
  jsonConfiguration?: JsonConfiguration;

  /**
   * <p>Contains the configuration information of the Parquet format.</p>
   */
  parquetConfiguration?: ParquetConfiguration;
}

export namespace FileFormatConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FileFormatConfiguration): any => ({
    ...obj,
  });
}

export interface CreateDatastoreRequest {
  /**
   * <p>The name of the data store.</p>
   */
  datastoreName: string | undefined;

  /**
   * <p>Where data in a data store is stored.. You can choose <code>serviceManagedS3</code> storage, <code>customerManagedS3</code> storage, or <code>iotSiteWiseMultiLayerStorage</code> storage. The default is <code>serviceManagedS3</code>. You can't change the choice of Amazon S3 storage after your data store is created. </p>
   */
  datastoreStorage?: DatastoreStorage;

  /**
   * <p>How long, in days, message data is kept for the data store. When
   *         <code>customerManagedS3</code> storage is selected, this parameter is ignored.</p>
   */
  retentionPeriod?: RetentionPeriod;

  /**
   * <p>Metadata which can be used to manage the data store.</p>
   */
  tags?: Tag[];

  /**
   * <p>Contains the configuration information of file formats.  IoT Analytics data stores support JSON and <a href="https://parquet.apache.org/">Parquet</a>.</p>
   *          <p>The default file format is JSON. You can specify only one format.</p>
   *          <p>You can't change the file format after you create the data store.</p>
   */
  fileFormatConfiguration?: FileFormatConfiguration;

  /**
   * <p> Contains information about the partition dimensions in a data store. </p>
   */
  datastorePartitions?: DatastorePartitions;
}

export namespace CreateDatastoreRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDatastoreRequest): any => ({
    ...obj,
    ...(obj.datastoreStorage && { datastoreStorage: DatastoreStorage.filterSensitiveLog(obj.datastoreStorage) }),
  });
}

export interface CreateDatastoreResponse {
  /**
   * <p>The name of the data store.</p>
   */
  datastoreName?: string;

  /**
   * <p>The ARN of the data store.</p>
   */
  datastoreArn?: string;

  /**
   * <p>How long, in days, message data is kept for the data store.</p>
   */
  retentionPeriod?: RetentionPeriod;
}

export namespace CreateDatastoreResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDatastoreResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The activity that determines the source of the messages to be processed.</p>
 */
export interface ChannelActivity {
  /**
   * <p>The name of the channel activity.</p>
   */
  name: string | undefined;

  /**
   * <p>The name of the channel from which the messages are processed.</p>
   */
  channelName: string | undefined;

  /**
   * <p>The next activity in the pipeline.</p>
   */
  next?: string;
}

export namespace ChannelActivity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChannelActivity): any => ({
    ...obj,
  });
}

/**
 * <p>The datastore activity that specifies where to store the processed data.</p>
 */
export interface DatastoreActivity {
  /**
   * <p>The name of the datastore activity.</p>
   */
  name: string | undefined;

  /**
   * <p>The name of the data store where processed messages are stored.</p>
   */
  datastoreName: string | undefined;
}

export namespace DatastoreActivity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DatastoreActivity): any => ({
    ...obj,
  });
}

/**
 * <p>An activity that adds data from the IoT device registry to your message.</p>
 */
export interface DeviceRegistryEnrichActivity {
  /**
   * <p>The name of the <code>deviceRegistryEnrich</code> activity.</p>
   */
  name: string | undefined;

  /**
   * <p>The name of the attribute that is added to the message.</p>
   */
  attribute: string | undefined;

  /**
   * <p>The name of the IoT device whose registry information is added to the message.</p>
   */
  thingName: string | undefined;

  /**
   * <p>The ARN of the role that allows access to the device's registry information.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The next activity in the pipeline.</p>
   */
  next?: string;
}

export namespace DeviceRegistryEnrichActivity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeviceRegistryEnrichActivity): any => ({
    ...obj,
  });
}

/**
 * <p>An activity that adds information from the IoT Device Shadow service to a
 *       message.</p>
 */
export interface DeviceShadowEnrichActivity {
  /**
   * <p>The name of the <code>deviceShadowEnrich</code> activity.</p>
   */
  name: string | undefined;

  /**
   * <p>The name of the attribute that is added to the message.</p>
   */
  attribute: string | undefined;

  /**
   * <p>The name of the IoT device whose shadow information is added to the message.</p>
   */
  thingName: string | undefined;

  /**
   * <p>The ARN of the role that allows access to the device's shadow.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The next activity in the pipeline.</p>
   */
  next?: string;
}

export namespace DeviceShadowEnrichActivity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeviceShadowEnrichActivity): any => ({
    ...obj,
  });
}

/**
 * <p>An activity that filters a message based on its attributes.</p>
 */
export interface FilterActivity {
  /**
   * <p>The name of the filter activity.</p>
   */
  name: string | undefined;

  /**
   * <p>An expression that looks like a SQL WHERE clause that must return a Boolean value.
   *       Messages that satisfy the condition are passed to the next activity. </p>
   */
  filter: string | undefined;

  /**
   * <p>The next activity in the pipeline.</p>
   */
  next?: string;
}

export namespace FilterActivity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FilterActivity): any => ({
    ...obj,
  });
}

/**
 * <p>An activity that runs a Lambda function to modify the message.</p>
 */
export interface LambdaActivity {
  /**
   * <p>The name of the lambda activity.</p>
   */
  name: string | undefined;

  /**
   * <p>The name of the Lambda function that is run on the message.</p>
   */
  lambdaName: string | undefined;

  /**
   * <p>The number of messages passed to the Lambda function for processing.</p>
   *          <p>The Lambda function must be able to process all of these messages within five minutes,
   *       which is the maximum timeout duration for Lambda functions.</p>
   */
  batchSize: number | undefined;

  /**
   * <p>The next activity in the pipeline.</p>
   */
  next?: string;
}

export namespace LambdaActivity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LambdaActivity): any => ({
    ...obj,
  });
}

/**
 * <p>An activity that computes an arithmetic expression using the message's attributes.</p>
 */
export interface MathActivity {
  /**
   * <p>The name of the math activity.</p>
   */
  name: string | undefined;

  /**
   * <p>The name of the attribute that contains the result of the math operation.</p>
   */
  attribute: string | undefined;

  /**
   * <p>An expression that uses one or more existing attributes and must return an integer
   *       value.</p>
   */
  math: string | undefined;

  /**
   * <p>The next activity in the pipeline.</p>
   */
  next?: string;
}

export namespace MathActivity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MathActivity): any => ({
    ...obj,
  });
}

/**
 * <p>An activity that removes attributes from a message.</p>
 */
export interface RemoveAttributesActivity {
  /**
   * <p>The name of the <code>removeAttributes</code> activity.</p>
   */
  name: string | undefined;

  /**
   * <p>A list of 1-50 attributes to remove from the message.</p>
   */
  attributes: string[] | undefined;

  /**
   * <p>The next activity in the pipeline.</p>
   */
  next?: string;
}

export namespace RemoveAttributesActivity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RemoveAttributesActivity): any => ({
    ...obj,
  });
}

/**
 * <p>Used to create a new message using only the specified attributes from the original
 *       message.</p>
 */
export interface SelectAttributesActivity {
  /**
   * <p>The name of the <code>selectAttributes</code> activity.</p>
   */
  name: string | undefined;

  /**
   * <p>A list of the attributes to select from the message.</p>
   */
  attributes: string[] | undefined;

  /**
   * <p>The next activity in the pipeline.</p>
   */
  next?: string;
}

export namespace SelectAttributesActivity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SelectAttributesActivity): any => ({
    ...obj,
  });
}

/**
 * <p>An activity that performs a transformation on a message.</p>
 */
export interface PipelineActivity {
  /**
   * <p>Determines the source of the messages to be processed.</p>
   */
  channel?: ChannelActivity;

  /**
   * <p>Runs a Lambda function to modify the message.</p>
   */
  lambda?: LambdaActivity;

  /**
   * <p>Specifies where to store the processed message data.</p>
   */
  datastore?: DatastoreActivity;

  /**
   * <p>Adds other attributes based on existing attributes in the message.</p>
   */
  addAttributes?: AddAttributesActivity;

  /**
   * <p>Removes attributes from a message.</p>
   */
  removeAttributes?: RemoveAttributesActivity;

  /**
   * <p>Used to create a new message using only the specified attributes from the original
   *       message. </p>
   */
  selectAttributes?: SelectAttributesActivity;

  /**
   * <p>Filters a message based on its attributes.</p>
   */
  filter?: FilterActivity;

  /**
   * <p>Computes an arithmetic expression using the message's attributes and adds it to the
   *       message.</p>
   */
  math?: MathActivity;

  /**
   * <p>Adds data from the IoT device registry to your message.</p>
   */
  deviceRegistryEnrich?: DeviceRegistryEnrichActivity;

  /**
   * <p>Adds information from the IoT Device Shadow service to a message.</p>
   */
  deviceShadowEnrich?: DeviceShadowEnrichActivity;
}

export namespace PipelineActivity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PipelineActivity): any => ({
    ...obj,
  });
}

export interface CreatePipelineRequest {
  /**
   * <p>The name of the pipeline.</p>
   */
  pipelineName: string | undefined;

  /**
   * <p>A list of <code>PipelineActivity</code> objects. Activities perform transformations on
   *       your messages, such as removing, renaming or adding message attributes; filtering messages
   *       based on attribute values; invoking your Lambda unctions on messages for advanced processing;
   *       or performing mathematical transformations to normalize device data.</p>
   *          <p>The list can be 2-25 <code>PipelineActivity</code> objects and must contain both a
   *         <code>channel</code> and a <code>datastore</code> activity. Each entry in the list must
   *       contain only one activity. For example:</p>
   *          <p>
   *             <code>pipelineActivities = [ { "channel": { ... } }, { "lambda": { ... } }, ...
   *       ]</code>
   *          </p>
   */
  pipelineActivities: PipelineActivity[] | undefined;

  /**
   * <p>Metadata which can be used to manage the pipeline.</p>
   */
  tags?: Tag[];
}

export namespace CreatePipelineRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePipelineRequest): any => ({
    ...obj,
  });
}

export interface CreatePipelineResponse {
  /**
   * <p>The name of the pipeline.</p>
   */
  pipelineName?: string;

  /**
   * <p>The ARN of the pipeline.</p>
   */
  pipelineArn?: string;
}

export namespace CreatePipelineResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePipelineResponse): any => ({
    ...obj,
  });
}

export interface DeleteChannelRequest {
  /**
   * <p>The name of the channel to delete.</p>
   */
  channelName: string | undefined;
}

export namespace DeleteChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteChannelRequest): any => ({
    ...obj,
  });
}

export interface DeleteDatasetRequest {
  /**
   * <p>The name of the dataset to delete.</p>
   */
  datasetName: string | undefined;
}

export namespace DeleteDatasetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDatasetRequest): any => ({
    ...obj,
  });
}

export interface DeleteDatasetContentRequest {
  /**
   * <p>The name of the dataset whose content is deleted.</p>
   */
  datasetName: string | undefined;

  /**
   * <p>The version of the dataset whose content is deleted. You can also use the strings
   *       "$LATEST" or "$LATEST_SUCCEEDED" to delete the latest or latest successfully completed data
   *       set. If not specified, "$LATEST_SUCCEEDED" is the default.</p>
   */
  versionId?: string;
}

export namespace DeleteDatasetContentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDatasetContentRequest): any => ({
    ...obj,
  });
}

export interface DeleteDatastoreRequest {
  /**
   * <p>The name of the data store to delete.</p>
   */
  datastoreName: string | undefined;
}

export namespace DeleteDatastoreRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDatastoreRequest): any => ({
    ...obj,
  });
}

export interface DeletePipelineRequest {
  /**
   * <p>The name of the pipeline to delete.</p>
   */
  pipelineName: string | undefined;
}

export namespace DeletePipelineRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeletePipelineRequest): any => ({
    ...obj,
  });
}

export interface DescribeChannelRequest {
  /**
   * <p>The name of the channel whose information is retrieved.</p>
   */
  channelName: string | undefined;

  /**
   * <p>If true, additional statistical information about the channel is included in the response.
   *       This feature can't be used with a channel whose S3 storage is customer-managed.</p>
   */
  includeStatistics?: boolean;
}

export namespace DescribeChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeChannelRequest): any => ({
    ...obj,
  });
}

export enum ChannelStatus {
  ACTIVE = "ACTIVE",
  CREATING = "CREATING",
  DELETING = "DELETING",
}

/**
 * <p>A collection of data from an MQTT topic. Channels archive the raw, unprocessed messages
 *       before publishing the data to a pipeline.</p>
 */
export interface Channel {
  /**
   * <p>The name of the channel.</p>
   */
  name?: string;

  /**
   * <p>Where channel data is stored. You can choose one of <code>serviceManagedS3</code> or
   *         <code>customerManagedS3</code> storage. If not specified, the default is
   *         <code>serviceManagedS3</code>. You can't change this storage option after the channel is
   *       created.</p>
   */
  storage?: ChannelStorage;

  /**
   * <p>The ARN of the channel.</p>
   */
  arn?: string;

  /**
   * <p>The status of the channel.</p>
   */
  status?: ChannelStatus | string;

  /**
   * <p>How long, in days, message data is kept for the channel.</p>
   */
  retentionPeriod?: RetentionPeriod;

  /**
   * <p>When the channel was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>When the channel was last updated.</p>
   */
  lastUpdateTime?: Date;

  /**
   * <p>The last time when a new message arrived in the channel.</p>
   *          <p>IoT Analytics updates this value at most once per minute for one channel. Hence, the <code>lastMessageArrivalTime</code> value is an approximation.</p>
   *          <p>This feature only applies to messages that arrived in the data store after October 23, 2020. </p>
   */
  lastMessageArrivalTime?: Date;
}

export namespace Channel {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Channel): any => ({
    ...obj,
  });
}

/**
 * <p>The estimated size of the resource.</p>
 */
export interface EstimatedResourceSize {
  /**
   * <p>The estimated size of the resource, in bytes.</p>
   */
  estimatedSizeInBytes?: number;

  /**
   * <p>The time when the estimate of the size of the resource was made.</p>
   */
  estimatedOn?: Date;
}

export namespace EstimatedResourceSize {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EstimatedResourceSize): any => ({
    ...obj,
  });
}

/**
 * <p>Statistics information about the channel.</p>
 */
export interface ChannelStatistics {
  /**
   * <p>The estimated size of the channel.</p>
   */
  size?: EstimatedResourceSize;
}

export namespace ChannelStatistics {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChannelStatistics): any => ({
    ...obj,
  });
}

export interface DescribeChannelResponse {
  /**
   * <p>An object that contains information about the channel.</p>
   */
  channel?: Channel;

  /**
   * <p>Statistics about the channel. Included if the <code>includeStatistics</code> parameter is
   *       set to <code>true</code> in the request.</p>
   */
  statistics?: ChannelStatistics;
}

export namespace DescribeChannelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeChannelResponse): any => ({
    ...obj,
  });
}

export interface DescribeDatasetRequest {
  /**
   * <p>The name of the dataset whose information is retrieved.</p>
   */
  datasetName: string | undefined;
}

export namespace DescribeDatasetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDatasetRequest): any => ({
    ...obj,
  });
}

export enum DatasetStatus {
  ACTIVE = "ACTIVE",
  CREATING = "CREATING",
  DELETING = "DELETING",
}

/**
 * <p>Information about a dataset.</p>
 */
export interface Dataset {
  /**
   * <p>The name of the dataset.</p>
   */
  name?: string;

  /**
   * <p>The ARN of the dataset.</p>
   */
  arn?: string;

  /**
   * <p>The <code>DatasetAction</code> objects that automatically create the dataset
   *       contents.</p>
   */
  actions?: DatasetAction[];

  /**
   * <p>The <code>DatasetTrigger</code> objects that specify when the dataset is automatically
   *       updated.</p>
   */
  triggers?: DatasetTrigger[];

  /**
   * <p>When dataset contents are created they are delivered to destinations specified
   *       here.</p>
   */
  contentDeliveryRules?: DatasetContentDeliveryRule[];

  /**
   * <p>The status of the dataset.</p>
   */
  status?: DatasetStatus | string;

  /**
   * <p>When the dataset was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The last time the dataset was updated.</p>
   */
  lastUpdateTime?: Date;

  /**
   * <p>Optional. How long, in days, message data is kept for the dataset.</p>
   */
  retentionPeriod?: RetentionPeriod;

  /**
   * <p>Optional. How many versions of dataset contents are kept. If not specified or set to null,
   *       only the latest version plus the latest succeeded version (if they are different) are kept for
   *       the time period specified by the <code>retentionPeriod</code> parameter. For more information,
   *       see <a href="https://docs.aws.amazon.com/iotanalytics/latest/userguide/getting-started.html#aws-iot-analytics-dataset-versions">
   *         Keeping Multiple Versions of IoT Analytics datasets</a> in the
   *         <i>IoT Analytics User Guide</i>.</p>
   */
  versioningConfiguration?: VersioningConfiguration;

  /**
   * <p>A list of data rules that send notifications to CloudWatch, when data arrives late. To specify <code>lateDataRules</code>, the dataset must use a <a href="https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DeltaTime.html">DeltaTimer</a> filter.</p>
   */
  lateDataRules?: LateDataRule[];
}

export namespace Dataset {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Dataset): any => ({
    ...obj,
  });
}

export interface DescribeDatasetResponse {
  /**
   * <p>An object that contains information about the dataset.</p>
   */
  dataset?: Dataset;
}

export namespace DescribeDatasetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDatasetResponse): any => ({
    ...obj,
  });
}

export interface DescribeDatastoreRequest {
  /**
   * <p>The name of the data store</p>
   */
  datastoreName: string | undefined;

  /**
   * <p>If true, additional statistical information about the data store is included in the
   *       response. This feature can't be used with a data store whose S3 storage is
   *       customer-managed.</p>
   */
  includeStatistics?: boolean;
}

export namespace DescribeDatastoreRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDatastoreRequest): any => ({
    ...obj,
  });
}

export enum DatastoreStatus {
  ACTIVE = "ACTIVE",
  CREATING = "CREATING",
  DELETING = "DELETING",
}

/**
 * <p>Information about a data store.</p>
 */
export interface Datastore {
  /**
   * <p>The name of the data store.</p>
   */
  name?: string;

  /**
   * <p>Where data in a data store is stored.. You can choose <code>serviceManagedS3</code> storage, <code>customerManagedS3</code> storage, or <code>iotSiteWiseMultiLayerStorage</code> storage. The default is <code>serviceManagedS3</code>. You can't change the choice of Amazon S3 storage after your data store is created. </p>
   */
  storage?: DatastoreStorage;

  /**
   * <p>The ARN of the data store.</p>
   */
  arn?: string;

  /**
   * <p>The status of a data store:</p>
   *          <dl>
   *             <dt>CREATING</dt>
   *             <dd>
   *                <p>The data store is being created.</p>
   *             </dd>
   *             <dt>ACTIVE</dt>
   *             <dd>
   *                <p>The data store has been created and can be used.</p>
   *             </dd>
   *             <dt>DELETING</dt>
   *             <dd>
   *                <p>The data store is being deleted.</p>
   *             </dd>
   *          </dl>
   */
  status?: DatastoreStatus | string;

  /**
   * <p>How long, in days, message data is kept for the data store. When
   *         <code>customerManagedS3</code> storage is selected, this parameter is ignored.</p>
   */
  retentionPeriod?: RetentionPeriod;

  /**
   * <p>When the data store was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The last time the data store was updated.</p>
   */
  lastUpdateTime?: Date;

  /**
   * <p>The last time when a new message arrived in the data store.</p>
   *          <p>IoT Analytics updates this value at most once per minute for Amazon Simple Storage Service one data store. Hence, the <code>lastMessageArrivalTime</code> value is an approximation.</p>
   *          <p>This feature only applies to messages that arrived in the data store after October 23, 2020. </p>
   */
  lastMessageArrivalTime?: Date;

  /**
   * <p>Contains the configuration information of file formats.  IoT Analytics data stores support JSON and <a href="https://parquet.apache.org/">Parquet</a>.</p>
   *          <p>The default file format is JSON. You can specify only one format.</p>
   *          <p>You can't change the file format after you create the data store.</p>
   */
  fileFormatConfiguration?: FileFormatConfiguration;

  /**
   * <p> Contains information about the partition dimensions in a data store. </p>
   */
  datastorePartitions?: DatastorePartitions;
}

export namespace Datastore {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Datastore): any => ({
    ...obj,
    ...(obj.storage && { storage: DatastoreStorage.filterSensitiveLog(obj.storage) }),
  });
}

/**
 * <p>Statistical information about the data store.</p>
 */
export interface DatastoreStatistics {
  /**
   * <p>The estimated size of the data store.</p>
   */
  size?: EstimatedResourceSize;
}

export namespace DatastoreStatistics {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DatastoreStatistics): any => ({
    ...obj,
  });
}

export interface DescribeDatastoreResponse {
  /**
   * <p>Information about the data store.</p>
   */
  datastore?: Datastore;

  /**
   * <p>Additional statistical information about the data store. Included if the
   *         <code>includeStatistics</code> parameter is set to <code>true</code> in the request.</p>
   */
  statistics?: DatastoreStatistics;
}

export namespace DescribeDatastoreResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDatastoreResponse): any => ({
    ...obj,
    ...(obj.datastore && { datastore: Datastore.filterSensitiveLog(obj.datastore) }),
  });
}

export interface DescribeLoggingOptionsRequest {}

export namespace DescribeLoggingOptionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeLoggingOptionsRequest): any => ({
    ...obj,
  });
}

export enum LoggingLevel {
  ERROR = "ERROR",
}

/**
 * <p>Information about logging options.</p>
 */
export interface LoggingOptions {
  /**
   * <p>The ARN of the role that grants permission to IoT Analytics to perform logging.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The logging level. Currently, only ERROR is supported.</p>
   */
  level: LoggingLevel | string | undefined;

  /**
   * <p>If true, logging is enabled for IoT Analytics.</p>
   */
  enabled: boolean | undefined;
}

export namespace LoggingOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LoggingOptions): any => ({
    ...obj,
  });
}

export interface DescribeLoggingOptionsResponse {
  /**
   * <p>The current settings of the IoT Analytics logging options.</p>
   */
  loggingOptions?: LoggingOptions;
}

export namespace DescribeLoggingOptionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeLoggingOptionsResponse): any => ({
    ...obj,
  });
}

export interface DescribePipelineRequest {
  /**
   * <p>The name of the pipeline whose information is retrieved.</p>
   */
  pipelineName: string | undefined;
}

export namespace DescribePipelineRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribePipelineRequest): any => ({
    ...obj,
  });
}

export enum ReprocessingStatus {
  CANCELLED = "CANCELLED",
  FAILED = "FAILED",
  RUNNING = "RUNNING",
  SUCCEEDED = "SUCCEEDED",
}

/**
 * <p>Information about pipeline reprocessing.</p>
 */
export interface ReprocessingSummary {
  /**
   * <p>The <code>reprocessingId</code> returned by <code>StartPipelineReprocessing</code>.</p>
   */
  id?: string;

  /**
   * <p>The status of the pipeline reprocessing.</p>
   */
  status?: ReprocessingStatus | string;

  /**
   * <p>The time the pipeline reprocessing was created.</p>
   */
  creationTime?: Date;
}

export namespace ReprocessingSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReprocessingSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about a pipeline.</p>
 */
export interface Pipeline {
  /**
   * <p>The name of the pipeline.</p>
   */
  name?: string;

  /**
   * <p>The ARN of the pipeline.</p>
   */
  arn?: string;

  /**
   * <p>The activities that perform transformations on the messages.</p>
   */
  activities?: PipelineActivity[];

  /**
   * <p>A summary of information about the pipeline reprocessing.</p>
   */
  reprocessingSummaries?: ReprocessingSummary[];

  /**
   * <p>When the pipeline was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The last time the pipeline was updated.</p>
   */
  lastUpdateTime?: Date;
}

export namespace Pipeline {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Pipeline): any => ({
    ...obj,
  });
}

export interface DescribePipelineResponse {
  /**
   * <p>A <code>Pipeline</code> object that contains information about the pipeline.</p>
   */
  pipeline?: Pipeline;
}

export namespace DescribePipelineResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribePipelineResponse): any => ({
    ...obj,
  });
}

export interface GetDatasetContentRequest {
  /**
   * <p>The name of the dataset whose contents are retrieved.</p>
   */
  datasetName: string | undefined;

  /**
   * <p>The version of the dataset whose contents are retrieved. You can also use the strings
   *       "$LATEST" or "$LATEST_SUCCEEDED" to retrieve the contents of the latest or latest successfully
   *       completed dataset. If not specified, "$LATEST_SUCCEEDED" is the default.</p>
   */
  versionId?: string;
}

export namespace GetDatasetContentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDatasetContentRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The reference to a dataset entry.</p>
 */
export interface DatasetEntry {
  /**
   * <p>The name of the dataset item.</p>
   */
  entryName?: string;

  /**
   * <p>The presigned URI of the dataset item.</p>
   */
  dataURI?: string;
}

export namespace DatasetEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DatasetEntry): any => ({
    ...obj,
  });
}

export enum DatasetContentState {
  CREATING = "CREATING",
  FAILED = "FAILED",
  SUCCEEDED = "SUCCEEDED",
}

/**
 * <p>The state of the dataset contents and the reason they are in this state.</p>
 */
export interface DatasetContentStatus {
  /**
   * <p>The state of the dataset contents. Can be one of READY, CREATING, SUCCEEDED, or
   *       FAILED.</p>
   */
  state?: DatasetContentState | string;

  /**
   * <p>The reason the dataset contents are in this state.</p>
   */
  reason?: string;
}

export namespace DatasetContentStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DatasetContentStatus): any => ({
    ...obj,
  });
}

export interface GetDatasetContentResponse {
  /**
   * <p>A list of <code>DatasetEntry</code> objects.</p>
   */
  entries?: DatasetEntry[];

  /**
   * <p>The time when the request was made.</p>
   */
  timestamp?: Date;

  /**
   * <p>The status of the dataset content.</p>
   */
  status?: DatasetContentStatus;
}

export namespace GetDatasetContentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDatasetContentResponse): any => ({
    ...obj,
  });
}

export interface ListChannelsRequest {
  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return in this request.</p>
   *          <p>The default value is 100.</p>
   */
  maxResults?: number;
}

export namespace ListChannelsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListChannelsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Used to store channel data in an S3 bucket that you manage.</p>
 */
export interface CustomerManagedChannelS3StorageSummary {
  /**
   * <p>The name of the S3 bucket in which channel data is stored.</p>
   */
  bucket?: string;

  /**
   * <p>(Optional) The prefix used to create the keys of the channel data objects. Each object in
   *       an S3 bucket has a key that is its unique identifier within the bucket (each object in a
   *       bucket has exactly one key). The prefix must end with a forward slash (/).</p>
   */
  keyPrefix?: string;

  /**
   * <p>The ARN of the role that grants IoT Analytics permission to interact with your Amazon S3
   *       resources.</p>
   */
  roleArn?: string;
}

export namespace CustomerManagedChannelS3StorageSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CustomerManagedChannelS3StorageSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Used to store channel data in an S3 bucket managed by IoT Analytics.</p>
 */
export interface ServiceManagedChannelS3StorageSummary {}

export namespace ServiceManagedChannelS3StorageSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceManagedChannelS3StorageSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Where channel data is stored.</p>
 */
export interface ChannelStorageSummary {
  /**
   * <p>Used to store channel data in an S3 bucket managed by IoT Analytics.</p>
   */
  serviceManagedS3?: ServiceManagedChannelS3StorageSummary;

  /**
   * <p>Used to store channel data in an S3 bucket that you manage.</p>
   */
  customerManagedS3?: CustomerManagedChannelS3StorageSummary;
}

export namespace ChannelStorageSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChannelStorageSummary): any => ({
    ...obj,
  });
}

/**
 * <p>A summary of information about a channel.</p>
 */
export interface ChannelSummary {
  /**
   * <p>The name of the channel.</p>
   */
  channelName?: string;

  /**
   * <p>Where channel data is stored.</p>
   */
  channelStorage?: ChannelStorageSummary;

  /**
   * <p>The status of the channel.</p>
   */
  status?: ChannelStatus | string;

  /**
   * <p>When the channel was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The last time the channel was updated.</p>
   */
  lastUpdateTime?: Date;

  /**
   * <p>The last time when a new message arrived in the channel.</p>
   *          <p>IoT Analytics updates this value at most once per minute for one channel. Hence, the <code>lastMessageArrivalTime</code> value is an approximation.</p>
   *          <p>This feature only applies to messages that arrived in the data store after October 23, 2020. </p>
   */
  lastMessageArrivalTime?: Date;
}

export namespace ChannelSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChannelSummary): any => ({
    ...obj,
  });
}

export interface ListChannelsResponse {
  /**
   * <p>A list of <code>ChannelSummary</code> objects.</p>
   */
  channelSummaries?: ChannelSummary[];

  /**
   * <p>The token to retrieve the next set of results, or <code>null</code> if there are no more
   *       results.</p>
   */
  nextToken?: string;
}

export namespace ListChannelsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListChannelsResponse): any => ({
    ...obj,
  });
}

export interface ListDatasetContentsRequest {
  /**
   * <p>The name of the dataset whose contents information you want to list.</p>
   */
  datasetName: string | undefined;

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return in this request.</p>
   */
  maxResults?: number;

  /**
   * <p>A filter to limit results to those dataset contents whose creation is scheduled on or
   *       after the given time. See the field <code>triggers.schedule</code> in the
   *         <code>CreateDataset</code> request. (timestamp)</p>
   */
  scheduledOnOrAfter?: Date;

  /**
   * <p>A filter to limit results to those dataset contents whose creation is scheduled before the
   *       given time. See the field <code>triggers.schedule</code> in the <code>CreateDataset</code>
   *       request. (timestamp)</p>
   */
  scheduledBefore?: Date;
}

export namespace ListDatasetContentsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDatasetContentsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Summary information about dataset contents.</p>
 */
export interface DatasetContentSummary {
  /**
   * <p>The version of the dataset contents.</p>
   */
  version?: string;

  /**
   * <p>The status of the dataset contents.</p>
   */
  status?: DatasetContentStatus;

  /**
   * <p>The actual time the creation of the dataset contents was started.</p>
   */
  creationTime?: Date;

  /**
   * <p>The time the creation of the dataset contents was scheduled to start.</p>
   */
  scheduleTime?: Date;

  /**
   * <p>The time the dataset content status was updated to SUCCEEDED or FAILED.</p>
   */
  completionTime?: Date;
}

export namespace DatasetContentSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DatasetContentSummary): any => ({
    ...obj,
  });
}

export interface ListDatasetContentsResponse {
  /**
   * <p>Summary information about dataset contents that have been created.</p>
   */
  datasetContentSummaries?: DatasetContentSummary[];

  /**
   * <p>The token to retrieve the next set of results, or <code>null</code> if there are no more
   *       results.</p>
   */
  nextToken?: string;
}

export namespace ListDatasetContentsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDatasetContentsResponse): any => ({
    ...obj,
  });
}

export interface ListDatasetsRequest {
  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return in this request.</p>
   *          <p>The default value is 100.</p>
   */
  maxResults?: number;
}

export namespace ListDatasetsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDatasetsRequest): any => ({
    ...obj,
  });
}

export enum DatasetActionType {
  CONTAINER = "CONTAINER",
  QUERY = "QUERY",
}

/**
 * <p>Information about the action that automatically creates the dataset's contents.</p>
 */
export interface DatasetActionSummary {
  /**
   * <p>The name of the action that automatically creates the dataset's contents.</p>
   */
  actionName?: string;

  /**
   * <p>The type of action by which the dataset's contents are automatically created.</p>
   */
  actionType?: DatasetActionType | string;
}

export namespace DatasetActionSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DatasetActionSummary): any => ({
    ...obj,
  });
}

/**
 * <p>A summary of information about a dataset.</p>
 */
export interface DatasetSummary {
  /**
   * <p>The name of the dataset.</p>
   */
  datasetName?: string;

  /**
   * <p>The status of the dataset.</p>
   */
  status?: DatasetStatus | string;

  /**
   * <p>The time the dataset was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The last time the dataset was updated.</p>
   */
  lastUpdateTime?: Date;

  /**
   * <p>A list of triggers. A trigger causes dataset content to be populated at a specified time
   *       interval or when another dataset is populated. The list of triggers can be empty or contain up
   *       to five <code>DataSetTrigger</code> objects</p>
   */
  triggers?: DatasetTrigger[];

  /**
   * <p>A list of <code>DataActionSummary</code> objects.</p>
   */
  actions?: DatasetActionSummary[];
}

export namespace DatasetSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DatasetSummary): any => ({
    ...obj,
  });
}

export interface ListDatasetsResponse {
  /**
   * <p>A list of <code>DatasetSummary</code> objects.</p>
   */
  datasetSummaries?: DatasetSummary[];

  /**
   * <p>The token to retrieve the next set of results, or <code>null</code> if there are no more
   *       results.</p>
   */
  nextToken?: string;
}

export namespace ListDatasetsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDatasetsResponse): any => ({
    ...obj,
  });
}

export interface ListDatastoresRequest {
  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return in this request.</p>
   *          <p>The default value is 100.</p>
   */
  maxResults?: number;
}

export namespace ListDatastoresRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDatastoresRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about the data store that you manage.</p>
 */
export interface CustomerManagedDatastoreS3StorageSummary {
  /**
   * <p>The name of the Amazon S3 bucket where your data is stored.</p>
   */
  bucket?: string;

  /**
   * <p>(Optional) The prefix used to create the keys of the data store data objects. Each object in an Amazon S3 bucket has a key that is its unique identifier in the bucket. Each object in a bucket has exactly one key. The prefix must end with a forward slash (/).</p>
   */
  keyPrefix?: string;

  /**
   * <p>The ARN of the role that grants IoT Analytics permission to interact with your Amazon S3 resources.</p>
   */
  roleArn?: string;
}

export namespace CustomerManagedDatastoreS3StorageSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CustomerManagedDatastoreS3StorageSummary): any => ({
    ...obj,
  });
}

/**
 * <p> Contains information about the data store that you manage, which stores data used by IoT SiteWise. </p>
 */
export interface IotSiteWiseCustomerManagedDatastoreS3StorageSummary {
  /**
   * <p> The name of the Amazon S3 bucket where your data is stored. </p>
   */
  bucket?: string;

  /**
   * <p> (Optional) The prefix used to create the keys of the data store data objects. Each object in an Amazon S3 bucket has a key that is its unique identifier in the bucket. Each object in a bucket has exactly one key. The prefix must end with a forward slash (/). </p>
   */
  keyPrefix?: string;
}

export namespace IotSiteWiseCustomerManagedDatastoreS3StorageSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IotSiteWiseCustomerManagedDatastoreS3StorageSummary): any => ({
    ...obj,
  });
}

/**
 * <p> Contains information about the data store that you manage, which stores data used by IoT SiteWise. </p>
 */
export interface DatastoreIotSiteWiseMultiLayerStorageSummary {
  /**
   * <p>Used to store data used by IoT SiteWise in an Amazon S3 bucket that you manage.</p>
   */
  customerManagedS3Storage?: IotSiteWiseCustomerManagedDatastoreS3StorageSummary;
}

export namespace DatastoreIotSiteWiseMultiLayerStorageSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DatastoreIotSiteWiseMultiLayerStorageSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about the data store that is managed by IoT Analytics.</p>
 */
export interface ServiceManagedDatastoreS3StorageSummary {}

export namespace ServiceManagedDatastoreS3StorageSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceManagedDatastoreS3StorageSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about your data store.</p>
 */
export interface DatastoreStorageSummary {
  /**
   * <p>Used to store data in an Amazon S3 bucket managed by IoT Analytics.</p>
   */
  serviceManagedS3?: ServiceManagedDatastoreS3StorageSummary;

  /**
   * <p>Used to store data in an Amazon S3 bucket managed by IoT Analytics.</p>
   */
  customerManagedS3?: CustomerManagedDatastoreS3StorageSummary;

  /**
   * <p> Used to store data used by IoT SiteWise in an Amazon S3 bucket that you manage. </p>
   */
  iotSiteWiseMultiLayerStorage?: DatastoreIotSiteWiseMultiLayerStorageSummary;
}

export namespace DatastoreStorageSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DatastoreStorageSummary): any => ({
    ...obj,
  });
}

export enum FileFormatType {
  JSON = "JSON",
  PARQUET = "PARQUET",
}

/**
 * <p>A summary of information about a data store.</p>
 */
export interface DatastoreSummary {
  /**
   * <p>The name of the data store.</p>
   */
  datastoreName?: string;

  /**
   * <p>Where data in a data store is stored.</p>
   */
  datastoreStorage?: DatastoreStorageSummary;

  /**
   * <p>The status of the data store.</p>
   */
  status?: DatastoreStatus | string;

  /**
   * <p>When the data store was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The last time the data store was updated.</p>
   */
  lastUpdateTime?: Date;

  /**
   * <p>The last time when a new message arrived in the data store.</p>
   *          <p>IoT Analytics updates this value at most once per minute for Amazon Simple Storage Service one data store. Hence, the <code>lastMessageArrivalTime</code> value is an approximation.</p>
   *          <p>This feature only applies to messages that arrived in the data store after October 23, 2020. </p>
   */
  lastMessageArrivalTime?: Date;

  /**
   * <p>The file format of the data in the data store.</p>
   */
  fileFormatType?: FileFormatType | string;

  /**
   * <p> Contains information about the partition dimensions in a data store. </p>
   */
  datastorePartitions?: DatastorePartitions;
}

export namespace DatastoreSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DatastoreSummary): any => ({
    ...obj,
  });
}

export interface ListDatastoresResponse {
  /**
   * <p>A list of <code>DatastoreSummary</code> objects.</p>
   */
  datastoreSummaries?: DatastoreSummary[];

  /**
   * <p>The token to retrieve the next set of results, or <code>null</code> if there are no more
   *       results.</p>
   */
  nextToken?: string;
}

export namespace ListDatastoresResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDatastoresResponse): any => ({
    ...obj,
  });
}

export interface ListPipelinesRequest {
  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return in this request.</p>
   *          <p>The default value is 100.</p>
   */
  maxResults?: number;
}

export namespace ListPipelinesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPipelinesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A summary of information about a pipeline.</p>
 */
export interface PipelineSummary {
  /**
   * <p>The name of the pipeline.</p>
   */
  pipelineName?: string;

  /**
   * <p>A summary of information about the pipeline reprocessing.</p>
   */
  reprocessingSummaries?: ReprocessingSummary[];

  /**
   * <p>When the pipeline was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>When the pipeline was last updated.</p>
   */
  lastUpdateTime?: Date;
}

export namespace PipelineSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PipelineSummary): any => ({
    ...obj,
  });
}

export interface ListPipelinesResponse {
  /**
   * <p>A list of <code>PipelineSummary</code> objects.</p>
   */
  pipelineSummaries?: PipelineSummary[];

  /**
   * <p>The token to retrieve the next set of results, or <code>null</code> if there are no more
   *       results.</p>
   */
  nextToken?: string;
}

export namespace ListPipelinesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPipelinesResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource whose tags you want to list.</p>
   */
  resourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The tags (metadata) that you have assigned to the resource.</p>
   */
  tags?: Tag[];
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export interface PutLoggingOptionsRequest {
  /**
   * <p>The new values of the IoT Analytics logging options.</p>
   */
  loggingOptions: LoggingOptions | undefined;
}

export namespace PutLoggingOptionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutLoggingOptionsRequest): any => ({
    ...obj,
  });
}

export interface RunPipelineActivityRequest {
  /**
   * <p>The pipeline activity that is run. This must not be a channel activity or a data store
   *       activity because these activities are used in a pipeline only to load the original message and
   *       to store the (possibly) transformed message. If a Lambda activity is specified, only
   *       short-running Lambda functions (those with a timeout of less than 30 seconds or less) can be
   *       used.</p>
   */
  pipelineActivity: PipelineActivity | undefined;

  /**
   * <p>The sample message payloads on which the pipeline activity is run.</p>
   */
  payloads: Uint8Array[] | undefined;
}

export namespace RunPipelineActivityRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RunPipelineActivityRequest): any => ({
    ...obj,
  });
}

export interface RunPipelineActivityResponse {
  /**
   * <p>The enriched or transformed sample message payloads as base64-encoded strings. (The
   *       results of running the pipeline activity on each input sample message payload, encoded in
   *       base64.)</p>
   */
  payloads?: Uint8Array[];

  /**
   * <p>In case the pipeline activity fails, the log message that is generated.</p>
   */
  logResult?: string;
}

export namespace RunPipelineActivityResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RunPipelineActivityResponse): any => ({
    ...obj,
  });
}

export interface SampleChannelDataRequest {
  /**
   * <p>The name of the channel whose message samples are retrieved.</p>
   */
  channelName: string | undefined;

  /**
   * <p>The number of sample messages to be retrieved. The limit is 10. The default is also
   *       10.</p>
   */
  maxMessages?: number;

  /**
   * <p>The start of the time window from which sample messages are retrieved.</p>
   */
  startTime?: Date;

  /**
   * <p>The end of the time window from which sample messages are retrieved.</p>
   */
  endTime?: Date;
}

export namespace SampleChannelDataRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SampleChannelDataRequest): any => ({
    ...obj,
  });
}

export interface SampleChannelDataResponse {
  /**
   * <p>The list of message samples. Each sample message is returned as a base64-encoded
   *       string.</p>
   */
  payloads?: Uint8Array[];
}

export namespace SampleChannelDataResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SampleChannelDataResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies one or more sets of channel messages.</p>
 */
export interface ChannelMessages {
  /**
   * <p>Specifies one or more keys that identify the Amazon Simple Storage Service (Amazon S3) objects that save your
   *       channel messages.</p>
   *          <p>You must use the full path for the key.</p>
   *          <p>Example path: <code>channel/mychannel/__dt=2020-02-29
   *         00:00:00/1582940490000_1582940520000_123456789012_mychannel_0_2118.0.json.gz</code>
   *          </p>
   */
  s3Paths?: string[];
}

export namespace ChannelMessages {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChannelMessages): any => ({
    ...obj,
  });
}

export interface StartPipelineReprocessingRequest {
  /**
   * <p>The name of the pipeline on which to start reprocessing.</p>
   */
  pipelineName: string | undefined;

  /**
   * <p>The start time (inclusive) of raw message data that is reprocessed.</p>
   *          <p>If you specify a value for the <code>startTime</code> parameter, you must not use the
   *         <code>channelMessages</code> object.</p>
   */
  startTime?: Date;

  /**
   * <p>The end time (exclusive) of raw message data that is reprocessed.</p>
   *          <p>If you specify a value for the <code>endTime</code> parameter, you must not use the
   *         <code>channelMessages</code> object.</p>
   */
  endTime?: Date;

  /**
   * <p>Specifies one or more sets of channel messages that you want to reprocess.</p>
   *          <p>If you use the <code>channelMessages</code> object, you must not specify a value for
   *         <code>startTime</code> and <code>endTime</code>.</p>
   */
  channelMessages?: ChannelMessages;
}

export namespace StartPipelineReprocessingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartPipelineReprocessingRequest): any => ({
    ...obj,
  });
}

export interface StartPipelineReprocessingResponse {
  /**
   * <p>The ID of the pipeline reprocessing activity that was started.</p>
   */
  reprocessingId?: string;
}

export namespace StartPipelineReprocessingResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartPipelineReprocessingResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The ARN of the resource whose tags you want to modify.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The new or modified tags for the resource.</p>
   */
  tags: Tag[] | undefined;
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>The ARN of the resource whose tags you want to remove.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The keys of those tags which you want to remove.</p>
   */
  tagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

export interface UpdateChannelRequest {
  /**
   * <p>The name of the channel to be updated.</p>
   */
  channelName: string | undefined;

  /**
   * <p>Where channel data is stored. You can choose one of <code>serviceManagedS3</code> or
   *         <code>customerManagedS3</code> storage. If not specified, the default is
   *         <code>serviceManagedS3</code>. You can't change this storage option after the channel is
   *       created.</p>
   */
  channelStorage?: ChannelStorage;

  /**
   * <p>How long, in days, message data is kept for the channel. The retention period can't be
   *       updated if the channel's Amazon S3 storage is customer-managed.</p>
   */
  retentionPeriod?: RetentionPeriod;
}

export namespace UpdateChannelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateChannelRequest): any => ({
    ...obj,
  });
}

export interface UpdateDatasetRequest {
  /**
   * <p>The name of the dataset to update.</p>
   */
  datasetName: string | undefined;

  /**
   * <p>A list of <code>DatasetAction</code> objects.</p>
   */
  actions: DatasetAction[] | undefined;

  /**
   * <p>A list of <code>DatasetTrigger</code> objects. The list can be empty or can contain up to
   *       five <code>DatasetTrigger</code> objects.</p>
   */
  triggers?: DatasetTrigger[];

  /**
   * <p>When dataset contents are created, they are delivered to destinations specified
   *       here.</p>
   */
  contentDeliveryRules?: DatasetContentDeliveryRule[];

  /**
   * <p>How long, in days, dataset contents are kept for the dataset.</p>
   */
  retentionPeriod?: RetentionPeriod;

  /**
   * <p>Optional. How many versions of dataset contents are kept. If not specified or set to null,
   *       only the latest version plus the latest succeeded version (if they are different) are kept for
   *       the time period specified by the <code>retentionPeriod</code> parameter. For more information,
   *       see <a href="https://docs.aws.amazon.com/iotanalytics/latest/userguide/getting-started.html#aws-iot-analytics-dataset-versions">Keeping Multiple Versions of IoT Analytics datasets</a> in the
   *         <i>IoT Analytics User Guide</i>.</p>
   */
  versioningConfiguration?: VersioningConfiguration;

  /**
   * <p>A list of data rules that send notifications to CloudWatch, when data arrives late. To specify <code>lateDataRules</code>, the dataset must use a <a href="https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DeltaTime.html">DeltaTimer</a> filter.</p>
   */
  lateDataRules?: LateDataRule[];
}

export namespace UpdateDatasetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDatasetRequest): any => ({
    ...obj,
  });
}

export interface UpdateDatastoreRequest {
  /**
   * <p>The name of the data store to be updated.</p>
   */
  datastoreName: string | undefined;

  /**
   * <p>How long, in days, message data is kept for the data store. The retention period can't be
   *       updated if the data store's Amazon S3 storage is customer-managed.</p>
   */
  retentionPeriod?: RetentionPeriod;

  /**
   * <p>Where data in a data store is stored.. You can choose <code>serviceManagedS3</code> storage, <code>customerManagedS3</code> storage, or <code>iotSiteWiseMultiLayerStorage</code> storage. The default is <code>serviceManagedS3</code>. You can't change the choice of Amazon S3 storage after your data store is created. </p>
   */
  datastoreStorage?: DatastoreStorage;

  /**
   * <p>Contains the configuration information of file formats.  IoT Analytics data stores support JSON and <a href="https://parquet.apache.org/">Parquet</a>.</p>
   *          <p>The default file format is JSON. You can specify only one format.</p>
   *          <p>You can't change the file format after you create the data store.</p>
   */
  fileFormatConfiguration?: FileFormatConfiguration;
}

export namespace UpdateDatastoreRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDatastoreRequest): any => ({
    ...obj,
    ...(obj.datastoreStorage && { datastoreStorage: DatastoreStorage.filterSensitiveLog(obj.datastoreStorage) }),
  });
}

export interface UpdatePipelineRequest {
  /**
   * <p>The name of the pipeline to update.</p>
   */
  pipelineName: string | undefined;

  /**
   * <p>A list of <code>PipelineActivity</code> objects. Activities perform transformations on
   *       your messages, such as removing, renaming or adding message attributes; filtering messages
   *       based on attribute values; invoking your Lambda functions on messages for advanced processing;
   *       or performing mathematical transformations to normalize device data.</p>
   *          <p>The list can be 2-25 <code>PipelineActivity</code> objects and must contain both a
   *         <code>channel</code> and a <code>datastore</code> activity. Each entry in the list must
   *       contain only one activity. For example:</p>
   *          <p>
   *             <code>pipelineActivities = [ { "channel": { ... } }, { "lambda": { ... } }, ...
   *       ]</code>
   *          </p>
   */
  pipelineActivities: PipelineActivity[] | undefined;
}

export namespace UpdatePipelineRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdatePipelineRequest): any => ({
    ...obj,
  });
}
