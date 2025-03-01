import { LazyJsonString as __LazyJsonString } from "@aws-sdk/smithy-client";
import {
  MetadataBearer as $MetadataBearer,
  DocumentType as __DocumentType,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";
import { Readable } from "stream";

export enum FooEnum {
  BAR = "Bar",
  BAZ = "Baz",
  FOO = "Foo",
  ONE = "1",
  ZERO = "0",
}

export interface AllQueryStringTypesInput {
  queryString?: string;
  queryStringList?: string[];
  queryStringSet?: string[];
  queryByte?: number;
  queryShort?: number;
  queryInteger?: number;
  queryIntegerList?: number[];
  queryIntegerSet?: number[];
  queryLong?: number;
  queryFloat?: number;
  queryDouble?: number;
  queryDoubleList?: number[];
  queryBoolean?: boolean;
  queryBooleanList?: boolean[];
  queryTimestamp?: Date;
  queryTimestampList?: Date[];
  queryEnum?: FooEnum | string;
  queryEnumList?: (FooEnum | string)[];
  queryParamsMapOfStringList?: { [key: string]: string[] };
}

export namespace AllQueryStringTypesInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AllQueryStringTypesInput): any => ({
    ...obj,
  });
}

export interface ComplexNestedErrorData {
  Foo?: string;
}

export namespace ComplexNestedErrorData {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ComplexNestedErrorData): any => ({
    ...obj,
  });
}

/**
 * This error is thrown when a request is invalid.
 */
export interface ComplexError extends __SmithyException, $MetadataBearer {
  name: "ComplexError";
  $fault: "client";
  Header?: string;
  TopLevel?: string;
  Nested?: ComplexNestedErrorData;
}

export namespace ComplexError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ComplexError): any => ({
    ...obj,
  });
}

export interface ConstantAndVariableQueryStringInput {
  baz?: string;
  maybeSet?: string;
}

export namespace ConstantAndVariableQueryStringInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConstantAndVariableQueryStringInput): any => ({
    ...obj,
  });
}

export interface ConstantQueryStringInput {
  hello: string | undefined;
}

export namespace ConstantQueryStringInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConstantQueryStringInput): any => ({
    ...obj,
  });
}

export interface GreetingStruct {
  hi?: string;
}

export namespace GreetingStruct {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GreetingStruct): any => ({
    ...obj,
  });
}

export interface DocumentTypeInputOutput {
  stringValue?: string;
  documentValue?: __DocumentType;
}

export namespace DocumentTypeInputOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DocumentTypeInputOutput): any => ({
    ...obj,
  });
}

export interface DocumentTypeAsPayloadInputOutput {
  documentValue?: __DocumentType;
}

export namespace DocumentTypeAsPayloadInputOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DocumentTypeAsPayloadInputOutput): any => ({
    ...obj,
  });
}

export interface EmptyInputAndEmptyOutputInput {}

export namespace EmptyInputAndEmptyOutputInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EmptyInputAndEmptyOutputInput): any => ({
    ...obj,
  });
}

export interface EmptyInputAndEmptyOutputOutput {}

export namespace EmptyInputAndEmptyOutputOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EmptyInputAndEmptyOutputOutput): any => ({
    ...obj,
  });
}

export interface HostLabelInput {
  label: string | undefined;
}

export namespace HostLabelInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HostLabelInput): any => ({
    ...obj,
  });
}

export enum StringEnum {
  V = "enumvalue",
}

export interface EnumPayloadInput {
  payload?: StringEnum | string;
}

export namespace EnumPayloadInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnumPayloadInput): any => ({
    ...obj,
  });
}

/**
 * This error has test cases that test some of the dark corners of Amazon service
 * framework history. It should only be implemented by clients.
 */
export interface FooError extends __SmithyException, $MetadataBearer {
  name: "FooError";
  $fault: "server";
}

export namespace FooError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FooError): any => ({
    ...obj,
  });
}

export interface GreetingWithErrorsOutput {
  greeting?: string;
}

export namespace GreetingWithErrorsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GreetingWithErrorsOutput): any => ({
    ...obj,
  });
}

/**
 * This error is thrown when an invalid greeting value is provided.
 */
export interface InvalidGreeting extends __SmithyException, $MetadataBearer {
  name: "InvalidGreeting";
  $fault: "client";
  Message?: string;
}

export namespace InvalidGreeting {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidGreeting): any => ({
    ...obj,
  });
}

export interface HttpChecksumRequiredInputOutput {
  foo?: string;
}

export namespace HttpChecksumRequiredInputOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HttpChecksumRequiredInputOutput): any => ({
    ...obj,
  });
}

export interface HttpPayloadTraitsInputOutput {
  foo?: string;
  blob?: Uint8Array;
}

export namespace HttpPayloadTraitsInputOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HttpPayloadTraitsInputOutput): any => ({
    ...obj,
  });
}

export interface HttpPayloadTraitsWithMediaTypeInputOutput {
  foo?: string;
  blob?: Uint8Array;
}

export namespace HttpPayloadTraitsWithMediaTypeInputOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HttpPayloadTraitsWithMediaTypeInputOutput): any => ({
    ...obj,
  });
}

export interface NestedPayload {
  greeting?: string;
  name?: string;
}

export namespace NestedPayload {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NestedPayload): any => ({
    ...obj,
  });
}

export interface HttpPayloadWithStructureInputOutput {
  nested?: NestedPayload;
}

export namespace HttpPayloadWithStructureInputOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HttpPayloadWithStructureInputOutput): any => ({
    ...obj,
  });
}

export interface HttpPrefixHeadersInputOutput {
  foo?: string;
  fooMap?: { [key: string]: string };
}

export namespace HttpPrefixHeadersInputOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HttpPrefixHeadersInputOutput): any => ({
    ...obj,
  });
}

export interface HttpPrefixHeadersResponseOutput {
  prefixHeaders?: { [key: string]: string };
}

export namespace HttpPrefixHeadersResponseOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HttpPrefixHeadersResponseOutput): any => ({
    ...obj,
  });
}

export interface HttpRequestWithFloatLabelsInput {
  float: number | undefined;
  double: number | undefined;
}

export namespace HttpRequestWithFloatLabelsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HttpRequestWithFloatLabelsInput): any => ({
    ...obj,
  });
}

export interface HttpRequestWithGreedyLabelInPathInput {
  foo: string | undefined;
  baz: string | undefined;
}

export namespace HttpRequestWithGreedyLabelInPathInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HttpRequestWithGreedyLabelInPathInput): any => ({
    ...obj,
  });
}

export interface HttpRequestWithLabelsInput {
  string: string | undefined;
  short: number | undefined;
  integer: number | undefined;
  long: number | undefined;
  float: number | undefined;
  double: number | undefined;
  /**
   * Serialized in the path as true or false.
   */
  boolean: boolean | undefined;

  /**
   * Note that this member has no format, so it's serialized as an RFC 3399 date-time.
   */
  timestamp: Date | undefined;
}

export namespace HttpRequestWithLabelsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HttpRequestWithLabelsInput): any => ({
    ...obj,
  });
}

export interface HttpRequestWithLabelsAndTimestampFormatInput {
  memberEpochSeconds: Date | undefined;
  memberHttpDate: Date | undefined;
  memberDateTime: Date | undefined;
  defaultFormat: Date | undefined;
  targetEpochSeconds: Date | undefined;
  targetHttpDate: Date | undefined;
  targetDateTime: Date | undefined;
}

export namespace HttpRequestWithLabelsAndTimestampFormatInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HttpRequestWithLabelsAndTimestampFormatInput): any => ({
    ...obj,
  });
}

export interface HttpResponseCodeOutput {
  Status?: number;
}

export namespace HttpResponseCodeOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HttpResponseCodeOutput): any => ({
    ...obj,
  });
}

export interface StringPayloadInput {
  payload?: string;
}

export namespace StringPayloadInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StringPayloadInput): any => ({
    ...obj,
  });
}

export interface IgnoreQueryParamsInResponseOutput {
  baz?: string;
}

export namespace IgnoreQueryParamsInResponseOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IgnoreQueryParamsInResponseOutput): any => ({
    ...obj,
  });
}

export interface InputAndOutputWithHeadersIO {
  headerString?: string;
  headerByte?: number;
  headerShort?: number;
  headerInteger?: number;
  headerLong?: number;
  headerFloat?: number;
  headerDouble?: number;
  headerTrueBool?: boolean;
  headerFalseBool?: boolean;
  headerStringList?: string[];
  headerStringSet?: string[];
  headerIntegerList?: number[];
  headerBooleanList?: boolean[];
  headerTimestampList?: Date[];
  headerEnum?: FooEnum | string;
  headerEnumList?: (FooEnum | string)[];
}

export namespace InputAndOutputWithHeadersIO {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InputAndOutputWithHeadersIO): any => ({
    ...obj,
  });
}

export interface JsonBlobsInputOutput {
  data?: Uint8Array;
}

export namespace JsonBlobsInputOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JsonBlobsInputOutput): any => ({
    ...obj,
  });
}

export interface JsonEnumsInputOutput {
  fooEnum1?: FooEnum | string;
  fooEnum2?: FooEnum | string;
  fooEnum3?: FooEnum | string;
  fooEnumList?: (FooEnum | string)[];
  fooEnumSet?: (FooEnum | string)[];
  fooEnumMap?: { [key: string]: FooEnum | string };
}

export namespace JsonEnumsInputOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JsonEnumsInputOutput): any => ({
    ...obj,
  });
}

export interface StructureListMember {
  a?: string;
  b?: string;
}

export namespace StructureListMember {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StructureListMember): any => ({
    ...obj,
  });
}

export interface JsonListsInputOutput {
  stringList?: string[];
  sparseStringList?: string[];
  stringSet?: string[];
  integerList?: number[];
  booleanList?: boolean[];
  timestampList?: Date[];
  enumList?: (FooEnum | string)[];
  /**
   * A list of lists of strings.
   */
  nestedStringList?: string[][];

  structureList?: StructureListMember[];
}

export namespace JsonListsInputOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JsonListsInputOutput): any => ({
    ...obj,
  });
}

export interface JsonMapsInputOutput {
  denseStructMap?: { [key: string]: GreetingStruct };
  sparseStructMap?: { [key: string]: GreetingStruct };
  denseNumberMap?: { [key: string]: number };
  denseBooleanMap?: { [key: string]: boolean };
  denseStringMap?: { [key: string]: string };
  sparseNumberMap?: { [key: string]: number };
  sparseBooleanMap?: { [key: string]: boolean };
  sparseStringMap?: { [key: string]: string };
  denseSetMap?: { [key: string]: string[] };
  sparseSetMap?: { [key: string]: string[] };
}

export namespace JsonMapsInputOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JsonMapsInputOutput): any => ({
    ...obj,
  });
}

export interface JsonTimestampsInputOutput {
  normal?: Date;
  dateTime?: Date;
  epochSeconds?: Date;
  httpDate?: Date;
}

export namespace JsonTimestampsInputOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JsonTimestampsInputOutput): any => ({
    ...obj,
  });
}

export interface RenamedGreeting {
  salutation?: string;
}

export namespace RenamedGreeting {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RenamedGreeting): any => ({
    ...obj,
  });
}

/**
 * A union with a representative set of types for members.
 */
export type MyUnion =
  | MyUnion.BlobValueMember
  | MyUnion.BooleanValueMember
  | MyUnion.EnumValueMember
  | MyUnion.ListValueMember
  | MyUnion.MapValueMember
  | MyUnion.NumberValueMember
  | MyUnion.RenamedStructureValueMember
  | MyUnion.StringValueMember
  | MyUnion.StructureValueMember
  | MyUnion.TimestampValueMember
  | MyUnion.$UnknownMember;

export namespace MyUnion {
  export interface StringValueMember {
    stringValue: string;
    booleanValue?: never;
    numberValue?: never;
    blobValue?: never;
    timestampValue?: never;
    enumValue?: never;
    listValue?: never;
    mapValue?: never;
    structureValue?: never;
    renamedStructureValue?: never;
    $unknown?: never;
  }

  export interface BooleanValueMember {
    stringValue?: never;
    booleanValue: boolean;
    numberValue?: never;
    blobValue?: never;
    timestampValue?: never;
    enumValue?: never;
    listValue?: never;
    mapValue?: never;
    structureValue?: never;
    renamedStructureValue?: never;
    $unknown?: never;
  }

  export interface NumberValueMember {
    stringValue?: never;
    booleanValue?: never;
    numberValue: number;
    blobValue?: never;
    timestampValue?: never;
    enumValue?: never;
    listValue?: never;
    mapValue?: never;
    structureValue?: never;
    renamedStructureValue?: never;
    $unknown?: never;
  }

  export interface BlobValueMember {
    stringValue?: never;
    booleanValue?: never;
    numberValue?: never;
    blobValue: Uint8Array;
    timestampValue?: never;
    enumValue?: never;
    listValue?: never;
    mapValue?: never;
    structureValue?: never;
    renamedStructureValue?: never;
    $unknown?: never;
  }

  export interface TimestampValueMember {
    stringValue?: never;
    booleanValue?: never;
    numberValue?: never;
    blobValue?: never;
    timestampValue: Date;
    enumValue?: never;
    listValue?: never;
    mapValue?: never;
    structureValue?: never;
    renamedStructureValue?: never;
    $unknown?: never;
  }

  export interface EnumValueMember {
    stringValue?: never;
    booleanValue?: never;
    numberValue?: never;
    blobValue?: never;
    timestampValue?: never;
    enumValue: FooEnum | string;
    listValue?: never;
    mapValue?: never;
    structureValue?: never;
    renamedStructureValue?: never;
    $unknown?: never;
  }

  export interface ListValueMember {
    stringValue?: never;
    booleanValue?: never;
    numberValue?: never;
    blobValue?: never;
    timestampValue?: never;
    enumValue?: never;
    listValue: string[];
    mapValue?: never;
    structureValue?: never;
    renamedStructureValue?: never;
    $unknown?: never;
  }

  export interface MapValueMember {
    stringValue?: never;
    booleanValue?: never;
    numberValue?: never;
    blobValue?: never;
    timestampValue?: never;
    enumValue?: never;
    listValue?: never;
    mapValue: { [key: string]: string };
    structureValue?: never;
    renamedStructureValue?: never;
    $unknown?: never;
  }

  export interface StructureValueMember {
    stringValue?: never;
    booleanValue?: never;
    numberValue?: never;
    blobValue?: never;
    timestampValue?: never;
    enumValue?: never;
    listValue?: never;
    mapValue?: never;
    structureValue: GreetingStruct;
    renamedStructureValue?: never;
    $unknown?: never;
  }

  export interface RenamedStructureValueMember {
    stringValue?: never;
    booleanValue?: never;
    numberValue?: never;
    blobValue?: never;
    timestampValue?: never;
    enumValue?: never;
    listValue?: never;
    mapValue?: never;
    structureValue?: never;
    renamedStructureValue: RenamedGreeting;
    $unknown?: never;
  }

  export interface $UnknownMember {
    stringValue?: never;
    booleanValue?: never;
    numberValue?: never;
    blobValue?: never;
    timestampValue?: never;
    enumValue?: never;
    listValue?: never;
    mapValue?: never;
    structureValue?: never;
    renamedStructureValue?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    stringValue: (value: string) => T;
    booleanValue: (value: boolean) => T;
    numberValue: (value: number) => T;
    blobValue: (value: Uint8Array) => T;
    timestampValue: (value: Date) => T;
    enumValue: (value: FooEnum | string) => T;
    listValue: (value: string[]) => T;
    mapValue: (value: { [key: string]: string }) => T;
    structureValue: (value: GreetingStruct) => T;
    renamedStructureValue: (value: RenamedGreeting) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: MyUnion, visitor: Visitor<T>): T => {
    if (value.stringValue !== undefined) return visitor.stringValue(value.stringValue);
    if (value.booleanValue !== undefined) return visitor.booleanValue(value.booleanValue);
    if (value.numberValue !== undefined) return visitor.numberValue(value.numberValue);
    if (value.blobValue !== undefined) return visitor.blobValue(value.blobValue);
    if (value.timestampValue !== undefined) return visitor.timestampValue(value.timestampValue);
    if (value.enumValue !== undefined) return visitor.enumValue(value.enumValue);
    if (value.listValue !== undefined) return visitor.listValue(value.listValue);
    if (value.mapValue !== undefined) return visitor.mapValue(value.mapValue);
    if (value.structureValue !== undefined) return visitor.structureValue(value.structureValue);
    if (value.renamedStructureValue !== undefined) return visitor.renamedStructureValue(value.renamedStructureValue);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MyUnion): any => {
    if (obj.stringValue !== undefined) return { stringValue: obj.stringValue };
    if (obj.booleanValue !== undefined) return { booleanValue: obj.booleanValue };
    if (obj.numberValue !== undefined) return { numberValue: obj.numberValue };
    if (obj.blobValue !== undefined) return { blobValue: obj.blobValue };
    if (obj.timestampValue !== undefined) return { timestampValue: obj.timestampValue };
    if (obj.enumValue !== undefined) return { enumValue: obj.enumValue };
    if (obj.listValue !== undefined) return { listValue: obj.listValue };
    if (obj.mapValue !== undefined) return { mapValue: obj.mapValue };
    if (obj.structureValue !== undefined)
      return { structureValue: GreetingStruct.filterSensitiveLog(obj.structureValue) };
    if (obj.renamedStructureValue !== undefined)
      return { renamedStructureValue: RenamedGreeting.filterSensitiveLog(obj.renamedStructureValue) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

/**
 * A shared structure that contains a single union member.
 */
export interface UnionInputOutput {
  /**
   * A union with a representative set of types for members.
   */
  contents?: MyUnion;
}

export namespace UnionInputOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnionInputOutput): any => ({
    ...obj,
    ...(obj.contents && { contents: MyUnion.filterSensitiveLog(obj.contents) }),
  });
}

export interface MediaTypeHeaderInput {
  json?: __LazyJsonString | string;
}

export namespace MediaTypeHeaderInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MediaTypeHeaderInput): any => ({
    ...obj,
  });
}

export interface MediaTypeHeaderOutput {
  json?: __LazyJsonString | string;
}

export namespace MediaTypeHeaderOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MediaTypeHeaderOutput): any => ({
    ...obj,
  });
}

export interface NoInputAndOutputOutput {}

export namespace NoInputAndOutputOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NoInputAndOutputOutput): any => ({
    ...obj,
  });
}

export interface NullAndEmptyHeadersIO {
  a?: string;
  b?: string;
  c?: string[];
}

export namespace NullAndEmptyHeadersIO {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NullAndEmptyHeadersIO): any => ({
    ...obj,
  });
}

export interface OmitsNullSerializesEmptyStringInput {
  nullValue?: string;
  emptyString?: string;
}

export namespace OmitsNullSerializesEmptyStringInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OmitsNullSerializesEmptyStringInput): any => ({
    ...obj,
  });
}

export interface QueryIdempotencyTokenAutoFillInput {
  token?: string;
}

export namespace QueryIdempotencyTokenAutoFillInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: QueryIdempotencyTokenAutoFillInput): any => ({
    ...obj,
  });
}

export interface QueryParamsAsStringListMapInput {
  qux?: string;
  foo?: { [key: string]: string[] };
}

export namespace QueryParamsAsStringListMapInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: QueryParamsAsStringListMapInput): any => ({
    ...obj,
  });
}

export interface QueryPrecedenceInput {
  foo?: string;
  baz?: { [key: string]: string };
}

export namespace QueryPrecedenceInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: QueryPrecedenceInput): any => ({
    ...obj,
  });
}

export interface SimpleScalarPropertiesInputOutput {
  foo?: string;
  stringValue?: string;
  trueBooleanValue?: boolean;
  falseBooleanValue?: boolean;
  byteValue?: number;
  shortValue?: number;
  integerValue?: number;
  longValue?: number;
  floatValue?: number;
  doubleValue?: number;
}

export namespace SimpleScalarPropertiesInputOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SimpleScalarPropertiesInputOutput): any => ({
    ...obj,
  });
}

export interface StreamingTraitsInputOutput {
  foo?: string;
  blob?: Readable | ReadableStream | Blob;
}

export namespace StreamingTraitsInputOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StreamingTraitsInputOutput): any => ({
    ...obj,
  });
}

export interface StreamingTraitsRequireLengthInputOutput {
  foo?: string;
  blob?: Readable | ReadableStream | Blob;
}

export namespace StreamingTraitsRequireLengthInputOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StreamingTraitsRequireLengthInputOutput): any => ({
    ...obj,
  });
}

export interface StreamingTraitsWithMediaTypeInputOutput {
  foo?: string;
  blob?: Readable | ReadableStream | Blob;
}

export namespace StreamingTraitsWithMediaTypeInputOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StreamingTraitsWithMediaTypeInputOutput): any => ({
    ...obj,
  });
}

export interface TimestampFormatHeadersIO {
  memberEpochSeconds?: Date;
  memberHttpDate?: Date;
  memberDateTime?: Date;
  defaultFormat?: Date;
  targetEpochSeconds?: Date;
  targetHttpDate?: Date;
  targetDateTime?: Date;
}

export namespace TimestampFormatHeadersIO {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TimestampFormatHeadersIO): any => ({
    ...obj,
  });
}

export interface RecursiveShapesInputOutputNested1 {
  foo?: string;
  nested?: RecursiveShapesInputOutputNested2;
}

export namespace RecursiveShapesInputOutputNested1 {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RecursiveShapesInputOutputNested1): any => ({
    ...obj,
  });
}

export interface RecursiveShapesInputOutputNested2 {
  bar?: string;
  recursiveMember?: RecursiveShapesInputOutputNested1;
}

export namespace RecursiveShapesInputOutputNested2 {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RecursiveShapesInputOutputNested2): any => ({
    ...obj,
  });
}

export interface RecursiveShapesInputOutput {
  nested?: RecursiveShapesInputOutputNested1;
}

export namespace RecursiveShapesInputOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RecursiveShapesInputOutput): any => ({
    ...obj,
  });
}
