
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Experience
 * 
 */
export type Experience = $Result.DefaultSelection<Prisma.$ExperiencePayload>
/**
 * Model Education
 * 
 */
export type Education = $Result.DefaultSelection<Prisma.$EducationPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model ConnectionRequest
 * 
 */
export type ConnectionRequest = $Result.DefaultSelection<Prisma.$ConnectionRequestPayload>
/**
 * Model Connection
 * 
 */
export type Connection = $Result.DefaultSelection<Prisma.$ConnectionPayload>
/**
 * Model PostInteraction
 * 
 */
export type PostInteraction = $Result.DefaultSelection<Prisma.$PostInteractionPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model Conversation
 * 
 */
export type Conversation = $Result.DefaultSelection<Prisma.$ConversationPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model JobPost
 * 
 */
export type JobPost = $Result.DefaultSelection<Prisma.$JobPostPayload>
/**
 * Model JobApplication
 * 
 */
export type JobApplication = $Result.DefaultSelection<Prisma.$JobApplicationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const EmploymentType: {
  FULL_TIME: 'FULL_TIME',
  PART_TIME: 'PART_TIME',
  FREELANCE: 'FREELANCE',
  INTERNSHIP: 'INTERNSHIP'
};

export type EmploymentType = (typeof EmploymentType)[keyof typeof EmploymentType]


export const RequestStatus: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED',
  CANCELED: 'CANCELED'
};

export type RequestStatus = (typeof RequestStatus)[keyof typeof RequestStatus]


export const PostInteractionType: {
  LIKE: 'LIKE',
  SHARE: 'SHARE',
  SAVED: 'SAVED'
};

export type PostInteractionType = (typeof PostInteractionType)[keyof typeof PostInteractionType]


export const NotificationType: {
  CONNECTION_REQUEST: 'CONNECTION_REQUEST',
  CONNECTION_ACCEPTED: 'CONNECTION_ACCEPTED',
  POST_LIKED: 'POST_LIKED',
  POST_COMMENTED: 'POST_COMMENTED',
  COMMENT_REPLIED: 'COMMENT_REPLIED',
  POST_SHARED: 'POST_SHARED',
  POST_VOTED: 'POST_VOTED',
  JOB_APPLICATION: 'JOB_APPLICATION'
};

export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType]


export const JobStatus: {
  OPEN: 'OPEN',
  CLOSED: 'CLOSED',
  FILLED: 'FILLED'
};

export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus]


export const JobLocationType: {
  ONSITE: 'ONSITE',
  REMOTE: 'REMOTE',
  HYBRID: 'HYBRID'
};

export type JobLocationType = (typeof JobLocationType)[keyof typeof JobLocationType]


export const ApplicationStatus: {
  APPLIED: 'APPLIED',
  SHORTLISTED: 'SHORTLISTED',
  REJECTED: 'REJECTED'
};

export type ApplicationStatus = (typeof ApplicationStatus)[keyof typeof ApplicationStatus]

}

export type EmploymentType = $Enums.EmploymentType

export const EmploymentType: typeof $Enums.EmploymentType

export type RequestStatus = $Enums.RequestStatus

export const RequestStatus: typeof $Enums.RequestStatus

export type PostInteractionType = $Enums.PostInteractionType

export const PostInteractionType: typeof $Enums.PostInteractionType

export type NotificationType = $Enums.NotificationType

export const NotificationType: typeof $Enums.NotificationType

export type JobStatus = $Enums.JobStatus

export const JobStatus: typeof $Enums.JobStatus

export type JobLocationType = $Enums.JobLocationType

export const JobLocationType: typeof $Enums.JobLocationType

export type ApplicationStatus = $Enums.ApplicationStatus

export const ApplicationStatus: typeof $Enums.ApplicationStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.experience`: Exposes CRUD operations for the **Experience** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Experiences
    * const experiences = await prisma.experience.findMany()
    * ```
    */
  get experience(): Prisma.ExperienceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.education`: Exposes CRUD operations for the **Education** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Educations
    * const educations = await prisma.education.findMany()
    * ```
    */
  get education(): Prisma.EducationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.connectionRequest`: Exposes CRUD operations for the **ConnectionRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ConnectionRequests
    * const connectionRequests = await prisma.connectionRequest.findMany()
    * ```
    */
  get connectionRequest(): Prisma.ConnectionRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.connection`: Exposes CRUD operations for the **Connection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Connections
    * const connections = await prisma.connection.findMany()
    * ```
    */
  get connection(): Prisma.ConnectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postInteraction`: Exposes CRUD operations for the **PostInteraction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostInteractions
    * const postInteractions = await prisma.postInteraction.findMany()
    * ```
    */
  get postInteraction(): Prisma.PostInteractionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conversation`: Exposes CRUD operations for the **Conversation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conversations
    * const conversations = await prisma.conversation.findMany()
    * ```
    */
  get conversation(): Prisma.ConversationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jobPost`: Exposes CRUD operations for the **JobPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobPosts
    * const jobPosts = await prisma.jobPost.findMany()
    * ```
    */
  get jobPost(): Prisma.JobPostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jobApplication`: Exposes CRUD operations for the **JobApplication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobApplications
    * const jobApplications = await prisma.jobApplication.findMany()
    * ```
    */
  get jobApplication(): Prisma.JobApplicationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Experience: 'Experience',
    Education: 'Education',
    Post: 'Post',
    Comment: 'Comment',
    ConnectionRequest: 'ConnectionRequest',
    Connection: 'Connection',
    PostInteraction: 'PostInteraction',
    Notification: 'Notification',
    Conversation: 'Conversation',
    Message: 'Message',
    JobPost: 'JobPost',
    JobApplication: 'JobApplication'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "experience" | "education" | "post" | "comment" | "connectionRequest" | "connection" | "postInteraction" | "notification" | "conversation" | "message" | "jobPost" | "jobApplication"
      txIsolationLevel: never
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Experience: {
        payload: Prisma.$ExperiencePayload<ExtArgs>
        fields: Prisma.ExperienceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExperienceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExperienceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          findFirst: {
            args: Prisma.ExperienceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExperienceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          findMany: {
            args: Prisma.ExperienceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>[]
          }
          create: {
            args: Prisma.ExperienceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          createMany: {
            args: Prisma.ExperienceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ExperienceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          update: {
            args: Prisma.ExperienceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          deleteMany: {
            args: Prisma.ExperienceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExperienceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ExperienceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          aggregate: {
            args: Prisma.ExperienceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExperience>
          }
          groupBy: {
            args: Prisma.ExperienceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExperienceGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ExperienceFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ExperienceAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ExperienceCountArgs<ExtArgs>
            result: $Utils.Optional<ExperienceCountAggregateOutputType> | number
          }
        }
      }
      Education: {
        payload: Prisma.$EducationPayload<ExtArgs>
        fields: Prisma.EducationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EducationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EducationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          findFirst: {
            args: Prisma.EducationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EducationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          findMany: {
            args: Prisma.EducationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>[]
          }
          create: {
            args: Prisma.EducationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          createMany: {
            args: Prisma.EducationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EducationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          update: {
            args: Prisma.EducationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          deleteMany: {
            args: Prisma.EducationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EducationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EducationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          aggregate: {
            args: Prisma.EducationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEducation>
          }
          groupBy: {
            args: Prisma.EducationGroupByArgs<ExtArgs>
            result: $Utils.Optional<EducationGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.EducationFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.EducationAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.EducationCountArgs<ExtArgs>
            result: $Utils.Optional<EducationCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PostFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.PostAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CommentFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.CommentAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      ConnectionRequest: {
        payload: Prisma.$ConnectionRequestPayload<ExtArgs>
        fields: Prisma.ConnectionRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConnectionRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConnectionRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionRequestPayload>
          }
          findFirst: {
            args: Prisma.ConnectionRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConnectionRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionRequestPayload>
          }
          findMany: {
            args: Prisma.ConnectionRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionRequestPayload>[]
          }
          create: {
            args: Prisma.ConnectionRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionRequestPayload>
          }
          createMany: {
            args: Prisma.ConnectionRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ConnectionRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionRequestPayload>
          }
          update: {
            args: Prisma.ConnectionRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionRequestPayload>
          }
          deleteMany: {
            args: Prisma.ConnectionRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConnectionRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ConnectionRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionRequestPayload>
          }
          aggregate: {
            args: Prisma.ConnectionRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConnectionRequest>
          }
          groupBy: {
            args: Prisma.ConnectionRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConnectionRequestGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ConnectionRequestFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ConnectionRequestAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ConnectionRequestCountArgs<ExtArgs>
            result: $Utils.Optional<ConnectionRequestCountAggregateOutputType> | number
          }
        }
      }
      Connection: {
        payload: Prisma.$ConnectionPayload<ExtArgs>
        fields: Prisma.ConnectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConnectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConnectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload>
          }
          findFirst: {
            args: Prisma.ConnectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConnectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload>
          }
          findMany: {
            args: Prisma.ConnectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload>[]
          }
          create: {
            args: Prisma.ConnectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload>
          }
          createMany: {
            args: Prisma.ConnectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ConnectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload>
          }
          update: {
            args: Prisma.ConnectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload>
          }
          deleteMany: {
            args: Prisma.ConnectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConnectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ConnectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionPayload>
          }
          aggregate: {
            args: Prisma.ConnectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConnection>
          }
          groupBy: {
            args: Prisma.ConnectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConnectionGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ConnectionFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ConnectionAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ConnectionCountArgs<ExtArgs>
            result: $Utils.Optional<ConnectionCountAggregateOutputType> | number
          }
        }
      }
      PostInteraction: {
        payload: Prisma.$PostInteractionPayload<ExtArgs>
        fields: Prisma.PostInteractionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostInteractionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostInteractionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostInteractionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostInteractionPayload>
          }
          findFirst: {
            args: Prisma.PostInteractionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostInteractionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostInteractionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostInteractionPayload>
          }
          findMany: {
            args: Prisma.PostInteractionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostInteractionPayload>[]
          }
          create: {
            args: Prisma.PostInteractionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostInteractionPayload>
          }
          createMany: {
            args: Prisma.PostInteractionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PostInteractionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostInteractionPayload>
          }
          update: {
            args: Prisma.PostInteractionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostInteractionPayload>
          }
          deleteMany: {
            args: Prisma.PostInteractionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostInteractionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PostInteractionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostInteractionPayload>
          }
          aggregate: {
            args: Prisma.PostInteractionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostInteraction>
          }
          groupBy: {
            args: Prisma.PostInteractionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostInteractionGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PostInteractionFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.PostInteractionAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.PostInteractionCountArgs<ExtArgs>
            result: $Utils.Optional<PostInteractionCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.NotificationFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.NotificationAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      Conversation: {
        payload: Prisma.$ConversationPayload<ExtArgs>
        fields: Prisma.ConversationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConversationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConversationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          findFirst: {
            args: Prisma.ConversationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConversationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          findMany: {
            args: Prisma.ConversationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>[]
          }
          create: {
            args: Prisma.ConversationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          createMany: {
            args: Prisma.ConversationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ConversationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          update: {
            args: Prisma.ConversationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          deleteMany: {
            args: Prisma.ConversationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConversationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ConversationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          aggregate: {
            args: Prisma.ConversationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConversation>
          }
          groupBy: {
            args: Prisma.ConversationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConversationGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ConversationFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ConversationAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ConversationCountArgs<ExtArgs>
            result: $Utils.Optional<ConversationCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.MessageFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.MessageAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      JobPost: {
        payload: Prisma.$JobPostPayload<ExtArgs>
        fields: Prisma.JobPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPostPayload>
          }
          findFirst: {
            args: Prisma.JobPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPostPayload>
          }
          findMany: {
            args: Prisma.JobPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPostPayload>[]
          }
          create: {
            args: Prisma.JobPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPostPayload>
          }
          createMany: {
            args: Prisma.JobPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.JobPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPostPayload>
          }
          update: {
            args: Prisma.JobPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPostPayload>
          }
          deleteMany: {
            args: Prisma.JobPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.JobPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPostPayload>
          }
          aggregate: {
            args: Prisma.JobPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobPost>
          }
          groupBy: {
            args: Prisma.JobPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobPostGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.JobPostFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.JobPostAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.JobPostCountArgs<ExtArgs>
            result: $Utils.Optional<JobPostCountAggregateOutputType> | number
          }
        }
      }
      JobApplication: {
        payload: Prisma.$JobApplicationPayload<ExtArgs>
        fields: Prisma.JobApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobApplicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobApplicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>
          }
          findFirst: {
            args: Prisma.JobApplicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobApplicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>
          }
          findMany: {
            args: Prisma.JobApplicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>[]
          }
          create: {
            args: Prisma.JobApplicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>
          }
          createMany: {
            args: Prisma.JobApplicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.JobApplicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>
          }
          update: {
            args: Prisma.JobApplicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>
          }
          deleteMany: {
            args: Prisma.JobApplicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobApplicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.JobApplicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>
          }
          aggregate: {
            args: Prisma.JobApplicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobApplication>
          }
          groupBy: {
            args: Prisma.JobApplicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobApplicationGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.JobApplicationFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.JobApplicationAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.JobApplicationCountArgs<ExtArgs>
            result: $Utils.Optional<JobApplicationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    experience?: ExperienceOmit
    education?: EducationOmit
    post?: PostOmit
    comment?: CommentOmit
    connectionRequest?: ConnectionRequestOmit
    connection?: ConnectionOmit
    postInteraction?: PostInteractionOmit
    notification?: NotificationOmit
    conversation?: ConversationOmit
    message?: MessageOmit
    jobPost?: JobPostOmit
    jobApplication?: JobApplicationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    jobApplications: number
    experience: number
    education: number
    posts: number
    sentConnectionRequests: number
    receivedConnectionRequests: number
    notificationsReceived: number
    notificationsSent: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobApplications?: boolean | UserCountOutputTypeCountJobApplicationsArgs
    experience?: boolean | UserCountOutputTypeCountExperienceArgs
    education?: boolean | UserCountOutputTypeCountEducationArgs
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    sentConnectionRequests?: boolean | UserCountOutputTypeCountSentConnectionRequestsArgs
    receivedConnectionRequests?: boolean | UserCountOutputTypeCountReceivedConnectionRequestsArgs
    notificationsReceived?: boolean | UserCountOutputTypeCountNotificationsReceivedArgs
    notificationsSent?: boolean | UserCountOutputTypeCountNotificationsSentArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountJobApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobApplicationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountExperienceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExperienceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEducationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EducationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentConnectionRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConnectionRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedConnectionRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConnectionRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsSentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    comments: number
    interactions: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | PostCountOutputTypeCountCommentsArgs
    interactions?: boolean | PostCountOutputTypeCountInteractionsArgs
  }

  // Custom InputTypes
  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountInteractionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostInteractionWhereInput
  }


  /**
   * Count Type CommentCountOutputType
   */

  export type CommentCountOutputType = {
    replies: number
  }

  export type CommentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    replies?: boolean | CommentCountOutputTypeCountRepliesArgs
  }

  // Custom InputTypes
  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentCountOutputType
     */
    select?: CommentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeCountRepliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }


  /**
   * Count Type ConversationCountOutputType
   */

  export type ConversationCountOutputType = {
    messages: number
  }

  export type ConversationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ConversationCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * ConversationCountOutputType without action
   */
  export type ConversationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationCountOutputType
     */
    select?: ConversationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConversationCountOutputType without action
   */
  export type ConversationCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * Count Type JobPostCountOutputType
   */

  export type JobPostCountOutputType = {
    applications: number
  }

  export type JobPostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | JobPostCountOutputTypeCountApplicationsArgs
  }

  // Custom InputTypes
  /**
   * JobPostCountOutputType without action
   */
  export type JobPostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPostCountOutputType
     */
    select?: JobPostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JobPostCountOutputType without action
   */
  export type JobPostCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobApplicationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    connections: number | null
  }

  export type UserSumAggregateOutputType = {
    connections: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    googleId: string | null
    linkedinId: string | null
    microsoftId: string | null
    profilePic: string | null
    profilePicOriginal: string | null
    coverPhoto: string | null
    coverPhotoOriginal: string | null
    title: string | null
    location: string | null
    about: string | null
    connections: number | null
    phoneNo: string | null
    phonePublic: boolean | null
    emailPublic: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    googleId: string | null
    linkedinId: string | null
    microsoftId: string | null
    profilePic: string | null
    profilePicOriginal: string | null
    coverPhoto: string | null
    coverPhotoOriginal: string | null
    title: string | null
    location: string | null
    about: string | null
    connections: number | null
    phoneNo: string | null
    phonePublic: boolean | null
    emailPublic: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    googleId: number
    linkedinId: number
    microsoftId: number
    profilePic: number
    profilePicOriginal: number
    profilePicCrop: number
    coverPhoto: number
    coverPhotoOriginal: number
    coverPhotoCrop: number
    title: number
    location: number
    about: number
    connections: number
    phoneNo: number
    phonePublic: number
    emailPublic: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    connections?: true
  }

  export type UserSumAggregateInputType = {
    connections?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    googleId?: true
    linkedinId?: true
    microsoftId?: true
    profilePic?: true
    profilePicOriginal?: true
    coverPhoto?: true
    coverPhotoOriginal?: true
    title?: true
    location?: true
    about?: true
    connections?: true
    phoneNo?: true
    phonePublic?: true
    emailPublic?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    googleId?: true
    linkedinId?: true
    microsoftId?: true
    profilePic?: true
    profilePicOriginal?: true
    coverPhoto?: true
    coverPhotoOriginal?: true
    title?: true
    location?: true
    about?: true
    connections?: true
    phoneNo?: true
    phonePublic?: true
    emailPublic?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    googleId?: true
    linkedinId?: true
    microsoftId?: true
    profilePic?: true
    profilePicOriginal?: true
    profilePicCrop?: true
    coverPhoto?: true
    coverPhotoOriginal?: true
    coverPhotoCrop?: true
    title?: true
    location?: true
    about?: true
    connections?: true
    phoneNo?: true
    phonePublic?: true
    emailPublic?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    email: string
    googleId: string | null
    linkedinId: string | null
    microsoftId: string | null
    profilePic: string | null
    profilePicOriginal: string | null
    profilePicCrop: JsonValue | null
    coverPhoto: string | null
    coverPhotoOriginal: string | null
    coverPhotoCrop: JsonValue | null
    title: string | null
    location: string | null
    about: string | null
    connections: number
    phoneNo: string | null
    phonePublic: boolean
    emailPublic: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    googleId?: boolean
    linkedinId?: boolean
    microsoftId?: boolean
    profilePic?: boolean
    profilePicOriginal?: boolean
    profilePicCrop?: boolean
    coverPhoto?: boolean
    coverPhotoOriginal?: boolean
    coverPhotoCrop?: boolean
    title?: boolean
    location?: boolean
    about?: boolean
    connections?: boolean
    phoneNo?: boolean
    phonePublic?: boolean
    emailPublic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jobApplications?: boolean | User$jobApplicationsArgs<ExtArgs>
    experience?: boolean | User$experienceArgs<ExtArgs>
    education?: boolean | User$educationArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    sentConnectionRequests?: boolean | User$sentConnectionRequestsArgs<ExtArgs>
    receivedConnectionRequests?: boolean | User$receivedConnectionRequestsArgs<ExtArgs>
    notificationsReceived?: boolean | User$notificationsReceivedArgs<ExtArgs>
    notificationsSent?: boolean | User$notificationsSentArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    googleId?: boolean
    linkedinId?: boolean
    microsoftId?: boolean
    profilePic?: boolean
    profilePicOriginal?: boolean
    profilePicCrop?: boolean
    coverPhoto?: boolean
    coverPhotoOriginal?: boolean
    coverPhotoCrop?: boolean
    title?: boolean
    location?: boolean
    about?: boolean
    connections?: boolean
    phoneNo?: boolean
    phonePublic?: boolean
    emailPublic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "googleId" | "linkedinId" | "microsoftId" | "profilePic" | "profilePicOriginal" | "profilePicCrop" | "coverPhoto" | "coverPhotoOriginal" | "coverPhotoCrop" | "title" | "location" | "about" | "connections" | "phoneNo" | "phonePublic" | "emailPublic" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobApplications?: boolean | User$jobApplicationsArgs<ExtArgs>
    experience?: boolean | User$experienceArgs<ExtArgs>
    education?: boolean | User$educationArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    sentConnectionRequests?: boolean | User$sentConnectionRequestsArgs<ExtArgs>
    receivedConnectionRequests?: boolean | User$receivedConnectionRequestsArgs<ExtArgs>
    notificationsReceived?: boolean | User$notificationsReceivedArgs<ExtArgs>
    notificationsSent?: boolean | User$notificationsSentArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      jobApplications: Prisma.$JobApplicationPayload<ExtArgs>[]
      experience: Prisma.$ExperiencePayload<ExtArgs>[]
      education: Prisma.$EducationPayload<ExtArgs>[]
      posts: Prisma.$PostPayload<ExtArgs>[]
      sentConnectionRequests: Prisma.$ConnectionRequestPayload<ExtArgs>[]
      receivedConnectionRequests: Prisma.$ConnectionRequestPayload<ExtArgs>[]
      notificationsReceived: Prisma.$NotificationPayload<ExtArgs>[]
      notificationsSent: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string
      googleId: string | null
      linkedinId: string | null
      microsoftId: string | null
      profilePic: string | null
      profilePicOriginal: string | null
      profilePicCrop: Prisma.JsonValue | null
      coverPhoto: string | null
      coverPhotoOriginal: string | null
      coverPhotoCrop: Prisma.JsonValue | null
      title: string | null
      location: string | null
      about: string | null
      connections: number
      phoneNo: string | null
      phonePublic: boolean
      emailPublic: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jobApplications<T extends User$jobApplicationsArgs<ExtArgs> = {}>(args?: Subset<T, User$jobApplicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    experience<T extends User$experienceArgs<ExtArgs> = {}>(args?: Subset<T, User$experienceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    education<T extends User$educationArgs<ExtArgs> = {}>(args?: Subset<T, User$educationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentConnectionRequests<T extends User$sentConnectionRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$sentConnectionRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectionRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedConnectionRequests<T extends User$receivedConnectionRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedConnectionRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectionRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notificationsReceived<T extends User$notificationsReceivedArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notificationsSent<T extends User$notificationsSentArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsSentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly googleId: FieldRef<"User", 'String'>
    readonly linkedinId: FieldRef<"User", 'String'>
    readonly microsoftId: FieldRef<"User", 'String'>
    readonly profilePic: FieldRef<"User", 'String'>
    readonly profilePicOriginal: FieldRef<"User", 'String'>
    readonly profilePicCrop: FieldRef<"User", 'Json'>
    readonly coverPhoto: FieldRef<"User", 'String'>
    readonly coverPhotoOriginal: FieldRef<"User", 'String'>
    readonly coverPhotoCrop: FieldRef<"User", 'Json'>
    readonly title: FieldRef<"User", 'String'>
    readonly location: FieldRef<"User", 'String'>
    readonly about: FieldRef<"User", 'String'>
    readonly connections: FieldRef<"User", 'Int'>
    readonly phoneNo: FieldRef<"User", 'String'>
    readonly phonePublic: FieldRef<"User", 'Boolean'>
    readonly emailPublic: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User.jobApplications
   */
  export type User$jobApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    where?: JobApplicationWhereInput
    orderBy?: JobApplicationOrderByWithRelationInput | JobApplicationOrderByWithRelationInput[]
    cursor?: JobApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobApplicationScalarFieldEnum | JobApplicationScalarFieldEnum[]
  }

  /**
   * User.experience
   */
  export type User$experienceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    where?: ExperienceWhereInput
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    cursor?: ExperienceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * User.education
   */
  export type User$educationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    where?: EducationWhereInput
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    cursor?: EducationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * User.sentConnectionRequests
   */
  export type User$sentConnectionRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectionRequest
     */
    select?: ConnectionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectionRequest
     */
    omit?: ConnectionRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionRequestInclude<ExtArgs> | null
    where?: ConnectionRequestWhereInput
    orderBy?: ConnectionRequestOrderByWithRelationInput | ConnectionRequestOrderByWithRelationInput[]
    cursor?: ConnectionRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConnectionRequestScalarFieldEnum | ConnectionRequestScalarFieldEnum[]
  }

  /**
   * User.receivedConnectionRequests
   */
  export type User$receivedConnectionRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectionRequest
     */
    select?: ConnectionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectionRequest
     */
    omit?: ConnectionRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionRequestInclude<ExtArgs> | null
    where?: ConnectionRequestWhereInput
    orderBy?: ConnectionRequestOrderByWithRelationInput | ConnectionRequestOrderByWithRelationInput[]
    cursor?: ConnectionRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConnectionRequestScalarFieldEnum | ConnectionRequestScalarFieldEnum[]
  }

  /**
   * User.notificationsReceived
   */
  export type User$notificationsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User.notificationsSent
   */
  export type User$notificationsSentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Experience
   */

  export type AggregateExperience = {
    _count: ExperienceCountAggregateOutputType | null
    _avg: ExperienceAvgAggregateOutputType | null
    _sum: ExperienceSumAggregateOutputType | null
    _min: ExperienceMinAggregateOutputType | null
    _max: ExperienceMaxAggregateOutputType | null
  }

  export type ExperienceAvgAggregateOutputType = {
    startMonth: number | null
    startYear: number | null
    endMonth: number | null
    endYear: number | null
  }

  export type ExperienceSumAggregateOutputType = {
    startMonth: number | null
    startYear: number | null
    endMonth: number | null
    endYear: number | null
  }

  export type ExperienceMinAggregateOutputType = {
    id: string | null
    title: string | null
    employmentType: $Enums.EmploymentType | null
    company: string | null
    startMonth: number | null
    startYear: number | null
    endMonth: number | null
    endYear: number | null
    isCurrent: boolean | null
    userId: string | null
  }

  export type ExperienceMaxAggregateOutputType = {
    id: string | null
    title: string | null
    employmentType: $Enums.EmploymentType | null
    company: string | null
    startMonth: number | null
    startYear: number | null
    endMonth: number | null
    endYear: number | null
    isCurrent: boolean | null
    userId: string | null
  }

  export type ExperienceCountAggregateOutputType = {
    id: number
    title: number
    employmentType: number
    company: number
    startMonth: number
    startYear: number
    endMonth: number
    endYear: number
    isCurrent: number
    userId: number
    _all: number
  }


  export type ExperienceAvgAggregateInputType = {
    startMonth?: true
    startYear?: true
    endMonth?: true
    endYear?: true
  }

  export type ExperienceSumAggregateInputType = {
    startMonth?: true
    startYear?: true
    endMonth?: true
    endYear?: true
  }

  export type ExperienceMinAggregateInputType = {
    id?: true
    title?: true
    employmentType?: true
    company?: true
    startMonth?: true
    startYear?: true
    endMonth?: true
    endYear?: true
    isCurrent?: true
    userId?: true
  }

  export type ExperienceMaxAggregateInputType = {
    id?: true
    title?: true
    employmentType?: true
    company?: true
    startMonth?: true
    startYear?: true
    endMonth?: true
    endYear?: true
    isCurrent?: true
    userId?: true
  }

  export type ExperienceCountAggregateInputType = {
    id?: true
    title?: true
    employmentType?: true
    company?: true
    startMonth?: true
    startYear?: true
    endMonth?: true
    endYear?: true
    isCurrent?: true
    userId?: true
    _all?: true
  }

  export type ExperienceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Experience to aggregate.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Experiences
    **/
    _count?: true | ExperienceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExperienceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExperienceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExperienceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExperienceMaxAggregateInputType
  }

  export type GetExperienceAggregateType<T extends ExperienceAggregateArgs> = {
        [P in keyof T & keyof AggregateExperience]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExperience[P]>
      : GetScalarType<T[P], AggregateExperience[P]>
  }




  export type ExperienceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExperienceWhereInput
    orderBy?: ExperienceOrderByWithAggregationInput | ExperienceOrderByWithAggregationInput[]
    by: ExperienceScalarFieldEnum[] | ExperienceScalarFieldEnum
    having?: ExperienceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExperienceCountAggregateInputType | true
    _avg?: ExperienceAvgAggregateInputType
    _sum?: ExperienceSumAggregateInputType
    _min?: ExperienceMinAggregateInputType
    _max?: ExperienceMaxAggregateInputType
  }

  export type ExperienceGroupByOutputType = {
    id: string
    title: string
    employmentType: $Enums.EmploymentType
    company: string
    startMonth: number
    startYear: number
    endMonth: number | null
    endYear: number | null
    isCurrent: boolean
    userId: string
    _count: ExperienceCountAggregateOutputType | null
    _avg: ExperienceAvgAggregateOutputType | null
    _sum: ExperienceSumAggregateOutputType | null
    _min: ExperienceMinAggregateOutputType | null
    _max: ExperienceMaxAggregateOutputType | null
  }

  type GetExperienceGroupByPayload<T extends ExperienceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExperienceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExperienceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExperienceGroupByOutputType[P]>
            : GetScalarType<T[P], ExperienceGroupByOutputType[P]>
        }
      >
    >


  export type ExperienceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    employmentType?: boolean
    company?: boolean
    startMonth?: boolean
    startYear?: boolean
    endMonth?: boolean
    endYear?: boolean
    isCurrent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["experience"]>



  export type ExperienceSelectScalar = {
    id?: boolean
    title?: boolean
    employmentType?: boolean
    company?: boolean
    startMonth?: boolean
    startYear?: boolean
    endMonth?: boolean
    endYear?: boolean
    isCurrent?: boolean
    userId?: boolean
  }

  export type ExperienceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "employmentType" | "company" | "startMonth" | "startYear" | "endMonth" | "endYear" | "isCurrent" | "userId", ExtArgs["result"]["experience"]>
  export type ExperienceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ExperiencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Experience"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      employmentType: $Enums.EmploymentType
      company: string
      startMonth: number
      startYear: number
      endMonth: number | null
      endYear: number | null
      isCurrent: boolean
      userId: string
    }, ExtArgs["result"]["experience"]>
    composites: {}
  }

  type ExperienceGetPayload<S extends boolean | null | undefined | ExperienceDefaultArgs> = $Result.GetResult<Prisma.$ExperiencePayload, S>

  type ExperienceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExperienceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExperienceCountAggregateInputType | true
    }

  export interface ExperienceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Experience'], meta: { name: 'Experience' } }
    /**
     * Find zero or one Experience that matches the filter.
     * @param {ExperienceFindUniqueArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExperienceFindUniqueArgs>(args: SelectSubset<T, ExperienceFindUniqueArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Experience that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExperienceFindUniqueOrThrowArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExperienceFindUniqueOrThrowArgs>(args: SelectSubset<T, ExperienceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Experience that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceFindFirstArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExperienceFindFirstArgs>(args?: SelectSubset<T, ExperienceFindFirstArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Experience that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceFindFirstOrThrowArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExperienceFindFirstOrThrowArgs>(args?: SelectSubset<T, ExperienceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Experiences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Experiences
     * const experiences = await prisma.experience.findMany()
     * 
     * // Get first 10 Experiences
     * const experiences = await prisma.experience.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const experienceWithIdOnly = await prisma.experience.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExperienceFindManyArgs>(args?: SelectSubset<T, ExperienceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Experience.
     * @param {ExperienceCreateArgs} args - Arguments to create a Experience.
     * @example
     * // Create one Experience
     * const Experience = await prisma.experience.create({
     *   data: {
     *     // ... data to create a Experience
     *   }
     * })
     * 
     */
    create<T extends ExperienceCreateArgs>(args: SelectSubset<T, ExperienceCreateArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Experiences.
     * @param {ExperienceCreateManyArgs} args - Arguments to create many Experiences.
     * @example
     * // Create many Experiences
     * const experience = await prisma.experience.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExperienceCreateManyArgs>(args?: SelectSubset<T, ExperienceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Experience.
     * @param {ExperienceDeleteArgs} args - Arguments to delete one Experience.
     * @example
     * // Delete one Experience
     * const Experience = await prisma.experience.delete({
     *   where: {
     *     // ... filter to delete one Experience
     *   }
     * })
     * 
     */
    delete<T extends ExperienceDeleteArgs>(args: SelectSubset<T, ExperienceDeleteArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Experience.
     * @param {ExperienceUpdateArgs} args - Arguments to update one Experience.
     * @example
     * // Update one Experience
     * const experience = await prisma.experience.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExperienceUpdateArgs>(args: SelectSubset<T, ExperienceUpdateArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Experiences.
     * @param {ExperienceDeleteManyArgs} args - Arguments to filter Experiences to delete.
     * @example
     * // Delete a few Experiences
     * const { count } = await prisma.experience.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExperienceDeleteManyArgs>(args?: SelectSubset<T, ExperienceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Experiences
     * const experience = await prisma.experience.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExperienceUpdateManyArgs>(args: SelectSubset<T, ExperienceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Experience.
     * @param {ExperienceUpsertArgs} args - Arguments to update or create a Experience.
     * @example
     * // Update or create a Experience
     * const experience = await prisma.experience.upsert({
     *   create: {
     *     // ... data to create a Experience
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Experience we want to update
     *   }
     * })
     */
    upsert<T extends ExperienceUpsertArgs>(args: SelectSubset<T, ExperienceUpsertArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Experiences that matches the filter.
     * @param {ExperienceFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const experience = await prisma.experience.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ExperienceFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Experience.
     * @param {ExperienceAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const experience = await prisma.experience.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ExperienceAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceCountArgs} args - Arguments to filter Experiences to count.
     * @example
     * // Count the number of Experiences
     * const count = await prisma.experience.count({
     *   where: {
     *     // ... the filter for the Experiences we want to count
     *   }
     * })
    **/
    count<T extends ExperienceCountArgs>(
      args?: Subset<T, ExperienceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExperienceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Experience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExperienceAggregateArgs>(args: Subset<T, ExperienceAggregateArgs>): Prisma.PrismaPromise<GetExperienceAggregateType<T>>

    /**
     * Group by Experience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExperienceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExperienceGroupByArgs['orderBy'] }
        : { orderBy?: ExperienceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExperienceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExperienceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Experience model
   */
  readonly fields: ExperienceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Experience.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExperienceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Experience model
   */
  interface ExperienceFieldRefs {
    readonly id: FieldRef<"Experience", 'String'>
    readonly title: FieldRef<"Experience", 'String'>
    readonly employmentType: FieldRef<"Experience", 'EmploymentType'>
    readonly company: FieldRef<"Experience", 'String'>
    readonly startMonth: FieldRef<"Experience", 'Int'>
    readonly startYear: FieldRef<"Experience", 'Int'>
    readonly endMonth: FieldRef<"Experience", 'Int'>
    readonly endYear: FieldRef<"Experience", 'Int'>
    readonly isCurrent: FieldRef<"Experience", 'Boolean'>
    readonly userId: FieldRef<"Experience", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Experience findUnique
   */
  export type ExperienceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience findUniqueOrThrow
   */
  export type ExperienceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience findFirst
   */
  export type ExperienceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Experiences.
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Experiences.
     */
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * Experience findFirstOrThrow
   */
  export type ExperienceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Experiences.
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Experiences.
     */
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * Experience findMany
   */
  export type ExperienceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experiences to fetch.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Experiences.
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * Experience create
   */
  export type ExperienceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * The data needed to create a Experience.
     */
    data: XOR<ExperienceCreateInput, ExperienceUncheckedCreateInput>
  }

  /**
   * Experience createMany
   */
  export type ExperienceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Experiences.
     */
    data: ExperienceCreateManyInput | ExperienceCreateManyInput[]
  }

  /**
   * Experience update
   */
  export type ExperienceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * The data needed to update a Experience.
     */
    data: XOR<ExperienceUpdateInput, ExperienceUncheckedUpdateInput>
    /**
     * Choose, which Experience to update.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience updateMany
   */
  export type ExperienceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Experiences.
     */
    data: XOR<ExperienceUpdateManyMutationInput, ExperienceUncheckedUpdateManyInput>
    /**
     * Filter which Experiences to update
     */
    where?: ExperienceWhereInput
    /**
     * Limit how many Experiences to update.
     */
    limit?: number
  }

  /**
   * Experience upsert
   */
  export type ExperienceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * The filter to search for the Experience to update in case it exists.
     */
    where: ExperienceWhereUniqueInput
    /**
     * In case the Experience found by the `where` argument doesn't exist, create a new Experience with this data.
     */
    create: XOR<ExperienceCreateInput, ExperienceUncheckedCreateInput>
    /**
     * In case the Experience was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExperienceUpdateInput, ExperienceUncheckedUpdateInput>
  }

  /**
   * Experience delete
   */
  export type ExperienceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter which Experience to delete.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience deleteMany
   */
  export type ExperienceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Experiences to delete
     */
    where?: ExperienceWhereInput
    /**
     * Limit how many Experiences to delete.
     */
    limit?: number
  }

  /**
   * Experience findRaw
   */
  export type ExperienceFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Experience aggregateRaw
   */
  export type ExperienceAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Experience without action
   */
  export type ExperienceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
  }


  /**
   * Model Education
   */

  export type AggregateEducation = {
    _count: EducationCountAggregateOutputType | null
    _avg: EducationAvgAggregateOutputType | null
    _sum: EducationSumAggregateOutputType | null
    _min: EducationMinAggregateOutputType | null
    _max: EducationMaxAggregateOutputType | null
  }

  export type EducationAvgAggregateOutputType = {
    startMonth: number | null
    startYear: number | null
    endMonth: number | null
    endYear: number | null
  }

  export type EducationSumAggregateOutputType = {
    startMonth: number | null
    startYear: number | null
    endMonth: number | null
    endYear: number | null
  }

  export type EducationMinAggregateOutputType = {
    id: string | null
    school: string | null
    degree: string | null
    fieldOfStudy: string | null
    startMonth: number | null
    startYear: number | null
    endMonth: number | null
    endYear: number | null
    userId: string | null
  }

  export type EducationMaxAggregateOutputType = {
    id: string | null
    school: string | null
    degree: string | null
    fieldOfStudy: string | null
    startMonth: number | null
    startYear: number | null
    endMonth: number | null
    endYear: number | null
    userId: string | null
  }

  export type EducationCountAggregateOutputType = {
    id: number
    school: number
    degree: number
    fieldOfStudy: number
    startMonth: number
    startYear: number
    endMonth: number
    endYear: number
    userId: number
    _all: number
  }


  export type EducationAvgAggregateInputType = {
    startMonth?: true
    startYear?: true
    endMonth?: true
    endYear?: true
  }

  export type EducationSumAggregateInputType = {
    startMonth?: true
    startYear?: true
    endMonth?: true
    endYear?: true
  }

  export type EducationMinAggregateInputType = {
    id?: true
    school?: true
    degree?: true
    fieldOfStudy?: true
    startMonth?: true
    startYear?: true
    endMonth?: true
    endYear?: true
    userId?: true
  }

  export type EducationMaxAggregateInputType = {
    id?: true
    school?: true
    degree?: true
    fieldOfStudy?: true
    startMonth?: true
    startYear?: true
    endMonth?: true
    endYear?: true
    userId?: true
  }

  export type EducationCountAggregateInputType = {
    id?: true
    school?: true
    degree?: true
    fieldOfStudy?: true
    startMonth?: true
    startYear?: true
    endMonth?: true
    endYear?: true
    userId?: true
    _all?: true
  }

  export type EducationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Education to aggregate.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Educations
    **/
    _count?: true | EducationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EducationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EducationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EducationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EducationMaxAggregateInputType
  }

  export type GetEducationAggregateType<T extends EducationAggregateArgs> = {
        [P in keyof T & keyof AggregateEducation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEducation[P]>
      : GetScalarType<T[P], AggregateEducation[P]>
  }




  export type EducationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EducationWhereInput
    orderBy?: EducationOrderByWithAggregationInput | EducationOrderByWithAggregationInput[]
    by: EducationScalarFieldEnum[] | EducationScalarFieldEnum
    having?: EducationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EducationCountAggregateInputType | true
    _avg?: EducationAvgAggregateInputType
    _sum?: EducationSumAggregateInputType
    _min?: EducationMinAggregateInputType
    _max?: EducationMaxAggregateInputType
  }

  export type EducationGroupByOutputType = {
    id: string
    school: string
    degree: string
    fieldOfStudy: string
    startMonth: number
    startYear: number
    endMonth: number
    endYear: number
    userId: string
    _count: EducationCountAggregateOutputType | null
    _avg: EducationAvgAggregateOutputType | null
    _sum: EducationSumAggregateOutputType | null
    _min: EducationMinAggregateOutputType | null
    _max: EducationMaxAggregateOutputType | null
  }

  type GetEducationGroupByPayload<T extends EducationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EducationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EducationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EducationGroupByOutputType[P]>
            : GetScalarType<T[P], EducationGroupByOutputType[P]>
        }
      >
    >


  export type EducationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    school?: boolean
    degree?: boolean
    fieldOfStudy?: boolean
    startMonth?: boolean
    startYear?: boolean
    endMonth?: boolean
    endYear?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["education"]>



  export type EducationSelectScalar = {
    id?: boolean
    school?: boolean
    degree?: boolean
    fieldOfStudy?: boolean
    startMonth?: boolean
    startYear?: boolean
    endMonth?: boolean
    endYear?: boolean
    userId?: boolean
  }

  export type EducationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "school" | "degree" | "fieldOfStudy" | "startMonth" | "startYear" | "endMonth" | "endYear" | "userId", ExtArgs["result"]["education"]>
  export type EducationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EducationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Education"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      school: string
      degree: string
      fieldOfStudy: string
      startMonth: number
      startYear: number
      endMonth: number
      endYear: number
      userId: string
    }, ExtArgs["result"]["education"]>
    composites: {}
  }

  type EducationGetPayload<S extends boolean | null | undefined | EducationDefaultArgs> = $Result.GetResult<Prisma.$EducationPayload, S>

  type EducationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EducationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EducationCountAggregateInputType | true
    }

  export interface EducationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Education'], meta: { name: 'Education' } }
    /**
     * Find zero or one Education that matches the filter.
     * @param {EducationFindUniqueArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EducationFindUniqueArgs>(args: SelectSubset<T, EducationFindUniqueArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Education that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EducationFindUniqueOrThrowArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EducationFindUniqueOrThrowArgs>(args: SelectSubset<T, EducationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Education that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindFirstArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EducationFindFirstArgs>(args?: SelectSubset<T, EducationFindFirstArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Education that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindFirstOrThrowArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EducationFindFirstOrThrowArgs>(args?: SelectSubset<T, EducationFindFirstOrThrowArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Educations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Educations
     * const educations = await prisma.education.findMany()
     * 
     * // Get first 10 Educations
     * const educations = await prisma.education.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const educationWithIdOnly = await prisma.education.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EducationFindManyArgs>(args?: SelectSubset<T, EducationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Education.
     * @param {EducationCreateArgs} args - Arguments to create a Education.
     * @example
     * // Create one Education
     * const Education = await prisma.education.create({
     *   data: {
     *     // ... data to create a Education
     *   }
     * })
     * 
     */
    create<T extends EducationCreateArgs>(args: SelectSubset<T, EducationCreateArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Educations.
     * @param {EducationCreateManyArgs} args - Arguments to create many Educations.
     * @example
     * // Create many Educations
     * const education = await prisma.education.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EducationCreateManyArgs>(args?: SelectSubset<T, EducationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Education.
     * @param {EducationDeleteArgs} args - Arguments to delete one Education.
     * @example
     * // Delete one Education
     * const Education = await prisma.education.delete({
     *   where: {
     *     // ... filter to delete one Education
     *   }
     * })
     * 
     */
    delete<T extends EducationDeleteArgs>(args: SelectSubset<T, EducationDeleteArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Education.
     * @param {EducationUpdateArgs} args - Arguments to update one Education.
     * @example
     * // Update one Education
     * const education = await prisma.education.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EducationUpdateArgs>(args: SelectSubset<T, EducationUpdateArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Educations.
     * @param {EducationDeleteManyArgs} args - Arguments to filter Educations to delete.
     * @example
     * // Delete a few Educations
     * const { count } = await prisma.education.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EducationDeleteManyArgs>(args?: SelectSubset<T, EducationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Educations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Educations
     * const education = await prisma.education.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EducationUpdateManyArgs>(args: SelectSubset<T, EducationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Education.
     * @param {EducationUpsertArgs} args - Arguments to update or create a Education.
     * @example
     * // Update or create a Education
     * const education = await prisma.education.upsert({
     *   create: {
     *     // ... data to create a Education
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Education we want to update
     *   }
     * })
     */
    upsert<T extends EducationUpsertArgs>(args: SelectSubset<T, EducationUpsertArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Educations that matches the filter.
     * @param {EducationFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const education = await prisma.education.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: EducationFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Education.
     * @param {EducationAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const education = await prisma.education.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: EducationAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Educations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationCountArgs} args - Arguments to filter Educations to count.
     * @example
     * // Count the number of Educations
     * const count = await prisma.education.count({
     *   where: {
     *     // ... the filter for the Educations we want to count
     *   }
     * })
    **/
    count<T extends EducationCountArgs>(
      args?: Subset<T, EducationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EducationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Education.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EducationAggregateArgs>(args: Subset<T, EducationAggregateArgs>): Prisma.PrismaPromise<GetEducationAggregateType<T>>

    /**
     * Group by Education.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EducationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EducationGroupByArgs['orderBy'] }
        : { orderBy?: EducationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EducationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEducationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Education model
   */
  readonly fields: EducationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Education.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EducationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Education model
   */
  interface EducationFieldRefs {
    readonly id: FieldRef<"Education", 'String'>
    readonly school: FieldRef<"Education", 'String'>
    readonly degree: FieldRef<"Education", 'String'>
    readonly fieldOfStudy: FieldRef<"Education", 'String'>
    readonly startMonth: FieldRef<"Education", 'Int'>
    readonly startYear: FieldRef<"Education", 'Int'>
    readonly endMonth: FieldRef<"Education", 'Int'>
    readonly endYear: FieldRef<"Education", 'Int'>
    readonly userId: FieldRef<"Education", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Education findUnique
   */
  export type EducationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education findUniqueOrThrow
   */
  export type EducationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education findFirst
   */
  export type EducationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Educations.
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Educations.
     */
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * Education findFirstOrThrow
   */
  export type EducationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Educations.
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Educations.
     */
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * Education findMany
   */
  export type EducationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Educations to fetch.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Educations.
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * Education create
   */
  export type EducationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * The data needed to create a Education.
     */
    data: XOR<EducationCreateInput, EducationUncheckedCreateInput>
  }

  /**
   * Education createMany
   */
  export type EducationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Educations.
     */
    data: EducationCreateManyInput | EducationCreateManyInput[]
  }

  /**
   * Education update
   */
  export type EducationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * The data needed to update a Education.
     */
    data: XOR<EducationUpdateInput, EducationUncheckedUpdateInput>
    /**
     * Choose, which Education to update.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education updateMany
   */
  export type EducationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Educations.
     */
    data: XOR<EducationUpdateManyMutationInput, EducationUncheckedUpdateManyInput>
    /**
     * Filter which Educations to update
     */
    where?: EducationWhereInput
    /**
     * Limit how many Educations to update.
     */
    limit?: number
  }

  /**
   * Education upsert
   */
  export type EducationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * The filter to search for the Education to update in case it exists.
     */
    where: EducationWhereUniqueInput
    /**
     * In case the Education found by the `where` argument doesn't exist, create a new Education with this data.
     */
    create: XOR<EducationCreateInput, EducationUncheckedCreateInput>
    /**
     * In case the Education was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EducationUpdateInput, EducationUncheckedUpdateInput>
  }

  /**
   * Education delete
   */
  export type EducationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter which Education to delete.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education deleteMany
   */
  export type EducationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Educations to delete
     */
    where?: EducationWhereInput
    /**
     * Limit how many Educations to delete.
     */
    limit?: number
  }

  /**
   * Education findRaw
   */
  export type EducationFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Education aggregateRaw
   */
  export type EducationAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Education without action
   */
  export type EducationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    commentCount: number | null
    likeCount: number | null
    shareCount: number | null
    savedCount: number | null
  }

  export type PostSumAggregateOutputType = {
    commentCount: number | null
    likeCount: number | null
    shareCount: number | null
    savedCount: number | null
  }

  export type PostMinAggregateOutputType = {
    id: string | null
    userId: string | null
    username: string | null
    profilePic: string | null
    postType: string | null
    visibility: string | null
    title: string | null
    content: string | null
    hasLinks: boolean | null
    commentsDisabled: boolean | null
    commentCount: number | null
    likeCount: number | null
    shareCount: number | null
    savedCount: number | null
    pollEndsAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    username: string | null
    profilePic: string | null
    postType: string | null
    visibility: string | null
    title: string | null
    content: string | null
    hasLinks: boolean | null
    commentsDisabled: boolean | null
    commentCount: number | null
    likeCount: number | null
    shareCount: number | null
    savedCount: number | null
    pollEndsAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    userId: number
    username: number
    profilePic: number
    postType: number
    visibility: number
    title: number
    content: number
    media: number
    mediaTypes: number
    hasLinks: number
    links: number
    commentsDisabled: number
    commentCount: number
    likeCount: number
    shareCount: number
    savedCount: number
    pollOptions: number
    pollEndsAt: number
    pollVotes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    commentCount?: true
    likeCount?: true
    shareCount?: true
    savedCount?: true
  }

  export type PostSumAggregateInputType = {
    commentCount?: true
    likeCount?: true
    shareCount?: true
    savedCount?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    userId?: true
    username?: true
    profilePic?: true
    postType?: true
    visibility?: true
    title?: true
    content?: true
    hasLinks?: true
    commentsDisabled?: true
    commentCount?: true
    likeCount?: true
    shareCount?: true
    savedCount?: true
    pollEndsAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    userId?: true
    username?: true
    profilePic?: true
    postType?: true
    visibility?: true
    title?: true
    content?: true
    hasLinks?: true
    commentsDisabled?: true
    commentCount?: true
    likeCount?: true
    shareCount?: true
    savedCount?: true
    pollEndsAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    userId?: true
    username?: true
    profilePic?: true
    postType?: true
    visibility?: true
    title?: true
    content?: true
    media?: true
    mediaTypes?: true
    hasLinks?: true
    links?: true
    commentsDisabled?: true
    commentCount?: true
    likeCount?: true
    shareCount?: true
    savedCount?: true
    pollOptions?: true
    pollEndsAt?: true
    pollVotes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: string
    userId: string
    username: string
    profilePic: string | null
    postType: string
    visibility: string | null
    title: string | null
    content: string
    media: JsonValue | null
    mediaTypes: string[]
    hasLinks: boolean
    links: JsonValue | null
    commentsDisabled: boolean
    commentCount: number
    likeCount: number
    shareCount: number
    savedCount: number
    pollOptions: string[]
    pollEndsAt: Date | null
    pollVotes: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    username?: boolean
    profilePic?: boolean
    postType?: boolean
    visibility?: boolean
    title?: boolean
    content?: boolean
    media?: boolean
    mediaTypes?: boolean
    hasLinks?: boolean
    links?: boolean
    commentsDisabled?: boolean
    commentCount?: boolean
    likeCount?: boolean
    shareCount?: boolean
    savedCount?: boolean
    pollOptions?: boolean
    pollEndsAt?: boolean
    pollVotes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    jobPost?: boolean | Post$jobPostArgs<ExtArgs>
    comments?: boolean | Post$commentsArgs<ExtArgs>
    interactions?: boolean | Post$interactionsArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>



  export type PostSelectScalar = {
    id?: boolean
    userId?: boolean
    username?: boolean
    profilePic?: boolean
    postType?: boolean
    visibility?: boolean
    title?: boolean
    content?: boolean
    media?: boolean
    mediaTypes?: boolean
    hasLinks?: boolean
    links?: boolean
    commentsDisabled?: boolean
    commentCount?: boolean
    likeCount?: boolean
    shareCount?: boolean
    savedCount?: boolean
    pollOptions?: boolean
    pollEndsAt?: boolean
    pollVotes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "username" | "profilePic" | "postType" | "visibility" | "title" | "content" | "media" | "mediaTypes" | "hasLinks" | "links" | "commentsDisabled" | "commentCount" | "likeCount" | "shareCount" | "savedCount" | "pollOptions" | "pollEndsAt" | "pollVotes" | "createdAt" | "updatedAt", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    jobPost?: boolean | Post$jobPostArgs<ExtArgs>
    comments?: boolean | Post$commentsArgs<ExtArgs>
    interactions?: boolean | Post$interactionsArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      jobPost: Prisma.$JobPostPayload<ExtArgs> | null
      comments: Prisma.$CommentPayload<ExtArgs>[]
      interactions: Prisma.$PostInteractionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      username: string
      profilePic: string | null
      postType: string
      visibility: string | null
      title: string | null
      content: string
      media: Prisma.JsonValue | null
      mediaTypes: string[]
      hasLinks: boolean
      links: Prisma.JsonValue | null
      commentsDisabled: boolean
      commentCount: number
      likeCount: number
      shareCount: number
      savedCount: number
      pollOptions: string[]
      pollEndsAt: Date | null
      pollVotes: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * @param {PostFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const post = await prisma.post.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: PostFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Post.
     * @param {PostAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const post = await prisma.post.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: PostAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    jobPost<T extends Post$jobPostArgs<ExtArgs> = {}>(args?: Subset<T, Post$jobPostArgs<ExtArgs>>): Prisma__JobPostClient<$Result.GetResult<Prisma.$JobPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    comments<T extends Post$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Post$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    interactions<T extends Post$interactionsArgs<ExtArgs> = {}>(args?: Subset<T, Post$interactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostInteractionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'String'>
    readonly userId: FieldRef<"Post", 'String'>
    readonly username: FieldRef<"Post", 'String'>
    readonly profilePic: FieldRef<"Post", 'String'>
    readonly postType: FieldRef<"Post", 'String'>
    readonly visibility: FieldRef<"Post", 'String'>
    readonly title: FieldRef<"Post", 'String'>
    readonly content: FieldRef<"Post", 'String'>
    readonly media: FieldRef<"Post", 'Json'>
    readonly mediaTypes: FieldRef<"Post", 'String[]'>
    readonly hasLinks: FieldRef<"Post", 'Boolean'>
    readonly links: FieldRef<"Post", 'Json'>
    readonly commentsDisabled: FieldRef<"Post", 'Boolean'>
    readonly commentCount: FieldRef<"Post", 'Int'>
    readonly likeCount: FieldRef<"Post", 'Int'>
    readonly shareCount: FieldRef<"Post", 'Int'>
    readonly savedCount: FieldRef<"Post", 'Int'>
    readonly pollOptions: FieldRef<"Post", 'String[]'>
    readonly pollEndsAt: FieldRef<"Post", 'DateTime'>
    readonly pollVotes: FieldRef<"Post", 'Json'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post findRaw
   */
  export type PostFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Post aggregateRaw
   */
  export type PostAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Post.jobPost
   */
  export type Post$jobPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPost
     */
    select?: JobPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPost
     */
    omit?: JobPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostInclude<ExtArgs> | null
    where?: JobPostWhereInput
  }

  /**
   * Post.comments
   */
  export type Post$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Post.interactions
   */
  export type Post$interactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostInteraction
     */
    select?: PostInteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostInteraction
     */
    omit?: PostInteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInteractionInclude<ExtArgs> | null
    where?: PostInteractionWhereInput
    orderBy?: PostInteractionOrderByWithRelationInput | PostInteractionOrderByWithRelationInput[]
    cursor?: PostInteractionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostInteractionScalarFieldEnum | PostInteractionScalarFieldEnum[]
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentAvgAggregateOutputType = {
    likeCount: number | null
    depth: number | null
  }

  export type CommentSumAggregateOutputType = {
    likeCount: number | null
    depth: number | null
  }

  export type CommentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    username: string | null
    profilePic: string | null
    content: string | null
    likeCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    postId: string | null
    parentId: string | null
    depth: number | null
  }

  export type CommentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    username: string | null
    profilePic: string | null
    content: string | null
    likeCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    postId: string | null
    parentId: string | null
    depth: number | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    userId: number
    username: number
    profilePic: number
    content: number
    media: number
    likeCount: number
    createdAt: number
    updatedAt: number
    postId: number
    parentId: number
    depth: number
    _all: number
  }


  export type CommentAvgAggregateInputType = {
    likeCount?: true
    depth?: true
  }

  export type CommentSumAggregateInputType = {
    likeCount?: true
    depth?: true
  }

  export type CommentMinAggregateInputType = {
    id?: true
    userId?: true
    username?: true
    profilePic?: true
    content?: true
    likeCount?: true
    createdAt?: true
    updatedAt?: true
    postId?: true
    parentId?: true
    depth?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    userId?: true
    username?: true
    profilePic?: true
    content?: true
    likeCount?: true
    createdAt?: true
    updatedAt?: true
    postId?: true
    parentId?: true
    depth?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    userId?: true
    username?: true
    profilePic?: true
    content?: true
    media?: true
    likeCount?: true
    createdAt?: true
    updatedAt?: true
    postId?: true
    parentId?: true
    depth?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _avg?: CommentAvgAggregateInputType
    _sum?: CommentSumAggregateInputType
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: string
    userId: string
    username: string
    profilePic: string
    content: string
    media: JsonValue | null
    likeCount: number
    createdAt: Date
    updatedAt: Date
    postId: string
    parentId: string | null
    depth: number
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    username?: boolean
    profilePic?: boolean
    content?: boolean
    media?: boolean
    likeCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    postId?: boolean
    parentId?: boolean
    depth?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    parent?: boolean | Comment$parentArgs<ExtArgs>
    replies?: boolean | Comment$repliesArgs<ExtArgs>
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>



  export type CommentSelectScalar = {
    id?: boolean
    userId?: boolean
    username?: boolean
    profilePic?: boolean
    content?: boolean
    media?: boolean
    likeCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    postId?: boolean
    parentId?: boolean
    depth?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "username" | "profilePic" | "content" | "media" | "likeCount" | "createdAt" | "updatedAt" | "postId" | "parentId" | "depth", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    parent?: boolean | Comment$parentArgs<ExtArgs>
    replies?: boolean | Comment$repliesArgs<ExtArgs>
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
      parent: Prisma.$CommentPayload<ExtArgs> | null
      replies: Prisma.$CommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      username: string
      profilePic: string
      content: string
      media: Prisma.JsonValue | null
      likeCount: number
      createdAt: Date
      updatedAt: Date
      postId: string
      parentId: string | null
      depth: number
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * @param {CommentFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const comment = await prisma.comment.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: CommentFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Comment.
     * @param {CommentAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const comment = await prisma.comment.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: CommentAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parent<T extends Comment$parentArgs<ExtArgs> = {}>(args?: Subset<T, Comment$parentArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    replies<T extends Comment$repliesArgs<ExtArgs> = {}>(args?: Subset<T, Comment$repliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'String'>
    readonly userId: FieldRef<"Comment", 'String'>
    readonly username: FieldRef<"Comment", 'String'>
    readonly profilePic: FieldRef<"Comment", 'String'>
    readonly content: FieldRef<"Comment", 'String'>
    readonly media: FieldRef<"Comment", 'Json'>
    readonly likeCount: FieldRef<"Comment", 'Int'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
    readonly updatedAt: FieldRef<"Comment", 'DateTime'>
    readonly postId: FieldRef<"Comment", 'String'>
    readonly parentId: FieldRef<"Comment", 'String'>
    readonly depth: FieldRef<"Comment", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment findRaw
   */
  export type CommentFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Comment aggregateRaw
   */
  export type CommentAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Comment.parent
   */
  export type Comment$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
  }

  /**
   * Comment.replies
   */
  export type Comment$repliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model ConnectionRequest
   */

  export type AggregateConnectionRequest = {
    _count: ConnectionRequestCountAggregateOutputType | null
    _min: ConnectionRequestMinAggregateOutputType | null
    _max: ConnectionRequestMaxAggregateOutputType | null
  }

  export type ConnectionRequestMinAggregateOutputType = {
    id: string | null
    fromUserId: string | null
    toUserId: string | null
    status: $Enums.RequestStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConnectionRequestMaxAggregateOutputType = {
    id: string | null
    fromUserId: string | null
    toUserId: string | null
    status: $Enums.RequestStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConnectionRequestCountAggregateOutputType = {
    id: number
    fromUserId: number
    toUserId: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ConnectionRequestMinAggregateInputType = {
    id?: true
    fromUserId?: true
    toUserId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConnectionRequestMaxAggregateInputType = {
    id?: true
    fromUserId?: true
    toUserId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConnectionRequestCountAggregateInputType = {
    id?: true
    fromUserId?: true
    toUserId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ConnectionRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConnectionRequest to aggregate.
     */
    where?: ConnectionRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConnectionRequests to fetch.
     */
    orderBy?: ConnectionRequestOrderByWithRelationInput | ConnectionRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConnectionRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConnectionRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConnectionRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ConnectionRequests
    **/
    _count?: true | ConnectionRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConnectionRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConnectionRequestMaxAggregateInputType
  }

  export type GetConnectionRequestAggregateType<T extends ConnectionRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateConnectionRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConnectionRequest[P]>
      : GetScalarType<T[P], AggregateConnectionRequest[P]>
  }




  export type ConnectionRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConnectionRequestWhereInput
    orderBy?: ConnectionRequestOrderByWithAggregationInput | ConnectionRequestOrderByWithAggregationInput[]
    by: ConnectionRequestScalarFieldEnum[] | ConnectionRequestScalarFieldEnum
    having?: ConnectionRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConnectionRequestCountAggregateInputType | true
    _min?: ConnectionRequestMinAggregateInputType
    _max?: ConnectionRequestMaxAggregateInputType
  }

  export type ConnectionRequestGroupByOutputType = {
    id: string
    fromUserId: string
    toUserId: string
    status: $Enums.RequestStatus
    createdAt: Date
    updatedAt: Date
    _count: ConnectionRequestCountAggregateOutputType | null
    _min: ConnectionRequestMinAggregateOutputType | null
    _max: ConnectionRequestMaxAggregateOutputType | null
  }

  type GetConnectionRequestGroupByPayload<T extends ConnectionRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConnectionRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConnectionRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConnectionRequestGroupByOutputType[P]>
            : GetScalarType<T[P], ConnectionRequestGroupByOutputType[P]>
        }
      >
    >


  export type ConnectionRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fromUserId?: boolean
    toUserId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fromUser?: boolean | UserDefaultArgs<ExtArgs>
    toUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["connectionRequest"]>



  export type ConnectionRequestSelectScalar = {
    id?: boolean
    fromUserId?: boolean
    toUserId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ConnectionRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fromUserId" | "toUserId" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["connectionRequest"]>
  export type ConnectionRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fromUser?: boolean | UserDefaultArgs<ExtArgs>
    toUser?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ConnectionRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ConnectionRequest"
    objects: {
      fromUser: Prisma.$UserPayload<ExtArgs>
      toUser: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fromUserId: string
      toUserId: string
      status: $Enums.RequestStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["connectionRequest"]>
    composites: {}
  }

  type ConnectionRequestGetPayload<S extends boolean | null | undefined | ConnectionRequestDefaultArgs> = $Result.GetResult<Prisma.$ConnectionRequestPayload, S>

  type ConnectionRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConnectionRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConnectionRequestCountAggregateInputType | true
    }

  export interface ConnectionRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ConnectionRequest'], meta: { name: 'ConnectionRequest' } }
    /**
     * Find zero or one ConnectionRequest that matches the filter.
     * @param {ConnectionRequestFindUniqueArgs} args - Arguments to find a ConnectionRequest
     * @example
     * // Get one ConnectionRequest
     * const connectionRequest = await prisma.connectionRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConnectionRequestFindUniqueArgs>(args: SelectSubset<T, ConnectionRequestFindUniqueArgs<ExtArgs>>): Prisma__ConnectionRequestClient<$Result.GetResult<Prisma.$ConnectionRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ConnectionRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConnectionRequestFindUniqueOrThrowArgs} args - Arguments to find a ConnectionRequest
     * @example
     * // Get one ConnectionRequest
     * const connectionRequest = await prisma.connectionRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConnectionRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, ConnectionRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConnectionRequestClient<$Result.GetResult<Prisma.$ConnectionRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConnectionRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionRequestFindFirstArgs} args - Arguments to find a ConnectionRequest
     * @example
     * // Get one ConnectionRequest
     * const connectionRequest = await prisma.connectionRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConnectionRequestFindFirstArgs>(args?: SelectSubset<T, ConnectionRequestFindFirstArgs<ExtArgs>>): Prisma__ConnectionRequestClient<$Result.GetResult<Prisma.$ConnectionRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConnectionRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionRequestFindFirstOrThrowArgs} args - Arguments to find a ConnectionRequest
     * @example
     * // Get one ConnectionRequest
     * const connectionRequest = await prisma.connectionRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConnectionRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, ConnectionRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConnectionRequestClient<$Result.GetResult<Prisma.$ConnectionRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ConnectionRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConnectionRequests
     * const connectionRequests = await prisma.connectionRequest.findMany()
     * 
     * // Get first 10 ConnectionRequests
     * const connectionRequests = await prisma.connectionRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const connectionRequestWithIdOnly = await prisma.connectionRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConnectionRequestFindManyArgs>(args?: SelectSubset<T, ConnectionRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectionRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ConnectionRequest.
     * @param {ConnectionRequestCreateArgs} args - Arguments to create a ConnectionRequest.
     * @example
     * // Create one ConnectionRequest
     * const ConnectionRequest = await prisma.connectionRequest.create({
     *   data: {
     *     // ... data to create a ConnectionRequest
     *   }
     * })
     * 
     */
    create<T extends ConnectionRequestCreateArgs>(args: SelectSubset<T, ConnectionRequestCreateArgs<ExtArgs>>): Prisma__ConnectionRequestClient<$Result.GetResult<Prisma.$ConnectionRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ConnectionRequests.
     * @param {ConnectionRequestCreateManyArgs} args - Arguments to create many ConnectionRequests.
     * @example
     * // Create many ConnectionRequests
     * const connectionRequest = await prisma.connectionRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConnectionRequestCreateManyArgs>(args?: SelectSubset<T, ConnectionRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ConnectionRequest.
     * @param {ConnectionRequestDeleteArgs} args - Arguments to delete one ConnectionRequest.
     * @example
     * // Delete one ConnectionRequest
     * const ConnectionRequest = await prisma.connectionRequest.delete({
     *   where: {
     *     // ... filter to delete one ConnectionRequest
     *   }
     * })
     * 
     */
    delete<T extends ConnectionRequestDeleteArgs>(args: SelectSubset<T, ConnectionRequestDeleteArgs<ExtArgs>>): Prisma__ConnectionRequestClient<$Result.GetResult<Prisma.$ConnectionRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ConnectionRequest.
     * @param {ConnectionRequestUpdateArgs} args - Arguments to update one ConnectionRequest.
     * @example
     * // Update one ConnectionRequest
     * const connectionRequest = await prisma.connectionRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConnectionRequestUpdateArgs>(args: SelectSubset<T, ConnectionRequestUpdateArgs<ExtArgs>>): Prisma__ConnectionRequestClient<$Result.GetResult<Prisma.$ConnectionRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ConnectionRequests.
     * @param {ConnectionRequestDeleteManyArgs} args - Arguments to filter ConnectionRequests to delete.
     * @example
     * // Delete a few ConnectionRequests
     * const { count } = await prisma.connectionRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConnectionRequestDeleteManyArgs>(args?: SelectSubset<T, ConnectionRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConnectionRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConnectionRequests
     * const connectionRequest = await prisma.connectionRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConnectionRequestUpdateManyArgs>(args: SelectSubset<T, ConnectionRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ConnectionRequest.
     * @param {ConnectionRequestUpsertArgs} args - Arguments to update or create a ConnectionRequest.
     * @example
     * // Update or create a ConnectionRequest
     * const connectionRequest = await prisma.connectionRequest.upsert({
     *   create: {
     *     // ... data to create a ConnectionRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConnectionRequest we want to update
     *   }
     * })
     */
    upsert<T extends ConnectionRequestUpsertArgs>(args: SelectSubset<T, ConnectionRequestUpsertArgs<ExtArgs>>): Prisma__ConnectionRequestClient<$Result.GetResult<Prisma.$ConnectionRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ConnectionRequests that matches the filter.
     * @param {ConnectionRequestFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const connectionRequest = await prisma.connectionRequest.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ConnectionRequestFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ConnectionRequest.
     * @param {ConnectionRequestAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const connectionRequest = await prisma.connectionRequest.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ConnectionRequestAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of ConnectionRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionRequestCountArgs} args - Arguments to filter ConnectionRequests to count.
     * @example
     * // Count the number of ConnectionRequests
     * const count = await prisma.connectionRequest.count({
     *   where: {
     *     // ... the filter for the ConnectionRequests we want to count
     *   }
     * })
    **/
    count<T extends ConnectionRequestCountArgs>(
      args?: Subset<T, ConnectionRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConnectionRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ConnectionRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConnectionRequestAggregateArgs>(args: Subset<T, ConnectionRequestAggregateArgs>): Prisma.PrismaPromise<GetConnectionRequestAggregateType<T>>

    /**
     * Group by ConnectionRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConnectionRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConnectionRequestGroupByArgs['orderBy'] }
        : { orderBy?: ConnectionRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConnectionRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConnectionRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ConnectionRequest model
   */
  readonly fields: ConnectionRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ConnectionRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConnectionRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fromUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    toUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ConnectionRequest model
   */
  interface ConnectionRequestFieldRefs {
    readonly id: FieldRef<"ConnectionRequest", 'String'>
    readonly fromUserId: FieldRef<"ConnectionRequest", 'String'>
    readonly toUserId: FieldRef<"ConnectionRequest", 'String'>
    readonly status: FieldRef<"ConnectionRequest", 'RequestStatus'>
    readonly createdAt: FieldRef<"ConnectionRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"ConnectionRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ConnectionRequest findUnique
   */
  export type ConnectionRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectionRequest
     */
    select?: ConnectionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectionRequest
     */
    omit?: ConnectionRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionRequestInclude<ExtArgs> | null
    /**
     * Filter, which ConnectionRequest to fetch.
     */
    where: ConnectionRequestWhereUniqueInput
  }

  /**
   * ConnectionRequest findUniqueOrThrow
   */
  export type ConnectionRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectionRequest
     */
    select?: ConnectionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectionRequest
     */
    omit?: ConnectionRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionRequestInclude<ExtArgs> | null
    /**
     * Filter, which ConnectionRequest to fetch.
     */
    where: ConnectionRequestWhereUniqueInput
  }

  /**
   * ConnectionRequest findFirst
   */
  export type ConnectionRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectionRequest
     */
    select?: ConnectionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectionRequest
     */
    omit?: ConnectionRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionRequestInclude<ExtArgs> | null
    /**
     * Filter, which ConnectionRequest to fetch.
     */
    where?: ConnectionRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConnectionRequests to fetch.
     */
    orderBy?: ConnectionRequestOrderByWithRelationInput | ConnectionRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConnectionRequests.
     */
    cursor?: ConnectionRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConnectionRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConnectionRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConnectionRequests.
     */
    distinct?: ConnectionRequestScalarFieldEnum | ConnectionRequestScalarFieldEnum[]
  }

  /**
   * ConnectionRequest findFirstOrThrow
   */
  export type ConnectionRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectionRequest
     */
    select?: ConnectionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectionRequest
     */
    omit?: ConnectionRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionRequestInclude<ExtArgs> | null
    /**
     * Filter, which ConnectionRequest to fetch.
     */
    where?: ConnectionRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConnectionRequests to fetch.
     */
    orderBy?: ConnectionRequestOrderByWithRelationInput | ConnectionRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConnectionRequests.
     */
    cursor?: ConnectionRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConnectionRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConnectionRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConnectionRequests.
     */
    distinct?: ConnectionRequestScalarFieldEnum | ConnectionRequestScalarFieldEnum[]
  }

  /**
   * ConnectionRequest findMany
   */
  export type ConnectionRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectionRequest
     */
    select?: ConnectionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectionRequest
     */
    omit?: ConnectionRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionRequestInclude<ExtArgs> | null
    /**
     * Filter, which ConnectionRequests to fetch.
     */
    where?: ConnectionRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConnectionRequests to fetch.
     */
    orderBy?: ConnectionRequestOrderByWithRelationInput | ConnectionRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ConnectionRequests.
     */
    cursor?: ConnectionRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConnectionRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConnectionRequests.
     */
    skip?: number
    distinct?: ConnectionRequestScalarFieldEnum | ConnectionRequestScalarFieldEnum[]
  }

  /**
   * ConnectionRequest create
   */
  export type ConnectionRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectionRequest
     */
    select?: ConnectionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectionRequest
     */
    omit?: ConnectionRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a ConnectionRequest.
     */
    data: XOR<ConnectionRequestCreateInput, ConnectionRequestUncheckedCreateInput>
  }

  /**
   * ConnectionRequest createMany
   */
  export type ConnectionRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ConnectionRequests.
     */
    data: ConnectionRequestCreateManyInput | ConnectionRequestCreateManyInput[]
  }

  /**
   * ConnectionRequest update
   */
  export type ConnectionRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectionRequest
     */
    select?: ConnectionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectionRequest
     */
    omit?: ConnectionRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a ConnectionRequest.
     */
    data: XOR<ConnectionRequestUpdateInput, ConnectionRequestUncheckedUpdateInput>
    /**
     * Choose, which ConnectionRequest to update.
     */
    where: ConnectionRequestWhereUniqueInput
  }

  /**
   * ConnectionRequest updateMany
   */
  export type ConnectionRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ConnectionRequests.
     */
    data: XOR<ConnectionRequestUpdateManyMutationInput, ConnectionRequestUncheckedUpdateManyInput>
    /**
     * Filter which ConnectionRequests to update
     */
    where?: ConnectionRequestWhereInput
    /**
     * Limit how many ConnectionRequests to update.
     */
    limit?: number
  }

  /**
   * ConnectionRequest upsert
   */
  export type ConnectionRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectionRequest
     */
    select?: ConnectionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectionRequest
     */
    omit?: ConnectionRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the ConnectionRequest to update in case it exists.
     */
    where: ConnectionRequestWhereUniqueInput
    /**
     * In case the ConnectionRequest found by the `where` argument doesn't exist, create a new ConnectionRequest with this data.
     */
    create: XOR<ConnectionRequestCreateInput, ConnectionRequestUncheckedCreateInput>
    /**
     * In case the ConnectionRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConnectionRequestUpdateInput, ConnectionRequestUncheckedUpdateInput>
  }

  /**
   * ConnectionRequest delete
   */
  export type ConnectionRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectionRequest
     */
    select?: ConnectionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectionRequest
     */
    omit?: ConnectionRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionRequestInclude<ExtArgs> | null
    /**
     * Filter which ConnectionRequest to delete.
     */
    where: ConnectionRequestWhereUniqueInput
  }

  /**
   * ConnectionRequest deleteMany
   */
  export type ConnectionRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConnectionRequests to delete
     */
    where?: ConnectionRequestWhereInput
    /**
     * Limit how many ConnectionRequests to delete.
     */
    limit?: number
  }

  /**
   * ConnectionRequest findRaw
   */
  export type ConnectionRequestFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ConnectionRequest aggregateRaw
   */
  export type ConnectionRequestAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ConnectionRequest without action
   */
  export type ConnectionRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConnectionRequest
     */
    select?: ConnectionRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConnectionRequest
     */
    omit?: ConnectionRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionRequestInclude<ExtArgs> | null
  }


  /**
   * Model Connection
   */

  export type AggregateConnection = {
    _count: ConnectionCountAggregateOutputType | null
    _min: ConnectionMinAggregateOutputType | null
    _max: ConnectionMaxAggregateOutputType | null
  }

  export type ConnectionMinAggregateOutputType = {
    id: string | null
    userAId: string | null
    userBId: string | null
    createdAt: Date | null
  }

  export type ConnectionMaxAggregateOutputType = {
    id: string | null
    userAId: string | null
    userBId: string | null
    createdAt: Date | null
  }

  export type ConnectionCountAggregateOutputType = {
    id: number
    userAId: number
    userBId: number
    createdAt: number
    _all: number
  }


  export type ConnectionMinAggregateInputType = {
    id?: true
    userAId?: true
    userBId?: true
    createdAt?: true
  }

  export type ConnectionMaxAggregateInputType = {
    id?: true
    userAId?: true
    userBId?: true
    createdAt?: true
  }

  export type ConnectionCountAggregateInputType = {
    id?: true
    userAId?: true
    userBId?: true
    createdAt?: true
    _all?: true
  }

  export type ConnectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Connection to aggregate.
     */
    where?: ConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Connections to fetch.
     */
    orderBy?: ConnectionOrderByWithRelationInput | ConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Connections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Connections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Connections
    **/
    _count?: true | ConnectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConnectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConnectionMaxAggregateInputType
  }

  export type GetConnectionAggregateType<T extends ConnectionAggregateArgs> = {
        [P in keyof T & keyof AggregateConnection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConnection[P]>
      : GetScalarType<T[P], AggregateConnection[P]>
  }




  export type ConnectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConnectionWhereInput
    orderBy?: ConnectionOrderByWithAggregationInput | ConnectionOrderByWithAggregationInput[]
    by: ConnectionScalarFieldEnum[] | ConnectionScalarFieldEnum
    having?: ConnectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConnectionCountAggregateInputType | true
    _min?: ConnectionMinAggregateInputType
    _max?: ConnectionMaxAggregateInputType
  }

  export type ConnectionGroupByOutputType = {
    id: string
    userAId: string
    userBId: string
    createdAt: Date
    _count: ConnectionCountAggregateOutputType | null
    _min: ConnectionMinAggregateOutputType | null
    _max: ConnectionMaxAggregateOutputType | null
  }

  type GetConnectionGroupByPayload<T extends ConnectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConnectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConnectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConnectionGroupByOutputType[P]>
            : GetScalarType<T[P], ConnectionGroupByOutputType[P]>
        }
      >
    >


  export type ConnectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userAId?: boolean
    userBId?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["connection"]>



  export type ConnectionSelectScalar = {
    id?: boolean
    userAId?: boolean
    userBId?: boolean
    createdAt?: boolean
  }

  export type ConnectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userAId" | "userBId" | "createdAt", ExtArgs["result"]["connection"]>

  export type $ConnectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Connection"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userAId: string
      userBId: string
      createdAt: Date
    }, ExtArgs["result"]["connection"]>
    composites: {}
  }

  type ConnectionGetPayload<S extends boolean | null | undefined | ConnectionDefaultArgs> = $Result.GetResult<Prisma.$ConnectionPayload, S>

  type ConnectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConnectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConnectionCountAggregateInputType | true
    }

  export interface ConnectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Connection'], meta: { name: 'Connection' } }
    /**
     * Find zero or one Connection that matches the filter.
     * @param {ConnectionFindUniqueArgs} args - Arguments to find a Connection
     * @example
     * // Get one Connection
     * const connection = await prisma.connection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConnectionFindUniqueArgs>(args: SelectSubset<T, ConnectionFindUniqueArgs<ExtArgs>>): Prisma__ConnectionClient<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Connection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConnectionFindUniqueOrThrowArgs} args - Arguments to find a Connection
     * @example
     * // Get one Connection
     * const connection = await prisma.connection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConnectionFindUniqueOrThrowArgs>(args: SelectSubset<T, ConnectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConnectionClient<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Connection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionFindFirstArgs} args - Arguments to find a Connection
     * @example
     * // Get one Connection
     * const connection = await prisma.connection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConnectionFindFirstArgs>(args?: SelectSubset<T, ConnectionFindFirstArgs<ExtArgs>>): Prisma__ConnectionClient<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Connection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionFindFirstOrThrowArgs} args - Arguments to find a Connection
     * @example
     * // Get one Connection
     * const connection = await prisma.connection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConnectionFindFirstOrThrowArgs>(args?: SelectSubset<T, ConnectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConnectionClient<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Connections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Connections
     * const connections = await prisma.connection.findMany()
     * 
     * // Get first 10 Connections
     * const connections = await prisma.connection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const connectionWithIdOnly = await prisma.connection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConnectionFindManyArgs>(args?: SelectSubset<T, ConnectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Connection.
     * @param {ConnectionCreateArgs} args - Arguments to create a Connection.
     * @example
     * // Create one Connection
     * const Connection = await prisma.connection.create({
     *   data: {
     *     // ... data to create a Connection
     *   }
     * })
     * 
     */
    create<T extends ConnectionCreateArgs>(args: SelectSubset<T, ConnectionCreateArgs<ExtArgs>>): Prisma__ConnectionClient<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Connections.
     * @param {ConnectionCreateManyArgs} args - Arguments to create many Connections.
     * @example
     * // Create many Connections
     * const connection = await prisma.connection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConnectionCreateManyArgs>(args?: SelectSubset<T, ConnectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Connection.
     * @param {ConnectionDeleteArgs} args - Arguments to delete one Connection.
     * @example
     * // Delete one Connection
     * const Connection = await prisma.connection.delete({
     *   where: {
     *     // ... filter to delete one Connection
     *   }
     * })
     * 
     */
    delete<T extends ConnectionDeleteArgs>(args: SelectSubset<T, ConnectionDeleteArgs<ExtArgs>>): Prisma__ConnectionClient<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Connection.
     * @param {ConnectionUpdateArgs} args - Arguments to update one Connection.
     * @example
     * // Update one Connection
     * const connection = await prisma.connection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConnectionUpdateArgs>(args: SelectSubset<T, ConnectionUpdateArgs<ExtArgs>>): Prisma__ConnectionClient<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Connections.
     * @param {ConnectionDeleteManyArgs} args - Arguments to filter Connections to delete.
     * @example
     * // Delete a few Connections
     * const { count } = await prisma.connection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConnectionDeleteManyArgs>(args?: SelectSubset<T, ConnectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Connections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Connections
     * const connection = await prisma.connection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConnectionUpdateManyArgs>(args: SelectSubset<T, ConnectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Connection.
     * @param {ConnectionUpsertArgs} args - Arguments to update or create a Connection.
     * @example
     * // Update or create a Connection
     * const connection = await prisma.connection.upsert({
     *   create: {
     *     // ... data to create a Connection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Connection we want to update
     *   }
     * })
     */
    upsert<T extends ConnectionUpsertArgs>(args: SelectSubset<T, ConnectionUpsertArgs<ExtArgs>>): Prisma__ConnectionClient<$Result.GetResult<Prisma.$ConnectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Connections that matches the filter.
     * @param {ConnectionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const connection = await prisma.connection.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ConnectionFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Connection.
     * @param {ConnectionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const connection = await prisma.connection.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ConnectionAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Connections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionCountArgs} args - Arguments to filter Connections to count.
     * @example
     * // Count the number of Connections
     * const count = await prisma.connection.count({
     *   where: {
     *     // ... the filter for the Connections we want to count
     *   }
     * })
    **/
    count<T extends ConnectionCountArgs>(
      args?: Subset<T, ConnectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConnectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Connection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConnectionAggregateArgs>(args: Subset<T, ConnectionAggregateArgs>): Prisma.PrismaPromise<GetConnectionAggregateType<T>>

    /**
     * Group by Connection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConnectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConnectionGroupByArgs['orderBy'] }
        : { orderBy?: ConnectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConnectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConnectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Connection model
   */
  readonly fields: ConnectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Connection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConnectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Connection model
   */
  interface ConnectionFieldRefs {
    readonly id: FieldRef<"Connection", 'String'>
    readonly userAId: FieldRef<"Connection", 'String'>
    readonly userBId: FieldRef<"Connection", 'String'>
    readonly createdAt: FieldRef<"Connection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Connection findUnique
   */
  export type ConnectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * Filter, which Connection to fetch.
     */
    where: ConnectionWhereUniqueInput
  }

  /**
   * Connection findUniqueOrThrow
   */
  export type ConnectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * Filter, which Connection to fetch.
     */
    where: ConnectionWhereUniqueInput
  }

  /**
   * Connection findFirst
   */
  export type ConnectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * Filter, which Connection to fetch.
     */
    where?: ConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Connections to fetch.
     */
    orderBy?: ConnectionOrderByWithRelationInput | ConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Connections.
     */
    cursor?: ConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Connections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Connections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Connections.
     */
    distinct?: ConnectionScalarFieldEnum | ConnectionScalarFieldEnum[]
  }

  /**
   * Connection findFirstOrThrow
   */
  export type ConnectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * Filter, which Connection to fetch.
     */
    where?: ConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Connections to fetch.
     */
    orderBy?: ConnectionOrderByWithRelationInput | ConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Connections.
     */
    cursor?: ConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Connections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Connections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Connections.
     */
    distinct?: ConnectionScalarFieldEnum | ConnectionScalarFieldEnum[]
  }

  /**
   * Connection findMany
   */
  export type ConnectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * Filter, which Connections to fetch.
     */
    where?: ConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Connections to fetch.
     */
    orderBy?: ConnectionOrderByWithRelationInput | ConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Connections.
     */
    cursor?: ConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Connections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Connections.
     */
    skip?: number
    distinct?: ConnectionScalarFieldEnum | ConnectionScalarFieldEnum[]
  }

  /**
   * Connection create
   */
  export type ConnectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * The data needed to create a Connection.
     */
    data: XOR<ConnectionCreateInput, ConnectionUncheckedCreateInput>
  }

  /**
   * Connection createMany
   */
  export type ConnectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Connections.
     */
    data: ConnectionCreateManyInput | ConnectionCreateManyInput[]
  }

  /**
   * Connection update
   */
  export type ConnectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * The data needed to update a Connection.
     */
    data: XOR<ConnectionUpdateInput, ConnectionUncheckedUpdateInput>
    /**
     * Choose, which Connection to update.
     */
    where: ConnectionWhereUniqueInput
  }

  /**
   * Connection updateMany
   */
  export type ConnectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Connections.
     */
    data: XOR<ConnectionUpdateManyMutationInput, ConnectionUncheckedUpdateManyInput>
    /**
     * Filter which Connections to update
     */
    where?: ConnectionWhereInput
    /**
     * Limit how many Connections to update.
     */
    limit?: number
  }

  /**
   * Connection upsert
   */
  export type ConnectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * The filter to search for the Connection to update in case it exists.
     */
    where: ConnectionWhereUniqueInput
    /**
     * In case the Connection found by the `where` argument doesn't exist, create a new Connection with this data.
     */
    create: XOR<ConnectionCreateInput, ConnectionUncheckedCreateInput>
    /**
     * In case the Connection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConnectionUpdateInput, ConnectionUncheckedUpdateInput>
  }

  /**
   * Connection delete
   */
  export type ConnectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
    /**
     * Filter which Connection to delete.
     */
    where: ConnectionWhereUniqueInput
  }

  /**
   * Connection deleteMany
   */
  export type ConnectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Connections to delete
     */
    where?: ConnectionWhereInput
    /**
     * Limit how many Connections to delete.
     */
    limit?: number
  }

  /**
   * Connection findRaw
   */
  export type ConnectionFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Connection aggregateRaw
   */
  export type ConnectionAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Connection without action
   */
  export type ConnectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connection
     */
    select?: ConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connection
     */
    omit?: ConnectionOmit<ExtArgs> | null
  }


  /**
   * Model PostInteraction
   */

  export type AggregatePostInteraction = {
    _count: PostInteractionCountAggregateOutputType | null
    _min: PostInteractionMinAggregateOutputType | null
    _max: PostInteractionMaxAggregateOutputType | null
  }

  export type PostInteractionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    postId: string | null
    type: $Enums.PostInteractionType | null
    createdAt: Date | null
  }

  export type PostInteractionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    postId: string | null
    type: $Enums.PostInteractionType | null
    createdAt: Date | null
  }

  export type PostInteractionCountAggregateOutputType = {
    id: number
    userId: number
    postId: number
    type: number
    createdAt: number
    _all: number
  }


  export type PostInteractionMinAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
    type?: true
    createdAt?: true
  }

  export type PostInteractionMaxAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
    type?: true
    createdAt?: true
  }

  export type PostInteractionCountAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
    type?: true
    createdAt?: true
    _all?: true
  }

  export type PostInteractionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostInteraction to aggregate.
     */
    where?: PostInteractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostInteractions to fetch.
     */
    orderBy?: PostInteractionOrderByWithRelationInput | PostInteractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostInteractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostInteractions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostInteractions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostInteractions
    **/
    _count?: true | PostInteractionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostInteractionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostInteractionMaxAggregateInputType
  }

  export type GetPostInteractionAggregateType<T extends PostInteractionAggregateArgs> = {
        [P in keyof T & keyof AggregatePostInteraction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostInteraction[P]>
      : GetScalarType<T[P], AggregatePostInteraction[P]>
  }




  export type PostInteractionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostInteractionWhereInput
    orderBy?: PostInteractionOrderByWithAggregationInput | PostInteractionOrderByWithAggregationInput[]
    by: PostInteractionScalarFieldEnum[] | PostInteractionScalarFieldEnum
    having?: PostInteractionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostInteractionCountAggregateInputType | true
    _min?: PostInteractionMinAggregateInputType
    _max?: PostInteractionMaxAggregateInputType
  }

  export type PostInteractionGroupByOutputType = {
    id: string
    userId: string
    postId: string
    type: $Enums.PostInteractionType
    createdAt: Date
    _count: PostInteractionCountAggregateOutputType | null
    _min: PostInteractionMinAggregateOutputType | null
    _max: PostInteractionMaxAggregateOutputType | null
  }

  type GetPostInteractionGroupByPayload<T extends PostInteractionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostInteractionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostInteractionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostInteractionGroupByOutputType[P]>
            : GetScalarType<T[P], PostInteractionGroupByOutputType[P]>
        }
      >
    >


  export type PostInteractionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    postId?: boolean
    type?: boolean
    createdAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postInteraction"]>



  export type PostInteractionSelectScalar = {
    id?: boolean
    userId?: boolean
    postId?: boolean
    type?: boolean
    createdAt?: boolean
  }

  export type PostInteractionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "postId" | "type" | "createdAt", ExtArgs["result"]["postInteraction"]>
  export type PostInteractionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }

  export type $PostInteractionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostInteraction"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      postId: string
      type: $Enums.PostInteractionType
      createdAt: Date
    }, ExtArgs["result"]["postInteraction"]>
    composites: {}
  }

  type PostInteractionGetPayload<S extends boolean | null | undefined | PostInteractionDefaultArgs> = $Result.GetResult<Prisma.$PostInteractionPayload, S>

  type PostInteractionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostInteractionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostInteractionCountAggregateInputType | true
    }

  export interface PostInteractionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostInteraction'], meta: { name: 'PostInteraction' } }
    /**
     * Find zero or one PostInteraction that matches the filter.
     * @param {PostInteractionFindUniqueArgs} args - Arguments to find a PostInteraction
     * @example
     * // Get one PostInteraction
     * const postInteraction = await prisma.postInteraction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostInteractionFindUniqueArgs>(args: SelectSubset<T, PostInteractionFindUniqueArgs<ExtArgs>>): Prisma__PostInteractionClient<$Result.GetResult<Prisma.$PostInteractionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PostInteraction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostInteractionFindUniqueOrThrowArgs} args - Arguments to find a PostInteraction
     * @example
     * // Get one PostInteraction
     * const postInteraction = await prisma.postInteraction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostInteractionFindUniqueOrThrowArgs>(args: SelectSubset<T, PostInteractionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostInteractionClient<$Result.GetResult<Prisma.$PostInteractionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostInteraction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostInteractionFindFirstArgs} args - Arguments to find a PostInteraction
     * @example
     * // Get one PostInteraction
     * const postInteraction = await prisma.postInteraction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostInteractionFindFirstArgs>(args?: SelectSubset<T, PostInteractionFindFirstArgs<ExtArgs>>): Prisma__PostInteractionClient<$Result.GetResult<Prisma.$PostInteractionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostInteraction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostInteractionFindFirstOrThrowArgs} args - Arguments to find a PostInteraction
     * @example
     * // Get one PostInteraction
     * const postInteraction = await prisma.postInteraction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostInteractionFindFirstOrThrowArgs>(args?: SelectSubset<T, PostInteractionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostInteractionClient<$Result.GetResult<Prisma.$PostInteractionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PostInteractions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostInteractionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostInteractions
     * const postInteractions = await prisma.postInteraction.findMany()
     * 
     * // Get first 10 PostInteractions
     * const postInteractions = await prisma.postInteraction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postInteractionWithIdOnly = await prisma.postInteraction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostInteractionFindManyArgs>(args?: SelectSubset<T, PostInteractionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostInteractionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PostInteraction.
     * @param {PostInteractionCreateArgs} args - Arguments to create a PostInteraction.
     * @example
     * // Create one PostInteraction
     * const PostInteraction = await prisma.postInteraction.create({
     *   data: {
     *     // ... data to create a PostInteraction
     *   }
     * })
     * 
     */
    create<T extends PostInteractionCreateArgs>(args: SelectSubset<T, PostInteractionCreateArgs<ExtArgs>>): Prisma__PostInteractionClient<$Result.GetResult<Prisma.$PostInteractionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PostInteractions.
     * @param {PostInteractionCreateManyArgs} args - Arguments to create many PostInteractions.
     * @example
     * // Create many PostInteractions
     * const postInteraction = await prisma.postInteraction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostInteractionCreateManyArgs>(args?: SelectSubset<T, PostInteractionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PostInteraction.
     * @param {PostInteractionDeleteArgs} args - Arguments to delete one PostInteraction.
     * @example
     * // Delete one PostInteraction
     * const PostInteraction = await prisma.postInteraction.delete({
     *   where: {
     *     // ... filter to delete one PostInteraction
     *   }
     * })
     * 
     */
    delete<T extends PostInteractionDeleteArgs>(args: SelectSubset<T, PostInteractionDeleteArgs<ExtArgs>>): Prisma__PostInteractionClient<$Result.GetResult<Prisma.$PostInteractionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PostInteraction.
     * @param {PostInteractionUpdateArgs} args - Arguments to update one PostInteraction.
     * @example
     * // Update one PostInteraction
     * const postInteraction = await prisma.postInteraction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostInteractionUpdateArgs>(args: SelectSubset<T, PostInteractionUpdateArgs<ExtArgs>>): Prisma__PostInteractionClient<$Result.GetResult<Prisma.$PostInteractionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PostInteractions.
     * @param {PostInteractionDeleteManyArgs} args - Arguments to filter PostInteractions to delete.
     * @example
     * // Delete a few PostInteractions
     * const { count } = await prisma.postInteraction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostInteractionDeleteManyArgs>(args?: SelectSubset<T, PostInteractionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostInteractions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostInteractionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostInteractions
     * const postInteraction = await prisma.postInteraction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostInteractionUpdateManyArgs>(args: SelectSubset<T, PostInteractionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PostInteraction.
     * @param {PostInteractionUpsertArgs} args - Arguments to update or create a PostInteraction.
     * @example
     * // Update or create a PostInteraction
     * const postInteraction = await prisma.postInteraction.upsert({
     *   create: {
     *     // ... data to create a PostInteraction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostInteraction we want to update
     *   }
     * })
     */
    upsert<T extends PostInteractionUpsertArgs>(args: SelectSubset<T, PostInteractionUpsertArgs<ExtArgs>>): Prisma__PostInteractionClient<$Result.GetResult<Prisma.$PostInteractionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PostInteractions that matches the filter.
     * @param {PostInteractionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const postInteraction = await prisma.postInteraction.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: PostInteractionFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a PostInteraction.
     * @param {PostInteractionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const postInteraction = await prisma.postInteraction.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: PostInteractionAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of PostInteractions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostInteractionCountArgs} args - Arguments to filter PostInteractions to count.
     * @example
     * // Count the number of PostInteractions
     * const count = await prisma.postInteraction.count({
     *   where: {
     *     // ... the filter for the PostInteractions we want to count
     *   }
     * })
    **/
    count<T extends PostInteractionCountArgs>(
      args?: Subset<T, PostInteractionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostInteractionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostInteraction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostInteractionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostInteractionAggregateArgs>(args: Subset<T, PostInteractionAggregateArgs>): Prisma.PrismaPromise<GetPostInteractionAggregateType<T>>

    /**
     * Group by PostInteraction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostInteractionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostInteractionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostInteractionGroupByArgs['orderBy'] }
        : { orderBy?: PostInteractionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostInteractionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostInteractionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostInteraction model
   */
  readonly fields: PostInteractionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostInteraction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostInteractionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PostInteraction model
   */
  interface PostInteractionFieldRefs {
    readonly id: FieldRef<"PostInteraction", 'String'>
    readonly userId: FieldRef<"PostInteraction", 'String'>
    readonly postId: FieldRef<"PostInteraction", 'String'>
    readonly type: FieldRef<"PostInteraction", 'PostInteractionType'>
    readonly createdAt: FieldRef<"PostInteraction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PostInteraction findUnique
   */
  export type PostInteractionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostInteraction
     */
    select?: PostInteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostInteraction
     */
    omit?: PostInteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInteractionInclude<ExtArgs> | null
    /**
     * Filter, which PostInteraction to fetch.
     */
    where: PostInteractionWhereUniqueInput
  }

  /**
   * PostInteraction findUniqueOrThrow
   */
  export type PostInteractionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostInteraction
     */
    select?: PostInteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostInteraction
     */
    omit?: PostInteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInteractionInclude<ExtArgs> | null
    /**
     * Filter, which PostInteraction to fetch.
     */
    where: PostInteractionWhereUniqueInput
  }

  /**
   * PostInteraction findFirst
   */
  export type PostInteractionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostInteraction
     */
    select?: PostInteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostInteraction
     */
    omit?: PostInteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInteractionInclude<ExtArgs> | null
    /**
     * Filter, which PostInteraction to fetch.
     */
    where?: PostInteractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostInteractions to fetch.
     */
    orderBy?: PostInteractionOrderByWithRelationInput | PostInteractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostInteractions.
     */
    cursor?: PostInteractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostInteractions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostInteractions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostInteractions.
     */
    distinct?: PostInteractionScalarFieldEnum | PostInteractionScalarFieldEnum[]
  }

  /**
   * PostInteraction findFirstOrThrow
   */
  export type PostInteractionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostInteraction
     */
    select?: PostInteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostInteraction
     */
    omit?: PostInteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInteractionInclude<ExtArgs> | null
    /**
     * Filter, which PostInteraction to fetch.
     */
    where?: PostInteractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostInteractions to fetch.
     */
    orderBy?: PostInteractionOrderByWithRelationInput | PostInteractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostInteractions.
     */
    cursor?: PostInteractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostInteractions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostInteractions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostInteractions.
     */
    distinct?: PostInteractionScalarFieldEnum | PostInteractionScalarFieldEnum[]
  }

  /**
   * PostInteraction findMany
   */
  export type PostInteractionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostInteraction
     */
    select?: PostInteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostInteraction
     */
    omit?: PostInteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInteractionInclude<ExtArgs> | null
    /**
     * Filter, which PostInteractions to fetch.
     */
    where?: PostInteractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostInteractions to fetch.
     */
    orderBy?: PostInteractionOrderByWithRelationInput | PostInteractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostInteractions.
     */
    cursor?: PostInteractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostInteractions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostInteractions.
     */
    skip?: number
    distinct?: PostInteractionScalarFieldEnum | PostInteractionScalarFieldEnum[]
  }

  /**
   * PostInteraction create
   */
  export type PostInteractionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostInteraction
     */
    select?: PostInteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostInteraction
     */
    omit?: PostInteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInteractionInclude<ExtArgs> | null
    /**
     * The data needed to create a PostInteraction.
     */
    data: XOR<PostInteractionCreateInput, PostInteractionUncheckedCreateInput>
  }

  /**
   * PostInteraction createMany
   */
  export type PostInteractionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostInteractions.
     */
    data: PostInteractionCreateManyInput | PostInteractionCreateManyInput[]
  }

  /**
   * PostInteraction update
   */
  export type PostInteractionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostInteraction
     */
    select?: PostInteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostInteraction
     */
    omit?: PostInteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInteractionInclude<ExtArgs> | null
    /**
     * The data needed to update a PostInteraction.
     */
    data: XOR<PostInteractionUpdateInput, PostInteractionUncheckedUpdateInput>
    /**
     * Choose, which PostInteraction to update.
     */
    where: PostInteractionWhereUniqueInput
  }

  /**
   * PostInteraction updateMany
   */
  export type PostInteractionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostInteractions.
     */
    data: XOR<PostInteractionUpdateManyMutationInput, PostInteractionUncheckedUpdateManyInput>
    /**
     * Filter which PostInteractions to update
     */
    where?: PostInteractionWhereInput
    /**
     * Limit how many PostInteractions to update.
     */
    limit?: number
  }

  /**
   * PostInteraction upsert
   */
  export type PostInteractionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostInteraction
     */
    select?: PostInteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostInteraction
     */
    omit?: PostInteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInteractionInclude<ExtArgs> | null
    /**
     * The filter to search for the PostInteraction to update in case it exists.
     */
    where: PostInteractionWhereUniqueInput
    /**
     * In case the PostInteraction found by the `where` argument doesn't exist, create a new PostInteraction with this data.
     */
    create: XOR<PostInteractionCreateInput, PostInteractionUncheckedCreateInput>
    /**
     * In case the PostInteraction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostInteractionUpdateInput, PostInteractionUncheckedUpdateInput>
  }

  /**
   * PostInteraction delete
   */
  export type PostInteractionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostInteraction
     */
    select?: PostInteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostInteraction
     */
    omit?: PostInteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInteractionInclude<ExtArgs> | null
    /**
     * Filter which PostInteraction to delete.
     */
    where: PostInteractionWhereUniqueInput
  }

  /**
   * PostInteraction deleteMany
   */
  export type PostInteractionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostInteractions to delete
     */
    where?: PostInteractionWhereInput
    /**
     * Limit how many PostInteractions to delete.
     */
    limit?: number
  }

  /**
   * PostInteraction findRaw
   */
  export type PostInteractionFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * PostInteraction aggregateRaw
   */
  export type PostInteractionAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * PostInteraction without action
   */
  export type PostInteractionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostInteraction
     */
    select?: PostInteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostInteraction
     */
    omit?: PostInteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInteractionInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    fromUserId: string | null
    type: $Enums.NotificationType | null
    entityId: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    fromUserId: string | null
    type: $Enums.NotificationType | null
    entityId: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    fromUserId: number
    type: number
    entityId: number
    isRead: number
    createdAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    fromUserId?: true
    type?: true
    entityId?: true
    isRead?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    fromUserId?: true
    type?: true
    entityId?: true
    isRead?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    fromUserId?: true
    type?: true
    entityId?: true
    isRead?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    userId: string
    fromUserId: string
    type: $Enums.NotificationType
    entityId: string | null
    isRead: boolean
    createdAt: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fromUserId?: boolean
    type?: boolean
    entityId?: boolean
    isRead?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    fromUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>



  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    fromUserId?: boolean
    type?: boolean
    entityId?: boolean
    isRead?: boolean
    createdAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "fromUserId" | "type" | "entityId" | "isRead" | "createdAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    fromUser?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      fromUser: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      fromUserId: string
      type: $Enums.NotificationType
      entityId: string | null
      isRead: boolean
      createdAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * @param {NotificationFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const notification = await prisma.notification.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: NotificationFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Notification.
     * @param {NotificationAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const notification = await prisma.notification.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: NotificationAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    fromUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly userId: FieldRef<"Notification", 'String'>
    readonly fromUserId: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'NotificationType'>
    readonly entityId: FieldRef<"Notification", 'String'>
    readonly isRead: FieldRef<"Notification", 'Boolean'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification findRaw
   */
  export type NotificationFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Notification aggregateRaw
   */
  export type NotificationAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model Conversation
   */

  export type AggregateConversation = {
    _count: ConversationCountAggregateOutputType | null
    _avg: ConversationAvgAggregateOutputType | null
    _sum: ConversationSumAggregateOutputType | null
    _min: ConversationMinAggregateOutputType | null
    _max: ConversationMaxAggregateOutputType | null
  }

  export type ConversationAvgAggregateOutputType = {
    userAUnreadCount: number | null
    userBUnreadCount: number | null
  }

  export type ConversationSumAggregateOutputType = {
    userAUnreadCount: number | null
    userBUnreadCount: number | null
  }

  export type ConversationMinAggregateOutputType = {
    id: string | null
    userAId: string | null
    userBId: string | null
    lastMessageAt: Date | null
    lastMessageText: string | null
    lastMessageSenderId: string | null
    userALastReadAt: Date | null
    userBLastReadAt: Date | null
    userAUnreadCount: number | null
    userBUnreadCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConversationMaxAggregateOutputType = {
    id: string | null
    userAId: string | null
    userBId: string | null
    lastMessageAt: Date | null
    lastMessageText: string | null
    lastMessageSenderId: string | null
    userALastReadAt: Date | null
    userBLastReadAt: Date | null
    userAUnreadCount: number | null
    userBUnreadCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConversationCountAggregateOutputType = {
    id: number
    userAId: number
    userBId: number
    lastMessageAt: number
    lastMessageText: number
    lastMessageSenderId: number
    userALastReadAt: number
    userBLastReadAt: number
    userAUnreadCount: number
    userBUnreadCount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ConversationAvgAggregateInputType = {
    userAUnreadCount?: true
    userBUnreadCount?: true
  }

  export type ConversationSumAggregateInputType = {
    userAUnreadCount?: true
    userBUnreadCount?: true
  }

  export type ConversationMinAggregateInputType = {
    id?: true
    userAId?: true
    userBId?: true
    lastMessageAt?: true
    lastMessageText?: true
    lastMessageSenderId?: true
    userALastReadAt?: true
    userBLastReadAt?: true
    userAUnreadCount?: true
    userBUnreadCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConversationMaxAggregateInputType = {
    id?: true
    userAId?: true
    userBId?: true
    lastMessageAt?: true
    lastMessageText?: true
    lastMessageSenderId?: true
    userALastReadAt?: true
    userBLastReadAt?: true
    userAUnreadCount?: true
    userBUnreadCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConversationCountAggregateInputType = {
    id?: true
    userAId?: true
    userBId?: true
    lastMessageAt?: true
    lastMessageText?: true
    lastMessageSenderId?: true
    userALastReadAt?: true
    userBLastReadAt?: true
    userAUnreadCount?: true
    userBUnreadCount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ConversationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversation to aggregate.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Conversations
    **/
    _count?: true | ConversationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConversationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConversationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConversationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConversationMaxAggregateInputType
  }

  export type GetConversationAggregateType<T extends ConversationAggregateArgs> = {
        [P in keyof T & keyof AggregateConversation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConversation[P]>
      : GetScalarType<T[P], AggregateConversation[P]>
  }




  export type ConversationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationWhereInput
    orderBy?: ConversationOrderByWithAggregationInput | ConversationOrderByWithAggregationInput[]
    by: ConversationScalarFieldEnum[] | ConversationScalarFieldEnum
    having?: ConversationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConversationCountAggregateInputType | true
    _avg?: ConversationAvgAggregateInputType
    _sum?: ConversationSumAggregateInputType
    _min?: ConversationMinAggregateInputType
    _max?: ConversationMaxAggregateInputType
  }

  export type ConversationGroupByOutputType = {
    id: string
    userAId: string
    userBId: string
    lastMessageAt: Date | null
    lastMessageText: string | null
    lastMessageSenderId: string | null
    userALastReadAt: Date | null
    userBLastReadAt: Date | null
    userAUnreadCount: number
    userBUnreadCount: number
    createdAt: Date
    updatedAt: Date
    _count: ConversationCountAggregateOutputType | null
    _avg: ConversationAvgAggregateOutputType | null
    _sum: ConversationSumAggregateOutputType | null
    _min: ConversationMinAggregateOutputType | null
    _max: ConversationMaxAggregateOutputType | null
  }

  type GetConversationGroupByPayload<T extends ConversationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConversationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConversationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConversationGroupByOutputType[P]>
            : GetScalarType<T[P], ConversationGroupByOutputType[P]>
        }
      >
    >


  export type ConversationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userAId?: boolean
    userBId?: boolean
    lastMessageAt?: boolean
    lastMessageText?: boolean
    lastMessageSenderId?: boolean
    userALastReadAt?: boolean
    userBLastReadAt?: boolean
    userAUnreadCount?: boolean
    userBUnreadCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    messages?: boolean | Conversation$messagesArgs<ExtArgs>
    _count?: boolean | ConversationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversation"]>



  export type ConversationSelectScalar = {
    id?: boolean
    userAId?: boolean
    userBId?: boolean
    lastMessageAt?: boolean
    lastMessageText?: boolean
    lastMessageSenderId?: boolean
    userALastReadAt?: boolean
    userBLastReadAt?: boolean
    userAUnreadCount?: boolean
    userBUnreadCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ConversationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userAId" | "userBId" | "lastMessageAt" | "lastMessageText" | "lastMessageSenderId" | "userALastReadAt" | "userBLastReadAt" | "userAUnreadCount" | "userBUnreadCount" | "createdAt" | "updatedAt", ExtArgs["result"]["conversation"]>
  export type ConversationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | Conversation$messagesArgs<ExtArgs>
    _count?: boolean | ConversationCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ConversationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Conversation"
    objects: {
      messages: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userAId: string
      userBId: string
      lastMessageAt: Date | null
      lastMessageText: string | null
      lastMessageSenderId: string | null
      userALastReadAt: Date | null
      userBLastReadAt: Date | null
      userAUnreadCount: number
      userBUnreadCount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["conversation"]>
    composites: {}
  }

  type ConversationGetPayload<S extends boolean | null | undefined | ConversationDefaultArgs> = $Result.GetResult<Prisma.$ConversationPayload, S>

  type ConversationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConversationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConversationCountAggregateInputType | true
    }

  export interface ConversationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Conversation'], meta: { name: 'Conversation' } }
    /**
     * Find zero or one Conversation that matches the filter.
     * @param {ConversationFindUniqueArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConversationFindUniqueArgs>(args: SelectSubset<T, ConversationFindUniqueArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Conversation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConversationFindUniqueOrThrowArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConversationFindUniqueOrThrowArgs>(args: SelectSubset<T, ConversationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindFirstArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConversationFindFirstArgs>(args?: SelectSubset<T, ConversationFindFirstArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindFirstOrThrowArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConversationFindFirstOrThrowArgs>(args?: SelectSubset<T, ConversationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Conversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conversations
     * const conversations = await prisma.conversation.findMany()
     * 
     * // Get first 10 Conversations
     * const conversations = await prisma.conversation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conversationWithIdOnly = await prisma.conversation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConversationFindManyArgs>(args?: SelectSubset<T, ConversationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Conversation.
     * @param {ConversationCreateArgs} args - Arguments to create a Conversation.
     * @example
     * // Create one Conversation
     * const Conversation = await prisma.conversation.create({
     *   data: {
     *     // ... data to create a Conversation
     *   }
     * })
     * 
     */
    create<T extends ConversationCreateArgs>(args: SelectSubset<T, ConversationCreateArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Conversations.
     * @param {ConversationCreateManyArgs} args - Arguments to create many Conversations.
     * @example
     * // Create many Conversations
     * const conversation = await prisma.conversation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConversationCreateManyArgs>(args?: SelectSubset<T, ConversationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Conversation.
     * @param {ConversationDeleteArgs} args - Arguments to delete one Conversation.
     * @example
     * // Delete one Conversation
     * const Conversation = await prisma.conversation.delete({
     *   where: {
     *     // ... filter to delete one Conversation
     *   }
     * })
     * 
     */
    delete<T extends ConversationDeleteArgs>(args: SelectSubset<T, ConversationDeleteArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Conversation.
     * @param {ConversationUpdateArgs} args - Arguments to update one Conversation.
     * @example
     * // Update one Conversation
     * const conversation = await prisma.conversation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConversationUpdateArgs>(args: SelectSubset<T, ConversationUpdateArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Conversations.
     * @param {ConversationDeleteManyArgs} args - Arguments to filter Conversations to delete.
     * @example
     * // Delete a few Conversations
     * const { count } = await prisma.conversation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConversationDeleteManyArgs>(args?: SelectSubset<T, ConversationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conversations
     * const conversation = await prisma.conversation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConversationUpdateManyArgs>(args: SelectSubset<T, ConversationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Conversation.
     * @param {ConversationUpsertArgs} args - Arguments to update or create a Conversation.
     * @example
     * // Update or create a Conversation
     * const conversation = await prisma.conversation.upsert({
     *   create: {
     *     // ... data to create a Conversation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conversation we want to update
     *   }
     * })
     */
    upsert<T extends ConversationUpsertArgs>(args: SelectSubset<T, ConversationUpsertArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Conversations that matches the filter.
     * @param {ConversationFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const conversation = await prisma.conversation.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ConversationFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Conversation.
     * @param {ConversationAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const conversation = await prisma.conversation.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ConversationAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationCountArgs} args - Arguments to filter Conversations to count.
     * @example
     * // Count the number of Conversations
     * const count = await prisma.conversation.count({
     *   where: {
     *     // ... the filter for the Conversations we want to count
     *   }
     * })
    **/
    count<T extends ConversationCountArgs>(
      args?: Subset<T, ConversationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConversationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Conversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConversationAggregateArgs>(args: Subset<T, ConversationAggregateArgs>): Prisma.PrismaPromise<GetConversationAggregateType<T>>

    /**
     * Group by Conversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConversationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConversationGroupByArgs['orderBy'] }
        : { orderBy?: ConversationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConversationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Conversation model
   */
  readonly fields: ConversationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Conversation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConversationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    messages<T extends Conversation$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Conversation$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Conversation model
   */
  interface ConversationFieldRefs {
    readonly id: FieldRef<"Conversation", 'String'>
    readonly userAId: FieldRef<"Conversation", 'String'>
    readonly userBId: FieldRef<"Conversation", 'String'>
    readonly lastMessageAt: FieldRef<"Conversation", 'DateTime'>
    readonly lastMessageText: FieldRef<"Conversation", 'String'>
    readonly lastMessageSenderId: FieldRef<"Conversation", 'String'>
    readonly userALastReadAt: FieldRef<"Conversation", 'DateTime'>
    readonly userBLastReadAt: FieldRef<"Conversation", 'DateTime'>
    readonly userAUnreadCount: FieldRef<"Conversation", 'Int'>
    readonly userBUnreadCount: FieldRef<"Conversation", 'Int'>
    readonly createdAt: FieldRef<"Conversation", 'DateTime'>
    readonly updatedAt: FieldRef<"Conversation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Conversation findUnique
   */
  export type ConversationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation findUniqueOrThrow
   */
  export type ConversationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation findFirst
   */
  export type ConversationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversations.
     */
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Conversation findFirstOrThrow
   */
  export type ConversationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversations.
     */
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Conversation findMany
   */
  export type ConversationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversations to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Conversation create
   */
  export type ConversationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The data needed to create a Conversation.
     */
    data: XOR<ConversationCreateInput, ConversationUncheckedCreateInput>
  }

  /**
   * Conversation createMany
   */
  export type ConversationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Conversations.
     */
    data: ConversationCreateManyInput | ConversationCreateManyInput[]
  }

  /**
   * Conversation update
   */
  export type ConversationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The data needed to update a Conversation.
     */
    data: XOR<ConversationUpdateInput, ConversationUncheckedUpdateInput>
    /**
     * Choose, which Conversation to update.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation updateMany
   */
  export type ConversationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Conversations.
     */
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyInput>
    /**
     * Filter which Conversations to update
     */
    where?: ConversationWhereInput
    /**
     * Limit how many Conversations to update.
     */
    limit?: number
  }

  /**
   * Conversation upsert
   */
  export type ConversationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The filter to search for the Conversation to update in case it exists.
     */
    where: ConversationWhereUniqueInput
    /**
     * In case the Conversation found by the `where` argument doesn't exist, create a new Conversation with this data.
     */
    create: XOR<ConversationCreateInput, ConversationUncheckedCreateInput>
    /**
     * In case the Conversation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConversationUpdateInput, ConversationUncheckedUpdateInput>
  }

  /**
   * Conversation delete
   */
  export type ConversationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter which Conversation to delete.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation deleteMany
   */
  export type ConversationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversations to delete
     */
    where?: ConversationWhereInput
    /**
     * Limit how many Conversations to delete.
     */
    limit?: number
  }

  /**
   * Conversation findRaw
   */
  export type ConversationFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Conversation aggregateRaw
   */
  export type ConversationAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Conversation.messages
   */
  export type Conversation$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Conversation without action
   */
  export type ConversationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    conversationId: string | null
    senderId: string | null
    receiverId: string | null
    text: string | null
    createdAt: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    conversationId: string | null
    senderId: string | null
    receiverId: string | null
    text: string | null
    createdAt: Date | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    conversationId: number
    senderId: number
    receiverId: number
    text: number
    media: number
    createdAt: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    id?: true
    conversationId?: true
    senderId?: true
    receiverId?: true
    text?: true
    createdAt?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    conversationId?: true
    senderId?: true
    receiverId?: true
    text?: true
    createdAt?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    conversationId?: true
    senderId?: true
    receiverId?: true
    text?: true
    media?: true
    createdAt?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    conversationId: string
    senderId: string
    receiverId: string
    text: string | null
    media: JsonValue | null
    createdAt: Date
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conversationId?: boolean
    senderId?: boolean
    receiverId?: boolean
    text?: boolean
    media?: boolean
    createdAt?: boolean
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>



  export type MessageSelectScalar = {
    id?: boolean
    conversationId?: boolean
    senderId?: boolean
    receiverId?: boolean
    text?: boolean
    media?: boolean
    createdAt?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "conversationId" | "senderId" | "receiverId" | "text" | "media" | "createdAt", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      conversation: Prisma.$ConversationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      conversationId: string
      senderId: string
      receiverId: string
      text: string | null
      media: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * @param {MessageFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const message = await prisma.message.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: MessageFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Message.
     * @param {MessageAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const message = await prisma.message.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: MessageAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    conversation<T extends ConversationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConversationDefaultArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly conversationId: FieldRef<"Message", 'String'>
    readonly senderId: FieldRef<"Message", 'String'>
    readonly receiverId: FieldRef<"Message", 'String'>
    readonly text: FieldRef<"Message", 'String'>
    readonly media: FieldRef<"Message", 'Json'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message findRaw
   */
  export type MessageFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Message aggregateRaw
   */
  export type MessageAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Model JobPost
   */

  export type AggregateJobPost = {
    _count: JobPostCountAggregateOutputType | null
    _avg: JobPostAvgAggregateOutputType | null
    _sum: JobPostSumAggregateOutputType | null
    _min: JobPostMinAggregateOutputType | null
    _max: JobPostMaxAggregateOutputType | null
  }

  export type JobPostAvgAggregateOutputType = {
    positionsAvailable: number | null
    positionsFilled: number | null
    salaryMin: number | null
    salaryMax: number | null
  }

  export type JobPostSumAggregateOutputType = {
    positionsAvailable: number | null
    positionsFilled: number | null
    salaryMin: number | null
    salaryMax: number | null
  }

  export type JobPostMinAggregateOutputType = {
    id: string | null
    postId: string | null
    jobTitle: string | null
    companyName: string | null
    location: string | null
    locationType: $Enums.JobLocationType | null
    jobDetails: string | null
    employmentType: $Enums.EmploymentType | null
    positionsAvailable: number | null
    positionsFilled: number | null
    salaryMin: number | null
    salaryMax: number | null
    salaryCurrency: string | null
    deadline: Date | null
    status: $Enums.JobStatus | null
    applyUrl: string | null
    allowExternalApply: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobPostMaxAggregateOutputType = {
    id: string | null
    postId: string | null
    jobTitle: string | null
    companyName: string | null
    location: string | null
    locationType: $Enums.JobLocationType | null
    jobDetails: string | null
    employmentType: $Enums.EmploymentType | null
    positionsAvailable: number | null
    positionsFilled: number | null
    salaryMin: number | null
    salaryMax: number | null
    salaryCurrency: string | null
    deadline: Date | null
    status: $Enums.JobStatus | null
    applyUrl: string | null
    allowExternalApply: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobPostCountAggregateOutputType = {
    id: number
    postId: number
    jobTitle: number
    companyName: number
    location: number
    locationType: number
    jobDetails: number
    jobRequirements: number
    employmentType: number
    positionsAvailable: number
    positionsFilled: number
    salaryMin: number
    salaryMax: number
    salaryCurrency: number
    deadline: number
    status: number
    applyUrl: number
    allowExternalApply: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type JobPostAvgAggregateInputType = {
    positionsAvailable?: true
    positionsFilled?: true
    salaryMin?: true
    salaryMax?: true
  }

  export type JobPostSumAggregateInputType = {
    positionsAvailable?: true
    positionsFilled?: true
    salaryMin?: true
    salaryMax?: true
  }

  export type JobPostMinAggregateInputType = {
    id?: true
    postId?: true
    jobTitle?: true
    companyName?: true
    location?: true
    locationType?: true
    jobDetails?: true
    employmentType?: true
    positionsAvailable?: true
    positionsFilled?: true
    salaryMin?: true
    salaryMax?: true
    salaryCurrency?: true
    deadline?: true
    status?: true
    applyUrl?: true
    allowExternalApply?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobPostMaxAggregateInputType = {
    id?: true
    postId?: true
    jobTitle?: true
    companyName?: true
    location?: true
    locationType?: true
    jobDetails?: true
    employmentType?: true
    positionsAvailable?: true
    positionsFilled?: true
    salaryMin?: true
    salaryMax?: true
    salaryCurrency?: true
    deadline?: true
    status?: true
    applyUrl?: true
    allowExternalApply?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobPostCountAggregateInputType = {
    id?: true
    postId?: true
    jobTitle?: true
    companyName?: true
    location?: true
    locationType?: true
    jobDetails?: true
    jobRequirements?: true
    employmentType?: true
    positionsAvailable?: true
    positionsFilled?: true
    salaryMin?: true
    salaryMax?: true
    salaryCurrency?: true
    deadline?: true
    status?: true
    applyUrl?: true
    allowExternalApply?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type JobPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobPost to aggregate.
     */
    where?: JobPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobPosts to fetch.
     */
    orderBy?: JobPostOrderByWithRelationInput | JobPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobPosts
    **/
    _count?: true | JobPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobPostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobPostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobPostMaxAggregateInputType
  }

  export type GetJobPostAggregateType<T extends JobPostAggregateArgs> = {
        [P in keyof T & keyof AggregateJobPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobPost[P]>
      : GetScalarType<T[P], AggregateJobPost[P]>
  }




  export type JobPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobPostWhereInput
    orderBy?: JobPostOrderByWithAggregationInput | JobPostOrderByWithAggregationInput[]
    by: JobPostScalarFieldEnum[] | JobPostScalarFieldEnum
    having?: JobPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobPostCountAggregateInputType | true
    _avg?: JobPostAvgAggregateInputType
    _sum?: JobPostSumAggregateInputType
    _min?: JobPostMinAggregateInputType
    _max?: JobPostMaxAggregateInputType
  }

  export type JobPostGroupByOutputType = {
    id: string
    postId: string
    jobTitle: string
    companyName: string | null
    location: string | null
    locationType: $Enums.JobLocationType | null
    jobDetails: string | null
    jobRequirements: string[]
    employmentType: $Enums.EmploymentType
    positionsAvailable: number
    positionsFilled: number
    salaryMin: number | null
    salaryMax: number | null
    salaryCurrency: string | null
    deadline: Date | null
    status: $Enums.JobStatus
    applyUrl: string | null
    allowExternalApply: boolean
    createdAt: Date
    updatedAt: Date
    _count: JobPostCountAggregateOutputType | null
    _avg: JobPostAvgAggregateOutputType | null
    _sum: JobPostSumAggregateOutputType | null
    _min: JobPostMinAggregateOutputType | null
    _max: JobPostMaxAggregateOutputType | null
  }

  type GetJobPostGroupByPayload<T extends JobPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobPostGroupByOutputType[P]>
            : GetScalarType<T[P], JobPostGroupByOutputType[P]>
        }
      >
    >


  export type JobPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    jobTitle?: boolean
    companyName?: boolean
    location?: boolean
    locationType?: boolean
    jobDetails?: boolean
    jobRequirements?: boolean
    employmentType?: boolean
    positionsAvailable?: boolean
    positionsFilled?: boolean
    salaryMin?: boolean
    salaryMax?: boolean
    salaryCurrency?: boolean
    deadline?: boolean
    status?: boolean
    applyUrl?: boolean
    allowExternalApply?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    applications?: boolean | JobPost$applicationsArgs<ExtArgs>
    _count?: boolean | JobPostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobPost"]>



  export type JobPostSelectScalar = {
    id?: boolean
    postId?: boolean
    jobTitle?: boolean
    companyName?: boolean
    location?: boolean
    locationType?: boolean
    jobDetails?: boolean
    jobRequirements?: boolean
    employmentType?: boolean
    positionsAvailable?: boolean
    positionsFilled?: boolean
    salaryMin?: boolean
    salaryMax?: boolean
    salaryCurrency?: boolean
    deadline?: boolean
    status?: boolean
    applyUrl?: boolean
    allowExternalApply?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type JobPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "postId" | "jobTitle" | "companyName" | "location" | "locationType" | "jobDetails" | "jobRequirements" | "employmentType" | "positionsAvailable" | "positionsFilled" | "salaryMin" | "salaryMax" | "salaryCurrency" | "deadline" | "status" | "applyUrl" | "allowExternalApply" | "createdAt" | "updatedAt", ExtArgs["result"]["jobPost"]>
  export type JobPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    applications?: boolean | JobPost$applicationsArgs<ExtArgs>
    _count?: boolean | JobPostCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $JobPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JobPost"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
      applications: Prisma.$JobApplicationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      postId: string
      jobTitle: string
      companyName: string | null
      location: string | null
      locationType: $Enums.JobLocationType | null
      jobDetails: string | null
      jobRequirements: string[]
      employmentType: $Enums.EmploymentType
      positionsAvailable: number
      positionsFilled: number
      salaryMin: number | null
      salaryMax: number | null
      salaryCurrency: string | null
      deadline: Date | null
      status: $Enums.JobStatus
      applyUrl: string | null
      allowExternalApply: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["jobPost"]>
    composites: {}
  }

  type JobPostGetPayload<S extends boolean | null | undefined | JobPostDefaultArgs> = $Result.GetResult<Prisma.$JobPostPayload, S>

  type JobPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobPostCountAggregateInputType | true
    }

  export interface JobPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobPost'], meta: { name: 'JobPost' } }
    /**
     * Find zero or one JobPost that matches the filter.
     * @param {JobPostFindUniqueArgs} args - Arguments to find a JobPost
     * @example
     * // Get one JobPost
     * const jobPost = await prisma.jobPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobPostFindUniqueArgs>(args: SelectSubset<T, JobPostFindUniqueArgs<ExtArgs>>): Prisma__JobPostClient<$Result.GetResult<Prisma.$JobPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JobPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobPostFindUniqueOrThrowArgs} args - Arguments to find a JobPost
     * @example
     * // Get one JobPost
     * const jobPost = await prisma.jobPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobPostFindUniqueOrThrowArgs>(args: SelectSubset<T, JobPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobPostClient<$Result.GetResult<Prisma.$JobPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPostFindFirstArgs} args - Arguments to find a JobPost
     * @example
     * // Get one JobPost
     * const jobPost = await prisma.jobPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobPostFindFirstArgs>(args?: SelectSubset<T, JobPostFindFirstArgs<ExtArgs>>): Prisma__JobPostClient<$Result.GetResult<Prisma.$JobPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPostFindFirstOrThrowArgs} args - Arguments to find a JobPost
     * @example
     * // Get one JobPost
     * const jobPost = await prisma.jobPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobPostFindFirstOrThrowArgs>(args?: SelectSubset<T, JobPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobPostClient<$Result.GetResult<Prisma.$JobPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JobPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobPosts
     * const jobPosts = await prisma.jobPost.findMany()
     * 
     * // Get first 10 JobPosts
     * const jobPosts = await prisma.jobPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobPostWithIdOnly = await prisma.jobPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobPostFindManyArgs>(args?: SelectSubset<T, JobPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JobPost.
     * @param {JobPostCreateArgs} args - Arguments to create a JobPost.
     * @example
     * // Create one JobPost
     * const JobPost = await prisma.jobPost.create({
     *   data: {
     *     // ... data to create a JobPost
     *   }
     * })
     * 
     */
    create<T extends JobPostCreateArgs>(args: SelectSubset<T, JobPostCreateArgs<ExtArgs>>): Prisma__JobPostClient<$Result.GetResult<Prisma.$JobPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JobPosts.
     * @param {JobPostCreateManyArgs} args - Arguments to create many JobPosts.
     * @example
     * // Create many JobPosts
     * const jobPost = await prisma.jobPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobPostCreateManyArgs>(args?: SelectSubset<T, JobPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a JobPost.
     * @param {JobPostDeleteArgs} args - Arguments to delete one JobPost.
     * @example
     * // Delete one JobPost
     * const JobPost = await prisma.jobPost.delete({
     *   where: {
     *     // ... filter to delete one JobPost
     *   }
     * })
     * 
     */
    delete<T extends JobPostDeleteArgs>(args: SelectSubset<T, JobPostDeleteArgs<ExtArgs>>): Prisma__JobPostClient<$Result.GetResult<Prisma.$JobPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JobPost.
     * @param {JobPostUpdateArgs} args - Arguments to update one JobPost.
     * @example
     * // Update one JobPost
     * const jobPost = await prisma.jobPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobPostUpdateArgs>(args: SelectSubset<T, JobPostUpdateArgs<ExtArgs>>): Prisma__JobPostClient<$Result.GetResult<Prisma.$JobPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JobPosts.
     * @param {JobPostDeleteManyArgs} args - Arguments to filter JobPosts to delete.
     * @example
     * // Delete a few JobPosts
     * const { count } = await prisma.jobPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobPostDeleteManyArgs>(args?: SelectSubset<T, JobPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobPosts
     * const jobPost = await prisma.jobPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobPostUpdateManyArgs>(args: SelectSubset<T, JobPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one JobPost.
     * @param {JobPostUpsertArgs} args - Arguments to update or create a JobPost.
     * @example
     * // Update or create a JobPost
     * const jobPost = await prisma.jobPost.upsert({
     *   create: {
     *     // ... data to create a JobPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobPost we want to update
     *   }
     * })
     */
    upsert<T extends JobPostUpsertArgs>(args: SelectSubset<T, JobPostUpsertArgs<ExtArgs>>): Prisma__JobPostClient<$Result.GetResult<Prisma.$JobPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JobPosts that matches the filter.
     * @param {JobPostFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const jobPost = await prisma.jobPost.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: JobPostFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a JobPost.
     * @param {JobPostAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const jobPost = await prisma.jobPost.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: JobPostAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of JobPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPostCountArgs} args - Arguments to filter JobPosts to count.
     * @example
     * // Count the number of JobPosts
     * const count = await prisma.jobPost.count({
     *   where: {
     *     // ... the filter for the JobPosts we want to count
     *   }
     * })
    **/
    count<T extends JobPostCountArgs>(
      args?: Subset<T, JobPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JobPostAggregateArgs>(args: Subset<T, JobPostAggregateArgs>): Prisma.PrismaPromise<GetJobPostAggregateType<T>>

    /**
     * Group by JobPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JobPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobPostGroupByArgs['orderBy'] }
        : { orderBy?: JobPostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JobPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JobPost model
   */
  readonly fields: JobPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    applications<T extends JobPost$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, JobPost$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JobPost model
   */
  interface JobPostFieldRefs {
    readonly id: FieldRef<"JobPost", 'String'>
    readonly postId: FieldRef<"JobPost", 'String'>
    readonly jobTitle: FieldRef<"JobPost", 'String'>
    readonly companyName: FieldRef<"JobPost", 'String'>
    readonly location: FieldRef<"JobPost", 'String'>
    readonly locationType: FieldRef<"JobPost", 'JobLocationType'>
    readonly jobDetails: FieldRef<"JobPost", 'String'>
    readonly jobRequirements: FieldRef<"JobPost", 'String[]'>
    readonly employmentType: FieldRef<"JobPost", 'EmploymentType'>
    readonly positionsAvailable: FieldRef<"JobPost", 'Int'>
    readonly positionsFilled: FieldRef<"JobPost", 'Int'>
    readonly salaryMin: FieldRef<"JobPost", 'Int'>
    readonly salaryMax: FieldRef<"JobPost", 'Int'>
    readonly salaryCurrency: FieldRef<"JobPost", 'String'>
    readonly deadline: FieldRef<"JobPost", 'DateTime'>
    readonly status: FieldRef<"JobPost", 'JobStatus'>
    readonly applyUrl: FieldRef<"JobPost", 'String'>
    readonly allowExternalApply: FieldRef<"JobPost", 'Boolean'>
    readonly createdAt: FieldRef<"JobPost", 'DateTime'>
    readonly updatedAt: FieldRef<"JobPost", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JobPost findUnique
   */
  export type JobPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPost
     */
    select?: JobPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPost
     */
    omit?: JobPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostInclude<ExtArgs> | null
    /**
     * Filter, which JobPost to fetch.
     */
    where: JobPostWhereUniqueInput
  }

  /**
   * JobPost findUniqueOrThrow
   */
  export type JobPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPost
     */
    select?: JobPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPost
     */
    omit?: JobPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostInclude<ExtArgs> | null
    /**
     * Filter, which JobPost to fetch.
     */
    where: JobPostWhereUniqueInput
  }

  /**
   * JobPost findFirst
   */
  export type JobPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPost
     */
    select?: JobPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPost
     */
    omit?: JobPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostInclude<ExtArgs> | null
    /**
     * Filter, which JobPost to fetch.
     */
    where?: JobPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobPosts to fetch.
     */
    orderBy?: JobPostOrderByWithRelationInput | JobPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobPosts.
     */
    cursor?: JobPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobPosts.
     */
    distinct?: JobPostScalarFieldEnum | JobPostScalarFieldEnum[]
  }

  /**
   * JobPost findFirstOrThrow
   */
  export type JobPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPost
     */
    select?: JobPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPost
     */
    omit?: JobPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostInclude<ExtArgs> | null
    /**
     * Filter, which JobPost to fetch.
     */
    where?: JobPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobPosts to fetch.
     */
    orderBy?: JobPostOrderByWithRelationInput | JobPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobPosts.
     */
    cursor?: JobPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobPosts.
     */
    distinct?: JobPostScalarFieldEnum | JobPostScalarFieldEnum[]
  }

  /**
   * JobPost findMany
   */
  export type JobPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPost
     */
    select?: JobPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPost
     */
    omit?: JobPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostInclude<ExtArgs> | null
    /**
     * Filter, which JobPosts to fetch.
     */
    where?: JobPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobPosts to fetch.
     */
    orderBy?: JobPostOrderByWithRelationInput | JobPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobPosts.
     */
    cursor?: JobPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobPosts.
     */
    skip?: number
    distinct?: JobPostScalarFieldEnum | JobPostScalarFieldEnum[]
  }

  /**
   * JobPost create
   */
  export type JobPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPost
     */
    select?: JobPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPost
     */
    omit?: JobPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostInclude<ExtArgs> | null
    /**
     * The data needed to create a JobPost.
     */
    data: XOR<JobPostCreateInput, JobPostUncheckedCreateInput>
  }

  /**
   * JobPost createMany
   */
  export type JobPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobPosts.
     */
    data: JobPostCreateManyInput | JobPostCreateManyInput[]
  }

  /**
   * JobPost update
   */
  export type JobPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPost
     */
    select?: JobPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPost
     */
    omit?: JobPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostInclude<ExtArgs> | null
    /**
     * The data needed to update a JobPost.
     */
    data: XOR<JobPostUpdateInput, JobPostUncheckedUpdateInput>
    /**
     * Choose, which JobPost to update.
     */
    where: JobPostWhereUniqueInput
  }

  /**
   * JobPost updateMany
   */
  export type JobPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobPosts.
     */
    data: XOR<JobPostUpdateManyMutationInput, JobPostUncheckedUpdateManyInput>
    /**
     * Filter which JobPosts to update
     */
    where?: JobPostWhereInput
    /**
     * Limit how many JobPosts to update.
     */
    limit?: number
  }

  /**
   * JobPost upsert
   */
  export type JobPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPost
     */
    select?: JobPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPost
     */
    omit?: JobPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostInclude<ExtArgs> | null
    /**
     * The filter to search for the JobPost to update in case it exists.
     */
    where: JobPostWhereUniqueInput
    /**
     * In case the JobPost found by the `where` argument doesn't exist, create a new JobPost with this data.
     */
    create: XOR<JobPostCreateInput, JobPostUncheckedCreateInput>
    /**
     * In case the JobPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobPostUpdateInput, JobPostUncheckedUpdateInput>
  }

  /**
   * JobPost delete
   */
  export type JobPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPost
     */
    select?: JobPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPost
     */
    omit?: JobPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostInclude<ExtArgs> | null
    /**
     * Filter which JobPost to delete.
     */
    where: JobPostWhereUniqueInput
  }

  /**
   * JobPost deleteMany
   */
  export type JobPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobPosts to delete
     */
    where?: JobPostWhereInput
    /**
     * Limit how many JobPosts to delete.
     */
    limit?: number
  }

  /**
   * JobPost findRaw
   */
  export type JobPostFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * JobPost aggregateRaw
   */
  export type JobPostAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * JobPost.applications
   */
  export type JobPost$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    where?: JobApplicationWhereInput
    orderBy?: JobApplicationOrderByWithRelationInput | JobApplicationOrderByWithRelationInput[]
    cursor?: JobApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobApplicationScalarFieldEnum | JobApplicationScalarFieldEnum[]
  }

  /**
   * JobPost without action
   */
  export type JobPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPost
     */
    select?: JobPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPost
     */
    omit?: JobPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobPostInclude<ExtArgs> | null
  }


  /**
   * Model JobApplication
   */

  export type AggregateJobApplication = {
    _count: JobApplicationCountAggregateOutputType | null
    _avg: JobApplicationAvgAggregateOutputType | null
    _sum: JobApplicationSumAggregateOutputType | null
    _min: JobApplicationMinAggregateOutputType | null
    _max: JobApplicationMaxAggregateOutputType | null
  }

  export type JobApplicationAvgAggregateOutputType = {
    expectedSalary: number | null
  }

  export type JobApplicationSumAggregateOutputType = {
    expectedSalary: number | null
  }

  export type JobApplicationMinAggregateOutputType = {
    id: string | null
    jobPostId: string | null
    applicantId: string | null
    resumeLetter: string | null
    expectedSalary: number | null
    availability: string | null
    resumeBlobName: string | null
    status: $Enums.ApplicationStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobApplicationMaxAggregateOutputType = {
    id: string | null
    jobPostId: string | null
    applicantId: string | null
    resumeLetter: string | null
    expectedSalary: number | null
    availability: string | null
    resumeBlobName: string | null
    status: $Enums.ApplicationStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JobApplicationCountAggregateOutputType = {
    id: number
    jobPostId: number
    applicantId: number
    resumeLetter: number
    expectedSalary: number
    availability: number
    resumeBlobName: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type JobApplicationAvgAggregateInputType = {
    expectedSalary?: true
  }

  export type JobApplicationSumAggregateInputType = {
    expectedSalary?: true
  }

  export type JobApplicationMinAggregateInputType = {
    id?: true
    jobPostId?: true
    applicantId?: true
    resumeLetter?: true
    expectedSalary?: true
    availability?: true
    resumeBlobName?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobApplicationMaxAggregateInputType = {
    id?: true
    jobPostId?: true
    applicantId?: true
    resumeLetter?: true
    expectedSalary?: true
    availability?: true
    resumeBlobName?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JobApplicationCountAggregateInputType = {
    id?: true
    jobPostId?: true
    applicantId?: true
    resumeLetter?: true
    expectedSalary?: true
    availability?: true
    resumeBlobName?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type JobApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobApplication to aggregate.
     */
    where?: JobApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobApplications to fetch.
     */
    orderBy?: JobApplicationOrderByWithRelationInput | JobApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobApplications
    **/
    _count?: true | JobApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobApplicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobApplicationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobApplicationMaxAggregateInputType
  }

  export type GetJobApplicationAggregateType<T extends JobApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateJobApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobApplication[P]>
      : GetScalarType<T[P], AggregateJobApplication[P]>
  }




  export type JobApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobApplicationWhereInput
    orderBy?: JobApplicationOrderByWithAggregationInput | JobApplicationOrderByWithAggregationInput[]
    by: JobApplicationScalarFieldEnum[] | JobApplicationScalarFieldEnum
    having?: JobApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobApplicationCountAggregateInputType | true
    _avg?: JobApplicationAvgAggregateInputType
    _sum?: JobApplicationSumAggregateInputType
    _min?: JobApplicationMinAggregateInputType
    _max?: JobApplicationMaxAggregateInputType
  }

  export type JobApplicationGroupByOutputType = {
    id: string
    jobPostId: string
    applicantId: string
    resumeLetter: string | null
    expectedSalary: number | null
    availability: string | null
    resumeBlobName: string
    status: $Enums.ApplicationStatus
    createdAt: Date
    updatedAt: Date
    _count: JobApplicationCountAggregateOutputType | null
    _avg: JobApplicationAvgAggregateOutputType | null
    _sum: JobApplicationSumAggregateOutputType | null
    _min: JobApplicationMinAggregateOutputType | null
    _max: JobApplicationMaxAggregateOutputType | null
  }

  type GetJobApplicationGroupByPayload<T extends JobApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], JobApplicationGroupByOutputType[P]>
        }
      >
    >


  export type JobApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobPostId?: boolean
    applicantId?: boolean
    resumeLetter?: boolean
    expectedSalary?: boolean
    availability?: boolean
    resumeBlobName?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jobPost?: boolean | JobPostDefaultArgs<ExtArgs>
    applicant?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jobApplication"]>



  export type JobApplicationSelectScalar = {
    id?: boolean
    jobPostId?: boolean
    applicantId?: boolean
    resumeLetter?: boolean
    expectedSalary?: boolean
    availability?: boolean
    resumeBlobName?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type JobApplicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jobPostId" | "applicantId" | "resumeLetter" | "expectedSalary" | "availability" | "resumeBlobName" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["jobApplication"]>
  export type JobApplicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobPost?: boolean | JobPostDefaultArgs<ExtArgs>
    applicant?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $JobApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JobApplication"
    objects: {
      jobPost: Prisma.$JobPostPayload<ExtArgs>
      applicant: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      jobPostId: string
      applicantId: string
      resumeLetter: string | null
      expectedSalary: number | null
      availability: string | null
      resumeBlobName: string
      status: $Enums.ApplicationStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["jobApplication"]>
    composites: {}
  }

  type JobApplicationGetPayload<S extends boolean | null | undefined | JobApplicationDefaultArgs> = $Result.GetResult<Prisma.$JobApplicationPayload, S>

  type JobApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobApplicationCountAggregateInputType | true
    }

  export interface JobApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobApplication'], meta: { name: 'JobApplication' } }
    /**
     * Find zero or one JobApplication that matches the filter.
     * @param {JobApplicationFindUniqueArgs} args - Arguments to find a JobApplication
     * @example
     * // Get one JobApplication
     * const jobApplication = await prisma.jobApplication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobApplicationFindUniqueArgs>(args: SelectSubset<T, JobApplicationFindUniqueArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JobApplication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobApplicationFindUniqueOrThrowArgs} args - Arguments to find a JobApplication
     * @example
     * // Get one JobApplication
     * const jobApplication = await prisma.jobApplication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobApplicationFindUniqueOrThrowArgs>(args: SelectSubset<T, JobApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobApplication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationFindFirstArgs} args - Arguments to find a JobApplication
     * @example
     * // Get one JobApplication
     * const jobApplication = await prisma.jobApplication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobApplicationFindFirstArgs>(args?: SelectSubset<T, JobApplicationFindFirstArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobApplication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationFindFirstOrThrowArgs} args - Arguments to find a JobApplication
     * @example
     * // Get one JobApplication
     * const jobApplication = await prisma.jobApplication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobApplicationFindFirstOrThrowArgs>(args?: SelectSubset<T, JobApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JobApplications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobApplications
     * const jobApplications = await prisma.jobApplication.findMany()
     * 
     * // Get first 10 JobApplications
     * const jobApplications = await prisma.jobApplication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobApplicationWithIdOnly = await prisma.jobApplication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobApplicationFindManyArgs>(args?: SelectSubset<T, JobApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JobApplication.
     * @param {JobApplicationCreateArgs} args - Arguments to create a JobApplication.
     * @example
     * // Create one JobApplication
     * const JobApplication = await prisma.jobApplication.create({
     *   data: {
     *     // ... data to create a JobApplication
     *   }
     * })
     * 
     */
    create<T extends JobApplicationCreateArgs>(args: SelectSubset<T, JobApplicationCreateArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JobApplications.
     * @param {JobApplicationCreateManyArgs} args - Arguments to create many JobApplications.
     * @example
     * // Create many JobApplications
     * const jobApplication = await prisma.jobApplication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobApplicationCreateManyArgs>(args?: SelectSubset<T, JobApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a JobApplication.
     * @param {JobApplicationDeleteArgs} args - Arguments to delete one JobApplication.
     * @example
     * // Delete one JobApplication
     * const JobApplication = await prisma.jobApplication.delete({
     *   where: {
     *     // ... filter to delete one JobApplication
     *   }
     * })
     * 
     */
    delete<T extends JobApplicationDeleteArgs>(args: SelectSubset<T, JobApplicationDeleteArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JobApplication.
     * @param {JobApplicationUpdateArgs} args - Arguments to update one JobApplication.
     * @example
     * // Update one JobApplication
     * const jobApplication = await prisma.jobApplication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobApplicationUpdateArgs>(args: SelectSubset<T, JobApplicationUpdateArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JobApplications.
     * @param {JobApplicationDeleteManyArgs} args - Arguments to filter JobApplications to delete.
     * @example
     * // Delete a few JobApplications
     * const { count } = await prisma.jobApplication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobApplicationDeleteManyArgs>(args?: SelectSubset<T, JobApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobApplications
     * const jobApplication = await prisma.jobApplication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobApplicationUpdateManyArgs>(args: SelectSubset<T, JobApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one JobApplication.
     * @param {JobApplicationUpsertArgs} args - Arguments to update or create a JobApplication.
     * @example
     * // Update or create a JobApplication
     * const jobApplication = await prisma.jobApplication.upsert({
     *   create: {
     *     // ... data to create a JobApplication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobApplication we want to update
     *   }
     * })
     */
    upsert<T extends JobApplicationUpsertArgs>(args: SelectSubset<T, JobApplicationUpsertArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JobApplications that matches the filter.
     * @param {JobApplicationFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const jobApplication = await prisma.jobApplication.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: JobApplicationFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a JobApplication.
     * @param {JobApplicationAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const jobApplication = await prisma.jobApplication.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: JobApplicationAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of JobApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationCountArgs} args - Arguments to filter JobApplications to count.
     * @example
     * // Count the number of JobApplications
     * const count = await prisma.jobApplication.count({
     *   where: {
     *     // ... the filter for the JobApplications we want to count
     *   }
     * })
    **/
    count<T extends JobApplicationCountArgs>(
      args?: Subset<T, JobApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JobApplicationAggregateArgs>(args: Subset<T, JobApplicationAggregateArgs>): Prisma.PrismaPromise<GetJobApplicationAggregateType<T>>

    /**
     * Group by JobApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JobApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobApplicationGroupByArgs['orderBy'] }
        : { orderBy?: JobApplicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JobApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JobApplication model
   */
  readonly fields: JobApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobApplication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jobPost<T extends JobPostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JobPostDefaultArgs<ExtArgs>>): Prisma__JobPostClient<$Result.GetResult<Prisma.$JobPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    applicant<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JobApplication model
   */
  interface JobApplicationFieldRefs {
    readonly id: FieldRef<"JobApplication", 'String'>
    readonly jobPostId: FieldRef<"JobApplication", 'String'>
    readonly applicantId: FieldRef<"JobApplication", 'String'>
    readonly resumeLetter: FieldRef<"JobApplication", 'String'>
    readonly expectedSalary: FieldRef<"JobApplication", 'Int'>
    readonly availability: FieldRef<"JobApplication", 'String'>
    readonly resumeBlobName: FieldRef<"JobApplication", 'String'>
    readonly status: FieldRef<"JobApplication", 'ApplicationStatus'>
    readonly createdAt: FieldRef<"JobApplication", 'DateTime'>
    readonly updatedAt: FieldRef<"JobApplication", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JobApplication findUnique
   */
  export type JobApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * Filter, which JobApplication to fetch.
     */
    where: JobApplicationWhereUniqueInput
  }

  /**
   * JobApplication findUniqueOrThrow
   */
  export type JobApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * Filter, which JobApplication to fetch.
     */
    where: JobApplicationWhereUniqueInput
  }

  /**
   * JobApplication findFirst
   */
  export type JobApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * Filter, which JobApplication to fetch.
     */
    where?: JobApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobApplications to fetch.
     */
    orderBy?: JobApplicationOrderByWithRelationInput | JobApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobApplications.
     */
    cursor?: JobApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobApplications.
     */
    distinct?: JobApplicationScalarFieldEnum | JobApplicationScalarFieldEnum[]
  }

  /**
   * JobApplication findFirstOrThrow
   */
  export type JobApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * Filter, which JobApplication to fetch.
     */
    where?: JobApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobApplications to fetch.
     */
    orderBy?: JobApplicationOrderByWithRelationInput | JobApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobApplications.
     */
    cursor?: JobApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobApplications.
     */
    distinct?: JobApplicationScalarFieldEnum | JobApplicationScalarFieldEnum[]
  }

  /**
   * JobApplication findMany
   */
  export type JobApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * Filter, which JobApplications to fetch.
     */
    where?: JobApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobApplications to fetch.
     */
    orderBy?: JobApplicationOrderByWithRelationInput | JobApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobApplications.
     */
    cursor?: JobApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobApplications.
     */
    skip?: number
    distinct?: JobApplicationScalarFieldEnum | JobApplicationScalarFieldEnum[]
  }

  /**
   * JobApplication create
   */
  export type JobApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * The data needed to create a JobApplication.
     */
    data: XOR<JobApplicationCreateInput, JobApplicationUncheckedCreateInput>
  }

  /**
   * JobApplication createMany
   */
  export type JobApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobApplications.
     */
    data: JobApplicationCreateManyInput | JobApplicationCreateManyInput[]
  }

  /**
   * JobApplication update
   */
  export type JobApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * The data needed to update a JobApplication.
     */
    data: XOR<JobApplicationUpdateInput, JobApplicationUncheckedUpdateInput>
    /**
     * Choose, which JobApplication to update.
     */
    where: JobApplicationWhereUniqueInput
  }

  /**
   * JobApplication updateMany
   */
  export type JobApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobApplications.
     */
    data: XOR<JobApplicationUpdateManyMutationInput, JobApplicationUncheckedUpdateManyInput>
    /**
     * Filter which JobApplications to update
     */
    where?: JobApplicationWhereInput
    /**
     * Limit how many JobApplications to update.
     */
    limit?: number
  }

  /**
   * JobApplication upsert
   */
  export type JobApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * The filter to search for the JobApplication to update in case it exists.
     */
    where: JobApplicationWhereUniqueInput
    /**
     * In case the JobApplication found by the `where` argument doesn't exist, create a new JobApplication with this data.
     */
    create: XOR<JobApplicationCreateInput, JobApplicationUncheckedCreateInput>
    /**
     * In case the JobApplication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobApplicationUpdateInput, JobApplicationUncheckedUpdateInput>
  }

  /**
   * JobApplication delete
   */
  export type JobApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
    /**
     * Filter which JobApplication to delete.
     */
    where: JobApplicationWhereUniqueInput
  }

  /**
   * JobApplication deleteMany
   */
  export type JobApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobApplications to delete
     */
    where?: JobApplicationWhereInput
    /**
     * Limit how many JobApplications to delete.
     */
    limit?: number
  }

  /**
   * JobApplication findRaw
   */
  export type JobApplicationFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * JobApplication aggregateRaw
   */
  export type JobApplicationAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * JobApplication without action
   */
  export type JobApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobApplicationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    googleId: 'googleId',
    linkedinId: 'linkedinId',
    microsoftId: 'microsoftId',
    profilePic: 'profilePic',
    profilePicOriginal: 'profilePicOriginal',
    profilePicCrop: 'profilePicCrop',
    coverPhoto: 'coverPhoto',
    coverPhotoOriginal: 'coverPhotoOriginal',
    coverPhotoCrop: 'coverPhotoCrop',
    title: 'title',
    location: 'location',
    about: 'about',
    connections: 'connections',
    phoneNo: 'phoneNo',
    phonePublic: 'phonePublic',
    emailPublic: 'emailPublic',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ExperienceScalarFieldEnum: {
    id: 'id',
    title: 'title',
    employmentType: 'employmentType',
    company: 'company',
    startMonth: 'startMonth',
    startYear: 'startYear',
    endMonth: 'endMonth',
    endYear: 'endYear',
    isCurrent: 'isCurrent',
    userId: 'userId'
  };

  export type ExperienceScalarFieldEnum = (typeof ExperienceScalarFieldEnum)[keyof typeof ExperienceScalarFieldEnum]


  export const EducationScalarFieldEnum: {
    id: 'id',
    school: 'school',
    degree: 'degree',
    fieldOfStudy: 'fieldOfStudy',
    startMonth: 'startMonth',
    startYear: 'startYear',
    endMonth: 'endMonth',
    endYear: 'endYear',
    userId: 'userId'
  };

  export type EducationScalarFieldEnum = (typeof EducationScalarFieldEnum)[keyof typeof EducationScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    username: 'username',
    profilePic: 'profilePic',
    postType: 'postType',
    visibility: 'visibility',
    title: 'title',
    content: 'content',
    media: 'media',
    mediaTypes: 'mediaTypes',
    hasLinks: 'hasLinks',
    links: 'links',
    commentsDisabled: 'commentsDisabled',
    commentCount: 'commentCount',
    likeCount: 'likeCount',
    shareCount: 'shareCount',
    savedCount: 'savedCount',
    pollOptions: 'pollOptions',
    pollEndsAt: 'pollEndsAt',
    pollVotes: 'pollVotes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    username: 'username',
    profilePic: 'profilePic',
    content: 'content',
    media: 'media',
    likeCount: 'likeCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    postId: 'postId',
    parentId: 'parentId',
    depth: 'depth'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const ConnectionRequestScalarFieldEnum: {
    id: 'id',
    fromUserId: 'fromUserId',
    toUserId: 'toUserId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ConnectionRequestScalarFieldEnum = (typeof ConnectionRequestScalarFieldEnum)[keyof typeof ConnectionRequestScalarFieldEnum]


  export const ConnectionScalarFieldEnum: {
    id: 'id',
    userAId: 'userAId',
    userBId: 'userBId',
    createdAt: 'createdAt'
  };

  export type ConnectionScalarFieldEnum = (typeof ConnectionScalarFieldEnum)[keyof typeof ConnectionScalarFieldEnum]


  export const PostInteractionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    postId: 'postId',
    type: 'type',
    createdAt: 'createdAt'
  };

  export type PostInteractionScalarFieldEnum = (typeof PostInteractionScalarFieldEnum)[keyof typeof PostInteractionScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    fromUserId: 'fromUserId',
    type: 'type',
    entityId: 'entityId',
    isRead: 'isRead',
    createdAt: 'createdAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const ConversationScalarFieldEnum: {
    id: 'id',
    userAId: 'userAId',
    userBId: 'userBId',
    lastMessageAt: 'lastMessageAt',
    lastMessageText: 'lastMessageText',
    lastMessageSenderId: 'lastMessageSenderId',
    userALastReadAt: 'userALastReadAt',
    userBLastReadAt: 'userBLastReadAt',
    userAUnreadCount: 'userAUnreadCount',
    userBUnreadCount: 'userBUnreadCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ConversationScalarFieldEnum = (typeof ConversationScalarFieldEnum)[keyof typeof ConversationScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    conversationId: 'conversationId',
    senderId: 'senderId',
    receiverId: 'receiverId',
    text: 'text',
    media: 'media',
    createdAt: 'createdAt'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const JobPostScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    jobTitle: 'jobTitle',
    companyName: 'companyName',
    location: 'location',
    locationType: 'locationType',
    jobDetails: 'jobDetails',
    jobRequirements: 'jobRequirements',
    employmentType: 'employmentType',
    positionsAvailable: 'positionsAvailable',
    positionsFilled: 'positionsFilled',
    salaryMin: 'salaryMin',
    salaryMax: 'salaryMax',
    salaryCurrency: 'salaryCurrency',
    deadline: 'deadline',
    status: 'status',
    applyUrl: 'applyUrl',
    allowExternalApply: 'allowExternalApply',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type JobPostScalarFieldEnum = (typeof JobPostScalarFieldEnum)[keyof typeof JobPostScalarFieldEnum]


  export const JobApplicationScalarFieldEnum: {
    id: 'id',
    jobPostId: 'jobPostId',
    applicantId: 'applicantId',
    resumeLetter: 'resumeLetter',
    expectedSalary: 'expectedSalary',
    availability: 'availability',
    resumeBlobName: 'resumeBlobName',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type JobApplicationScalarFieldEnum = (typeof JobApplicationScalarFieldEnum)[keyof typeof JobApplicationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'EmploymentType'
   */
  export type EnumEmploymentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmploymentType'>
    


  /**
   * Reference to a field of type 'EmploymentType[]'
   */
  export type ListEnumEmploymentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmploymentType[]'>
    


  /**
   * Reference to a field of type 'RequestStatus'
   */
  export type EnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus'>
    


  /**
   * Reference to a field of type 'RequestStatus[]'
   */
  export type ListEnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus[]'>
    


  /**
   * Reference to a field of type 'PostInteractionType'
   */
  export type EnumPostInteractionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PostInteractionType'>
    


  /**
   * Reference to a field of type 'PostInteractionType[]'
   */
  export type ListEnumPostInteractionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PostInteractionType[]'>
    


  /**
   * Reference to a field of type 'NotificationType'
   */
  export type EnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType'>
    


  /**
   * Reference to a field of type 'NotificationType[]'
   */
  export type ListEnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType[]'>
    


  /**
   * Reference to a field of type 'JobLocationType'
   */
  export type EnumJobLocationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobLocationType'>
    


  /**
   * Reference to a field of type 'JobLocationType[]'
   */
  export type ListEnumJobLocationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobLocationType[]'>
    


  /**
   * Reference to a field of type 'JobStatus'
   */
  export type EnumJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobStatus'>
    


  /**
   * Reference to a field of type 'JobStatus[]'
   */
  export type ListEnumJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JobStatus[]'>
    


  /**
   * Reference to a field of type 'ApplicationStatus'
   */
  export type EnumApplicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApplicationStatus'>
    


  /**
   * Reference to a field of type 'ApplicationStatus[]'
   */
  export type ListEnumApplicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApplicationStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    googleId?: StringNullableFilter<"User"> | string | null
    linkedinId?: StringNullableFilter<"User"> | string | null
    microsoftId?: StringNullableFilter<"User"> | string | null
    profilePic?: StringNullableFilter<"User"> | string | null
    profilePicOriginal?: StringNullableFilter<"User"> | string | null
    profilePicCrop?: JsonNullableFilter<"User">
    coverPhoto?: StringNullableFilter<"User"> | string | null
    coverPhotoOriginal?: StringNullableFilter<"User"> | string | null
    coverPhotoCrop?: JsonNullableFilter<"User">
    title?: StringNullableFilter<"User"> | string | null
    location?: StringNullableFilter<"User"> | string | null
    about?: StringNullableFilter<"User"> | string | null
    connections?: IntFilter<"User"> | number
    phoneNo?: StringNullableFilter<"User"> | string | null
    phonePublic?: BoolFilter<"User"> | boolean
    emailPublic?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    jobApplications?: JobApplicationListRelationFilter
    experience?: ExperienceListRelationFilter
    education?: EducationListRelationFilter
    posts?: PostListRelationFilter
    sentConnectionRequests?: ConnectionRequestListRelationFilter
    receivedConnectionRequests?: ConnectionRequestListRelationFilter
    notificationsReceived?: NotificationListRelationFilter
    notificationsSent?: NotificationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    googleId?: SortOrder
    linkedinId?: SortOrder
    microsoftId?: SortOrder
    profilePic?: SortOrder
    profilePicOriginal?: SortOrder
    profilePicCrop?: SortOrder
    coverPhoto?: SortOrder
    coverPhotoOriginal?: SortOrder
    coverPhotoCrop?: SortOrder
    title?: SortOrder
    location?: SortOrder
    about?: SortOrder
    connections?: SortOrder
    phoneNo?: SortOrder
    phonePublic?: SortOrder
    emailPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    jobApplications?: JobApplicationOrderByRelationAggregateInput
    experience?: ExperienceOrderByRelationAggregateInput
    education?: EducationOrderByRelationAggregateInput
    posts?: PostOrderByRelationAggregateInput
    sentConnectionRequests?: ConnectionRequestOrderByRelationAggregateInput
    receivedConnectionRequests?: ConnectionRequestOrderByRelationAggregateInput
    notificationsReceived?: NotificationOrderByRelationAggregateInput
    notificationsSent?: NotificationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    googleId?: StringNullableFilter<"User"> | string | null
    linkedinId?: StringNullableFilter<"User"> | string | null
    microsoftId?: StringNullableFilter<"User"> | string | null
    profilePic?: StringNullableFilter<"User"> | string | null
    profilePicOriginal?: StringNullableFilter<"User"> | string | null
    profilePicCrop?: JsonNullableFilter<"User">
    coverPhoto?: StringNullableFilter<"User"> | string | null
    coverPhotoOriginal?: StringNullableFilter<"User"> | string | null
    coverPhotoCrop?: JsonNullableFilter<"User">
    title?: StringNullableFilter<"User"> | string | null
    location?: StringNullableFilter<"User"> | string | null
    about?: StringNullableFilter<"User"> | string | null
    connections?: IntFilter<"User"> | number
    phoneNo?: StringNullableFilter<"User"> | string | null
    phonePublic?: BoolFilter<"User"> | boolean
    emailPublic?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    jobApplications?: JobApplicationListRelationFilter
    experience?: ExperienceListRelationFilter
    education?: EducationListRelationFilter
    posts?: PostListRelationFilter
    sentConnectionRequests?: ConnectionRequestListRelationFilter
    receivedConnectionRequests?: ConnectionRequestListRelationFilter
    notificationsReceived?: NotificationListRelationFilter
    notificationsSent?: NotificationListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    googleId?: SortOrder
    linkedinId?: SortOrder
    microsoftId?: SortOrder
    profilePic?: SortOrder
    profilePicOriginal?: SortOrder
    profilePicCrop?: SortOrder
    coverPhoto?: SortOrder
    coverPhotoOriginal?: SortOrder
    coverPhotoCrop?: SortOrder
    title?: SortOrder
    location?: SortOrder
    about?: SortOrder
    connections?: SortOrder
    phoneNo?: SortOrder
    phonePublic?: SortOrder
    emailPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    googleId?: StringNullableWithAggregatesFilter<"User"> | string | null
    linkedinId?: StringNullableWithAggregatesFilter<"User"> | string | null
    microsoftId?: StringNullableWithAggregatesFilter<"User"> | string | null
    profilePic?: StringNullableWithAggregatesFilter<"User"> | string | null
    profilePicOriginal?: StringNullableWithAggregatesFilter<"User"> | string | null
    profilePicCrop?: JsonNullableWithAggregatesFilter<"User">
    coverPhoto?: StringNullableWithAggregatesFilter<"User"> | string | null
    coverPhotoOriginal?: StringNullableWithAggregatesFilter<"User"> | string | null
    coverPhotoCrop?: JsonNullableWithAggregatesFilter<"User">
    title?: StringNullableWithAggregatesFilter<"User"> | string | null
    location?: StringNullableWithAggregatesFilter<"User"> | string | null
    about?: StringNullableWithAggregatesFilter<"User"> | string | null
    connections?: IntWithAggregatesFilter<"User"> | number
    phoneNo?: StringNullableWithAggregatesFilter<"User"> | string | null
    phonePublic?: BoolWithAggregatesFilter<"User"> | boolean
    emailPublic?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ExperienceWhereInput = {
    AND?: ExperienceWhereInput | ExperienceWhereInput[]
    OR?: ExperienceWhereInput[]
    NOT?: ExperienceWhereInput | ExperienceWhereInput[]
    id?: StringFilter<"Experience"> | string
    title?: StringFilter<"Experience"> | string
    employmentType?: EnumEmploymentTypeFilter<"Experience"> | $Enums.EmploymentType
    company?: StringFilter<"Experience"> | string
    startMonth?: IntFilter<"Experience"> | number
    startYear?: IntFilter<"Experience"> | number
    endMonth?: IntNullableFilter<"Experience"> | number | null
    endYear?: IntNullableFilter<"Experience"> | number | null
    isCurrent?: BoolFilter<"Experience"> | boolean
    userId?: StringFilter<"Experience"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ExperienceOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    employmentType?: SortOrder
    company?: SortOrder
    startMonth?: SortOrder
    startYear?: SortOrder
    endMonth?: SortOrder
    endYear?: SortOrder
    isCurrent?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ExperienceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExperienceWhereInput | ExperienceWhereInput[]
    OR?: ExperienceWhereInput[]
    NOT?: ExperienceWhereInput | ExperienceWhereInput[]
    title?: StringFilter<"Experience"> | string
    employmentType?: EnumEmploymentTypeFilter<"Experience"> | $Enums.EmploymentType
    company?: StringFilter<"Experience"> | string
    startMonth?: IntFilter<"Experience"> | number
    startYear?: IntFilter<"Experience"> | number
    endMonth?: IntNullableFilter<"Experience"> | number | null
    endYear?: IntNullableFilter<"Experience"> | number | null
    isCurrent?: BoolFilter<"Experience"> | boolean
    userId?: StringFilter<"Experience"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ExperienceOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    employmentType?: SortOrder
    company?: SortOrder
    startMonth?: SortOrder
    startYear?: SortOrder
    endMonth?: SortOrder
    endYear?: SortOrder
    isCurrent?: SortOrder
    userId?: SortOrder
    _count?: ExperienceCountOrderByAggregateInput
    _avg?: ExperienceAvgOrderByAggregateInput
    _max?: ExperienceMaxOrderByAggregateInput
    _min?: ExperienceMinOrderByAggregateInput
    _sum?: ExperienceSumOrderByAggregateInput
  }

  export type ExperienceScalarWhereWithAggregatesInput = {
    AND?: ExperienceScalarWhereWithAggregatesInput | ExperienceScalarWhereWithAggregatesInput[]
    OR?: ExperienceScalarWhereWithAggregatesInput[]
    NOT?: ExperienceScalarWhereWithAggregatesInput | ExperienceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Experience"> | string
    title?: StringWithAggregatesFilter<"Experience"> | string
    employmentType?: EnumEmploymentTypeWithAggregatesFilter<"Experience"> | $Enums.EmploymentType
    company?: StringWithAggregatesFilter<"Experience"> | string
    startMonth?: IntWithAggregatesFilter<"Experience"> | number
    startYear?: IntWithAggregatesFilter<"Experience"> | number
    endMonth?: IntNullableWithAggregatesFilter<"Experience"> | number | null
    endYear?: IntNullableWithAggregatesFilter<"Experience"> | number | null
    isCurrent?: BoolWithAggregatesFilter<"Experience"> | boolean
    userId?: StringWithAggregatesFilter<"Experience"> | string
  }

  export type EducationWhereInput = {
    AND?: EducationWhereInput | EducationWhereInput[]
    OR?: EducationWhereInput[]
    NOT?: EducationWhereInput | EducationWhereInput[]
    id?: StringFilter<"Education"> | string
    school?: StringFilter<"Education"> | string
    degree?: StringFilter<"Education"> | string
    fieldOfStudy?: StringFilter<"Education"> | string
    startMonth?: IntFilter<"Education"> | number
    startYear?: IntFilter<"Education"> | number
    endMonth?: IntFilter<"Education"> | number
    endYear?: IntFilter<"Education"> | number
    userId?: StringFilter<"Education"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type EducationOrderByWithRelationInput = {
    id?: SortOrder
    school?: SortOrder
    degree?: SortOrder
    fieldOfStudy?: SortOrder
    startMonth?: SortOrder
    startYear?: SortOrder
    endMonth?: SortOrder
    endYear?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type EducationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EducationWhereInput | EducationWhereInput[]
    OR?: EducationWhereInput[]
    NOT?: EducationWhereInput | EducationWhereInput[]
    school?: StringFilter<"Education"> | string
    degree?: StringFilter<"Education"> | string
    fieldOfStudy?: StringFilter<"Education"> | string
    startMonth?: IntFilter<"Education"> | number
    startYear?: IntFilter<"Education"> | number
    endMonth?: IntFilter<"Education"> | number
    endYear?: IntFilter<"Education"> | number
    userId?: StringFilter<"Education"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type EducationOrderByWithAggregationInput = {
    id?: SortOrder
    school?: SortOrder
    degree?: SortOrder
    fieldOfStudy?: SortOrder
    startMonth?: SortOrder
    startYear?: SortOrder
    endMonth?: SortOrder
    endYear?: SortOrder
    userId?: SortOrder
    _count?: EducationCountOrderByAggregateInput
    _avg?: EducationAvgOrderByAggregateInput
    _max?: EducationMaxOrderByAggregateInput
    _min?: EducationMinOrderByAggregateInput
    _sum?: EducationSumOrderByAggregateInput
  }

  export type EducationScalarWhereWithAggregatesInput = {
    AND?: EducationScalarWhereWithAggregatesInput | EducationScalarWhereWithAggregatesInput[]
    OR?: EducationScalarWhereWithAggregatesInput[]
    NOT?: EducationScalarWhereWithAggregatesInput | EducationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Education"> | string
    school?: StringWithAggregatesFilter<"Education"> | string
    degree?: StringWithAggregatesFilter<"Education"> | string
    fieldOfStudy?: StringWithAggregatesFilter<"Education"> | string
    startMonth?: IntWithAggregatesFilter<"Education"> | number
    startYear?: IntWithAggregatesFilter<"Education"> | number
    endMonth?: IntWithAggregatesFilter<"Education"> | number
    endYear?: IntWithAggregatesFilter<"Education"> | number
    userId?: StringWithAggregatesFilter<"Education"> | string
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: StringFilter<"Post"> | string
    userId?: StringFilter<"Post"> | string
    username?: StringFilter<"Post"> | string
    profilePic?: StringNullableFilter<"Post"> | string | null
    postType?: StringFilter<"Post"> | string
    visibility?: StringNullableFilter<"Post"> | string | null
    title?: StringNullableFilter<"Post"> | string | null
    content?: StringFilter<"Post"> | string
    media?: JsonNullableFilter<"Post">
    mediaTypes?: StringNullableListFilter<"Post">
    hasLinks?: BoolFilter<"Post"> | boolean
    links?: JsonNullableFilter<"Post">
    commentsDisabled?: BoolFilter<"Post"> | boolean
    commentCount?: IntFilter<"Post"> | number
    likeCount?: IntFilter<"Post"> | number
    shareCount?: IntFilter<"Post"> | number
    savedCount?: IntFilter<"Post"> | number
    pollOptions?: StringNullableListFilter<"Post">
    pollEndsAt?: DateTimeNullableFilter<"Post"> | Date | string | null
    pollVotes?: JsonNullableFilter<"Post">
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    jobPost?: XOR<JobPostNullableScalarRelationFilter, JobPostWhereInput> | null
    comments?: CommentListRelationFilter
    interactions?: PostInteractionListRelationFilter
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    profilePic?: SortOrder
    postType?: SortOrder
    visibility?: SortOrder
    title?: SortOrder
    content?: SortOrder
    media?: SortOrder
    mediaTypes?: SortOrder
    hasLinks?: SortOrder
    links?: SortOrder
    commentsDisabled?: SortOrder
    commentCount?: SortOrder
    likeCount?: SortOrder
    shareCount?: SortOrder
    savedCount?: SortOrder
    pollOptions?: SortOrder
    pollEndsAt?: SortOrder
    pollVotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    jobPost?: JobPostOrderByWithRelationInput
    comments?: CommentOrderByRelationAggregateInput
    interactions?: PostInteractionOrderByRelationAggregateInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    userId?: StringFilter<"Post"> | string
    username?: StringFilter<"Post"> | string
    profilePic?: StringNullableFilter<"Post"> | string | null
    postType?: StringFilter<"Post"> | string
    visibility?: StringNullableFilter<"Post"> | string | null
    title?: StringNullableFilter<"Post"> | string | null
    content?: StringFilter<"Post"> | string
    media?: JsonNullableFilter<"Post">
    mediaTypes?: StringNullableListFilter<"Post">
    hasLinks?: BoolFilter<"Post"> | boolean
    links?: JsonNullableFilter<"Post">
    commentsDisabled?: BoolFilter<"Post"> | boolean
    commentCount?: IntFilter<"Post"> | number
    likeCount?: IntFilter<"Post"> | number
    shareCount?: IntFilter<"Post"> | number
    savedCount?: IntFilter<"Post"> | number
    pollOptions?: StringNullableListFilter<"Post">
    pollEndsAt?: DateTimeNullableFilter<"Post"> | Date | string | null
    pollVotes?: JsonNullableFilter<"Post">
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    jobPost?: XOR<JobPostNullableScalarRelationFilter, JobPostWhereInput> | null
    comments?: CommentListRelationFilter
    interactions?: PostInteractionListRelationFilter
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    profilePic?: SortOrder
    postType?: SortOrder
    visibility?: SortOrder
    title?: SortOrder
    content?: SortOrder
    media?: SortOrder
    mediaTypes?: SortOrder
    hasLinks?: SortOrder
    links?: SortOrder
    commentsDisabled?: SortOrder
    commentCount?: SortOrder
    likeCount?: SortOrder
    shareCount?: SortOrder
    savedCount?: SortOrder
    pollOptions?: SortOrder
    pollEndsAt?: SortOrder
    pollVotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Post"> | string
    userId?: StringWithAggregatesFilter<"Post"> | string
    username?: StringWithAggregatesFilter<"Post"> | string
    profilePic?: StringNullableWithAggregatesFilter<"Post"> | string | null
    postType?: StringWithAggregatesFilter<"Post"> | string
    visibility?: StringNullableWithAggregatesFilter<"Post"> | string | null
    title?: StringNullableWithAggregatesFilter<"Post"> | string | null
    content?: StringWithAggregatesFilter<"Post"> | string
    media?: JsonNullableWithAggregatesFilter<"Post">
    mediaTypes?: StringNullableListFilter<"Post">
    hasLinks?: BoolWithAggregatesFilter<"Post"> | boolean
    links?: JsonNullableWithAggregatesFilter<"Post">
    commentsDisabled?: BoolWithAggregatesFilter<"Post"> | boolean
    commentCount?: IntWithAggregatesFilter<"Post"> | number
    likeCount?: IntWithAggregatesFilter<"Post"> | number
    shareCount?: IntWithAggregatesFilter<"Post"> | number
    savedCount?: IntWithAggregatesFilter<"Post"> | number
    pollOptions?: StringNullableListFilter<"Post">
    pollEndsAt?: DateTimeNullableWithAggregatesFilter<"Post"> | Date | string | null
    pollVotes?: JsonNullableWithAggregatesFilter<"Post">
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: StringFilter<"Comment"> | string
    userId?: StringFilter<"Comment"> | string
    username?: StringFilter<"Comment"> | string
    profilePic?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    media?: JsonNullableFilter<"Comment">
    likeCount?: IntFilter<"Comment"> | number
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    postId?: StringFilter<"Comment"> | string
    parentId?: StringNullableFilter<"Comment"> | string | null
    depth?: IntFilter<"Comment"> | number
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    parent?: XOR<CommentNullableScalarRelationFilter, CommentWhereInput> | null
    replies?: CommentListRelationFilter
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    profilePic?: SortOrder
    content?: SortOrder
    media?: SortOrder
    likeCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    postId?: SortOrder
    parentId?: SortOrder
    depth?: SortOrder
    post?: PostOrderByWithRelationInput
    parent?: CommentOrderByWithRelationInput
    replies?: CommentOrderByRelationAggregateInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    userId?: StringFilter<"Comment"> | string
    username?: StringFilter<"Comment"> | string
    profilePic?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    media?: JsonNullableFilter<"Comment">
    likeCount?: IntFilter<"Comment"> | number
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    postId?: StringFilter<"Comment"> | string
    parentId?: StringNullableFilter<"Comment"> | string | null
    depth?: IntFilter<"Comment"> | number
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    parent?: XOR<CommentNullableScalarRelationFilter, CommentWhereInput> | null
    replies?: CommentListRelationFilter
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    profilePic?: SortOrder
    content?: SortOrder
    media?: SortOrder
    likeCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    postId?: SortOrder
    parentId?: SortOrder
    depth?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _avg?: CommentAvgOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
    _sum?: CommentSumOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comment"> | string
    userId?: StringWithAggregatesFilter<"Comment"> | string
    username?: StringWithAggregatesFilter<"Comment"> | string
    profilePic?: StringWithAggregatesFilter<"Comment"> | string
    content?: StringWithAggregatesFilter<"Comment"> | string
    media?: JsonNullableWithAggregatesFilter<"Comment">
    likeCount?: IntWithAggregatesFilter<"Comment"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    postId?: StringWithAggregatesFilter<"Comment"> | string
    parentId?: StringNullableWithAggregatesFilter<"Comment"> | string | null
    depth?: IntWithAggregatesFilter<"Comment"> | number
  }

  export type ConnectionRequestWhereInput = {
    AND?: ConnectionRequestWhereInput | ConnectionRequestWhereInput[]
    OR?: ConnectionRequestWhereInput[]
    NOT?: ConnectionRequestWhereInput | ConnectionRequestWhereInput[]
    id?: StringFilter<"ConnectionRequest"> | string
    fromUserId?: StringFilter<"ConnectionRequest"> | string
    toUserId?: StringFilter<"ConnectionRequest"> | string
    status?: EnumRequestStatusFilter<"ConnectionRequest"> | $Enums.RequestStatus
    createdAt?: DateTimeFilter<"ConnectionRequest"> | Date | string
    updatedAt?: DateTimeFilter<"ConnectionRequest"> | Date | string
    fromUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    toUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ConnectionRequestOrderByWithRelationInput = {
    id?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fromUser?: UserOrderByWithRelationInput
    toUser?: UserOrderByWithRelationInput
  }

  export type ConnectionRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConnectionRequestWhereInput | ConnectionRequestWhereInput[]
    OR?: ConnectionRequestWhereInput[]
    NOT?: ConnectionRequestWhereInput | ConnectionRequestWhereInput[]
    fromUserId?: StringFilter<"ConnectionRequest"> | string
    toUserId?: StringFilter<"ConnectionRequest"> | string
    status?: EnumRequestStatusFilter<"ConnectionRequest"> | $Enums.RequestStatus
    createdAt?: DateTimeFilter<"ConnectionRequest"> | Date | string
    updatedAt?: DateTimeFilter<"ConnectionRequest"> | Date | string
    fromUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    toUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ConnectionRequestOrderByWithAggregationInput = {
    id?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ConnectionRequestCountOrderByAggregateInput
    _max?: ConnectionRequestMaxOrderByAggregateInput
    _min?: ConnectionRequestMinOrderByAggregateInput
  }

  export type ConnectionRequestScalarWhereWithAggregatesInput = {
    AND?: ConnectionRequestScalarWhereWithAggregatesInput | ConnectionRequestScalarWhereWithAggregatesInput[]
    OR?: ConnectionRequestScalarWhereWithAggregatesInput[]
    NOT?: ConnectionRequestScalarWhereWithAggregatesInput | ConnectionRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ConnectionRequest"> | string
    fromUserId?: StringWithAggregatesFilter<"ConnectionRequest"> | string
    toUserId?: StringWithAggregatesFilter<"ConnectionRequest"> | string
    status?: EnumRequestStatusWithAggregatesFilter<"ConnectionRequest"> | $Enums.RequestStatus
    createdAt?: DateTimeWithAggregatesFilter<"ConnectionRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ConnectionRequest"> | Date | string
  }

  export type ConnectionWhereInput = {
    AND?: ConnectionWhereInput | ConnectionWhereInput[]
    OR?: ConnectionWhereInput[]
    NOT?: ConnectionWhereInput | ConnectionWhereInput[]
    id?: StringFilter<"Connection"> | string
    userAId?: StringFilter<"Connection"> | string
    userBId?: StringFilter<"Connection"> | string
    createdAt?: DateTimeFilter<"Connection"> | Date | string
  }

  export type ConnectionOrderByWithRelationInput = {
    id?: SortOrder
    userAId?: SortOrder
    userBId?: SortOrder
    createdAt?: SortOrder
  }

  export type ConnectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userAId_userBId?: ConnectionUserAIdUserBIdCompoundUniqueInput
    AND?: ConnectionWhereInput | ConnectionWhereInput[]
    OR?: ConnectionWhereInput[]
    NOT?: ConnectionWhereInput | ConnectionWhereInput[]
    userAId?: StringFilter<"Connection"> | string
    userBId?: StringFilter<"Connection"> | string
    createdAt?: DateTimeFilter<"Connection"> | Date | string
  }, "id" | "userAId_userBId">

  export type ConnectionOrderByWithAggregationInput = {
    id?: SortOrder
    userAId?: SortOrder
    userBId?: SortOrder
    createdAt?: SortOrder
    _count?: ConnectionCountOrderByAggregateInput
    _max?: ConnectionMaxOrderByAggregateInput
    _min?: ConnectionMinOrderByAggregateInput
  }

  export type ConnectionScalarWhereWithAggregatesInput = {
    AND?: ConnectionScalarWhereWithAggregatesInput | ConnectionScalarWhereWithAggregatesInput[]
    OR?: ConnectionScalarWhereWithAggregatesInput[]
    NOT?: ConnectionScalarWhereWithAggregatesInput | ConnectionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Connection"> | string
    userAId?: StringWithAggregatesFilter<"Connection"> | string
    userBId?: StringWithAggregatesFilter<"Connection"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Connection"> | Date | string
  }

  export type PostInteractionWhereInput = {
    AND?: PostInteractionWhereInput | PostInteractionWhereInput[]
    OR?: PostInteractionWhereInput[]
    NOT?: PostInteractionWhereInput | PostInteractionWhereInput[]
    id?: StringFilter<"PostInteraction"> | string
    userId?: StringFilter<"PostInteraction"> | string
    postId?: StringFilter<"PostInteraction"> | string
    type?: EnumPostInteractionTypeFilter<"PostInteraction"> | $Enums.PostInteractionType
    createdAt?: DateTimeFilter<"PostInteraction"> | Date | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }

  export type PostInteractionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    post?: PostOrderByWithRelationInput
  }

  export type PostInteractionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_postId_type?: PostInteractionUserIdPostIdTypeCompoundUniqueInput
    AND?: PostInteractionWhereInput | PostInteractionWhereInput[]
    OR?: PostInteractionWhereInput[]
    NOT?: PostInteractionWhereInput | PostInteractionWhereInput[]
    userId?: StringFilter<"PostInteraction"> | string
    postId?: StringFilter<"PostInteraction"> | string
    type?: EnumPostInteractionTypeFilter<"PostInteraction"> | $Enums.PostInteractionType
    createdAt?: DateTimeFilter<"PostInteraction"> | Date | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }, "id" | "userId_postId_type">

  export type PostInteractionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    _count?: PostInteractionCountOrderByAggregateInput
    _max?: PostInteractionMaxOrderByAggregateInput
    _min?: PostInteractionMinOrderByAggregateInput
  }

  export type PostInteractionScalarWhereWithAggregatesInput = {
    AND?: PostInteractionScalarWhereWithAggregatesInput | PostInteractionScalarWhereWithAggregatesInput[]
    OR?: PostInteractionScalarWhereWithAggregatesInput[]
    NOT?: PostInteractionScalarWhereWithAggregatesInput | PostInteractionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PostInteraction"> | string
    userId?: StringWithAggregatesFilter<"PostInteraction"> | string
    postId?: StringWithAggregatesFilter<"PostInteraction"> | string
    type?: EnumPostInteractionTypeWithAggregatesFilter<"PostInteraction"> | $Enums.PostInteractionType
    createdAt?: DateTimeWithAggregatesFilter<"PostInteraction"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    fromUserId?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    entityId?: StringNullableFilter<"Notification"> | string | null
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    fromUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    fromUserId?: SortOrder
    type?: SortOrder
    entityId?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    fromUser?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: StringFilter<"Notification"> | string
    fromUserId?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    entityId?: StringNullableFilter<"Notification"> | string | null
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    fromUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    fromUserId?: SortOrder
    type?: SortOrder
    entityId?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    userId?: StringWithAggregatesFilter<"Notification"> | string
    fromUserId?: StringWithAggregatesFilter<"Notification"> | string
    type?: EnumNotificationTypeWithAggregatesFilter<"Notification"> | $Enums.NotificationType
    entityId?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    isRead?: BoolWithAggregatesFilter<"Notification"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type ConversationWhereInput = {
    AND?: ConversationWhereInput | ConversationWhereInput[]
    OR?: ConversationWhereInput[]
    NOT?: ConversationWhereInput | ConversationWhereInput[]
    id?: StringFilter<"Conversation"> | string
    userAId?: StringFilter<"Conversation"> | string
    userBId?: StringFilter<"Conversation"> | string
    lastMessageAt?: DateTimeNullableFilter<"Conversation"> | Date | string | null
    lastMessageText?: StringNullableFilter<"Conversation"> | string | null
    lastMessageSenderId?: StringNullableFilter<"Conversation"> | string | null
    userALastReadAt?: DateTimeNullableFilter<"Conversation"> | Date | string | null
    userBLastReadAt?: DateTimeNullableFilter<"Conversation"> | Date | string | null
    userAUnreadCount?: IntFilter<"Conversation"> | number
    userBUnreadCount?: IntFilter<"Conversation"> | number
    createdAt?: DateTimeFilter<"Conversation"> | Date | string
    updatedAt?: DateTimeFilter<"Conversation"> | Date | string
    messages?: MessageListRelationFilter
  }

  export type ConversationOrderByWithRelationInput = {
    id?: SortOrder
    userAId?: SortOrder
    userBId?: SortOrder
    lastMessageAt?: SortOrder
    lastMessageText?: SortOrder
    lastMessageSenderId?: SortOrder
    userALastReadAt?: SortOrder
    userBLastReadAt?: SortOrder
    userAUnreadCount?: SortOrder
    userBUnreadCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    messages?: MessageOrderByRelationAggregateInput
  }

  export type ConversationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userAId_userBId?: ConversationUserAIdUserBIdCompoundUniqueInput
    AND?: ConversationWhereInput | ConversationWhereInput[]
    OR?: ConversationWhereInput[]
    NOT?: ConversationWhereInput | ConversationWhereInput[]
    userAId?: StringFilter<"Conversation"> | string
    userBId?: StringFilter<"Conversation"> | string
    lastMessageAt?: DateTimeNullableFilter<"Conversation"> | Date | string | null
    lastMessageText?: StringNullableFilter<"Conversation"> | string | null
    lastMessageSenderId?: StringNullableFilter<"Conversation"> | string | null
    userALastReadAt?: DateTimeNullableFilter<"Conversation"> | Date | string | null
    userBLastReadAt?: DateTimeNullableFilter<"Conversation"> | Date | string | null
    userAUnreadCount?: IntFilter<"Conversation"> | number
    userBUnreadCount?: IntFilter<"Conversation"> | number
    createdAt?: DateTimeFilter<"Conversation"> | Date | string
    updatedAt?: DateTimeFilter<"Conversation"> | Date | string
    messages?: MessageListRelationFilter
  }, "id" | "userAId_userBId">

  export type ConversationOrderByWithAggregationInput = {
    id?: SortOrder
    userAId?: SortOrder
    userBId?: SortOrder
    lastMessageAt?: SortOrder
    lastMessageText?: SortOrder
    lastMessageSenderId?: SortOrder
    userALastReadAt?: SortOrder
    userBLastReadAt?: SortOrder
    userAUnreadCount?: SortOrder
    userBUnreadCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ConversationCountOrderByAggregateInput
    _avg?: ConversationAvgOrderByAggregateInput
    _max?: ConversationMaxOrderByAggregateInput
    _min?: ConversationMinOrderByAggregateInput
    _sum?: ConversationSumOrderByAggregateInput
  }

  export type ConversationScalarWhereWithAggregatesInput = {
    AND?: ConversationScalarWhereWithAggregatesInput | ConversationScalarWhereWithAggregatesInput[]
    OR?: ConversationScalarWhereWithAggregatesInput[]
    NOT?: ConversationScalarWhereWithAggregatesInput | ConversationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Conversation"> | string
    userAId?: StringWithAggregatesFilter<"Conversation"> | string
    userBId?: StringWithAggregatesFilter<"Conversation"> | string
    lastMessageAt?: DateTimeNullableWithAggregatesFilter<"Conversation"> | Date | string | null
    lastMessageText?: StringNullableWithAggregatesFilter<"Conversation"> | string | null
    lastMessageSenderId?: StringNullableWithAggregatesFilter<"Conversation"> | string | null
    userALastReadAt?: DateTimeNullableWithAggregatesFilter<"Conversation"> | Date | string | null
    userBLastReadAt?: DateTimeNullableWithAggregatesFilter<"Conversation"> | Date | string | null
    userAUnreadCount?: IntWithAggregatesFilter<"Conversation"> | number
    userBUnreadCount?: IntWithAggregatesFilter<"Conversation"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Conversation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Conversation"> | Date | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: StringFilter<"Message"> | string
    conversationId?: StringFilter<"Message"> | string
    senderId?: StringFilter<"Message"> | string
    receiverId?: StringFilter<"Message"> | string
    text?: StringNullableFilter<"Message"> | string | null
    media?: JsonNullableFilter<"Message">
    createdAt?: DateTimeFilter<"Message"> | Date | string
    conversation?: XOR<ConversationScalarRelationFilter, ConversationWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    conversationId?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    text?: SortOrder
    media?: SortOrder
    createdAt?: SortOrder
    conversation?: ConversationOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    conversationId?: StringFilter<"Message"> | string
    senderId?: StringFilter<"Message"> | string
    receiverId?: StringFilter<"Message"> | string
    text?: StringNullableFilter<"Message"> | string | null
    media?: JsonNullableFilter<"Message">
    createdAt?: DateTimeFilter<"Message"> | Date | string
    conversation?: XOR<ConversationScalarRelationFilter, ConversationWhereInput>
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    conversationId?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    text?: SortOrder
    media?: SortOrder
    createdAt?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Message"> | string
    conversationId?: StringWithAggregatesFilter<"Message"> | string
    senderId?: StringWithAggregatesFilter<"Message"> | string
    receiverId?: StringWithAggregatesFilter<"Message"> | string
    text?: StringNullableWithAggregatesFilter<"Message"> | string | null
    media?: JsonNullableWithAggregatesFilter<"Message">
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
  }

  export type JobPostWhereInput = {
    AND?: JobPostWhereInput | JobPostWhereInput[]
    OR?: JobPostWhereInput[]
    NOT?: JobPostWhereInput | JobPostWhereInput[]
    id?: StringFilter<"JobPost"> | string
    postId?: StringFilter<"JobPost"> | string
    jobTitle?: StringFilter<"JobPost"> | string
    companyName?: StringNullableFilter<"JobPost"> | string | null
    location?: StringNullableFilter<"JobPost"> | string | null
    locationType?: EnumJobLocationTypeNullableFilter<"JobPost"> | $Enums.JobLocationType | null
    jobDetails?: StringNullableFilter<"JobPost"> | string | null
    jobRequirements?: StringNullableListFilter<"JobPost">
    employmentType?: EnumEmploymentTypeFilter<"JobPost"> | $Enums.EmploymentType
    positionsAvailable?: IntFilter<"JobPost"> | number
    positionsFilled?: IntFilter<"JobPost"> | number
    salaryMin?: IntNullableFilter<"JobPost"> | number | null
    salaryMax?: IntNullableFilter<"JobPost"> | number | null
    salaryCurrency?: StringNullableFilter<"JobPost"> | string | null
    deadline?: DateTimeNullableFilter<"JobPost"> | Date | string | null
    status?: EnumJobStatusFilter<"JobPost"> | $Enums.JobStatus
    applyUrl?: StringNullableFilter<"JobPost"> | string | null
    allowExternalApply?: BoolFilter<"JobPost"> | boolean
    createdAt?: DateTimeFilter<"JobPost"> | Date | string
    updatedAt?: DateTimeFilter<"JobPost"> | Date | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    applications?: JobApplicationListRelationFilter
  }

  export type JobPostOrderByWithRelationInput = {
    id?: SortOrder
    postId?: SortOrder
    jobTitle?: SortOrder
    companyName?: SortOrder
    location?: SortOrder
    locationType?: SortOrder
    jobDetails?: SortOrder
    jobRequirements?: SortOrder
    employmentType?: SortOrder
    positionsAvailable?: SortOrder
    positionsFilled?: SortOrder
    salaryMin?: SortOrder
    salaryMax?: SortOrder
    salaryCurrency?: SortOrder
    deadline?: SortOrder
    status?: SortOrder
    applyUrl?: SortOrder
    allowExternalApply?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    post?: PostOrderByWithRelationInput
    applications?: JobApplicationOrderByRelationAggregateInput
  }

  export type JobPostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    postId?: string
    AND?: JobPostWhereInput | JobPostWhereInput[]
    OR?: JobPostWhereInput[]
    NOT?: JobPostWhereInput | JobPostWhereInput[]
    jobTitle?: StringFilter<"JobPost"> | string
    companyName?: StringNullableFilter<"JobPost"> | string | null
    location?: StringNullableFilter<"JobPost"> | string | null
    locationType?: EnumJobLocationTypeNullableFilter<"JobPost"> | $Enums.JobLocationType | null
    jobDetails?: StringNullableFilter<"JobPost"> | string | null
    jobRequirements?: StringNullableListFilter<"JobPost">
    employmentType?: EnumEmploymentTypeFilter<"JobPost"> | $Enums.EmploymentType
    positionsAvailable?: IntFilter<"JobPost"> | number
    positionsFilled?: IntFilter<"JobPost"> | number
    salaryMin?: IntNullableFilter<"JobPost"> | number | null
    salaryMax?: IntNullableFilter<"JobPost"> | number | null
    salaryCurrency?: StringNullableFilter<"JobPost"> | string | null
    deadline?: DateTimeNullableFilter<"JobPost"> | Date | string | null
    status?: EnumJobStatusFilter<"JobPost"> | $Enums.JobStatus
    applyUrl?: StringNullableFilter<"JobPost"> | string | null
    allowExternalApply?: BoolFilter<"JobPost"> | boolean
    createdAt?: DateTimeFilter<"JobPost"> | Date | string
    updatedAt?: DateTimeFilter<"JobPost"> | Date | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    applications?: JobApplicationListRelationFilter
  }, "id" | "postId">

  export type JobPostOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    jobTitle?: SortOrder
    companyName?: SortOrder
    location?: SortOrder
    locationType?: SortOrder
    jobDetails?: SortOrder
    jobRequirements?: SortOrder
    employmentType?: SortOrder
    positionsAvailable?: SortOrder
    positionsFilled?: SortOrder
    salaryMin?: SortOrder
    salaryMax?: SortOrder
    salaryCurrency?: SortOrder
    deadline?: SortOrder
    status?: SortOrder
    applyUrl?: SortOrder
    allowExternalApply?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: JobPostCountOrderByAggregateInput
    _avg?: JobPostAvgOrderByAggregateInput
    _max?: JobPostMaxOrderByAggregateInput
    _min?: JobPostMinOrderByAggregateInput
    _sum?: JobPostSumOrderByAggregateInput
  }

  export type JobPostScalarWhereWithAggregatesInput = {
    AND?: JobPostScalarWhereWithAggregatesInput | JobPostScalarWhereWithAggregatesInput[]
    OR?: JobPostScalarWhereWithAggregatesInput[]
    NOT?: JobPostScalarWhereWithAggregatesInput | JobPostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"JobPost"> | string
    postId?: StringWithAggregatesFilter<"JobPost"> | string
    jobTitle?: StringWithAggregatesFilter<"JobPost"> | string
    companyName?: StringNullableWithAggregatesFilter<"JobPost"> | string | null
    location?: StringNullableWithAggregatesFilter<"JobPost"> | string | null
    locationType?: EnumJobLocationTypeNullableWithAggregatesFilter<"JobPost"> | $Enums.JobLocationType | null
    jobDetails?: StringNullableWithAggregatesFilter<"JobPost"> | string | null
    jobRequirements?: StringNullableListFilter<"JobPost">
    employmentType?: EnumEmploymentTypeWithAggregatesFilter<"JobPost"> | $Enums.EmploymentType
    positionsAvailable?: IntWithAggregatesFilter<"JobPost"> | number
    positionsFilled?: IntWithAggregatesFilter<"JobPost"> | number
    salaryMin?: IntNullableWithAggregatesFilter<"JobPost"> | number | null
    salaryMax?: IntNullableWithAggregatesFilter<"JobPost"> | number | null
    salaryCurrency?: StringNullableWithAggregatesFilter<"JobPost"> | string | null
    deadline?: DateTimeNullableWithAggregatesFilter<"JobPost"> | Date | string | null
    status?: EnumJobStatusWithAggregatesFilter<"JobPost"> | $Enums.JobStatus
    applyUrl?: StringNullableWithAggregatesFilter<"JobPost"> | string | null
    allowExternalApply?: BoolWithAggregatesFilter<"JobPost"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"JobPost"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"JobPost"> | Date | string
  }

  export type JobApplicationWhereInput = {
    AND?: JobApplicationWhereInput | JobApplicationWhereInput[]
    OR?: JobApplicationWhereInput[]
    NOT?: JobApplicationWhereInput | JobApplicationWhereInput[]
    id?: StringFilter<"JobApplication"> | string
    jobPostId?: StringFilter<"JobApplication"> | string
    applicantId?: StringFilter<"JobApplication"> | string
    resumeLetter?: StringNullableFilter<"JobApplication"> | string | null
    expectedSalary?: IntNullableFilter<"JobApplication"> | number | null
    availability?: StringNullableFilter<"JobApplication"> | string | null
    resumeBlobName?: StringFilter<"JobApplication"> | string
    status?: EnumApplicationStatusFilter<"JobApplication"> | $Enums.ApplicationStatus
    createdAt?: DateTimeFilter<"JobApplication"> | Date | string
    updatedAt?: DateTimeFilter<"JobApplication"> | Date | string
    jobPost?: XOR<JobPostScalarRelationFilter, JobPostWhereInput>
    applicant?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type JobApplicationOrderByWithRelationInput = {
    id?: SortOrder
    jobPostId?: SortOrder
    applicantId?: SortOrder
    resumeLetter?: SortOrder
    expectedSalary?: SortOrder
    availability?: SortOrder
    resumeBlobName?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    jobPost?: JobPostOrderByWithRelationInput
    applicant?: UserOrderByWithRelationInput
  }

  export type JobApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    jobPostId_applicantId?: JobApplicationJobPostIdApplicantIdCompoundUniqueInput
    AND?: JobApplicationWhereInput | JobApplicationWhereInput[]
    OR?: JobApplicationWhereInput[]
    NOT?: JobApplicationWhereInput | JobApplicationWhereInput[]
    jobPostId?: StringFilter<"JobApplication"> | string
    applicantId?: StringFilter<"JobApplication"> | string
    resumeLetter?: StringNullableFilter<"JobApplication"> | string | null
    expectedSalary?: IntNullableFilter<"JobApplication"> | number | null
    availability?: StringNullableFilter<"JobApplication"> | string | null
    resumeBlobName?: StringFilter<"JobApplication"> | string
    status?: EnumApplicationStatusFilter<"JobApplication"> | $Enums.ApplicationStatus
    createdAt?: DateTimeFilter<"JobApplication"> | Date | string
    updatedAt?: DateTimeFilter<"JobApplication"> | Date | string
    jobPost?: XOR<JobPostScalarRelationFilter, JobPostWhereInput>
    applicant?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "jobPostId_applicantId">

  export type JobApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    jobPostId?: SortOrder
    applicantId?: SortOrder
    resumeLetter?: SortOrder
    expectedSalary?: SortOrder
    availability?: SortOrder
    resumeBlobName?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: JobApplicationCountOrderByAggregateInput
    _avg?: JobApplicationAvgOrderByAggregateInput
    _max?: JobApplicationMaxOrderByAggregateInput
    _min?: JobApplicationMinOrderByAggregateInput
    _sum?: JobApplicationSumOrderByAggregateInput
  }

  export type JobApplicationScalarWhereWithAggregatesInput = {
    AND?: JobApplicationScalarWhereWithAggregatesInput | JobApplicationScalarWhereWithAggregatesInput[]
    OR?: JobApplicationScalarWhereWithAggregatesInput[]
    NOT?: JobApplicationScalarWhereWithAggregatesInput | JobApplicationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"JobApplication"> | string
    jobPostId?: StringWithAggregatesFilter<"JobApplication"> | string
    applicantId?: StringWithAggregatesFilter<"JobApplication"> | string
    resumeLetter?: StringNullableWithAggregatesFilter<"JobApplication"> | string | null
    expectedSalary?: IntNullableWithAggregatesFilter<"JobApplication"> | number | null
    availability?: StringNullableWithAggregatesFilter<"JobApplication"> | string | null
    resumeBlobName?: StringWithAggregatesFilter<"JobApplication"> | string
    status?: EnumApplicationStatusWithAggregatesFilter<"JobApplication"> | $Enums.ApplicationStatus
    createdAt?: DateTimeWithAggregatesFilter<"JobApplication"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"JobApplication"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    email: string
    googleId?: string | null
    linkedinId?: string | null
    microsoftId?: string | null
    profilePic?: string | null
    profilePicOriginal?: string | null
    profilePicCrop?: InputJsonValue | null
    coverPhoto?: string | null
    coverPhotoOriginal?: string | null
    coverPhotoCrop?: InputJsonValue | null
    title?: string | null
    location?: string | null
    about?: string | null
    connections?: number
    phoneNo?: string | null
    phonePublic?: boolean
    emailPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    jobApplications?: JobApplicationCreateNestedManyWithoutApplicantInput
    experience?: ExperienceCreateNestedManyWithoutUserInput
    education?: EducationCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    sentConnectionRequests?: ConnectionRequestCreateNestedManyWithoutFromUserInput
    receivedConnectionRequests?: ConnectionRequestCreateNestedManyWithoutToUserInput
    notificationsReceived?: NotificationCreateNestedManyWithoutUserInput
    notificationsSent?: NotificationCreateNestedManyWithoutFromUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    email: string
    googleId?: string | null
    linkedinId?: string | null
    microsoftId?: string | null
    profilePic?: string | null
    profilePicOriginal?: string | null
    profilePicCrop?: InputJsonValue | null
    coverPhoto?: string | null
    coverPhotoOriginal?: string | null
    coverPhotoCrop?: InputJsonValue | null
    title?: string | null
    location?: string | null
    about?: string | null
    connections?: number
    phoneNo?: string | null
    phonePublic?: boolean
    emailPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    jobApplications?: JobApplicationUncheckedCreateNestedManyWithoutApplicantInput
    experience?: ExperienceUncheckedCreateNestedManyWithoutUserInput
    education?: EducationUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    sentConnectionRequests?: ConnectionRequestUncheckedCreateNestedManyWithoutFromUserInput
    receivedConnectionRequests?: ConnectionRequestUncheckedCreateNestedManyWithoutToUserInput
    notificationsReceived?: NotificationUncheckedCreateNestedManyWithoutUserInput
    notificationsSent?: NotificationUncheckedCreateNestedManyWithoutFromUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinId?: NullableStringFieldUpdateOperationsInput | string | null
    microsoftId?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicOriginal?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicCrop?: InputJsonValue | InputJsonValue | null
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhotoOriginal?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhotoCrop?: InputJsonValue | InputJsonValue | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    connections?: IntFieldUpdateOperationsInput | number
    phoneNo?: NullableStringFieldUpdateOperationsInput | string | null
    phonePublic?: BoolFieldUpdateOperationsInput | boolean
    emailPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobApplications?: JobApplicationUpdateManyWithoutApplicantNestedInput
    experience?: ExperienceUpdateManyWithoutUserNestedInput
    education?: EducationUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    sentConnectionRequests?: ConnectionRequestUpdateManyWithoutFromUserNestedInput
    receivedConnectionRequests?: ConnectionRequestUpdateManyWithoutToUserNestedInput
    notificationsReceived?: NotificationUpdateManyWithoutUserNestedInput
    notificationsSent?: NotificationUpdateManyWithoutFromUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinId?: NullableStringFieldUpdateOperationsInput | string | null
    microsoftId?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicOriginal?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicCrop?: InputJsonValue | InputJsonValue | null
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhotoOriginal?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhotoCrop?: InputJsonValue | InputJsonValue | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    connections?: IntFieldUpdateOperationsInput | number
    phoneNo?: NullableStringFieldUpdateOperationsInput | string | null
    phonePublic?: BoolFieldUpdateOperationsInput | boolean
    emailPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobApplications?: JobApplicationUncheckedUpdateManyWithoutApplicantNestedInput
    experience?: ExperienceUncheckedUpdateManyWithoutUserNestedInput
    education?: EducationUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    sentConnectionRequests?: ConnectionRequestUncheckedUpdateManyWithoutFromUserNestedInput
    receivedConnectionRequests?: ConnectionRequestUncheckedUpdateManyWithoutToUserNestedInput
    notificationsReceived?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    notificationsSent?: NotificationUncheckedUpdateManyWithoutFromUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    email: string
    googleId?: string | null
    linkedinId?: string | null
    microsoftId?: string | null
    profilePic?: string | null
    profilePicOriginal?: string | null
    profilePicCrop?: InputJsonValue | null
    coverPhoto?: string | null
    coverPhotoOriginal?: string | null
    coverPhotoCrop?: InputJsonValue | null
    title?: string | null
    location?: string | null
    about?: string | null
    connections?: number
    phoneNo?: string | null
    phonePublic?: boolean
    emailPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinId?: NullableStringFieldUpdateOperationsInput | string | null
    microsoftId?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicOriginal?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicCrop?: InputJsonValue | InputJsonValue | null
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhotoOriginal?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhotoCrop?: InputJsonValue | InputJsonValue | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    connections?: IntFieldUpdateOperationsInput | number
    phoneNo?: NullableStringFieldUpdateOperationsInput | string | null
    phonePublic?: BoolFieldUpdateOperationsInput | boolean
    emailPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinId?: NullableStringFieldUpdateOperationsInput | string | null
    microsoftId?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicOriginal?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicCrop?: InputJsonValue | InputJsonValue | null
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhotoOriginal?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhotoCrop?: InputJsonValue | InputJsonValue | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    connections?: IntFieldUpdateOperationsInput | number
    phoneNo?: NullableStringFieldUpdateOperationsInput | string | null
    phonePublic?: BoolFieldUpdateOperationsInput | boolean
    emailPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExperienceCreateInput = {
    id?: string
    title: string
    employmentType: $Enums.EmploymentType
    company: string
    startMonth: number
    startYear: number
    endMonth?: number | null
    endYear?: number | null
    isCurrent?: boolean
    user: UserCreateNestedOneWithoutExperienceInput
  }

  export type ExperienceUncheckedCreateInput = {
    id?: string
    title: string
    employmentType: $Enums.EmploymentType
    company: string
    startMonth: number
    startYear: number
    endMonth?: number | null
    endYear?: number | null
    isCurrent?: boolean
    userId: string
  }

  export type ExperienceUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    employmentType?: EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType
    company?: StringFieldUpdateOperationsInput | string
    startMonth?: IntFieldUpdateOperationsInput | number
    startYear?: IntFieldUpdateOperationsInput | number
    endMonth?: NullableIntFieldUpdateOperationsInput | number | null
    endYear?: NullableIntFieldUpdateOperationsInput | number | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutExperienceNestedInput
  }

  export type ExperienceUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    employmentType?: EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType
    company?: StringFieldUpdateOperationsInput | string
    startMonth?: IntFieldUpdateOperationsInput | number
    startYear?: IntFieldUpdateOperationsInput | number
    endMonth?: NullableIntFieldUpdateOperationsInput | number | null
    endYear?: NullableIntFieldUpdateOperationsInput | number | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ExperienceCreateManyInput = {
    id?: string
    title: string
    employmentType: $Enums.EmploymentType
    company: string
    startMonth: number
    startYear: number
    endMonth?: number | null
    endYear?: number | null
    isCurrent?: boolean
    userId: string
  }

  export type ExperienceUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    employmentType?: EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType
    company?: StringFieldUpdateOperationsInput | string
    startMonth?: IntFieldUpdateOperationsInput | number
    startYear?: IntFieldUpdateOperationsInput | number
    endMonth?: NullableIntFieldUpdateOperationsInput | number | null
    endYear?: NullableIntFieldUpdateOperationsInput | number | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExperienceUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    employmentType?: EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType
    company?: StringFieldUpdateOperationsInput | string
    startMonth?: IntFieldUpdateOperationsInput | number
    startYear?: IntFieldUpdateOperationsInput | number
    endMonth?: NullableIntFieldUpdateOperationsInput | number | null
    endYear?: NullableIntFieldUpdateOperationsInput | number | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type EducationCreateInput = {
    id?: string
    school: string
    degree: string
    fieldOfStudy: string
    startMonth: number
    startYear: number
    endMonth: number
    endYear: number
    user: UserCreateNestedOneWithoutEducationInput
  }

  export type EducationUncheckedCreateInput = {
    id?: string
    school: string
    degree: string
    fieldOfStudy: string
    startMonth: number
    startYear: number
    endMonth: number
    endYear: number
    userId: string
  }

  export type EducationUpdateInput = {
    school?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    fieldOfStudy?: StringFieldUpdateOperationsInput | string
    startMonth?: IntFieldUpdateOperationsInput | number
    startYear?: IntFieldUpdateOperationsInput | number
    endMonth?: IntFieldUpdateOperationsInput | number
    endYear?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutEducationNestedInput
  }

  export type EducationUncheckedUpdateInput = {
    school?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    fieldOfStudy?: StringFieldUpdateOperationsInput | string
    startMonth?: IntFieldUpdateOperationsInput | number
    startYear?: IntFieldUpdateOperationsInput | number
    endMonth?: IntFieldUpdateOperationsInput | number
    endYear?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type EducationCreateManyInput = {
    id?: string
    school: string
    degree: string
    fieldOfStudy: string
    startMonth: number
    startYear: number
    endMonth: number
    endYear: number
    userId: string
  }

  export type EducationUpdateManyMutationInput = {
    school?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    fieldOfStudy?: StringFieldUpdateOperationsInput | string
    startMonth?: IntFieldUpdateOperationsInput | number
    startYear?: IntFieldUpdateOperationsInput | number
    endMonth?: IntFieldUpdateOperationsInput | number
    endYear?: IntFieldUpdateOperationsInput | number
  }

  export type EducationUncheckedUpdateManyInput = {
    school?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    fieldOfStudy?: StringFieldUpdateOperationsInput | string
    startMonth?: IntFieldUpdateOperationsInput | number
    startYear?: IntFieldUpdateOperationsInput | number
    endMonth?: IntFieldUpdateOperationsInput | number
    endYear?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PostCreateInput = {
    id?: string
    username: string
    profilePic?: string | null
    postType: string
    visibility?: string | null
    title?: string | null
    content: string
    media?: InputJsonValue | null
    mediaTypes?: PostCreatemediaTypesInput | string[]
    hasLinks?: boolean
    links?: InputJsonValue | null
    commentsDisabled?: boolean
    commentCount?: number
    likeCount?: number
    shareCount?: number
    savedCount?: number
    pollOptions?: PostCreatepollOptionsInput | string[]
    pollEndsAt?: Date | string | null
    pollVotes?: InputJsonValue | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPostsInput
    jobPost?: JobPostCreateNestedOneWithoutPostInput
    comments?: CommentCreateNestedManyWithoutPostInput
    interactions?: PostInteractionCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    id?: string
    userId: string
    username: string
    profilePic?: string | null
    postType: string
    visibility?: string | null
    title?: string | null
    content: string
    media?: InputJsonValue | null
    mediaTypes?: PostCreatemediaTypesInput | string[]
    hasLinks?: boolean
    links?: InputJsonValue | null
    commentsDisabled?: boolean
    commentCount?: number
    likeCount?: number
    shareCount?: number
    savedCount?: number
    pollOptions?: PostCreatepollOptionsInput | string[]
    pollEndsAt?: Date | string | null
    pollVotes?: InputJsonValue | null
    createdAt?: Date | string
    updatedAt?: Date | string
    jobPost?: JobPostUncheckedCreateNestedOneWithoutPostInput
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
    interactions?: PostInteractionUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    postType?: StringFieldUpdateOperationsInput | string
    visibility?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    media?: InputJsonValue | InputJsonValue | null
    mediaTypes?: PostUpdatemediaTypesInput | string[]
    hasLinks?: BoolFieldUpdateOperationsInput | boolean
    links?: InputJsonValue | InputJsonValue | null
    commentsDisabled?: BoolFieldUpdateOperationsInput | boolean
    commentCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    shareCount?: IntFieldUpdateOperationsInput | number
    savedCount?: IntFieldUpdateOperationsInput | number
    pollOptions?: PostUpdatepollOptionsInput | string[]
    pollEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pollVotes?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    jobPost?: JobPostUpdateOneWithoutPostNestedInput
    comments?: CommentUpdateManyWithoutPostNestedInput
    interactions?: PostInteractionUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    postType?: StringFieldUpdateOperationsInput | string
    visibility?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    media?: InputJsonValue | InputJsonValue | null
    mediaTypes?: PostUpdatemediaTypesInput | string[]
    hasLinks?: BoolFieldUpdateOperationsInput | boolean
    links?: InputJsonValue | InputJsonValue | null
    commentsDisabled?: BoolFieldUpdateOperationsInput | boolean
    commentCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    shareCount?: IntFieldUpdateOperationsInput | number
    savedCount?: IntFieldUpdateOperationsInput | number
    pollOptions?: PostUpdatepollOptionsInput | string[]
    pollEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pollVotes?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobPost?: JobPostUncheckedUpdateOneWithoutPostNestedInput
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
    interactions?: PostInteractionUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateManyInput = {
    id?: string
    userId: string
    username: string
    profilePic?: string | null
    postType: string
    visibility?: string | null
    title?: string | null
    content: string
    media?: InputJsonValue | null
    mediaTypes?: PostCreatemediaTypesInput | string[]
    hasLinks?: boolean
    links?: InputJsonValue | null
    commentsDisabled?: boolean
    commentCount?: number
    likeCount?: number
    shareCount?: number
    savedCount?: number
    pollOptions?: PostCreatepollOptionsInput | string[]
    pollEndsAt?: Date | string | null
    pollVotes?: InputJsonValue | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    postType?: StringFieldUpdateOperationsInput | string
    visibility?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    media?: InputJsonValue | InputJsonValue | null
    mediaTypes?: PostUpdatemediaTypesInput | string[]
    hasLinks?: BoolFieldUpdateOperationsInput | boolean
    links?: InputJsonValue | InputJsonValue | null
    commentsDisabled?: BoolFieldUpdateOperationsInput | boolean
    commentCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    shareCount?: IntFieldUpdateOperationsInput | number
    savedCount?: IntFieldUpdateOperationsInput | number
    pollOptions?: PostUpdatepollOptionsInput | string[]
    pollEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pollVotes?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    postType?: StringFieldUpdateOperationsInput | string
    visibility?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    media?: InputJsonValue | InputJsonValue | null
    mediaTypes?: PostUpdatemediaTypesInput | string[]
    hasLinks?: BoolFieldUpdateOperationsInput | boolean
    links?: InputJsonValue | InputJsonValue | null
    commentsDisabled?: BoolFieldUpdateOperationsInput | boolean
    commentCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    shareCount?: IntFieldUpdateOperationsInput | number
    savedCount?: IntFieldUpdateOperationsInput | number
    pollOptions?: PostUpdatepollOptionsInput | string[]
    pollEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pollVotes?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateInput = {
    id?: string
    userId: string
    username: string
    profilePic: string
    content: string
    media?: InputJsonValue | null
    likeCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    depth?: number
    post: PostCreateNestedOneWithoutCommentsInput
    parent?: CommentCreateNestedOneWithoutRepliesInput
    replies?: CommentCreateNestedManyWithoutParentInput
  }

  export type CommentUncheckedCreateInput = {
    id?: string
    userId: string
    username: string
    profilePic: string
    content: string
    media?: InputJsonValue | null
    likeCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    postId: string
    parentId?: string | null
    depth?: number
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput
  }

  export type CommentUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profilePic?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    media?: InputJsonValue | InputJsonValue | null
    likeCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    depth?: IntFieldUpdateOperationsInput | number
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput
    parent?: CommentUpdateOneWithoutRepliesNestedInput
    replies?: CommentUpdateManyWithoutParentNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profilePic?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    media?: InputJsonValue | InputJsonValue | null
    likeCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    depth?: IntFieldUpdateOperationsInput | number
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput
  }

  export type CommentCreateManyInput = {
    id?: string
    userId: string
    username: string
    profilePic: string
    content: string
    media?: InputJsonValue | null
    likeCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    postId: string
    parentId?: string | null
    depth?: number
  }

  export type CommentUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profilePic?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    media?: InputJsonValue | InputJsonValue | null
    likeCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    depth?: IntFieldUpdateOperationsInput | number
  }

  export type CommentUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profilePic?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    media?: InputJsonValue | InputJsonValue | null
    likeCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    depth?: IntFieldUpdateOperationsInput | number
  }

  export type ConnectionRequestCreateInput = {
    id?: string
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    fromUser: UserCreateNestedOneWithoutSentConnectionRequestsInput
    toUser: UserCreateNestedOneWithoutReceivedConnectionRequestsInput
  }

  export type ConnectionRequestUncheckedCreateInput = {
    id?: string
    fromUserId: string
    toUserId: string
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConnectionRequestUpdateInput = {
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromUser?: UserUpdateOneRequiredWithoutSentConnectionRequestsNestedInput
    toUser?: UserUpdateOneRequiredWithoutReceivedConnectionRequestsNestedInput
  }

  export type ConnectionRequestUncheckedUpdateInput = {
    fromUserId?: StringFieldUpdateOperationsInput | string
    toUserId?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectionRequestCreateManyInput = {
    id?: string
    fromUserId: string
    toUserId: string
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConnectionRequestUpdateManyMutationInput = {
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectionRequestUncheckedUpdateManyInput = {
    fromUserId?: StringFieldUpdateOperationsInput | string
    toUserId?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectionCreateInput = {
    id?: string
    userAId: string
    userBId: string
    createdAt?: Date | string
  }

  export type ConnectionUncheckedCreateInput = {
    id?: string
    userAId: string
    userBId: string
    createdAt?: Date | string
  }

  export type ConnectionUpdateInput = {
    userAId?: StringFieldUpdateOperationsInput | string
    userBId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectionUncheckedUpdateInput = {
    userAId?: StringFieldUpdateOperationsInput | string
    userBId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectionCreateManyInput = {
    id?: string
    userAId: string
    userBId: string
    createdAt?: Date | string
  }

  export type ConnectionUpdateManyMutationInput = {
    userAId?: StringFieldUpdateOperationsInput | string
    userBId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectionUncheckedUpdateManyInput = {
    userAId?: StringFieldUpdateOperationsInput | string
    userBId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostInteractionCreateInput = {
    id?: string
    userId: string
    type: $Enums.PostInteractionType
    createdAt?: Date | string
    post: PostCreateNestedOneWithoutInteractionsInput
  }

  export type PostInteractionUncheckedCreateInput = {
    id?: string
    userId: string
    postId: string
    type: $Enums.PostInteractionType
    createdAt?: Date | string
  }

  export type PostInteractionUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumPostInteractionTypeFieldUpdateOperationsInput | $Enums.PostInteractionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutInteractionsNestedInput
  }

  export type PostInteractionUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    type?: EnumPostInteractionTypeFieldUpdateOperationsInput | $Enums.PostInteractionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostInteractionCreateManyInput = {
    id?: string
    userId: string
    postId: string
    type: $Enums.PostInteractionType
    createdAt?: Date | string
  }

  export type PostInteractionUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumPostInteractionTypeFieldUpdateOperationsInput | $Enums.PostInteractionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostInteractionUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    type?: EnumPostInteractionTypeFieldUpdateOperationsInput | $Enums.PostInteractionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    id?: string
    type: $Enums.NotificationType
    entityId?: string | null
    isRead?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsReceivedInput
    fromUser: UserCreateNestedOneWithoutNotificationsSentInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    userId: string
    fromUserId: string
    type: $Enums.NotificationType
    entityId?: string | null
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateInput = {
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsReceivedNestedInput
    fromUser?: UserUpdateOneRequiredWithoutNotificationsSentNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    fromUserId?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    userId: string
    fromUserId: string
    type: $Enums.NotificationType
    entityId?: string | null
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    fromUserId?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationCreateInput = {
    id?: string
    userAId: string
    userBId: string
    lastMessageAt?: Date | string | null
    lastMessageText?: string | null
    lastMessageSenderId?: string | null
    userALastReadAt?: Date | string | null
    userBLastReadAt?: Date | string | null
    userAUnreadCount?: number
    userBUnreadCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageCreateNestedManyWithoutConversationInput
  }

  export type ConversationUncheckedCreateInput = {
    id?: string
    userAId: string
    userBId: string
    lastMessageAt?: Date | string | null
    lastMessageText?: string | null
    lastMessageSenderId?: string | null
    userALastReadAt?: Date | string | null
    userBLastReadAt?: Date | string | null
    userAUnreadCount?: number
    userBUnreadCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationUpdateInput = {
    userAId?: StringFieldUpdateOperationsInput | string
    userBId?: StringFieldUpdateOperationsInput | string
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastMessageText?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageSenderId?: NullableStringFieldUpdateOperationsInput | string | null
    userALastReadAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userBLastReadAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userAUnreadCount?: IntFieldUpdateOperationsInput | number
    userBUnreadCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateInput = {
    userAId?: StringFieldUpdateOperationsInput | string
    userBId?: StringFieldUpdateOperationsInput | string
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastMessageText?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageSenderId?: NullableStringFieldUpdateOperationsInput | string | null
    userALastReadAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userBLastReadAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userAUnreadCount?: IntFieldUpdateOperationsInput | number
    userBUnreadCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type ConversationCreateManyInput = {
    id?: string
    userAId: string
    userBId: string
    lastMessageAt?: Date | string | null
    lastMessageText?: string | null
    lastMessageSenderId?: string | null
    userALastReadAt?: Date | string | null
    userBLastReadAt?: Date | string | null
    userAUnreadCount?: number
    userBUnreadCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConversationUpdateManyMutationInput = {
    userAId?: StringFieldUpdateOperationsInput | string
    userBId?: StringFieldUpdateOperationsInput | string
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastMessageText?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageSenderId?: NullableStringFieldUpdateOperationsInput | string | null
    userALastReadAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userBLastReadAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userAUnreadCount?: IntFieldUpdateOperationsInput | number
    userBUnreadCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationUncheckedUpdateManyInput = {
    userAId?: StringFieldUpdateOperationsInput | string
    userBId?: StringFieldUpdateOperationsInput | string
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastMessageText?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageSenderId?: NullableStringFieldUpdateOperationsInput | string | null
    userALastReadAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userBLastReadAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userAUnreadCount?: IntFieldUpdateOperationsInput | number
    userBUnreadCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateInput = {
    id?: string
    senderId: string
    receiverId: string
    text?: string | null
    media?: InputJsonValue | null
    createdAt?: Date | string
    conversation: ConversationCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    conversationId: string
    senderId: string
    receiverId: string
    text?: string | null
    media?: InputJsonValue | null
    createdAt?: Date | string
  }

  export type MessageUpdateInput = {
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    media?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversation?: ConversationUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    conversationId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    media?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyInput = {
    id?: string
    conversationId: string
    senderId: string
    receiverId: string
    text?: string | null
    media?: InputJsonValue | null
    createdAt?: Date | string
  }

  export type MessageUpdateManyMutationInput = {
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    media?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    conversationId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    media?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobPostCreateInput = {
    id?: string
    jobTitle: string
    companyName?: string | null
    location?: string | null
    locationType?: $Enums.JobLocationType | null
    jobDetails?: string | null
    jobRequirements?: JobPostCreatejobRequirementsInput | string[]
    employmentType: $Enums.EmploymentType
    positionsAvailable?: number
    positionsFilled?: number
    salaryMin?: number | null
    salaryMax?: number | null
    salaryCurrency?: string | null
    deadline?: Date | string | null
    status?: $Enums.JobStatus
    applyUrl?: string | null
    allowExternalApply?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    post: PostCreateNestedOneWithoutJobPostInput
    applications?: JobApplicationCreateNestedManyWithoutJobPostInput
  }

  export type JobPostUncheckedCreateInput = {
    id?: string
    postId: string
    jobTitle: string
    companyName?: string | null
    location?: string | null
    locationType?: $Enums.JobLocationType | null
    jobDetails?: string | null
    jobRequirements?: JobPostCreatejobRequirementsInput | string[]
    employmentType: $Enums.EmploymentType
    positionsAvailable?: number
    positionsFilled?: number
    salaryMin?: number | null
    salaryMax?: number | null
    salaryCurrency?: string | null
    deadline?: Date | string | null
    status?: $Enums.JobStatus
    applyUrl?: string | null
    allowExternalApply?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: JobApplicationUncheckedCreateNestedManyWithoutJobPostInput
  }

  export type JobPostUpdateInput = {
    jobTitle?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    locationType?: NullableEnumJobLocationTypeFieldUpdateOperationsInput | $Enums.JobLocationType | null
    jobDetails?: NullableStringFieldUpdateOperationsInput | string | null
    jobRequirements?: JobPostUpdatejobRequirementsInput | string[]
    employmentType?: EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType
    positionsAvailable?: IntFieldUpdateOperationsInput | number
    positionsFilled?: IntFieldUpdateOperationsInput | number
    salaryMin?: NullableIntFieldUpdateOperationsInput | number | null
    salaryMax?: NullableIntFieldUpdateOperationsInput | number | null
    salaryCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    applyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    allowExternalApply?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutJobPostNestedInput
    applications?: JobApplicationUpdateManyWithoutJobPostNestedInput
  }

  export type JobPostUncheckedUpdateInput = {
    postId?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    locationType?: NullableEnumJobLocationTypeFieldUpdateOperationsInput | $Enums.JobLocationType | null
    jobDetails?: NullableStringFieldUpdateOperationsInput | string | null
    jobRequirements?: JobPostUpdatejobRequirementsInput | string[]
    employmentType?: EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType
    positionsAvailable?: IntFieldUpdateOperationsInput | number
    positionsFilled?: IntFieldUpdateOperationsInput | number
    salaryMin?: NullableIntFieldUpdateOperationsInput | number | null
    salaryMax?: NullableIntFieldUpdateOperationsInput | number | null
    salaryCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    applyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    allowExternalApply?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: JobApplicationUncheckedUpdateManyWithoutJobPostNestedInput
  }

  export type JobPostCreateManyInput = {
    id?: string
    postId: string
    jobTitle: string
    companyName?: string | null
    location?: string | null
    locationType?: $Enums.JobLocationType | null
    jobDetails?: string | null
    jobRequirements?: JobPostCreatejobRequirementsInput | string[]
    employmentType: $Enums.EmploymentType
    positionsAvailable?: number
    positionsFilled?: number
    salaryMin?: number | null
    salaryMax?: number | null
    salaryCurrency?: string | null
    deadline?: Date | string | null
    status?: $Enums.JobStatus
    applyUrl?: string | null
    allowExternalApply?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobPostUpdateManyMutationInput = {
    jobTitle?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    locationType?: NullableEnumJobLocationTypeFieldUpdateOperationsInput | $Enums.JobLocationType | null
    jobDetails?: NullableStringFieldUpdateOperationsInput | string | null
    jobRequirements?: JobPostUpdatejobRequirementsInput | string[]
    employmentType?: EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType
    positionsAvailable?: IntFieldUpdateOperationsInput | number
    positionsFilled?: IntFieldUpdateOperationsInput | number
    salaryMin?: NullableIntFieldUpdateOperationsInput | number | null
    salaryMax?: NullableIntFieldUpdateOperationsInput | number | null
    salaryCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    applyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    allowExternalApply?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobPostUncheckedUpdateManyInput = {
    postId?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    locationType?: NullableEnumJobLocationTypeFieldUpdateOperationsInput | $Enums.JobLocationType | null
    jobDetails?: NullableStringFieldUpdateOperationsInput | string | null
    jobRequirements?: JobPostUpdatejobRequirementsInput | string[]
    employmentType?: EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType
    positionsAvailable?: IntFieldUpdateOperationsInput | number
    positionsFilled?: IntFieldUpdateOperationsInput | number
    salaryMin?: NullableIntFieldUpdateOperationsInput | number | null
    salaryMax?: NullableIntFieldUpdateOperationsInput | number | null
    salaryCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    applyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    allowExternalApply?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobApplicationCreateInput = {
    id?: string
    resumeLetter?: string | null
    expectedSalary?: number | null
    availability?: string | null
    resumeBlobName: string
    status?: $Enums.ApplicationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    jobPost: JobPostCreateNestedOneWithoutApplicationsInput
    applicant: UserCreateNestedOneWithoutJobApplicationsInput
  }

  export type JobApplicationUncheckedCreateInput = {
    id?: string
    jobPostId: string
    applicantId: string
    resumeLetter?: string | null
    expectedSalary?: number | null
    availability?: string | null
    resumeBlobName: string
    status?: $Enums.ApplicationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobApplicationUpdateInput = {
    resumeLetter?: NullableStringFieldUpdateOperationsInput | string | null
    expectedSalary?: NullableIntFieldUpdateOperationsInput | number | null
    availability?: NullableStringFieldUpdateOperationsInput | string | null
    resumeBlobName?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobPost?: JobPostUpdateOneRequiredWithoutApplicationsNestedInput
    applicant?: UserUpdateOneRequiredWithoutJobApplicationsNestedInput
  }

  export type JobApplicationUncheckedUpdateInput = {
    jobPostId?: StringFieldUpdateOperationsInput | string
    applicantId?: StringFieldUpdateOperationsInput | string
    resumeLetter?: NullableStringFieldUpdateOperationsInput | string | null
    expectedSalary?: NullableIntFieldUpdateOperationsInput | number | null
    availability?: NullableStringFieldUpdateOperationsInput | string | null
    resumeBlobName?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobApplicationCreateManyInput = {
    id?: string
    jobPostId: string
    applicantId: string
    resumeLetter?: string | null
    expectedSalary?: number | null
    availability?: string | null
    resumeBlobName: string
    status?: $Enums.ApplicationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobApplicationUpdateManyMutationInput = {
    resumeLetter?: NullableStringFieldUpdateOperationsInput | string | null
    expectedSalary?: NullableIntFieldUpdateOperationsInput | number | null
    availability?: NullableStringFieldUpdateOperationsInput | string | null
    resumeBlobName?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobApplicationUncheckedUpdateManyInput = {
    jobPostId?: StringFieldUpdateOperationsInput | string
    applicantId?: StringFieldUpdateOperationsInput | string
    resumeLetter?: NullableStringFieldUpdateOperationsInput | string | null
    expectedSalary?: NullableIntFieldUpdateOperationsInput | number | null
    availability?: NullableStringFieldUpdateOperationsInput | string | null
    resumeBlobName?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    isSet?: boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type JobApplicationListRelationFilter = {
    every?: JobApplicationWhereInput
    some?: JobApplicationWhereInput
    none?: JobApplicationWhereInput
  }

  export type ExperienceListRelationFilter = {
    every?: ExperienceWhereInput
    some?: ExperienceWhereInput
    none?: ExperienceWhereInput
  }

  export type EducationListRelationFilter = {
    every?: EducationWhereInput
    some?: EducationWhereInput
    none?: EducationWhereInput
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type ConnectionRequestListRelationFilter = {
    every?: ConnectionRequestWhereInput
    some?: ConnectionRequestWhereInput
    none?: ConnectionRequestWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type JobApplicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExperienceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EducationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConnectionRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    googleId?: SortOrder
    linkedinId?: SortOrder
    microsoftId?: SortOrder
    profilePic?: SortOrder
    profilePicOriginal?: SortOrder
    profilePicCrop?: SortOrder
    coverPhoto?: SortOrder
    coverPhotoOriginal?: SortOrder
    coverPhotoCrop?: SortOrder
    title?: SortOrder
    location?: SortOrder
    about?: SortOrder
    connections?: SortOrder
    phoneNo?: SortOrder
    phonePublic?: SortOrder
    emailPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    connections?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    googleId?: SortOrder
    linkedinId?: SortOrder
    microsoftId?: SortOrder
    profilePic?: SortOrder
    profilePicOriginal?: SortOrder
    coverPhoto?: SortOrder
    coverPhotoOriginal?: SortOrder
    title?: SortOrder
    location?: SortOrder
    about?: SortOrder
    connections?: SortOrder
    phoneNo?: SortOrder
    phonePublic?: SortOrder
    emailPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    googleId?: SortOrder
    linkedinId?: SortOrder
    microsoftId?: SortOrder
    profilePic?: SortOrder
    profilePicOriginal?: SortOrder
    coverPhoto?: SortOrder
    coverPhotoOriginal?: SortOrder
    title?: SortOrder
    location?: SortOrder
    about?: SortOrder
    connections?: SortOrder
    phoneNo?: SortOrder
    phonePublic?: SortOrder
    emailPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    connections?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumEmploymentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EmploymentType | EnumEmploymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EmploymentType[] | ListEnumEmploymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmploymentType[] | ListEnumEmploymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEmploymentTypeFilter<$PrismaModel> | $Enums.EmploymentType
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ExperienceCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    employmentType?: SortOrder
    company?: SortOrder
    startMonth?: SortOrder
    startYear?: SortOrder
    endMonth?: SortOrder
    endYear?: SortOrder
    isCurrent?: SortOrder
    userId?: SortOrder
  }

  export type ExperienceAvgOrderByAggregateInput = {
    startMonth?: SortOrder
    startYear?: SortOrder
    endMonth?: SortOrder
    endYear?: SortOrder
  }

  export type ExperienceMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    employmentType?: SortOrder
    company?: SortOrder
    startMonth?: SortOrder
    startYear?: SortOrder
    endMonth?: SortOrder
    endYear?: SortOrder
    isCurrent?: SortOrder
    userId?: SortOrder
  }

  export type ExperienceMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    employmentType?: SortOrder
    company?: SortOrder
    startMonth?: SortOrder
    startYear?: SortOrder
    endMonth?: SortOrder
    endYear?: SortOrder
    isCurrent?: SortOrder
    userId?: SortOrder
  }

  export type ExperienceSumOrderByAggregateInput = {
    startMonth?: SortOrder
    startYear?: SortOrder
    endMonth?: SortOrder
    endYear?: SortOrder
  }

  export type EnumEmploymentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmploymentType | EnumEmploymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EmploymentType[] | ListEnumEmploymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmploymentType[] | ListEnumEmploymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEmploymentTypeWithAggregatesFilter<$PrismaModel> | $Enums.EmploymentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmploymentTypeFilter<$PrismaModel>
    _max?: NestedEnumEmploymentTypeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type EducationCountOrderByAggregateInput = {
    id?: SortOrder
    school?: SortOrder
    degree?: SortOrder
    fieldOfStudy?: SortOrder
    startMonth?: SortOrder
    startYear?: SortOrder
    endMonth?: SortOrder
    endYear?: SortOrder
    userId?: SortOrder
  }

  export type EducationAvgOrderByAggregateInput = {
    startMonth?: SortOrder
    startYear?: SortOrder
    endMonth?: SortOrder
    endYear?: SortOrder
  }

  export type EducationMaxOrderByAggregateInput = {
    id?: SortOrder
    school?: SortOrder
    degree?: SortOrder
    fieldOfStudy?: SortOrder
    startMonth?: SortOrder
    startYear?: SortOrder
    endMonth?: SortOrder
    endYear?: SortOrder
    userId?: SortOrder
  }

  export type EducationMinOrderByAggregateInput = {
    id?: SortOrder
    school?: SortOrder
    degree?: SortOrder
    fieldOfStudy?: SortOrder
    startMonth?: SortOrder
    startYear?: SortOrder
    endMonth?: SortOrder
    endYear?: SortOrder
    userId?: SortOrder
  }

  export type EducationSumOrderByAggregateInput = {
    startMonth?: SortOrder
    startYear?: SortOrder
    endMonth?: SortOrder
    endYear?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type JobPostNullableScalarRelationFilter = {
    is?: JobPostWhereInput | null
    isNot?: JobPostWhereInput | null
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type PostInteractionListRelationFilter = {
    every?: PostInteractionWhereInput
    some?: PostInteractionWhereInput
    none?: PostInteractionWhereInput
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostInteractionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    profilePic?: SortOrder
    postType?: SortOrder
    visibility?: SortOrder
    title?: SortOrder
    content?: SortOrder
    media?: SortOrder
    mediaTypes?: SortOrder
    hasLinks?: SortOrder
    links?: SortOrder
    commentsDisabled?: SortOrder
    commentCount?: SortOrder
    likeCount?: SortOrder
    shareCount?: SortOrder
    savedCount?: SortOrder
    pollOptions?: SortOrder
    pollEndsAt?: SortOrder
    pollVotes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    commentCount?: SortOrder
    likeCount?: SortOrder
    shareCount?: SortOrder
    savedCount?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    profilePic?: SortOrder
    postType?: SortOrder
    visibility?: SortOrder
    title?: SortOrder
    content?: SortOrder
    hasLinks?: SortOrder
    commentsDisabled?: SortOrder
    commentCount?: SortOrder
    likeCount?: SortOrder
    shareCount?: SortOrder
    savedCount?: SortOrder
    pollEndsAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    profilePic?: SortOrder
    postType?: SortOrder
    visibility?: SortOrder
    title?: SortOrder
    content?: SortOrder
    hasLinks?: SortOrder
    commentsDisabled?: SortOrder
    commentCount?: SortOrder
    likeCount?: SortOrder
    shareCount?: SortOrder
    savedCount?: SortOrder
    pollEndsAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    commentCount?: SortOrder
    likeCount?: SortOrder
    shareCount?: SortOrder
    savedCount?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type PostScalarRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type CommentNullableScalarRelationFilter = {
    is?: CommentWhereInput | null
    isNot?: CommentWhereInput | null
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    profilePic?: SortOrder
    content?: SortOrder
    media?: SortOrder
    likeCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    postId?: SortOrder
    parentId?: SortOrder
    depth?: SortOrder
  }

  export type CommentAvgOrderByAggregateInput = {
    likeCount?: SortOrder
    depth?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    profilePic?: SortOrder
    content?: SortOrder
    likeCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    postId?: SortOrder
    parentId?: SortOrder
    depth?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    profilePic?: SortOrder
    content?: SortOrder
    likeCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    postId?: SortOrder
    parentId?: SortOrder
    depth?: SortOrder
  }

  export type CommentSumOrderByAggregateInput = {
    likeCount?: SortOrder
    depth?: SortOrder
  }

  export type EnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type ConnectionRequestCountOrderByAggregateInput = {
    id?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConnectionRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConnectionRequestMinOrderByAggregateInput = {
    id?: SortOrder
    fromUserId?: SortOrder
    toUserId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }

  export type ConnectionUserAIdUserBIdCompoundUniqueInput = {
    userAId: string
    userBId: string
  }

  export type ConnectionCountOrderByAggregateInput = {
    id?: SortOrder
    userAId?: SortOrder
    userBId?: SortOrder
    createdAt?: SortOrder
  }

  export type ConnectionMaxOrderByAggregateInput = {
    id?: SortOrder
    userAId?: SortOrder
    userBId?: SortOrder
    createdAt?: SortOrder
  }

  export type ConnectionMinOrderByAggregateInput = {
    id?: SortOrder
    userAId?: SortOrder
    userBId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumPostInteractionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PostInteractionType | EnumPostInteractionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PostInteractionType[] | ListEnumPostInteractionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostInteractionType[] | ListEnumPostInteractionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPostInteractionTypeFilter<$PrismaModel> | $Enums.PostInteractionType
  }

  export type PostInteractionUserIdPostIdTypeCompoundUniqueInput = {
    userId: string
    postId: string
    type: $Enums.PostInteractionType
  }

  export type PostInteractionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type PostInteractionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type PostInteractionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumPostInteractionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PostInteractionType | EnumPostInteractionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PostInteractionType[] | ListEnumPostInteractionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostInteractionType[] | ListEnumPostInteractionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPostInteractionTypeWithAggregatesFilter<$PrismaModel> | $Enums.PostInteractionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPostInteractionTypeFilter<$PrismaModel>
    _max?: NestedEnumPostInteractionTypeFilter<$PrismaModel>
  }

  export type EnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fromUserId?: SortOrder
    type?: SortOrder
    entityId?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fromUserId?: SortOrder
    type?: SortOrder
    entityId?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fromUserId?: SortOrder
    type?: SortOrder
    entityId?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConversationUserAIdUserBIdCompoundUniqueInput = {
    userAId: string
    userBId: string
  }

  export type ConversationCountOrderByAggregateInput = {
    id?: SortOrder
    userAId?: SortOrder
    userBId?: SortOrder
    lastMessageAt?: SortOrder
    lastMessageText?: SortOrder
    lastMessageSenderId?: SortOrder
    userALastReadAt?: SortOrder
    userBLastReadAt?: SortOrder
    userAUnreadCount?: SortOrder
    userBUnreadCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConversationAvgOrderByAggregateInput = {
    userAUnreadCount?: SortOrder
    userBUnreadCount?: SortOrder
  }

  export type ConversationMaxOrderByAggregateInput = {
    id?: SortOrder
    userAId?: SortOrder
    userBId?: SortOrder
    lastMessageAt?: SortOrder
    lastMessageText?: SortOrder
    lastMessageSenderId?: SortOrder
    userALastReadAt?: SortOrder
    userBLastReadAt?: SortOrder
    userAUnreadCount?: SortOrder
    userBUnreadCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConversationMinOrderByAggregateInput = {
    id?: SortOrder
    userAId?: SortOrder
    userBId?: SortOrder
    lastMessageAt?: SortOrder
    lastMessageText?: SortOrder
    lastMessageSenderId?: SortOrder
    userALastReadAt?: SortOrder
    userBLastReadAt?: SortOrder
    userAUnreadCount?: SortOrder
    userBUnreadCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConversationSumOrderByAggregateInput = {
    userAUnreadCount?: SortOrder
    userBUnreadCount?: SortOrder
  }

  export type ConversationScalarRelationFilter = {
    is?: ConversationWhereInput
    isNot?: ConversationWhereInput
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    text?: SortOrder
    media?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumJobLocationTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.JobLocationType | EnumJobLocationTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.JobLocationType[] | ListEnumJobLocationTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.JobLocationType[] | ListEnumJobLocationTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumJobLocationTypeNullableFilter<$PrismaModel> | $Enums.JobLocationType | null
    isSet?: boolean
  }

  export type EnumJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusFilter<$PrismaModel> | $Enums.JobStatus
  }

  export type JobPostCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    jobTitle?: SortOrder
    companyName?: SortOrder
    location?: SortOrder
    locationType?: SortOrder
    jobDetails?: SortOrder
    jobRequirements?: SortOrder
    employmentType?: SortOrder
    positionsAvailable?: SortOrder
    positionsFilled?: SortOrder
    salaryMin?: SortOrder
    salaryMax?: SortOrder
    salaryCurrency?: SortOrder
    deadline?: SortOrder
    status?: SortOrder
    applyUrl?: SortOrder
    allowExternalApply?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobPostAvgOrderByAggregateInput = {
    positionsAvailable?: SortOrder
    positionsFilled?: SortOrder
    salaryMin?: SortOrder
    salaryMax?: SortOrder
  }

  export type JobPostMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    jobTitle?: SortOrder
    companyName?: SortOrder
    location?: SortOrder
    locationType?: SortOrder
    jobDetails?: SortOrder
    employmentType?: SortOrder
    positionsAvailable?: SortOrder
    positionsFilled?: SortOrder
    salaryMin?: SortOrder
    salaryMax?: SortOrder
    salaryCurrency?: SortOrder
    deadline?: SortOrder
    status?: SortOrder
    applyUrl?: SortOrder
    allowExternalApply?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobPostMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    jobTitle?: SortOrder
    companyName?: SortOrder
    location?: SortOrder
    locationType?: SortOrder
    jobDetails?: SortOrder
    employmentType?: SortOrder
    positionsAvailable?: SortOrder
    positionsFilled?: SortOrder
    salaryMin?: SortOrder
    salaryMax?: SortOrder
    salaryCurrency?: SortOrder
    deadline?: SortOrder
    status?: SortOrder
    applyUrl?: SortOrder
    allowExternalApply?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobPostSumOrderByAggregateInput = {
    positionsAvailable?: SortOrder
    positionsFilled?: SortOrder
    salaryMin?: SortOrder
    salaryMax?: SortOrder
  }

  export type EnumJobLocationTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobLocationType | EnumJobLocationTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.JobLocationType[] | ListEnumJobLocationTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.JobLocationType[] | ListEnumJobLocationTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumJobLocationTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.JobLocationType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumJobLocationTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumJobLocationTypeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type EnumJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusWithAggregatesFilter<$PrismaModel> | $Enums.JobStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobStatusFilter<$PrismaModel>
    _max?: NestedEnumJobStatusFilter<$PrismaModel>
  }

  export type EnumApplicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusFilter<$PrismaModel> | $Enums.ApplicationStatus
  }

  export type JobPostScalarRelationFilter = {
    is?: JobPostWhereInput
    isNot?: JobPostWhereInput
  }

  export type JobApplicationJobPostIdApplicantIdCompoundUniqueInput = {
    jobPostId: string
    applicantId: string
  }

  export type JobApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    jobPostId?: SortOrder
    applicantId?: SortOrder
    resumeLetter?: SortOrder
    expectedSalary?: SortOrder
    availability?: SortOrder
    resumeBlobName?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobApplicationAvgOrderByAggregateInput = {
    expectedSalary?: SortOrder
  }

  export type JobApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    jobPostId?: SortOrder
    applicantId?: SortOrder
    resumeLetter?: SortOrder
    expectedSalary?: SortOrder
    availability?: SortOrder
    resumeBlobName?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    jobPostId?: SortOrder
    applicantId?: SortOrder
    resumeLetter?: SortOrder
    expectedSalary?: SortOrder
    availability?: SortOrder
    resumeBlobName?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JobApplicationSumOrderByAggregateInput = {
    expectedSalary?: SortOrder
  }

  export type EnumApplicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApplicationStatusFilter<$PrismaModel>
    _max?: NestedEnumApplicationStatusFilter<$PrismaModel>
  }

  export type JobApplicationCreateNestedManyWithoutApplicantInput = {
    create?: XOR<JobApplicationCreateWithoutApplicantInput, JobApplicationUncheckedCreateWithoutApplicantInput> | JobApplicationCreateWithoutApplicantInput[] | JobApplicationUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: JobApplicationCreateOrConnectWithoutApplicantInput | JobApplicationCreateOrConnectWithoutApplicantInput[]
    createMany?: JobApplicationCreateManyApplicantInputEnvelope
    connect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
  }

  export type ExperienceCreateNestedManyWithoutUserInput = {
    create?: XOR<ExperienceCreateWithoutUserInput, ExperienceUncheckedCreateWithoutUserInput> | ExperienceCreateWithoutUserInput[] | ExperienceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutUserInput | ExperienceCreateOrConnectWithoutUserInput[]
    createMany?: ExperienceCreateManyUserInputEnvelope
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
  }

  export type EducationCreateNestedManyWithoutUserInput = {
    create?: XOR<EducationCreateWithoutUserInput, EducationUncheckedCreateWithoutUserInput> | EducationCreateWithoutUserInput[] | EducationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutUserInput | EducationCreateOrConnectWithoutUserInput[]
    createMany?: EducationCreateManyUserInputEnvelope
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
  }

  export type PostCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type ConnectionRequestCreateNestedManyWithoutFromUserInput = {
    create?: XOR<ConnectionRequestCreateWithoutFromUserInput, ConnectionRequestUncheckedCreateWithoutFromUserInput> | ConnectionRequestCreateWithoutFromUserInput[] | ConnectionRequestUncheckedCreateWithoutFromUserInput[]
    connectOrCreate?: ConnectionRequestCreateOrConnectWithoutFromUserInput | ConnectionRequestCreateOrConnectWithoutFromUserInput[]
    createMany?: ConnectionRequestCreateManyFromUserInputEnvelope
    connect?: ConnectionRequestWhereUniqueInput | ConnectionRequestWhereUniqueInput[]
  }

  export type ConnectionRequestCreateNestedManyWithoutToUserInput = {
    create?: XOR<ConnectionRequestCreateWithoutToUserInput, ConnectionRequestUncheckedCreateWithoutToUserInput> | ConnectionRequestCreateWithoutToUserInput[] | ConnectionRequestUncheckedCreateWithoutToUserInput[]
    connectOrCreate?: ConnectionRequestCreateOrConnectWithoutToUserInput | ConnectionRequestCreateOrConnectWithoutToUserInput[]
    createMany?: ConnectionRequestCreateManyToUserInputEnvelope
    connect?: ConnectionRequestWhereUniqueInput | ConnectionRequestWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutFromUserInput = {
    create?: XOR<NotificationCreateWithoutFromUserInput, NotificationUncheckedCreateWithoutFromUserInput> | NotificationCreateWithoutFromUserInput[] | NotificationUncheckedCreateWithoutFromUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutFromUserInput | NotificationCreateOrConnectWithoutFromUserInput[]
    createMany?: NotificationCreateManyFromUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type JobApplicationUncheckedCreateNestedManyWithoutApplicantInput = {
    create?: XOR<JobApplicationCreateWithoutApplicantInput, JobApplicationUncheckedCreateWithoutApplicantInput> | JobApplicationCreateWithoutApplicantInput[] | JobApplicationUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: JobApplicationCreateOrConnectWithoutApplicantInput | JobApplicationCreateOrConnectWithoutApplicantInput[]
    createMany?: JobApplicationCreateManyApplicantInputEnvelope
    connect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
  }

  export type ExperienceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ExperienceCreateWithoutUserInput, ExperienceUncheckedCreateWithoutUserInput> | ExperienceCreateWithoutUserInput[] | ExperienceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutUserInput | ExperienceCreateOrConnectWithoutUserInput[]
    createMany?: ExperienceCreateManyUserInputEnvelope
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
  }

  export type EducationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EducationCreateWithoutUserInput, EducationUncheckedCreateWithoutUserInput> | EducationCreateWithoutUserInput[] | EducationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutUserInput | EducationCreateOrConnectWithoutUserInput[]
    createMany?: EducationCreateManyUserInputEnvelope
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type ConnectionRequestUncheckedCreateNestedManyWithoutFromUserInput = {
    create?: XOR<ConnectionRequestCreateWithoutFromUserInput, ConnectionRequestUncheckedCreateWithoutFromUserInput> | ConnectionRequestCreateWithoutFromUserInput[] | ConnectionRequestUncheckedCreateWithoutFromUserInput[]
    connectOrCreate?: ConnectionRequestCreateOrConnectWithoutFromUserInput | ConnectionRequestCreateOrConnectWithoutFromUserInput[]
    createMany?: ConnectionRequestCreateManyFromUserInputEnvelope
    connect?: ConnectionRequestWhereUniqueInput | ConnectionRequestWhereUniqueInput[]
  }

  export type ConnectionRequestUncheckedCreateNestedManyWithoutToUserInput = {
    create?: XOR<ConnectionRequestCreateWithoutToUserInput, ConnectionRequestUncheckedCreateWithoutToUserInput> | ConnectionRequestCreateWithoutToUserInput[] | ConnectionRequestUncheckedCreateWithoutToUserInput[]
    connectOrCreate?: ConnectionRequestCreateOrConnectWithoutToUserInput | ConnectionRequestCreateOrConnectWithoutToUserInput[]
    createMany?: ConnectionRequestCreateManyToUserInputEnvelope
    connect?: ConnectionRequestWhereUniqueInput | ConnectionRequestWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutFromUserInput = {
    create?: XOR<NotificationCreateWithoutFromUserInput, NotificationUncheckedCreateWithoutFromUserInput> | NotificationCreateWithoutFromUserInput[] | NotificationUncheckedCreateWithoutFromUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutFromUserInput | NotificationCreateOrConnectWithoutFromUserInput[]
    createMany?: NotificationCreateManyFromUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type JobApplicationUpdateManyWithoutApplicantNestedInput = {
    create?: XOR<JobApplicationCreateWithoutApplicantInput, JobApplicationUncheckedCreateWithoutApplicantInput> | JobApplicationCreateWithoutApplicantInput[] | JobApplicationUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: JobApplicationCreateOrConnectWithoutApplicantInput | JobApplicationCreateOrConnectWithoutApplicantInput[]
    upsert?: JobApplicationUpsertWithWhereUniqueWithoutApplicantInput | JobApplicationUpsertWithWhereUniqueWithoutApplicantInput[]
    createMany?: JobApplicationCreateManyApplicantInputEnvelope
    set?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    disconnect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    delete?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    connect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    update?: JobApplicationUpdateWithWhereUniqueWithoutApplicantInput | JobApplicationUpdateWithWhereUniqueWithoutApplicantInput[]
    updateMany?: JobApplicationUpdateManyWithWhereWithoutApplicantInput | JobApplicationUpdateManyWithWhereWithoutApplicantInput[]
    deleteMany?: JobApplicationScalarWhereInput | JobApplicationScalarWhereInput[]
  }

  export type ExperienceUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExperienceCreateWithoutUserInput, ExperienceUncheckedCreateWithoutUserInput> | ExperienceCreateWithoutUserInput[] | ExperienceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutUserInput | ExperienceCreateOrConnectWithoutUserInput[]
    upsert?: ExperienceUpsertWithWhereUniqueWithoutUserInput | ExperienceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExperienceCreateManyUserInputEnvelope
    set?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    disconnect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    delete?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    update?: ExperienceUpdateWithWhereUniqueWithoutUserInput | ExperienceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExperienceUpdateManyWithWhereWithoutUserInput | ExperienceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[]
  }

  export type EducationUpdateManyWithoutUserNestedInput = {
    create?: XOR<EducationCreateWithoutUserInput, EducationUncheckedCreateWithoutUserInput> | EducationCreateWithoutUserInput[] | EducationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutUserInput | EducationCreateOrConnectWithoutUserInput[]
    upsert?: EducationUpsertWithWhereUniqueWithoutUserInput | EducationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EducationCreateManyUserInputEnvelope
    set?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    disconnect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    delete?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    update?: EducationUpdateWithWhereUniqueWithoutUserInput | EducationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EducationUpdateManyWithWhereWithoutUserInput | EducationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EducationScalarWhereInput | EducationScalarWhereInput[]
  }

  export type PostUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutUserInput | PostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutUserInput | PostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostUpdateManyWithWhereWithoutUserInput | PostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type ConnectionRequestUpdateManyWithoutFromUserNestedInput = {
    create?: XOR<ConnectionRequestCreateWithoutFromUserInput, ConnectionRequestUncheckedCreateWithoutFromUserInput> | ConnectionRequestCreateWithoutFromUserInput[] | ConnectionRequestUncheckedCreateWithoutFromUserInput[]
    connectOrCreate?: ConnectionRequestCreateOrConnectWithoutFromUserInput | ConnectionRequestCreateOrConnectWithoutFromUserInput[]
    upsert?: ConnectionRequestUpsertWithWhereUniqueWithoutFromUserInput | ConnectionRequestUpsertWithWhereUniqueWithoutFromUserInput[]
    createMany?: ConnectionRequestCreateManyFromUserInputEnvelope
    set?: ConnectionRequestWhereUniqueInput | ConnectionRequestWhereUniqueInput[]
    disconnect?: ConnectionRequestWhereUniqueInput | ConnectionRequestWhereUniqueInput[]
    delete?: ConnectionRequestWhereUniqueInput | ConnectionRequestWhereUniqueInput[]
    connect?: ConnectionRequestWhereUniqueInput | ConnectionRequestWhereUniqueInput[]
    update?: ConnectionRequestUpdateWithWhereUniqueWithoutFromUserInput | ConnectionRequestUpdateWithWhereUniqueWithoutFromUserInput[]
    updateMany?: ConnectionRequestUpdateManyWithWhereWithoutFromUserInput | ConnectionRequestUpdateManyWithWhereWithoutFromUserInput[]
    deleteMany?: ConnectionRequestScalarWhereInput | ConnectionRequestScalarWhereInput[]
  }

  export type ConnectionRequestUpdateManyWithoutToUserNestedInput = {
    create?: XOR<ConnectionRequestCreateWithoutToUserInput, ConnectionRequestUncheckedCreateWithoutToUserInput> | ConnectionRequestCreateWithoutToUserInput[] | ConnectionRequestUncheckedCreateWithoutToUserInput[]
    connectOrCreate?: ConnectionRequestCreateOrConnectWithoutToUserInput | ConnectionRequestCreateOrConnectWithoutToUserInput[]
    upsert?: ConnectionRequestUpsertWithWhereUniqueWithoutToUserInput | ConnectionRequestUpsertWithWhereUniqueWithoutToUserInput[]
    createMany?: ConnectionRequestCreateManyToUserInputEnvelope
    set?: ConnectionRequestWhereUniqueInput | ConnectionRequestWhereUniqueInput[]
    disconnect?: ConnectionRequestWhereUniqueInput | ConnectionRequestWhereUniqueInput[]
    delete?: ConnectionRequestWhereUniqueInput | ConnectionRequestWhereUniqueInput[]
    connect?: ConnectionRequestWhereUniqueInput | ConnectionRequestWhereUniqueInput[]
    update?: ConnectionRequestUpdateWithWhereUniqueWithoutToUserInput | ConnectionRequestUpdateWithWhereUniqueWithoutToUserInput[]
    updateMany?: ConnectionRequestUpdateManyWithWhereWithoutToUserInput | ConnectionRequestUpdateManyWithWhereWithoutToUserInput[]
    deleteMany?: ConnectionRequestScalarWhereInput | ConnectionRequestScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutFromUserNestedInput = {
    create?: XOR<NotificationCreateWithoutFromUserInput, NotificationUncheckedCreateWithoutFromUserInput> | NotificationCreateWithoutFromUserInput[] | NotificationUncheckedCreateWithoutFromUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutFromUserInput | NotificationCreateOrConnectWithoutFromUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutFromUserInput | NotificationUpsertWithWhereUniqueWithoutFromUserInput[]
    createMany?: NotificationCreateManyFromUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutFromUserInput | NotificationUpdateWithWhereUniqueWithoutFromUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutFromUserInput | NotificationUpdateManyWithWhereWithoutFromUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type JobApplicationUncheckedUpdateManyWithoutApplicantNestedInput = {
    create?: XOR<JobApplicationCreateWithoutApplicantInput, JobApplicationUncheckedCreateWithoutApplicantInput> | JobApplicationCreateWithoutApplicantInput[] | JobApplicationUncheckedCreateWithoutApplicantInput[]
    connectOrCreate?: JobApplicationCreateOrConnectWithoutApplicantInput | JobApplicationCreateOrConnectWithoutApplicantInput[]
    upsert?: JobApplicationUpsertWithWhereUniqueWithoutApplicantInput | JobApplicationUpsertWithWhereUniqueWithoutApplicantInput[]
    createMany?: JobApplicationCreateManyApplicantInputEnvelope
    set?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    disconnect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    delete?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    connect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    update?: JobApplicationUpdateWithWhereUniqueWithoutApplicantInput | JobApplicationUpdateWithWhereUniqueWithoutApplicantInput[]
    updateMany?: JobApplicationUpdateManyWithWhereWithoutApplicantInput | JobApplicationUpdateManyWithWhereWithoutApplicantInput[]
    deleteMany?: JobApplicationScalarWhereInput | JobApplicationScalarWhereInput[]
  }

  export type ExperienceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExperienceCreateWithoutUserInput, ExperienceUncheckedCreateWithoutUserInput> | ExperienceCreateWithoutUserInput[] | ExperienceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutUserInput | ExperienceCreateOrConnectWithoutUserInput[]
    upsert?: ExperienceUpsertWithWhereUniqueWithoutUserInput | ExperienceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExperienceCreateManyUserInputEnvelope
    set?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    disconnect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    delete?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    update?: ExperienceUpdateWithWhereUniqueWithoutUserInput | ExperienceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExperienceUpdateManyWithWhereWithoutUserInput | ExperienceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[]
  }

  export type EducationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EducationCreateWithoutUserInput, EducationUncheckedCreateWithoutUserInput> | EducationCreateWithoutUserInput[] | EducationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutUserInput | EducationCreateOrConnectWithoutUserInput[]
    upsert?: EducationUpsertWithWhereUniqueWithoutUserInput | EducationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EducationCreateManyUserInputEnvelope
    set?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    disconnect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    delete?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    update?: EducationUpdateWithWhereUniqueWithoutUserInput | EducationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EducationUpdateManyWithWhereWithoutUserInput | EducationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EducationScalarWhereInput | EducationScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutUserInput | PostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutUserInput | PostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostUpdateManyWithWhereWithoutUserInput | PostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type ConnectionRequestUncheckedUpdateManyWithoutFromUserNestedInput = {
    create?: XOR<ConnectionRequestCreateWithoutFromUserInput, ConnectionRequestUncheckedCreateWithoutFromUserInput> | ConnectionRequestCreateWithoutFromUserInput[] | ConnectionRequestUncheckedCreateWithoutFromUserInput[]
    connectOrCreate?: ConnectionRequestCreateOrConnectWithoutFromUserInput | ConnectionRequestCreateOrConnectWithoutFromUserInput[]
    upsert?: ConnectionRequestUpsertWithWhereUniqueWithoutFromUserInput | ConnectionRequestUpsertWithWhereUniqueWithoutFromUserInput[]
    createMany?: ConnectionRequestCreateManyFromUserInputEnvelope
    set?: ConnectionRequestWhereUniqueInput | ConnectionRequestWhereUniqueInput[]
    disconnect?: ConnectionRequestWhereUniqueInput | ConnectionRequestWhereUniqueInput[]
    delete?: ConnectionRequestWhereUniqueInput | ConnectionRequestWhereUniqueInput[]
    connect?: ConnectionRequestWhereUniqueInput | ConnectionRequestWhereUniqueInput[]
    update?: ConnectionRequestUpdateWithWhereUniqueWithoutFromUserInput | ConnectionRequestUpdateWithWhereUniqueWithoutFromUserInput[]
    updateMany?: ConnectionRequestUpdateManyWithWhereWithoutFromUserInput | ConnectionRequestUpdateManyWithWhereWithoutFromUserInput[]
    deleteMany?: ConnectionRequestScalarWhereInput | ConnectionRequestScalarWhereInput[]
  }

  export type ConnectionRequestUncheckedUpdateManyWithoutToUserNestedInput = {
    create?: XOR<ConnectionRequestCreateWithoutToUserInput, ConnectionRequestUncheckedCreateWithoutToUserInput> | ConnectionRequestCreateWithoutToUserInput[] | ConnectionRequestUncheckedCreateWithoutToUserInput[]
    connectOrCreate?: ConnectionRequestCreateOrConnectWithoutToUserInput | ConnectionRequestCreateOrConnectWithoutToUserInput[]
    upsert?: ConnectionRequestUpsertWithWhereUniqueWithoutToUserInput | ConnectionRequestUpsertWithWhereUniqueWithoutToUserInput[]
    createMany?: ConnectionRequestCreateManyToUserInputEnvelope
    set?: ConnectionRequestWhereUniqueInput | ConnectionRequestWhereUniqueInput[]
    disconnect?: ConnectionRequestWhereUniqueInput | ConnectionRequestWhereUniqueInput[]
    delete?: ConnectionRequestWhereUniqueInput | ConnectionRequestWhereUniqueInput[]
    connect?: ConnectionRequestWhereUniqueInput | ConnectionRequestWhereUniqueInput[]
    update?: ConnectionRequestUpdateWithWhereUniqueWithoutToUserInput | ConnectionRequestUpdateWithWhereUniqueWithoutToUserInput[]
    updateMany?: ConnectionRequestUpdateManyWithWhereWithoutToUserInput | ConnectionRequestUpdateManyWithWhereWithoutToUserInput[]
    deleteMany?: ConnectionRequestScalarWhereInput | ConnectionRequestScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutFromUserNestedInput = {
    create?: XOR<NotificationCreateWithoutFromUserInput, NotificationUncheckedCreateWithoutFromUserInput> | NotificationCreateWithoutFromUserInput[] | NotificationUncheckedCreateWithoutFromUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutFromUserInput | NotificationCreateOrConnectWithoutFromUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutFromUserInput | NotificationUpsertWithWhereUniqueWithoutFromUserInput[]
    createMany?: NotificationCreateManyFromUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutFromUserInput | NotificationUpdateWithWhereUniqueWithoutFromUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutFromUserInput | NotificationUpdateManyWithWhereWithoutFromUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutExperienceInput = {
    create?: XOR<UserCreateWithoutExperienceInput, UserUncheckedCreateWithoutExperienceInput>
    connectOrCreate?: UserCreateOrConnectWithoutExperienceInput
    connect?: UserWhereUniqueInput
  }

  export type EnumEmploymentTypeFieldUpdateOperationsInput = {
    set?: $Enums.EmploymentType
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type UserUpdateOneRequiredWithoutExperienceNestedInput = {
    create?: XOR<UserCreateWithoutExperienceInput, UserUncheckedCreateWithoutExperienceInput>
    connectOrCreate?: UserCreateOrConnectWithoutExperienceInput
    upsert?: UserUpsertWithoutExperienceInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutExperienceInput, UserUpdateWithoutExperienceInput>, UserUncheckedUpdateWithoutExperienceInput>
  }

  export type UserCreateNestedOneWithoutEducationInput = {
    create?: XOR<UserCreateWithoutEducationInput, UserUncheckedCreateWithoutEducationInput>
    connectOrCreate?: UserCreateOrConnectWithoutEducationInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutEducationNestedInput = {
    create?: XOR<UserCreateWithoutEducationInput, UserUncheckedCreateWithoutEducationInput>
    connectOrCreate?: UserCreateOrConnectWithoutEducationInput
    upsert?: UserUpsertWithoutEducationInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEducationInput, UserUpdateWithoutEducationInput>, UserUncheckedUpdateWithoutEducationInput>
  }

  export type PostCreatemediaTypesInput = {
    set: string[]
  }

  export type PostCreatepollOptionsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type JobPostCreateNestedOneWithoutPostInput = {
    create?: XOR<JobPostCreateWithoutPostInput, JobPostUncheckedCreateWithoutPostInput>
    connectOrCreate?: JobPostCreateOrConnectWithoutPostInput
    connect?: JobPostWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutPostInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type PostInteractionCreateNestedManyWithoutPostInput = {
    create?: XOR<PostInteractionCreateWithoutPostInput, PostInteractionUncheckedCreateWithoutPostInput> | PostInteractionCreateWithoutPostInput[] | PostInteractionUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostInteractionCreateOrConnectWithoutPostInput | PostInteractionCreateOrConnectWithoutPostInput[]
    createMany?: PostInteractionCreateManyPostInputEnvelope
    connect?: PostInteractionWhereUniqueInput | PostInteractionWhereUniqueInput[]
  }

  export type JobPostUncheckedCreateNestedOneWithoutPostInput = {
    create?: XOR<JobPostCreateWithoutPostInput, JobPostUncheckedCreateWithoutPostInput>
    connectOrCreate?: JobPostCreateOrConnectWithoutPostInput
    connect?: JobPostWhereUniqueInput
  }

  export type CommentUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type PostInteractionUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<PostInteractionCreateWithoutPostInput, PostInteractionUncheckedCreateWithoutPostInput> | PostInteractionCreateWithoutPostInput[] | PostInteractionUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostInteractionCreateOrConnectWithoutPostInput | PostInteractionCreateOrConnectWithoutPostInput[]
    createMany?: PostInteractionCreateManyPostInputEnvelope
    connect?: PostInteractionWhereUniqueInput | PostInteractionWhereUniqueInput[]
  }

  export type PostUpdatemediaTypesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type PostUpdatepollOptionsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type JobPostUpdateOneWithoutPostNestedInput = {
    create?: XOR<JobPostCreateWithoutPostInput, JobPostUncheckedCreateWithoutPostInput>
    connectOrCreate?: JobPostCreateOrConnectWithoutPostInput
    upsert?: JobPostUpsertWithoutPostInput
    disconnect?: JobPostWhereInput | boolean
    delete?: JobPostWhereInput | boolean
    connect?: JobPostWhereUniqueInput
    update?: XOR<XOR<JobPostUpdateToOneWithWhereWithoutPostInput, JobPostUpdateWithoutPostInput>, JobPostUncheckedUpdateWithoutPostInput>
  }

  export type CommentUpdateManyWithoutPostNestedInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutPostInput | CommentUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutPostInput | CommentUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutPostInput | CommentUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type PostInteractionUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostInteractionCreateWithoutPostInput, PostInteractionUncheckedCreateWithoutPostInput> | PostInteractionCreateWithoutPostInput[] | PostInteractionUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostInteractionCreateOrConnectWithoutPostInput | PostInteractionCreateOrConnectWithoutPostInput[]
    upsert?: PostInteractionUpsertWithWhereUniqueWithoutPostInput | PostInteractionUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostInteractionCreateManyPostInputEnvelope
    set?: PostInteractionWhereUniqueInput | PostInteractionWhereUniqueInput[]
    disconnect?: PostInteractionWhereUniqueInput | PostInteractionWhereUniqueInput[]
    delete?: PostInteractionWhereUniqueInput | PostInteractionWhereUniqueInput[]
    connect?: PostInteractionWhereUniqueInput | PostInteractionWhereUniqueInput[]
    update?: PostInteractionUpdateWithWhereUniqueWithoutPostInput | PostInteractionUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostInteractionUpdateManyWithWhereWithoutPostInput | PostInteractionUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostInteractionScalarWhereInput | PostInteractionScalarWhereInput[]
  }

  export type JobPostUncheckedUpdateOneWithoutPostNestedInput = {
    create?: XOR<JobPostCreateWithoutPostInput, JobPostUncheckedCreateWithoutPostInput>
    connectOrCreate?: JobPostCreateOrConnectWithoutPostInput
    upsert?: JobPostUpsertWithoutPostInput
    disconnect?: JobPostWhereInput | boolean
    delete?: JobPostWhereInput | boolean
    connect?: JobPostWhereUniqueInput
    update?: XOR<XOR<JobPostUpdateToOneWithWhereWithoutPostInput, JobPostUpdateWithoutPostInput>, JobPostUncheckedUpdateWithoutPostInput>
  }

  export type CommentUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutPostInput | CommentUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutPostInput | CommentUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutPostInput | CommentUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type PostInteractionUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostInteractionCreateWithoutPostInput, PostInteractionUncheckedCreateWithoutPostInput> | PostInteractionCreateWithoutPostInput[] | PostInteractionUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostInteractionCreateOrConnectWithoutPostInput | PostInteractionCreateOrConnectWithoutPostInput[]
    upsert?: PostInteractionUpsertWithWhereUniqueWithoutPostInput | PostInteractionUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostInteractionCreateManyPostInputEnvelope
    set?: PostInteractionWhereUniqueInput | PostInteractionWhereUniqueInput[]
    disconnect?: PostInteractionWhereUniqueInput | PostInteractionWhereUniqueInput[]
    delete?: PostInteractionWhereUniqueInput | PostInteractionWhereUniqueInput[]
    connect?: PostInteractionWhereUniqueInput | PostInteractionWhereUniqueInput[]
    update?: PostInteractionUpdateWithWhereUniqueWithoutPostInput | PostInteractionUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostInteractionUpdateManyWithWhereWithoutPostInput | PostInteractionUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostInteractionScalarWhereInput | PostInteractionScalarWhereInput[]
  }

  export type PostCreateNestedOneWithoutCommentsInput = {
    create?: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PostCreateOrConnectWithoutCommentsInput
    connect?: PostWhereUniqueInput
  }

  export type CommentCreateNestedOneWithoutRepliesInput = {
    create?: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: CommentCreateOrConnectWithoutRepliesInput
    connect?: CommentWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutParentInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput> | CommentCreateWithoutParentInput[] | CommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput | CommentCreateOrConnectWithoutParentInput[]
    createMany?: CommentCreateManyParentInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput> | CommentCreateWithoutParentInput[] | CommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput | CommentCreateOrConnectWithoutParentInput[]
    createMany?: CommentCreateManyParentInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type PostUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PostCreateOrConnectWithoutCommentsInput
    upsert?: PostUpsertWithoutCommentsInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutCommentsInput, PostUpdateWithoutCommentsInput>, PostUncheckedUpdateWithoutCommentsInput>
  }

  export type CommentUpdateOneWithoutRepliesNestedInput = {
    create?: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: CommentCreateOrConnectWithoutRepliesInput
    upsert?: CommentUpsertWithoutRepliesInput
    disconnect?: boolean
    delete?: CommentWhereInput | boolean
    connect?: CommentWhereUniqueInput
    update?: XOR<XOR<CommentUpdateToOneWithWhereWithoutRepliesInput, CommentUpdateWithoutRepliesInput>, CommentUncheckedUpdateWithoutRepliesInput>
  }

  export type CommentUpdateManyWithoutParentNestedInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput> | CommentCreateWithoutParentInput[] | CommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput | CommentCreateOrConnectWithoutParentInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutParentInput | CommentUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CommentCreateManyParentInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutParentInput | CommentUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutParentInput | CommentUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput> | CommentCreateWithoutParentInput[] | CommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput | CommentCreateOrConnectWithoutParentInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutParentInput | CommentUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CommentCreateManyParentInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutParentInput | CommentUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutParentInput | CommentUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSentConnectionRequestsInput = {
    create?: XOR<UserCreateWithoutSentConnectionRequestsInput, UserUncheckedCreateWithoutSentConnectionRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentConnectionRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedConnectionRequestsInput = {
    create?: XOR<UserCreateWithoutReceivedConnectionRequestsInput, UserUncheckedCreateWithoutReceivedConnectionRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedConnectionRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.RequestStatus
  }

  export type UserUpdateOneRequiredWithoutSentConnectionRequestsNestedInput = {
    create?: XOR<UserCreateWithoutSentConnectionRequestsInput, UserUncheckedCreateWithoutSentConnectionRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentConnectionRequestsInput
    upsert?: UserUpsertWithoutSentConnectionRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentConnectionRequestsInput, UserUpdateWithoutSentConnectionRequestsInput>, UserUncheckedUpdateWithoutSentConnectionRequestsInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedConnectionRequestsNestedInput = {
    create?: XOR<UserCreateWithoutReceivedConnectionRequestsInput, UserUncheckedCreateWithoutReceivedConnectionRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedConnectionRequestsInput
    upsert?: UserUpsertWithoutReceivedConnectionRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedConnectionRequestsInput, UserUpdateWithoutReceivedConnectionRequestsInput>, UserUncheckedUpdateWithoutReceivedConnectionRequestsInput>
  }

  export type PostCreateNestedOneWithoutInteractionsInput = {
    create?: XOR<PostCreateWithoutInteractionsInput, PostUncheckedCreateWithoutInteractionsInput>
    connectOrCreate?: PostCreateOrConnectWithoutInteractionsInput
    connect?: PostWhereUniqueInput
  }

  export type EnumPostInteractionTypeFieldUpdateOperationsInput = {
    set?: $Enums.PostInteractionType
  }

  export type PostUpdateOneRequiredWithoutInteractionsNestedInput = {
    create?: XOR<PostCreateWithoutInteractionsInput, PostUncheckedCreateWithoutInteractionsInput>
    connectOrCreate?: PostCreateOrConnectWithoutInteractionsInput
    upsert?: PostUpsertWithoutInteractionsInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutInteractionsInput, PostUpdateWithoutInteractionsInput>, PostUncheckedUpdateWithoutInteractionsInput>
  }

  export type UserCreateNestedOneWithoutNotificationsReceivedInput = {
    create?: XOR<UserCreateWithoutNotificationsReceivedInput, UserUncheckedCreateWithoutNotificationsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsReceivedInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutNotificationsSentInput = {
    create?: XOR<UserCreateWithoutNotificationsSentInput, UserUncheckedCreateWithoutNotificationsSentInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsSentInput
    connect?: UserWhereUniqueInput
  }

  export type EnumNotificationTypeFieldUpdateOperationsInput = {
    set?: $Enums.NotificationType
  }

  export type UserUpdateOneRequiredWithoutNotificationsReceivedNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsReceivedInput, UserUncheckedCreateWithoutNotificationsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsReceivedInput
    upsert?: UserUpsertWithoutNotificationsReceivedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsReceivedInput, UserUpdateWithoutNotificationsReceivedInput>, UserUncheckedUpdateWithoutNotificationsReceivedInput>
  }

  export type UserUpdateOneRequiredWithoutNotificationsSentNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsSentInput, UserUncheckedCreateWithoutNotificationsSentInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsSentInput
    upsert?: UserUpsertWithoutNotificationsSentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsSentInput, UserUpdateWithoutNotificationsSentInput>, UserUncheckedUpdateWithoutNotificationsSentInput>
  }

  export type MessageCreateNestedManyWithoutConversationInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutConversationInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUpdateManyWithoutConversationNestedInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutConversationInput | MessageUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutConversationInput | MessageUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutConversationInput | MessageUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutConversationNestedInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutConversationInput | MessageUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutConversationInput | MessageUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutConversationInput | MessageUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ConversationCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ConversationCreateOrConnectWithoutMessagesInput
    connect?: ConversationWhereUniqueInput
  }

  export type ConversationUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ConversationCreateOrConnectWithoutMessagesInput
    upsert?: ConversationUpsertWithoutMessagesInput
    connect?: ConversationWhereUniqueInput
    update?: XOR<XOR<ConversationUpdateToOneWithWhereWithoutMessagesInput, ConversationUpdateWithoutMessagesInput>, ConversationUncheckedUpdateWithoutMessagesInput>
  }

  export type JobPostCreatejobRequirementsInput = {
    set: string[]
  }

  export type PostCreateNestedOneWithoutJobPostInput = {
    create?: XOR<PostCreateWithoutJobPostInput, PostUncheckedCreateWithoutJobPostInput>
    connectOrCreate?: PostCreateOrConnectWithoutJobPostInput
    connect?: PostWhereUniqueInput
  }

  export type JobApplicationCreateNestedManyWithoutJobPostInput = {
    create?: XOR<JobApplicationCreateWithoutJobPostInput, JobApplicationUncheckedCreateWithoutJobPostInput> | JobApplicationCreateWithoutJobPostInput[] | JobApplicationUncheckedCreateWithoutJobPostInput[]
    connectOrCreate?: JobApplicationCreateOrConnectWithoutJobPostInput | JobApplicationCreateOrConnectWithoutJobPostInput[]
    createMany?: JobApplicationCreateManyJobPostInputEnvelope
    connect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
  }

  export type JobApplicationUncheckedCreateNestedManyWithoutJobPostInput = {
    create?: XOR<JobApplicationCreateWithoutJobPostInput, JobApplicationUncheckedCreateWithoutJobPostInput> | JobApplicationCreateWithoutJobPostInput[] | JobApplicationUncheckedCreateWithoutJobPostInput[]
    connectOrCreate?: JobApplicationCreateOrConnectWithoutJobPostInput | JobApplicationCreateOrConnectWithoutJobPostInput[]
    createMany?: JobApplicationCreateManyJobPostInputEnvelope
    connect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
  }

  export type NullableEnumJobLocationTypeFieldUpdateOperationsInput = {
    set?: $Enums.JobLocationType | null
    unset?: boolean
  }

  export type JobPostUpdatejobRequirementsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumJobStatusFieldUpdateOperationsInput = {
    set?: $Enums.JobStatus
  }

  export type PostUpdateOneRequiredWithoutJobPostNestedInput = {
    create?: XOR<PostCreateWithoutJobPostInput, PostUncheckedCreateWithoutJobPostInput>
    connectOrCreate?: PostCreateOrConnectWithoutJobPostInput
    upsert?: PostUpsertWithoutJobPostInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutJobPostInput, PostUpdateWithoutJobPostInput>, PostUncheckedUpdateWithoutJobPostInput>
  }

  export type JobApplicationUpdateManyWithoutJobPostNestedInput = {
    create?: XOR<JobApplicationCreateWithoutJobPostInput, JobApplicationUncheckedCreateWithoutJobPostInput> | JobApplicationCreateWithoutJobPostInput[] | JobApplicationUncheckedCreateWithoutJobPostInput[]
    connectOrCreate?: JobApplicationCreateOrConnectWithoutJobPostInput | JobApplicationCreateOrConnectWithoutJobPostInput[]
    upsert?: JobApplicationUpsertWithWhereUniqueWithoutJobPostInput | JobApplicationUpsertWithWhereUniqueWithoutJobPostInput[]
    createMany?: JobApplicationCreateManyJobPostInputEnvelope
    set?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    disconnect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    delete?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    connect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    update?: JobApplicationUpdateWithWhereUniqueWithoutJobPostInput | JobApplicationUpdateWithWhereUniqueWithoutJobPostInput[]
    updateMany?: JobApplicationUpdateManyWithWhereWithoutJobPostInput | JobApplicationUpdateManyWithWhereWithoutJobPostInput[]
    deleteMany?: JobApplicationScalarWhereInput | JobApplicationScalarWhereInput[]
  }

  export type JobApplicationUncheckedUpdateManyWithoutJobPostNestedInput = {
    create?: XOR<JobApplicationCreateWithoutJobPostInput, JobApplicationUncheckedCreateWithoutJobPostInput> | JobApplicationCreateWithoutJobPostInput[] | JobApplicationUncheckedCreateWithoutJobPostInput[]
    connectOrCreate?: JobApplicationCreateOrConnectWithoutJobPostInput | JobApplicationCreateOrConnectWithoutJobPostInput[]
    upsert?: JobApplicationUpsertWithWhereUniqueWithoutJobPostInput | JobApplicationUpsertWithWhereUniqueWithoutJobPostInput[]
    createMany?: JobApplicationCreateManyJobPostInputEnvelope
    set?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    disconnect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    delete?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    connect?: JobApplicationWhereUniqueInput | JobApplicationWhereUniqueInput[]
    update?: JobApplicationUpdateWithWhereUniqueWithoutJobPostInput | JobApplicationUpdateWithWhereUniqueWithoutJobPostInput[]
    updateMany?: JobApplicationUpdateManyWithWhereWithoutJobPostInput | JobApplicationUpdateManyWithWhereWithoutJobPostInput[]
    deleteMany?: JobApplicationScalarWhereInput | JobApplicationScalarWhereInput[]
  }

  export type JobPostCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<JobPostCreateWithoutApplicationsInput, JobPostUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: JobPostCreateOrConnectWithoutApplicationsInput
    connect?: JobPostWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutJobApplicationsInput = {
    create?: XOR<UserCreateWithoutJobApplicationsInput, UserUncheckedCreateWithoutJobApplicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutJobApplicationsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumApplicationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ApplicationStatus
  }

  export type JobPostUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<JobPostCreateWithoutApplicationsInput, JobPostUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: JobPostCreateOrConnectWithoutApplicationsInput
    upsert?: JobPostUpsertWithoutApplicationsInput
    connect?: JobPostWhereUniqueInput
    update?: XOR<XOR<JobPostUpdateToOneWithWhereWithoutApplicationsInput, JobPostUpdateWithoutApplicationsInput>, JobPostUncheckedUpdateWithoutApplicationsInput>
  }

  export type UserUpdateOneRequiredWithoutJobApplicationsNestedInput = {
    create?: XOR<UserCreateWithoutJobApplicationsInput, UserUncheckedCreateWithoutJobApplicationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutJobApplicationsInput
    upsert?: UserUpsertWithoutJobApplicationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutJobApplicationsInput, UserUpdateWithoutJobApplicationsInput>, UserUncheckedUpdateWithoutJobApplicationsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    isSet?: boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumEmploymentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EmploymentType | EnumEmploymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EmploymentType[] | ListEnumEmploymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmploymentType[] | ListEnumEmploymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEmploymentTypeFilter<$PrismaModel> | $Enums.EmploymentType
  }

  export type NestedEnumEmploymentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmploymentType | EnumEmploymentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EmploymentType[] | ListEnumEmploymentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmploymentType[] | ListEnumEmploymentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEmploymentTypeWithAggregatesFilter<$PrismaModel> | $Enums.EmploymentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmploymentTypeFilter<$PrismaModel>
    _max?: NestedEnumEmploymentTypeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedEnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }

  export type NestedEnumPostInteractionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PostInteractionType | EnumPostInteractionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PostInteractionType[] | ListEnumPostInteractionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostInteractionType[] | ListEnumPostInteractionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPostInteractionTypeFilter<$PrismaModel> | $Enums.PostInteractionType
  }

  export type NestedEnumPostInteractionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PostInteractionType | EnumPostInteractionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PostInteractionType[] | ListEnumPostInteractionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostInteractionType[] | ListEnumPostInteractionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPostInteractionTypeWithAggregatesFilter<$PrismaModel> | $Enums.PostInteractionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPostInteractionTypeFilter<$PrismaModel>
    _max?: NestedEnumPostInteractionTypeFilter<$PrismaModel>
  }

  export type NestedEnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type NestedEnumJobLocationTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.JobLocationType | EnumJobLocationTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.JobLocationType[] | ListEnumJobLocationTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.JobLocationType[] | ListEnumJobLocationTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumJobLocationTypeNullableFilter<$PrismaModel> | $Enums.JobLocationType | null
    isSet?: boolean
  }

  export type NestedEnumJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusFilter<$PrismaModel> | $Enums.JobStatus
  }

  export type NestedEnumJobLocationTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobLocationType | EnumJobLocationTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.JobLocationType[] | ListEnumJobLocationTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.JobLocationType[] | ListEnumJobLocationTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumJobLocationTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.JobLocationType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumJobLocationTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumJobLocationTypeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedEnumJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JobStatus | EnumJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.JobStatus[] | ListEnumJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumJobStatusWithAggregatesFilter<$PrismaModel> | $Enums.JobStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJobStatusFilter<$PrismaModel>
    _max?: NestedEnumJobStatusFilter<$PrismaModel>
  }

  export type NestedEnumApplicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusFilter<$PrismaModel> | $Enums.ApplicationStatus
  }

  export type NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApplicationStatusFilter<$PrismaModel>
    _max?: NestedEnumApplicationStatusFilter<$PrismaModel>
  }

  export type JobApplicationCreateWithoutApplicantInput = {
    id?: string
    resumeLetter?: string | null
    expectedSalary?: number | null
    availability?: string | null
    resumeBlobName: string
    status?: $Enums.ApplicationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    jobPost: JobPostCreateNestedOneWithoutApplicationsInput
  }

  export type JobApplicationUncheckedCreateWithoutApplicantInput = {
    id?: string
    jobPostId: string
    resumeLetter?: string | null
    expectedSalary?: number | null
    availability?: string | null
    resumeBlobName: string
    status?: $Enums.ApplicationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobApplicationCreateOrConnectWithoutApplicantInput = {
    where: JobApplicationWhereUniqueInput
    create: XOR<JobApplicationCreateWithoutApplicantInput, JobApplicationUncheckedCreateWithoutApplicantInput>
  }

  export type JobApplicationCreateManyApplicantInputEnvelope = {
    data: JobApplicationCreateManyApplicantInput | JobApplicationCreateManyApplicantInput[]
  }

  export type ExperienceCreateWithoutUserInput = {
    id?: string
    title: string
    employmentType: $Enums.EmploymentType
    company: string
    startMonth: number
    startYear: number
    endMonth?: number | null
    endYear?: number | null
    isCurrent?: boolean
  }

  export type ExperienceUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    employmentType: $Enums.EmploymentType
    company: string
    startMonth: number
    startYear: number
    endMonth?: number | null
    endYear?: number | null
    isCurrent?: boolean
  }

  export type ExperienceCreateOrConnectWithoutUserInput = {
    where: ExperienceWhereUniqueInput
    create: XOR<ExperienceCreateWithoutUserInput, ExperienceUncheckedCreateWithoutUserInput>
  }

  export type ExperienceCreateManyUserInputEnvelope = {
    data: ExperienceCreateManyUserInput | ExperienceCreateManyUserInput[]
  }

  export type EducationCreateWithoutUserInput = {
    id?: string
    school: string
    degree: string
    fieldOfStudy: string
    startMonth: number
    startYear: number
    endMonth: number
    endYear: number
  }

  export type EducationUncheckedCreateWithoutUserInput = {
    id?: string
    school: string
    degree: string
    fieldOfStudy: string
    startMonth: number
    startYear: number
    endMonth: number
    endYear: number
  }

  export type EducationCreateOrConnectWithoutUserInput = {
    where: EducationWhereUniqueInput
    create: XOR<EducationCreateWithoutUserInput, EducationUncheckedCreateWithoutUserInput>
  }

  export type EducationCreateManyUserInputEnvelope = {
    data: EducationCreateManyUserInput | EducationCreateManyUserInput[]
  }

  export type PostCreateWithoutUserInput = {
    id?: string
    username: string
    profilePic?: string | null
    postType: string
    visibility?: string | null
    title?: string | null
    content: string
    media?: InputJsonValue | null
    mediaTypes?: PostCreatemediaTypesInput | string[]
    hasLinks?: boolean
    links?: InputJsonValue | null
    commentsDisabled?: boolean
    commentCount?: number
    likeCount?: number
    shareCount?: number
    savedCount?: number
    pollOptions?: PostCreatepollOptionsInput | string[]
    pollEndsAt?: Date | string | null
    pollVotes?: InputJsonValue | null
    createdAt?: Date | string
    updatedAt?: Date | string
    jobPost?: JobPostCreateNestedOneWithoutPostInput
    comments?: CommentCreateNestedManyWithoutPostInput
    interactions?: PostInteractionCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutUserInput = {
    id?: string
    username: string
    profilePic?: string | null
    postType: string
    visibility?: string | null
    title?: string | null
    content: string
    media?: InputJsonValue | null
    mediaTypes?: PostCreatemediaTypesInput | string[]
    hasLinks?: boolean
    links?: InputJsonValue | null
    commentsDisabled?: boolean
    commentCount?: number
    likeCount?: number
    shareCount?: number
    savedCount?: number
    pollOptions?: PostCreatepollOptionsInput | string[]
    pollEndsAt?: Date | string | null
    pollVotes?: InputJsonValue | null
    createdAt?: Date | string
    updatedAt?: Date | string
    jobPost?: JobPostUncheckedCreateNestedOneWithoutPostInput
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
    interactions?: PostInteractionUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutUserInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostCreateManyUserInputEnvelope = {
    data: PostCreateManyUserInput | PostCreateManyUserInput[]
  }

  export type ConnectionRequestCreateWithoutFromUserInput = {
    id?: string
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    toUser: UserCreateNestedOneWithoutReceivedConnectionRequestsInput
  }

  export type ConnectionRequestUncheckedCreateWithoutFromUserInput = {
    id?: string
    toUserId: string
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConnectionRequestCreateOrConnectWithoutFromUserInput = {
    where: ConnectionRequestWhereUniqueInput
    create: XOR<ConnectionRequestCreateWithoutFromUserInput, ConnectionRequestUncheckedCreateWithoutFromUserInput>
  }

  export type ConnectionRequestCreateManyFromUserInputEnvelope = {
    data: ConnectionRequestCreateManyFromUserInput | ConnectionRequestCreateManyFromUserInput[]
  }

  export type ConnectionRequestCreateWithoutToUserInput = {
    id?: string
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    fromUser: UserCreateNestedOneWithoutSentConnectionRequestsInput
  }

  export type ConnectionRequestUncheckedCreateWithoutToUserInput = {
    id?: string
    fromUserId: string
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConnectionRequestCreateOrConnectWithoutToUserInput = {
    where: ConnectionRequestWhereUniqueInput
    create: XOR<ConnectionRequestCreateWithoutToUserInput, ConnectionRequestUncheckedCreateWithoutToUserInput>
  }

  export type ConnectionRequestCreateManyToUserInputEnvelope = {
    data: ConnectionRequestCreateManyToUserInput | ConnectionRequestCreateManyToUserInput[]
  }

  export type NotificationCreateWithoutUserInput = {
    id?: string
    type: $Enums.NotificationType
    entityId?: string | null
    isRead?: boolean
    createdAt?: Date | string
    fromUser: UserCreateNestedOneWithoutNotificationsSentInput
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    fromUserId: string
    type: $Enums.NotificationType
    entityId?: string | null
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
  }

  export type NotificationCreateWithoutFromUserInput = {
    id?: string
    type: $Enums.NotificationType
    entityId?: string | null
    isRead?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsReceivedInput
  }

  export type NotificationUncheckedCreateWithoutFromUserInput = {
    id?: string
    userId: string
    type: $Enums.NotificationType
    entityId?: string | null
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutFromUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutFromUserInput, NotificationUncheckedCreateWithoutFromUserInput>
  }

  export type NotificationCreateManyFromUserInputEnvelope = {
    data: NotificationCreateManyFromUserInput | NotificationCreateManyFromUserInput[]
  }

  export type JobApplicationUpsertWithWhereUniqueWithoutApplicantInput = {
    where: JobApplicationWhereUniqueInput
    update: XOR<JobApplicationUpdateWithoutApplicantInput, JobApplicationUncheckedUpdateWithoutApplicantInput>
    create: XOR<JobApplicationCreateWithoutApplicantInput, JobApplicationUncheckedCreateWithoutApplicantInput>
  }

  export type JobApplicationUpdateWithWhereUniqueWithoutApplicantInput = {
    where: JobApplicationWhereUniqueInput
    data: XOR<JobApplicationUpdateWithoutApplicantInput, JobApplicationUncheckedUpdateWithoutApplicantInput>
  }

  export type JobApplicationUpdateManyWithWhereWithoutApplicantInput = {
    where: JobApplicationScalarWhereInput
    data: XOR<JobApplicationUpdateManyMutationInput, JobApplicationUncheckedUpdateManyWithoutApplicantInput>
  }

  export type JobApplicationScalarWhereInput = {
    AND?: JobApplicationScalarWhereInput | JobApplicationScalarWhereInput[]
    OR?: JobApplicationScalarWhereInput[]
    NOT?: JobApplicationScalarWhereInput | JobApplicationScalarWhereInput[]
    id?: StringFilter<"JobApplication"> | string
    jobPostId?: StringFilter<"JobApplication"> | string
    applicantId?: StringFilter<"JobApplication"> | string
    resumeLetter?: StringNullableFilter<"JobApplication"> | string | null
    expectedSalary?: IntNullableFilter<"JobApplication"> | number | null
    availability?: StringNullableFilter<"JobApplication"> | string | null
    resumeBlobName?: StringFilter<"JobApplication"> | string
    status?: EnumApplicationStatusFilter<"JobApplication"> | $Enums.ApplicationStatus
    createdAt?: DateTimeFilter<"JobApplication"> | Date | string
    updatedAt?: DateTimeFilter<"JobApplication"> | Date | string
  }

  export type ExperienceUpsertWithWhereUniqueWithoutUserInput = {
    where: ExperienceWhereUniqueInput
    update: XOR<ExperienceUpdateWithoutUserInput, ExperienceUncheckedUpdateWithoutUserInput>
    create: XOR<ExperienceCreateWithoutUserInput, ExperienceUncheckedCreateWithoutUserInput>
  }

  export type ExperienceUpdateWithWhereUniqueWithoutUserInput = {
    where: ExperienceWhereUniqueInput
    data: XOR<ExperienceUpdateWithoutUserInput, ExperienceUncheckedUpdateWithoutUserInput>
  }

  export type ExperienceUpdateManyWithWhereWithoutUserInput = {
    where: ExperienceScalarWhereInput
    data: XOR<ExperienceUpdateManyMutationInput, ExperienceUncheckedUpdateManyWithoutUserInput>
  }

  export type ExperienceScalarWhereInput = {
    AND?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[]
    OR?: ExperienceScalarWhereInput[]
    NOT?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[]
    id?: StringFilter<"Experience"> | string
    title?: StringFilter<"Experience"> | string
    employmentType?: EnumEmploymentTypeFilter<"Experience"> | $Enums.EmploymentType
    company?: StringFilter<"Experience"> | string
    startMonth?: IntFilter<"Experience"> | number
    startYear?: IntFilter<"Experience"> | number
    endMonth?: IntNullableFilter<"Experience"> | number | null
    endYear?: IntNullableFilter<"Experience"> | number | null
    isCurrent?: BoolFilter<"Experience"> | boolean
    userId?: StringFilter<"Experience"> | string
  }

  export type EducationUpsertWithWhereUniqueWithoutUserInput = {
    where: EducationWhereUniqueInput
    update: XOR<EducationUpdateWithoutUserInput, EducationUncheckedUpdateWithoutUserInput>
    create: XOR<EducationCreateWithoutUserInput, EducationUncheckedCreateWithoutUserInput>
  }

  export type EducationUpdateWithWhereUniqueWithoutUserInput = {
    where: EducationWhereUniqueInput
    data: XOR<EducationUpdateWithoutUserInput, EducationUncheckedUpdateWithoutUserInput>
  }

  export type EducationUpdateManyWithWhereWithoutUserInput = {
    where: EducationScalarWhereInput
    data: XOR<EducationUpdateManyMutationInput, EducationUncheckedUpdateManyWithoutUserInput>
  }

  export type EducationScalarWhereInput = {
    AND?: EducationScalarWhereInput | EducationScalarWhereInput[]
    OR?: EducationScalarWhereInput[]
    NOT?: EducationScalarWhereInput | EducationScalarWhereInput[]
    id?: StringFilter<"Education"> | string
    school?: StringFilter<"Education"> | string
    degree?: StringFilter<"Education"> | string
    fieldOfStudy?: StringFilter<"Education"> | string
    startMonth?: IntFilter<"Education"> | number
    startYear?: IntFilter<"Education"> | number
    endMonth?: IntFilter<"Education"> | number
    endYear?: IntFilter<"Education"> | number
    userId?: StringFilter<"Education"> | string
  }

  export type PostUpsertWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostUpdateWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
  }

  export type PostUpdateManyWithWhereWithoutUserInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutUserInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: StringFilter<"Post"> | string
    userId?: StringFilter<"Post"> | string
    username?: StringFilter<"Post"> | string
    profilePic?: StringNullableFilter<"Post"> | string | null
    postType?: StringFilter<"Post"> | string
    visibility?: StringNullableFilter<"Post"> | string | null
    title?: StringNullableFilter<"Post"> | string | null
    content?: StringFilter<"Post"> | string
    media?: JsonNullableFilter<"Post">
    mediaTypes?: StringNullableListFilter<"Post">
    hasLinks?: BoolFilter<"Post"> | boolean
    links?: JsonNullableFilter<"Post">
    commentsDisabled?: BoolFilter<"Post"> | boolean
    commentCount?: IntFilter<"Post"> | number
    likeCount?: IntFilter<"Post"> | number
    shareCount?: IntFilter<"Post"> | number
    savedCount?: IntFilter<"Post"> | number
    pollOptions?: StringNullableListFilter<"Post">
    pollEndsAt?: DateTimeNullableFilter<"Post"> | Date | string | null
    pollVotes?: JsonNullableFilter<"Post">
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
  }

  export type ConnectionRequestUpsertWithWhereUniqueWithoutFromUserInput = {
    where: ConnectionRequestWhereUniqueInput
    update: XOR<ConnectionRequestUpdateWithoutFromUserInput, ConnectionRequestUncheckedUpdateWithoutFromUserInput>
    create: XOR<ConnectionRequestCreateWithoutFromUserInput, ConnectionRequestUncheckedCreateWithoutFromUserInput>
  }

  export type ConnectionRequestUpdateWithWhereUniqueWithoutFromUserInput = {
    where: ConnectionRequestWhereUniqueInput
    data: XOR<ConnectionRequestUpdateWithoutFromUserInput, ConnectionRequestUncheckedUpdateWithoutFromUserInput>
  }

  export type ConnectionRequestUpdateManyWithWhereWithoutFromUserInput = {
    where: ConnectionRequestScalarWhereInput
    data: XOR<ConnectionRequestUpdateManyMutationInput, ConnectionRequestUncheckedUpdateManyWithoutFromUserInput>
  }

  export type ConnectionRequestScalarWhereInput = {
    AND?: ConnectionRequestScalarWhereInput | ConnectionRequestScalarWhereInput[]
    OR?: ConnectionRequestScalarWhereInput[]
    NOT?: ConnectionRequestScalarWhereInput | ConnectionRequestScalarWhereInput[]
    id?: StringFilter<"ConnectionRequest"> | string
    fromUserId?: StringFilter<"ConnectionRequest"> | string
    toUserId?: StringFilter<"ConnectionRequest"> | string
    status?: EnumRequestStatusFilter<"ConnectionRequest"> | $Enums.RequestStatus
    createdAt?: DateTimeFilter<"ConnectionRequest"> | Date | string
    updatedAt?: DateTimeFilter<"ConnectionRequest"> | Date | string
  }

  export type ConnectionRequestUpsertWithWhereUniqueWithoutToUserInput = {
    where: ConnectionRequestWhereUniqueInput
    update: XOR<ConnectionRequestUpdateWithoutToUserInput, ConnectionRequestUncheckedUpdateWithoutToUserInput>
    create: XOR<ConnectionRequestCreateWithoutToUserInput, ConnectionRequestUncheckedCreateWithoutToUserInput>
  }

  export type ConnectionRequestUpdateWithWhereUniqueWithoutToUserInput = {
    where: ConnectionRequestWhereUniqueInput
    data: XOR<ConnectionRequestUpdateWithoutToUserInput, ConnectionRequestUncheckedUpdateWithoutToUserInput>
  }

  export type ConnectionRequestUpdateManyWithWhereWithoutToUserInput = {
    where: ConnectionRequestScalarWhereInput
    data: XOR<ConnectionRequestUpdateManyMutationInput, ConnectionRequestUncheckedUpdateManyWithoutToUserInput>
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    fromUserId?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    entityId?: StringNullableFilter<"Notification"> | string | null
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutFromUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutFromUserInput, NotificationUncheckedUpdateWithoutFromUserInput>
    create: XOR<NotificationCreateWithoutFromUserInput, NotificationUncheckedCreateWithoutFromUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutFromUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutFromUserInput, NotificationUncheckedUpdateWithoutFromUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutFromUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutFromUserInput>
  }

  export type UserCreateWithoutExperienceInput = {
    id?: string
    username: string
    email: string
    googleId?: string | null
    linkedinId?: string | null
    microsoftId?: string | null
    profilePic?: string | null
    profilePicOriginal?: string | null
    profilePicCrop?: InputJsonValue | null
    coverPhoto?: string | null
    coverPhotoOriginal?: string | null
    coverPhotoCrop?: InputJsonValue | null
    title?: string | null
    location?: string | null
    about?: string | null
    connections?: number
    phoneNo?: string | null
    phonePublic?: boolean
    emailPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    jobApplications?: JobApplicationCreateNestedManyWithoutApplicantInput
    education?: EducationCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    sentConnectionRequests?: ConnectionRequestCreateNestedManyWithoutFromUserInput
    receivedConnectionRequests?: ConnectionRequestCreateNestedManyWithoutToUserInput
    notificationsReceived?: NotificationCreateNestedManyWithoutUserInput
    notificationsSent?: NotificationCreateNestedManyWithoutFromUserInput
  }

  export type UserUncheckedCreateWithoutExperienceInput = {
    id?: string
    username: string
    email: string
    googleId?: string | null
    linkedinId?: string | null
    microsoftId?: string | null
    profilePic?: string | null
    profilePicOriginal?: string | null
    profilePicCrop?: InputJsonValue | null
    coverPhoto?: string | null
    coverPhotoOriginal?: string | null
    coverPhotoCrop?: InputJsonValue | null
    title?: string | null
    location?: string | null
    about?: string | null
    connections?: number
    phoneNo?: string | null
    phonePublic?: boolean
    emailPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    jobApplications?: JobApplicationUncheckedCreateNestedManyWithoutApplicantInput
    education?: EducationUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    sentConnectionRequests?: ConnectionRequestUncheckedCreateNestedManyWithoutFromUserInput
    receivedConnectionRequests?: ConnectionRequestUncheckedCreateNestedManyWithoutToUserInput
    notificationsReceived?: NotificationUncheckedCreateNestedManyWithoutUserInput
    notificationsSent?: NotificationUncheckedCreateNestedManyWithoutFromUserInput
  }

  export type UserCreateOrConnectWithoutExperienceInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutExperienceInput, UserUncheckedCreateWithoutExperienceInput>
  }

  export type UserUpsertWithoutExperienceInput = {
    update: XOR<UserUpdateWithoutExperienceInput, UserUncheckedUpdateWithoutExperienceInput>
    create: XOR<UserCreateWithoutExperienceInput, UserUncheckedCreateWithoutExperienceInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutExperienceInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutExperienceInput, UserUncheckedUpdateWithoutExperienceInput>
  }

  export type UserUpdateWithoutExperienceInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinId?: NullableStringFieldUpdateOperationsInput | string | null
    microsoftId?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicOriginal?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicCrop?: InputJsonValue | InputJsonValue | null
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhotoOriginal?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhotoCrop?: InputJsonValue | InputJsonValue | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    connections?: IntFieldUpdateOperationsInput | number
    phoneNo?: NullableStringFieldUpdateOperationsInput | string | null
    phonePublic?: BoolFieldUpdateOperationsInput | boolean
    emailPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobApplications?: JobApplicationUpdateManyWithoutApplicantNestedInput
    education?: EducationUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    sentConnectionRequests?: ConnectionRequestUpdateManyWithoutFromUserNestedInput
    receivedConnectionRequests?: ConnectionRequestUpdateManyWithoutToUserNestedInput
    notificationsReceived?: NotificationUpdateManyWithoutUserNestedInput
    notificationsSent?: NotificationUpdateManyWithoutFromUserNestedInput
  }

  export type UserUncheckedUpdateWithoutExperienceInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinId?: NullableStringFieldUpdateOperationsInput | string | null
    microsoftId?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicOriginal?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicCrop?: InputJsonValue | InputJsonValue | null
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhotoOriginal?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhotoCrop?: InputJsonValue | InputJsonValue | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    connections?: IntFieldUpdateOperationsInput | number
    phoneNo?: NullableStringFieldUpdateOperationsInput | string | null
    phonePublic?: BoolFieldUpdateOperationsInput | boolean
    emailPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobApplications?: JobApplicationUncheckedUpdateManyWithoutApplicantNestedInput
    education?: EducationUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    sentConnectionRequests?: ConnectionRequestUncheckedUpdateManyWithoutFromUserNestedInput
    receivedConnectionRequests?: ConnectionRequestUncheckedUpdateManyWithoutToUserNestedInput
    notificationsReceived?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    notificationsSent?: NotificationUncheckedUpdateManyWithoutFromUserNestedInput
  }

  export type UserCreateWithoutEducationInput = {
    id?: string
    username: string
    email: string
    googleId?: string | null
    linkedinId?: string | null
    microsoftId?: string | null
    profilePic?: string | null
    profilePicOriginal?: string | null
    profilePicCrop?: InputJsonValue | null
    coverPhoto?: string | null
    coverPhotoOriginal?: string | null
    coverPhotoCrop?: InputJsonValue | null
    title?: string | null
    location?: string | null
    about?: string | null
    connections?: number
    phoneNo?: string | null
    phonePublic?: boolean
    emailPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    jobApplications?: JobApplicationCreateNestedManyWithoutApplicantInput
    experience?: ExperienceCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    sentConnectionRequests?: ConnectionRequestCreateNestedManyWithoutFromUserInput
    receivedConnectionRequests?: ConnectionRequestCreateNestedManyWithoutToUserInput
    notificationsReceived?: NotificationCreateNestedManyWithoutUserInput
    notificationsSent?: NotificationCreateNestedManyWithoutFromUserInput
  }

  export type UserUncheckedCreateWithoutEducationInput = {
    id?: string
    username: string
    email: string
    googleId?: string | null
    linkedinId?: string | null
    microsoftId?: string | null
    profilePic?: string | null
    profilePicOriginal?: string | null
    profilePicCrop?: InputJsonValue | null
    coverPhoto?: string | null
    coverPhotoOriginal?: string | null
    coverPhotoCrop?: InputJsonValue | null
    title?: string | null
    location?: string | null
    about?: string | null
    connections?: number
    phoneNo?: string | null
    phonePublic?: boolean
    emailPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    jobApplications?: JobApplicationUncheckedCreateNestedManyWithoutApplicantInput
    experience?: ExperienceUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    sentConnectionRequests?: ConnectionRequestUncheckedCreateNestedManyWithoutFromUserInput
    receivedConnectionRequests?: ConnectionRequestUncheckedCreateNestedManyWithoutToUserInput
    notificationsReceived?: NotificationUncheckedCreateNestedManyWithoutUserInput
    notificationsSent?: NotificationUncheckedCreateNestedManyWithoutFromUserInput
  }

  export type UserCreateOrConnectWithoutEducationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEducationInput, UserUncheckedCreateWithoutEducationInput>
  }

  export type UserUpsertWithoutEducationInput = {
    update: XOR<UserUpdateWithoutEducationInput, UserUncheckedUpdateWithoutEducationInput>
    create: XOR<UserCreateWithoutEducationInput, UserUncheckedCreateWithoutEducationInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEducationInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEducationInput, UserUncheckedUpdateWithoutEducationInput>
  }

  export type UserUpdateWithoutEducationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinId?: NullableStringFieldUpdateOperationsInput | string | null
    microsoftId?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicOriginal?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicCrop?: InputJsonValue | InputJsonValue | null
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhotoOriginal?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhotoCrop?: InputJsonValue | InputJsonValue | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    connections?: IntFieldUpdateOperationsInput | number
    phoneNo?: NullableStringFieldUpdateOperationsInput | string | null
    phonePublic?: BoolFieldUpdateOperationsInput | boolean
    emailPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobApplications?: JobApplicationUpdateManyWithoutApplicantNestedInput
    experience?: ExperienceUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    sentConnectionRequests?: ConnectionRequestUpdateManyWithoutFromUserNestedInput
    receivedConnectionRequests?: ConnectionRequestUpdateManyWithoutToUserNestedInput
    notificationsReceived?: NotificationUpdateManyWithoutUserNestedInput
    notificationsSent?: NotificationUpdateManyWithoutFromUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEducationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinId?: NullableStringFieldUpdateOperationsInput | string | null
    microsoftId?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicOriginal?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicCrop?: InputJsonValue | InputJsonValue | null
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhotoOriginal?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhotoCrop?: InputJsonValue | InputJsonValue | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    connections?: IntFieldUpdateOperationsInput | number
    phoneNo?: NullableStringFieldUpdateOperationsInput | string | null
    phonePublic?: BoolFieldUpdateOperationsInput | boolean
    emailPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobApplications?: JobApplicationUncheckedUpdateManyWithoutApplicantNestedInput
    experience?: ExperienceUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    sentConnectionRequests?: ConnectionRequestUncheckedUpdateManyWithoutFromUserNestedInput
    receivedConnectionRequests?: ConnectionRequestUncheckedUpdateManyWithoutToUserNestedInput
    notificationsReceived?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    notificationsSent?: NotificationUncheckedUpdateManyWithoutFromUserNestedInput
  }

  export type UserCreateWithoutPostsInput = {
    id?: string
    username: string
    email: string
    googleId?: string | null
    linkedinId?: string | null
    microsoftId?: string | null
    profilePic?: string | null
    profilePicOriginal?: string | null
    profilePicCrop?: InputJsonValue | null
    coverPhoto?: string | null
    coverPhotoOriginal?: string | null
    coverPhotoCrop?: InputJsonValue | null
    title?: string | null
    location?: string | null
    about?: string | null
    connections?: number
    phoneNo?: string | null
    phonePublic?: boolean
    emailPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    jobApplications?: JobApplicationCreateNestedManyWithoutApplicantInput
    experience?: ExperienceCreateNestedManyWithoutUserInput
    education?: EducationCreateNestedManyWithoutUserInput
    sentConnectionRequests?: ConnectionRequestCreateNestedManyWithoutFromUserInput
    receivedConnectionRequests?: ConnectionRequestCreateNestedManyWithoutToUserInput
    notificationsReceived?: NotificationCreateNestedManyWithoutUserInput
    notificationsSent?: NotificationCreateNestedManyWithoutFromUserInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: string
    username: string
    email: string
    googleId?: string | null
    linkedinId?: string | null
    microsoftId?: string | null
    profilePic?: string | null
    profilePicOriginal?: string | null
    profilePicCrop?: InputJsonValue | null
    coverPhoto?: string | null
    coverPhotoOriginal?: string | null
    coverPhotoCrop?: InputJsonValue | null
    title?: string | null
    location?: string | null
    about?: string | null
    connections?: number
    phoneNo?: string | null
    phonePublic?: boolean
    emailPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    jobApplications?: JobApplicationUncheckedCreateNestedManyWithoutApplicantInput
    experience?: ExperienceUncheckedCreateNestedManyWithoutUserInput
    education?: EducationUncheckedCreateNestedManyWithoutUserInput
    sentConnectionRequests?: ConnectionRequestUncheckedCreateNestedManyWithoutFromUserInput
    receivedConnectionRequests?: ConnectionRequestUncheckedCreateNestedManyWithoutToUserInput
    notificationsReceived?: NotificationUncheckedCreateNestedManyWithoutUserInput
    notificationsSent?: NotificationUncheckedCreateNestedManyWithoutFromUserInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type JobPostCreateWithoutPostInput = {
    id?: string
    jobTitle: string
    companyName?: string | null
    location?: string | null
    locationType?: $Enums.JobLocationType | null
    jobDetails?: string | null
    jobRequirements?: JobPostCreatejobRequirementsInput | string[]
    employmentType: $Enums.EmploymentType
    positionsAvailable?: number
    positionsFilled?: number
    salaryMin?: number | null
    salaryMax?: number | null
    salaryCurrency?: string | null
    deadline?: Date | string | null
    status?: $Enums.JobStatus
    applyUrl?: string | null
    allowExternalApply?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: JobApplicationCreateNestedManyWithoutJobPostInput
  }

  export type JobPostUncheckedCreateWithoutPostInput = {
    id?: string
    jobTitle: string
    companyName?: string | null
    location?: string | null
    locationType?: $Enums.JobLocationType | null
    jobDetails?: string | null
    jobRequirements?: JobPostCreatejobRequirementsInput | string[]
    employmentType: $Enums.EmploymentType
    positionsAvailable?: number
    positionsFilled?: number
    salaryMin?: number | null
    salaryMax?: number | null
    salaryCurrency?: string | null
    deadline?: Date | string | null
    status?: $Enums.JobStatus
    applyUrl?: string | null
    allowExternalApply?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: JobApplicationUncheckedCreateNestedManyWithoutJobPostInput
  }

  export type JobPostCreateOrConnectWithoutPostInput = {
    where: JobPostWhereUniqueInput
    create: XOR<JobPostCreateWithoutPostInput, JobPostUncheckedCreateWithoutPostInput>
  }

  export type CommentCreateWithoutPostInput = {
    id?: string
    userId: string
    username: string
    profilePic: string
    content: string
    media?: InputJsonValue | null
    likeCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    depth?: number
    parent?: CommentCreateNestedOneWithoutRepliesInput
    replies?: CommentCreateNestedManyWithoutParentInput
  }

  export type CommentUncheckedCreateWithoutPostInput = {
    id?: string
    userId: string
    username: string
    profilePic: string
    content: string
    media?: InputJsonValue | null
    likeCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    parentId?: string | null
    depth?: number
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput
  }

  export type CommentCreateOrConnectWithoutPostInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput>
  }

  export type CommentCreateManyPostInputEnvelope = {
    data: CommentCreateManyPostInput | CommentCreateManyPostInput[]
  }

  export type PostInteractionCreateWithoutPostInput = {
    id?: string
    userId: string
    type: $Enums.PostInteractionType
    createdAt?: Date | string
  }

  export type PostInteractionUncheckedCreateWithoutPostInput = {
    id?: string
    userId: string
    type: $Enums.PostInteractionType
    createdAt?: Date | string
  }

  export type PostInteractionCreateOrConnectWithoutPostInput = {
    where: PostInteractionWhereUniqueInput
    create: XOR<PostInteractionCreateWithoutPostInput, PostInteractionUncheckedCreateWithoutPostInput>
  }

  export type PostInteractionCreateManyPostInputEnvelope = {
    data: PostInteractionCreateManyPostInput | PostInteractionCreateManyPostInput[]
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinId?: NullableStringFieldUpdateOperationsInput | string | null
    microsoftId?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicOriginal?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicCrop?: InputJsonValue | InputJsonValue | null
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhotoOriginal?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhotoCrop?: InputJsonValue | InputJsonValue | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    connections?: IntFieldUpdateOperationsInput | number
    phoneNo?: NullableStringFieldUpdateOperationsInput | string | null
    phonePublic?: BoolFieldUpdateOperationsInput | boolean
    emailPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobApplications?: JobApplicationUpdateManyWithoutApplicantNestedInput
    experience?: ExperienceUpdateManyWithoutUserNestedInput
    education?: EducationUpdateManyWithoutUserNestedInput
    sentConnectionRequests?: ConnectionRequestUpdateManyWithoutFromUserNestedInput
    receivedConnectionRequests?: ConnectionRequestUpdateManyWithoutToUserNestedInput
    notificationsReceived?: NotificationUpdateManyWithoutUserNestedInput
    notificationsSent?: NotificationUpdateManyWithoutFromUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinId?: NullableStringFieldUpdateOperationsInput | string | null
    microsoftId?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicOriginal?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicCrop?: InputJsonValue | InputJsonValue | null
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhotoOriginal?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhotoCrop?: InputJsonValue | InputJsonValue | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    connections?: IntFieldUpdateOperationsInput | number
    phoneNo?: NullableStringFieldUpdateOperationsInput | string | null
    phonePublic?: BoolFieldUpdateOperationsInput | boolean
    emailPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobApplications?: JobApplicationUncheckedUpdateManyWithoutApplicantNestedInput
    experience?: ExperienceUncheckedUpdateManyWithoutUserNestedInput
    education?: EducationUncheckedUpdateManyWithoutUserNestedInput
    sentConnectionRequests?: ConnectionRequestUncheckedUpdateManyWithoutFromUserNestedInput
    receivedConnectionRequests?: ConnectionRequestUncheckedUpdateManyWithoutToUserNestedInput
    notificationsReceived?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    notificationsSent?: NotificationUncheckedUpdateManyWithoutFromUserNestedInput
  }

  export type JobPostUpsertWithoutPostInput = {
    update: XOR<JobPostUpdateWithoutPostInput, JobPostUncheckedUpdateWithoutPostInput>
    create: XOR<JobPostCreateWithoutPostInput, JobPostUncheckedCreateWithoutPostInput>
    where?: JobPostWhereInput
  }

  export type JobPostUpdateToOneWithWhereWithoutPostInput = {
    where?: JobPostWhereInput
    data: XOR<JobPostUpdateWithoutPostInput, JobPostUncheckedUpdateWithoutPostInput>
  }

  export type JobPostUpdateWithoutPostInput = {
    jobTitle?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    locationType?: NullableEnumJobLocationTypeFieldUpdateOperationsInput | $Enums.JobLocationType | null
    jobDetails?: NullableStringFieldUpdateOperationsInput | string | null
    jobRequirements?: JobPostUpdatejobRequirementsInput | string[]
    employmentType?: EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType
    positionsAvailable?: IntFieldUpdateOperationsInput | number
    positionsFilled?: IntFieldUpdateOperationsInput | number
    salaryMin?: NullableIntFieldUpdateOperationsInput | number | null
    salaryMax?: NullableIntFieldUpdateOperationsInput | number | null
    salaryCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    applyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    allowExternalApply?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: JobApplicationUpdateManyWithoutJobPostNestedInput
  }

  export type JobPostUncheckedUpdateWithoutPostInput = {
    jobTitle?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    locationType?: NullableEnumJobLocationTypeFieldUpdateOperationsInput | $Enums.JobLocationType | null
    jobDetails?: NullableStringFieldUpdateOperationsInput | string | null
    jobRequirements?: JobPostUpdatejobRequirementsInput | string[]
    employmentType?: EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType
    positionsAvailable?: IntFieldUpdateOperationsInput | number
    positionsFilled?: IntFieldUpdateOperationsInput | number
    salaryMin?: NullableIntFieldUpdateOperationsInput | number | null
    salaryMax?: NullableIntFieldUpdateOperationsInput | number | null
    salaryCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    applyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    allowExternalApply?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: JobApplicationUncheckedUpdateManyWithoutJobPostNestedInput
  }

  export type CommentUpsertWithWhereUniqueWithoutPostInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutPostInput, CommentUncheckedUpdateWithoutPostInput>
    create: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutPostInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutPostInput, CommentUncheckedUpdateWithoutPostInput>
  }

  export type CommentUpdateManyWithWhereWithoutPostInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutPostInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: StringFilter<"Comment"> | string
    userId?: StringFilter<"Comment"> | string
    username?: StringFilter<"Comment"> | string
    profilePic?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    media?: JsonNullableFilter<"Comment">
    likeCount?: IntFilter<"Comment"> | number
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    postId?: StringFilter<"Comment"> | string
    parentId?: StringNullableFilter<"Comment"> | string | null
    depth?: IntFilter<"Comment"> | number
  }

  export type PostInteractionUpsertWithWhereUniqueWithoutPostInput = {
    where: PostInteractionWhereUniqueInput
    update: XOR<PostInteractionUpdateWithoutPostInput, PostInteractionUncheckedUpdateWithoutPostInput>
    create: XOR<PostInteractionCreateWithoutPostInput, PostInteractionUncheckedCreateWithoutPostInput>
  }

  export type PostInteractionUpdateWithWhereUniqueWithoutPostInput = {
    where: PostInteractionWhereUniqueInput
    data: XOR<PostInteractionUpdateWithoutPostInput, PostInteractionUncheckedUpdateWithoutPostInput>
  }

  export type PostInteractionUpdateManyWithWhereWithoutPostInput = {
    where: PostInteractionScalarWhereInput
    data: XOR<PostInteractionUpdateManyMutationInput, PostInteractionUncheckedUpdateManyWithoutPostInput>
  }

  export type PostInteractionScalarWhereInput = {
    AND?: PostInteractionScalarWhereInput | PostInteractionScalarWhereInput[]
    OR?: PostInteractionScalarWhereInput[]
    NOT?: PostInteractionScalarWhereInput | PostInteractionScalarWhereInput[]
    id?: StringFilter<"PostInteraction"> | string
    userId?: StringFilter<"PostInteraction"> | string
    postId?: StringFilter<"PostInteraction"> | string
    type?: EnumPostInteractionTypeFilter<"PostInteraction"> | $Enums.PostInteractionType
    createdAt?: DateTimeFilter<"PostInteraction"> | Date | string
  }

  export type PostCreateWithoutCommentsInput = {
    id?: string
    username: string
    profilePic?: string | null
    postType: string
    visibility?: string | null
    title?: string | null
    content: string
    media?: InputJsonValue | null
    mediaTypes?: PostCreatemediaTypesInput | string[]
    hasLinks?: boolean
    links?: InputJsonValue | null
    commentsDisabled?: boolean
    commentCount?: number
    likeCount?: number
    shareCount?: number
    savedCount?: number
    pollOptions?: PostCreatepollOptionsInput | string[]
    pollEndsAt?: Date | string | null
    pollVotes?: InputJsonValue | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPostsInput
    jobPost?: JobPostCreateNestedOneWithoutPostInput
    interactions?: PostInteractionCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutCommentsInput = {
    id?: string
    userId: string
    username: string
    profilePic?: string | null
    postType: string
    visibility?: string | null
    title?: string | null
    content: string
    media?: InputJsonValue | null
    mediaTypes?: PostCreatemediaTypesInput | string[]
    hasLinks?: boolean
    links?: InputJsonValue | null
    commentsDisabled?: boolean
    commentCount?: number
    likeCount?: number
    shareCount?: number
    savedCount?: number
    pollOptions?: PostCreatepollOptionsInput | string[]
    pollEndsAt?: Date | string | null
    pollVotes?: InputJsonValue | null
    createdAt?: Date | string
    updatedAt?: Date | string
    jobPost?: JobPostUncheckedCreateNestedOneWithoutPostInput
    interactions?: PostInteractionUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutCommentsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
  }

  export type CommentCreateWithoutRepliesInput = {
    id?: string
    userId: string
    username: string
    profilePic: string
    content: string
    media?: InputJsonValue | null
    likeCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    depth?: number
    post: PostCreateNestedOneWithoutCommentsInput
    parent?: CommentCreateNestedOneWithoutRepliesInput
  }

  export type CommentUncheckedCreateWithoutRepliesInput = {
    id?: string
    userId: string
    username: string
    profilePic: string
    content: string
    media?: InputJsonValue | null
    likeCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    postId: string
    parentId?: string | null
    depth?: number
  }

  export type CommentCreateOrConnectWithoutRepliesInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
  }

  export type CommentCreateWithoutParentInput = {
    id?: string
    userId: string
    username: string
    profilePic: string
    content: string
    media?: InputJsonValue | null
    likeCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    depth?: number
    post: PostCreateNestedOneWithoutCommentsInput
    replies?: CommentCreateNestedManyWithoutParentInput
  }

  export type CommentUncheckedCreateWithoutParentInput = {
    id?: string
    userId: string
    username: string
    profilePic: string
    content: string
    media?: InputJsonValue | null
    likeCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    postId: string
    depth?: number
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput
  }

  export type CommentCreateOrConnectWithoutParentInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput>
  }

  export type CommentCreateManyParentInputEnvelope = {
    data: CommentCreateManyParentInput | CommentCreateManyParentInput[]
  }

  export type PostUpsertWithoutCommentsInput = {
    update: XOR<PostUpdateWithoutCommentsInput, PostUncheckedUpdateWithoutCommentsInput>
    create: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutCommentsInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutCommentsInput, PostUncheckedUpdateWithoutCommentsInput>
  }

  export type PostUpdateWithoutCommentsInput = {
    username?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    postType?: StringFieldUpdateOperationsInput | string
    visibility?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    media?: InputJsonValue | InputJsonValue | null
    mediaTypes?: PostUpdatemediaTypesInput | string[]
    hasLinks?: BoolFieldUpdateOperationsInput | boolean
    links?: InputJsonValue | InputJsonValue | null
    commentsDisabled?: BoolFieldUpdateOperationsInput | boolean
    commentCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    shareCount?: IntFieldUpdateOperationsInput | number
    savedCount?: IntFieldUpdateOperationsInput | number
    pollOptions?: PostUpdatepollOptionsInput | string[]
    pollEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pollVotes?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    jobPost?: JobPostUpdateOneWithoutPostNestedInput
    interactions?: PostInteractionUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutCommentsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    postType?: StringFieldUpdateOperationsInput | string
    visibility?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    media?: InputJsonValue | InputJsonValue | null
    mediaTypes?: PostUpdatemediaTypesInput | string[]
    hasLinks?: BoolFieldUpdateOperationsInput | boolean
    links?: InputJsonValue | InputJsonValue | null
    commentsDisabled?: BoolFieldUpdateOperationsInput | boolean
    commentCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    shareCount?: IntFieldUpdateOperationsInput | number
    savedCount?: IntFieldUpdateOperationsInput | number
    pollOptions?: PostUpdatepollOptionsInput | string[]
    pollEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pollVotes?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobPost?: JobPostUncheckedUpdateOneWithoutPostNestedInput
    interactions?: PostInteractionUncheckedUpdateManyWithoutPostNestedInput
  }

  export type CommentUpsertWithoutRepliesInput = {
    update: XOR<CommentUpdateWithoutRepliesInput, CommentUncheckedUpdateWithoutRepliesInput>
    create: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
    where?: CommentWhereInput
  }

  export type CommentUpdateToOneWithWhereWithoutRepliesInput = {
    where?: CommentWhereInput
    data: XOR<CommentUpdateWithoutRepliesInput, CommentUncheckedUpdateWithoutRepliesInput>
  }

  export type CommentUpdateWithoutRepliesInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profilePic?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    media?: InputJsonValue | InputJsonValue | null
    likeCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    depth?: IntFieldUpdateOperationsInput | number
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput
    parent?: CommentUpdateOneWithoutRepliesNestedInput
  }

  export type CommentUncheckedUpdateWithoutRepliesInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profilePic?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    media?: InputJsonValue | InputJsonValue | null
    likeCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    depth?: IntFieldUpdateOperationsInput | number
  }

  export type CommentUpsertWithWhereUniqueWithoutParentInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutParentInput, CommentUncheckedUpdateWithoutParentInput>
    create: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutParentInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutParentInput, CommentUncheckedUpdateWithoutParentInput>
  }

  export type CommentUpdateManyWithWhereWithoutParentInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutParentInput>
  }

  export type UserCreateWithoutSentConnectionRequestsInput = {
    id?: string
    username: string
    email: string
    googleId?: string | null
    linkedinId?: string | null
    microsoftId?: string | null
    profilePic?: string | null
    profilePicOriginal?: string | null
    profilePicCrop?: InputJsonValue | null
    coverPhoto?: string | null
    coverPhotoOriginal?: string | null
    coverPhotoCrop?: InputJsonValue | null
    title?: string | null
    location?: string | null
    about?: string | null
    connections?: number
    phoneNo?: string | null
    phonePublic?: boolean
    emailPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    jobApplications?: JobApplicationCreateNestedManyWithoutApplicantInput
    experience?: ExperienceCreateNestedManyWithoutUserInput
    education?: EducationCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    receivedConnectionRequests?: ConnectionRequestCreateNestedManyWithoutToUserInput
    notificationsReceived?: NotificationCreateNestedManyWithoutUserInput
    notificationsSent?: NotificationCreateNestedManyWithoutFromUserInput
  }

  export type UserUncheckedCreateWithoutSentConnectionRequestsInput = {
    id?: string
    username: string
    email: string
    googleId?: string | null
    linkedinId?: string | null
    microsoftId?: string | null
    profilePic?: string | null
    profilePicOriginal?: string | null
    profilePicCrop?: InputJsonValue | null
    coverPhoto?: string | null
    coverPhotoOriginal?: string | null
    coverPhotoCrop?: InputJsonValue | null
    title?: string | null
    location?: string | null
    about?: string | null
    connections?: number
    phoneNo?: string | null
    phonePublic?: boolean
    emailPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    jobApplications?: JobApplicationUncheckedCreateNestedManyWithoutApplicantInput
    experience?: ExperienceUncheckedCreateNestedManyWithoutUserInput
    education?: EducationUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    receivedConnectionRequests?: ConnectionRequestUncheckedCreateNestedManyWithoutToUserInput
    notificationsReceived?: NotificationUncheckedCreateNestedManyWithoutUserInput
    notificationsSent?: NotificationUncheckedCreateNestedManyWithoutFromUserInput
  }

  export type UserCreateOrConnectWithoutSentConnectionRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentConnectionRequestsInput, UserUncheckedCreateWithoutSentConnectionRequestsInput>
  }

  export type UserCreateWithoutReceivedConnectionRequestsInput = {
    id?: string
    username: string
    email: string
    googleId?: string | null
    linkedinId?: string | null
    microsoftId?: string | null
    profilePic?: string | null
    profilePicOriginal?: string | null
    profilePicCrop?: InputJsonValue | null
    coverPhoto?: string | null
    coverPhotoOriginal?: string | null
    coverPhotoCrop?: InputJsonValue | null
    title?: string | null
    location?: string | null
    about?: string | null
    connections?: number
    phoneNo?: string | null
    phonePublic?: boolean
    emailPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    jobApplications?: JobApplicationCreateNestedManyWithoutApplicantInput
    experience?: ExperienceCreateNestedManyWithoutUserInput
    education?: EducationCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    sentConnectionRequests?: ConnectionRequestCreateNestedManyWithoutFromUserInput
    notificationsReceived?: NotificationCreateNestedManyWithoutUserInput
    notificationsSent?: NotificationCreateNestedManyWithoutFromUserInput
  }

  export type UserUncheckedCreateWithoutReceivedConnectionRequestsInput = {
    id?: string
    username: string
    email: string
    googleId?: string | null
    linkedinId?: string | null
    microsoftId?: string | null
    profilePic?: string | null
    profilePicOriginal?: string | null
    profilePicCrop?: InputJsonValue | null
    coverPhoto?: string | null
    coverPhotoOriginal?: string | null
    coverPhotoCrop?: InputJsonValue | null
    title?: string | null
    location?: string | null
    about?: string | null
    connections?: number
    phoneNo?: string | null
    phonePublic?: boolean
    emailPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    jobApplications?: JobApplicationUncheckedCreateNestedManyWithoutApplicantInput
    experience?: ExperienceUncheckedCreateNestedManyWithoutUserInput
    education?: EducationUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    sentConnectionRequests?: ConnectionRequestUncheckedCreateNestedManyWithoutFromUserInput
    notificationsReceived?: NotificationUncheckedCreateNestedManyWithoutUserInput
    notificationsSent?: NotificationUncheckedCreateNestedManyWithoutFromUserInput
  }

  export type UserCreateOrConnectWithoutReceivedConnectionRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedConnectionRequestsInput, UserUncheckedCreateWithoutReceivedConnectionRequestsInput>
  }

  export type UserUpsertWithoutSentConnectionRequestsInput = {
    update: XOR<UserUpdateWithoutSentConnectionRequestsInput, UserUncheckedUpdateWithoutSentConnectionRequestsInput>
    create: XOR<UserCreateWithoutSentConnectionRequestsInput, UserUncheckedCreateWithoutSentConnectionRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentConnectionRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentConnectionRequestsInput, UserUncheckedUpdateWithoutSentConnectionRequestsInput>
  }

  export type UserUpdateWithoutSentConnectionRequestsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinId?: NullableStringFieldUpdateOperationsInput | string | null
    microsoftId?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicOriginal?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicCrop?: InputJsonValue | InputJsonValue | null
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhotoOriginal?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhotoCrop?: InputJsonValue | InputJsonValue | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    connections?: IntFieldUpdateOperationsInput | number
    phoneNo?: NullableStringFieldUpdateOperationsInput | string | null
    phonePublic?: BoolFieldUpdateOperationsInput | boolean
    emailPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobApplications?: JobApplicationUpdateManyWithoutApplicantNestedInput
    experience?: ExperienceUpdateManyWithoutUserNestedInput
    education?: EducationUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    receivedConnectionRequests?: ConnectionRequestUpdateManyWithoutToUserNestedInput
    notificationsReceived?: NotificationUpdateManyWithoutUserNestedInput
    notificationsSent?: NotificationUpdateManyWithoutFromUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSentConnectionRequestsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinId?: NullableStringFieldUpdateOperationsInput | string | null
    microsoftId?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicOriginal?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicCrop?: InputJsonValue | InputJsonValue | null
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhotoOriginal?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhotoCrop?: InputJsonValue | InputJsonValue | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    connections?: IntFieldUpdateOperationsInput | number
    phoneNo?: NullableStringFieldUpdateOperationsInput | string | null
    phonePublic?: BoolFieldUpdateOperationsInput | boolean
    emailPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobApplications?: JobApplicationUncheckedUpdateManyWithoutApplicantNestedInput
    experience?: ExperienceUncheckedUpdateManyWithoutUserNestedInput
    education?: EducationUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    receivedConnectionRequests?: ConnectionRequestUncheckedUpdateManyWithoutToUserNestedInput
    notificationsReceived?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    notificationsSent?: NotificationUncheckedUpdateManyWithoutFromUserNestedInput
  }

  export type UserUpsertWithoutReceivedConnectionRequestsInput = {
    update: XOR<UserUpdateWithoutReceivedConnectionRequestsInput, UserUncheckedUpdateWithoutReceivedConnectionRequestsInput>
    create: XOR<UserCreateWithoutReceivedConnectionRequestsInput, UserUncheckedCreateWithoutReceivedConnectionRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedConnectionRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedConnectionRequestsInput, UserUncheckedUpdateWithoutReceivedConnectionRequestsInput>
  }

  export type UserUpdateWithoutReceivedConnectionRequestsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinId?: NullableStringFieldUpdateOperationsInput | string | null
    microsoftId?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicOriginal?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicCrop?: InputJsonValue | InputJsonValue | null
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhotoOriginal?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhotoCrop?: InputJsonValue | InputJsonValue | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    connections?: IntFieldUpdateOperationsInput | number
    phoneNo?: NullableStringFieldUpdateOperationsInput | string | null
    phonePublic?: BoolFieldUpdateOperationsInput | boolean
    emailPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobApplications?: JobApplicationUpdateManyWithoutApplicantNestedInput
    experience?: ExperienceUpdateManyWithoutUserNestedInput
    education?: EducationUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    sentConnectionRequests?: ConnectionRequestUpdateManyWithoutFromUserNestedInput
    notificationsReceived?: NotificationUpdateManyWithoutUserNestedInput
    notificationsSent?: NotificationUpdateManyWithoutFromUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedConnectionRequestsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinId?: NullableStringFieldUpdateOperationsInput | string | null
    microsoftId?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicOriginal?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicCrop?: InputJsonValue | InputJsonValue | null
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhotoOriginal?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhotoCrop?: InputJsonValue | InputJsonValue | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    connections?: IntFieldUpdateOperationsInput | number
    phoneNo?: NullableStringFieldUpdateOperationsInput | string | null
    phonePublic?: BoolFieldUpdateOperationsInput | boolean
    emailPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobApplications?: JobApplicationUncheckedUpdateManyWithoutApplicantNestedInput
    experience?: ExperienceUncheckedUpdateManyWithoutUserNestedInput
    education?: EducationUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    sentConnectionRequests?: ConnectionRequestUncheckedUpdateManyWithoutFromUserNestedInput
    notificationsReceived?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    notificationsSent?: NotificationUncheckedUpdateManyWithoutFromUserNestedInput
  }

  export type PostCreateWithoutInteractionsInput = {
    id?: string
    username: string
    profilePic?: string | null
    postType: string
    visibility?: string | null
    title?: string | null
    content: string
    media?: InputJsonValue | null
    mediaTypes?: PostCreatemediaTypesInput | string[]
    hasLinks?: boolean
    links?: InputJsonValue | null
    commentsDisabled?: boolean
    commentCount?: number
    likeCount?: number
    shareCount?: number
    savedCount?: number
    pollOptions?: PostCreatepollOptionsInput | string[]
    pollEndsAt?: Date | string | null
    pollVotes?: InputJsonValue | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPostsInput
    jobPost?: JobPostCreateNestedOneWithoutPostInput
    comments?: CommentCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutInteractionsInput = {
    id?: string
    userId: string
    username: string
    profilePic?: string | null
    postType: string
    visibility?: string | null
    title?: string | null
    content: string
    media?: InputJsonValue | null
    mediaTypes?: PostCreatemediaTypesInput | string[]
    hasLinks?: boolean
    links?: InputJsonValue | null
    commentsDisabled?: boolean
    commentCount?: number
    likeCount?: number
    shareCount?: number
    savedCount?: number
    pollOptions?: PostCreatepollOptionsInput | string[]
    pollEndsAt?: Date | string | null
    pollVotes?: InputJsonValue | null
    createdAt?: Date | string
    updatedAt?: Date | string
    jobPost?: JobPostUncheckedCreateNestedOneWithoutPostInput
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutInteractionsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutInteractionsInput, PostUncheckedCreateWithoutInteractionsInput>
  }

  export type PostUpsertWithoutInteractionsInput = {
    update: XOR<PostUpdateWithoutInteractionsInput, PostUncheckedUpdateWithoutInteractionsInput>
    create: XOR<PostCreateWithoutInteractionsInput, PostUncheckedCreateWithoutInteractionsInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutInteractionsInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutInteractionsInput, PostUncheckedUpdateWithoutInteractionsInput>
  }

  export type PostUpdateWithoutInteractionsInput = {
    username?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    postType?: StringFieldUpdateOperationsInput | string
    visibility?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    media?: InputJsonValue | InputJsonValue | null
    mediaTypes?: PostUpdatemediaTypesInput | string[]
    hasLinks?: BoolFieldUpdateOperationsInput | boolean
    links?: InputJsonValue | InputJsonValue | null
    commentsDisabled?: BoolFieldUpdateOperationsInput | boolean
    commentCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    shareCount?: IntFieldUpdateOperationsInput | number
    savedCount?: IntFieldUpdateOperationsInput | number
    pollOptions?: PostUpdatepollOptionsInput | string[]
    pollEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pollVotes?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    jobPost?: JobPostUpdateOneWithoutPostNestedInput
    comments?: CommentUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutInteractionsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    postType?: StringFieldUpdateOperationsInput | string
    visibility?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    media?: InputJsonValue | InputJsonValue | null
    mediaTypes?: PostUpdatemediaTypesInput | string[]
    hasLinks?: BoolFieldUpdateOperationsInput | boolean
    links?: InputJsonValue | InputJsonValue | null
    commentsDisabled?: BoolFieldUpdateOperationsInput | boolean
    commentCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    shareCount?: IntFieldUpdateOperationsInput | number
    savedCount?: IntFieldUpdateOperationsInput | number
    pollOptions?: PostUpdatepollOptionsInput | string[]
    pollEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pollVotes?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobPost?: JobPostUncheckedUpdateOneWithoutPostNestedInput
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
  }

  export type UserCreateWithoutNotificationsReceivedInput = {
    id?: string
    username: string
    email: string
    googleId?: string | null
    linkedinId?: string | null
    microsoftId?: string | null
    profilePic?: string | null
    profilePicOriginal?: string | null
    profilePicCrop?: InputJsonValue | null
    coverPhoto?: string | null
    coverPhotoOriginal?: string | null
    coverPhotoCrop?: InputJsonValue | null
    title?: string | null
    location?: string | null
    about?: string | null
    connections?: number
    phoneNo?: string | null
    phonePublic?: boolean
    emailPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    jobApplications?: JobApplicationCreateNestedManyWithoutApplicantInput
    experience?: ExperienceCreateNestedManyWithoutUserInput
    education?: EducationCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    sentConnectionRequests?: ConnectionRequestCreateNestedManyWithoutFromUserInput
    receivedConnectionRequests?: ConnectionRequestCreateNestedManyWithoutToUserInput
    notificationsSent?: NotificationCreateNestedManyWithoutFromUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsReceivedInput = {
    id?: string
    username: string
    email: string
    googleId?: string | null
    linkedinId?: string | null
    microsoftId?: string | null
    profilePic?: string | null
    profilePicOriginal?: string | null
    profilePicCrop?: InputJsonValue | null
    coverPhoto?: string | null
    coverPhotoOriginal?: string | null
    coverPhotoCrop?: InputJsonValue | null
    title?: string | null
    location?: string | null
    about?: string | null
    connections?: number
    phoneNo?: string | null
    phonePublic?: boolean
    emailPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    jobApplications?: JobApplicationUncheckedCreateNestedManyWithoutApplicantInput
    experience?: ExperienceUncheckedCreateNestedManyWithoutUserInput
    education?: EducationUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    sentConnectionRequests?: ConnectionRequestUncheckedCreateNestedManyWithoutFromUserInput
    receivedConnectionRequests?: ConnectionRequestUncheckedCreateNestedManyWithoutToUserInput
    notificationsSent?: NotificationUncheckedCreateNestedManyWithoutFromUserInput
  }

  export type UserCreateOrConnectWithoutNotificationsReceivedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsReceivedInput, UserUncheckedCreateWithoutNotificationsReceivedInput>
  }

  export type UserCreateWithoutNotificationsSentInput = {
    id?: string
    username: string
    email: string
    googleId?: string | null
    linkedinId?: string | null
    microsoftId?: string | null
    profilePic?: string | null
    profilePicOriginal?: string | null
    profilePicCrop?: InputJsonValue | null
    coverPhoto?: string | null
    coverPhotoOriginal?: string | null
    coverPhotoCrop?: InputJsonValue | null
    title?: string | null
    location?: string | null
    about?: string | null
    connections?: number
    phoneNo?: string | null
    phonePublic?: boolean
    emailPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    jobApplications?: JobApplicationCreateNestedManyWithoutApplicantInput
    experience?: ExperienceCreateNestedManyWithoutUserInput
    education?: EducationCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    sentConnectionRequests?: ConnectionRequestCreateNestedManyWithoutFromUserInput
    receivedConnectionRequests?: ConnectionRequestCreateNestedManyWithoutToUserInput
    notificationsReceived?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsSentInput = {
    id?: string
    username: string
    email: string
    googleId?: string | null
    linkedinId?: string | null
    microsoftId?: string | null
    profilePic?: string | null
    profilePicOriginal?: string | null
    profilePicCrop?: InputJsonValue | null
    coverPhoto?: string | null
    coverPhotoOriginal?: string | null
    coverPhotoCrop?: InputJsonValue | null
    title?: string | null
    location?: string | null
    about?: string | null
    connections?: number
    phoneNo?: string | null
    phonePublic?: boolean
    emailPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    jobApplications?: JobApplicationUncheckedCreateNestedManyWithoutApplicantInput
    experience?: ExperienceUncheckedCreateNestedManyWithoutUserInput
    education?: EducationUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    sentConnectionRequests?: ConnectionRequestUncheckedCreateNestedManyWithoutFromUserInput
    receivedConnectionRequests?: ConnectionRequestUncheckedCreateNestedManyWithoutToUserInput
    notificationsReceived?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationsSentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsSentInput, UserUncheckedCreateWithoutNotificationsSentInput>
  }

  export type UserUpsertWithoutNotificationsReceivedInput = {
    update: XOR<UserUpdateWithoutNotificationsReceivedInput, UserUncheckedUpdateWithoutNotificationsReceivedInput>
    create: XOR<UserCreateWithoutNotificationsReceivedInput, UserUncheckedCreateWithoutNotificationsReceivedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsReceivedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsReceivedInput, UserUncheckedUpdateWithoutNotificationsReceivedInput>
  }

  export type UserUpdateWithoutNotificationsReceivedInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinId?: NullableStringFieldUpdateOperationsInput | string | null
    microsoftId?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicOriginal?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicCrop?: InputJsonValue | InputJsonValue | null
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhotoOriginal?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhotoCrop?: InputJsonValue | InputJsonValue | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    connections?: IntFieldUpdateOperationsInput | number
    phoneNo?: NullableStringFieldUpdateOperationsInput | string | null
    phonePublic?: BoolFieldUpdateOperationsInput | boolean
    emailPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobApplications?: JobApplicationUpdateManyWithoutApplicantNestedInput
    experience?: ExperienceUpdateManyWithoutUserNestedInput
    education?: EducationUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    sentConnectionRequests?: ConnectionRequestUpdateManyWithoutFromUserNestedInput
    receivedConnectionRequests?: ConnectionRequestUpdateManyWithoutToUserNestedInput
    notificationsSent?: NotificationUpdateManyWithoutFromUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsReceivedInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinId?: NullableStringFieldUpdateOperationsInput | string | null
    microsoftId?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicOriginal?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicCrop?: InputJsonValue | InputJsonValue | null
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhotoOriginal?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhotoCrop?: InputJsonValue | InputJsonValue | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    connections?: IntFieldUpdateOperationsInput | number
    phoneNo?: NullableStringFieldUpdateOperationsInput | string | null
    phonePublic?: BoolFieldUpdateOperationsInput | boolean
    emailPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobApplications?: JobApplicationUncheckedUpdateManyWithoutApplicantNestedInput
    experience?: ExperienceUncheckedUpdateManyWithoutUserNestedInput
    education?: EducationUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    sentConnectionRequests?: ConnectionRequestUncheckedUpdateManyWithoutFromUserNestedInput
    receivedConnectionRequests?: ConnectionRequestUncheckedUpdateManyWithoutToUserNestedInput
    notificationsSent?: NotificationUncheckedUpdateManyWithoutFromUserNestedInput
  }

  export type UserUpsertWithoutNotificationsSentInput = {
    update: XOR<UserUpdateWithoutNotificationsSentInput, UserUncheckedUpdateWithoutNotificationsSentInput>
    create: XOR<UserCreateWithoutNotificationsSentInput, UserUncheckedCreateWithoutNotificationsSentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsSentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsSentInput, UserUncheckedUpdateWithoutNotificationsSentInput>
  }

  export type UserUpdateWithoutNotificationsSentInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinId?: NullableStringFieldUpdateOperationsInput | string | null
    microsoftId?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicOriginal?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicCrop?: InputJsonValue | InputJsonValue | null
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhotoOriginal?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhotoCrop?: InputJsonValue | InputJsonValue | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    connections?: IntFieldUpdateOperationsInput | number
    phoneNo?: NullableStringFieldUpdateOperationsInput | string | null
    phonePublic?: BoolFieldUpdateOperationsInput | boolean
    emailPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobApplications?: JobApplicationUpdateManyWithoutApplicantNestedInput
    experience?: ExperienceUpdateManyWithoutUserNestedInput
    education?: EducationUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    sentConnectionRequests?: ConnectionRequestUpdateManyWithoutFromUserNestedInput
    receivedConnectionRequests?: ConnectionRequestUpdateManyWithoutToUserNestedInput
    notificationsReceived?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsSentInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinId?: NullableStringFieldUpdateOperationsInput | string | null
    microsoftId?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicOriginal?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicCrop?: InputJsonValue | InputJsonValue | null
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhotoOriginal?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhotoCrop?: InputJsonValue | InputJsonValue | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    connections?: IntFieldUpdateOperationsInput | number
    phoneNo?: NullableStringFieldUpdateOperationsInput | string | null
    phonePublic?: BoolFieldUpdateOperationsInput | boolean
    emailPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobApplications?: JobApplicationUncheckedUpdateManyWithoutApplicantNestedInput
    experience?: ExperienceUncheckedUpdateManyWithoutUserNestedInput
    education?: EducationUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    sentConnectionRequests?: ConnectionRequestUncheckedUpdateManyWithoutFromUserNestedInput
    receivedConnectionRequests?: ConnectionRequestUncheckedUpdateManyWithoutToUserNestedInput
    notificationsReceived?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MessageCreateWithoutConversationInput = {
    id?: string
    senderId: string
    receiverId: string
    text?: string | null
    media?: InputJsonValue | null
    createdAt?: Date | string
  }

  export type MessageUncheckedCreateWithoutConversationInput = {
    id?: string
    senderId: string
    receiverId: string
    text?: string | null
    media?: InputJsonValue | null
    createdAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutConversationInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput>
  }

  export type MessageCreateManyConversationInputEnvelope = {
    data: MessageCreateManyConversationInput | MessageCreateManyConversationInput[]
  }

  export type MessageUpsertWithWhereUniqueWithoutConversationInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutConversationInput, MessageUncheckedUpdateWithoutConversationInput>
    create: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutConversationInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutConversationInput, MessageUncheckedUpdateWithoutConversationInput>
  }

  export type MessageUpdateManyWithWhereWithoutConversationInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutConversationInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: StringFilter<"Message"> | string
    conversationId?: StringFilter<"Message"> | string
    senderId?: StringFilter<"Message"> | string
    receiverId?: StringFilter<"Message"> | string
    text?: StringNullableFilter<"Message"> | string | null
    media?: JsonNullableFilter<"Message">
    createdAt?: DateTimeFilter<"Message"> | Date | string
  }

  export type ConversationCreateWithoutMessagesInput = {
    id?: string
    userAId: string
    userBId: string
    lastMessageAt?: Date | string | null
    lastMessageText?: string | null
    lastMessageSenderId?: string | null
    userALastReadAt?: Date | string | null
    userBLastReadAt?: Date | string | null
    userAUnreadCount?: number
    userBUnreadCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConversationUncheckedCreateWithoutMessagesInput = {
    id?: string
    userAId: string
    userBId: string
    lastMessageAt?: Date | string | null
    lastMessageText?: string | null
    lastMessageSenderId?: string | null
    userALastReadAt?: Date | string | null
    userBLastReadAt?: Date | string | null
    userAUnreadCount?: number
    userBUnreadCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConversationCreateOrConnectWithoutMessagesInput = {
    where: ConversationWhereUniqueInput
    create: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
  }

  export type ConversationUpsertWithoutMessagesInput = {
    update: XOR<ConversationUpdateWithoutMessagesInput, ConversationUncheckedUpdateWithoutMessagesInput>
    create: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
    where?: ConversationWhereInput
  }

  export type ConversationUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ConversationWhereInput
    data: XOR<ConversationUpdateWithoutMessagesInput, ConversationUncheckedUpdateWithoutMessagesInput>
  }

  export type ConversationUpdateWithoutMessagesInput = {
    userAId?: StringFieldUpdateOperationsInput | string
    userBId?: StringFieldUpdateOperationsInput | string
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastMessageText?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageSenderId?: NullableStringFieldUpdateOperationsInput | string | null
    userALastReadAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userBLastReadAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userAUnreadCount?: IntFieldUpdateOperationsInput | number
    userBUnreadCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationUncheckedUpdateWithoutMessagesInput = {
    userAId?: StringFieldUpdateOperationsInput | string
    userBId?: StringFieldUpdateOperationsInput | string
    lastMessageAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastMessageText?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageSenderId?: NullableStringFieldUpdateOperationsInput | string | null
    userALastReadAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userBLastReadAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userAUnreadCount?: IntFieldUpdateOperationsInput | number
    userBUnreadCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateWithoutJobPostInput = {
    id?: string
    username: string
    profilePic?: string | null
    postType: string
    visibility?: string | null
    title?: string | null
    content: string
    media?: InputJsonValue | null
    mediaTypes?: PostCreatemediaTypesInput | string[]
    hasLinks?: boolean
    links?: InputJsonValue | null
    commentsDisabled?: boolean
    commentCount?: number
    likeCount?: number
    shareCount?: number
    savedCount?: number
    pollOptions?: PostCreatepollOptionsInput | string[]
    pollEndsAt?: Date | string | null
    pollVotes?: InputJsonValue | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPostsInput
    comments?: CommentCreateNestedManyWithoutPostInput
    interactions?: PostInteractionCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutJobPostInput = {
    id?: string
    userId: string
    username: string
    profilePic?: string | null
    postType: string
    visibility?: string | null
    title?: string | null
    content: string
    media?: InputJsonValue | null
    mediaTypes?: PostCreatemediaTypesInput | string[]
    hasLinks?: boolean
    links?: InputJsonValue | null
    commentsDisabled?: boolean
    commentCount?: number
    likeCount?: number
    shareCount?: number
    savedCount?: number
    pollOptions?: PostCreatepollOptionsInput | string[]
    pollEndsAt?: Date | string | null
    pollVotes?: InputJsonValue | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
    interactions?: PostInteractionUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutJobPostInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutJobPostInput, PostUncheckedCreateWithoutJobPostInput>
  }

  export type JobApplicationCreateWithoutJobPostInput = {
    id?: string
    resumeLetter?: string | null
    expectedSalary?: number | null
    availability?: string | null
    resumeBlobName: string
    status?: $Enums.ApplicationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    applicant: UserCreateNestedOneWithoutJobApplicationsInput
  }

  export type JobApplicationUncheckedCreateWithoutJobPostInput = {
    id?: string
    applicantId: string
    resumeLetter?: string | null
    expectedSalary?: number | null
    availability?: string | null
    resumeBlobName: string
    status?: $Enums.ApplicationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobApplicationCreateOrConnectWithoutJobPostInput = {
    where: JobApplicationWhereUniqueInput
    create: XOR<JobApplicationCreateWithoutJobPostInput, JobApplicationUncheckedCreateWithoutJobPostInput>
  }

  export type JobApplicationCreateManyJobPostInputEnvelope = {
    data: JobApplicationCreateManyJobPostInput | JobApplicationCreateManyJobPostInput[]
  }

  export type PostUpsertWithoutJobPostInput = {
    update: XOR<PostUpdateWithoutJobPostInput, PostUncheckedUpdateWithoutJobPostInput>
    create: XOR<PostCreateWithoutJobPostInput, PostUncheckedCreateWithoutJobPostInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutJobPostInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutJobPostInput, PostUncheckedUpdateWithoutJobPostInput>
  }

  export type PostUpdateWithoutJobPostInput = {
    username?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    postType?: StringFieldUpdateOperationsInput | string
    visibility?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    media?: InputJsonValue | InputJsonValue | null
    mediaTypes?: PostUpdatemediaTypesInput | string[]
    hasLinks?: BoolFieldUpdateOperationsInput | boolean
    links?: InputJsonValue | InputJsonValue | null
    commentsDisabled?: BoolFieldUpdateOperationsInput | boolean
    commentCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    shareCount?: IntFieldUpdateOperationsInput | number
    savedCount?: IntFieldUpdateOperationsInput | number
    pollOptions?: PostUpdatepollOptionsInput | string[]
    pollEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pollVotes?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    comments?: CommentUpdateManyWithoutPostNestedInput
    interactions?: PostInteractionUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutJobPostInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    postType?: StringFieldUpdateOperationsInput | string
    visibility?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    media?: InputJsonValue | InputJsonValue | null
    mediaTypes?: PostUpdatemediaTypesInput | string[]
    hasLinks?: BoolFieldUpdateOperationsInput | boolean
    links?: InputJsonValue | InputJsonValue | null
    commentsDisabled?: BoolFieldUpdateOperationsInput | boolean
    commentCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    shareCount?: IntFieldUpdateOperationsInput | number
    savedCount?: IntFieldUpdateOperationsInput | number
    pollOptions?: PostUpdatepollOptionsInput | string[]
    pollEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pollVotes?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
    interactions?: PostInteractionUncheckedUpdateManyWithoutPostNestedInput
  }

  export type JobApplicationUpsertWithWhereUniqueWithoutJobPostInput = {
    where: JobApplicationWhereUniqueInput
    update: XOR<JobApplicationUpdateWithoutJobPostInput, JobApplicationUncheckedUpdateWithoutJobPostInput>
    create: XOR<JobApplicationCreateWithoutJobPostInput, JobApplicationUncheckedCreateWithoutJobPostInput>
  }

  export type JobApplicationUpdateWithWhereUniqueWithoutJobPostInput = {
    where: JobApplicationWhereUniqueInput
    data: XOR<JobApplicationUpdateWithoutJobPostInput, JobApplicationUncheckedUpdateWithoutJobPostInput>
  }

  export type JobApplicationUpdateManyWithWhereWithoutJobPostInput = {
    where: JobApplicationScalarWhereInput
    data: XOR<JobApplicationUpdateManyMutationInput, JobApplicationUncheckedUpdateManyWithoutJobPostInput>
  }

  export type JobPostCreateWithoutApplicationsInput = {
    id?: string
    jobTitle: string
    companyName?: string | null
    location?: string | null
    locationType?: $Enums.JobLocationType | null
    jobDetails?: string | null
    jobRequirements?: JobPostCreatejobRequirementsInput | string[]
    employmentType: $Enums.EmploymentType
    positionsAvailable?: number
    positionsFilled?: number
    salaryMin?: number | null
    salaryMax?: number | null
    salaryCurrency?: string | null
    deadline?: Date | string | null
    status?: $Enums.JobStatus
    applyUrl?: string | null
    allowExternalApply?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    post: PostCreateNestedOneWithoutJobPostInput
  }

  export type JobPostUncheckedCreateWithoutApplicationsInput = {
    id?: string
    postId: string
    jobTitle: string
    companyName?: string | null
    location?: string | null
    locationType?: $Enums.JobLocationType | null
    jobDetails?: string | null
    jobRequirements?: JobPostCreatejobRequirementsInput | string[]
    employmentType: $Enums.EmploymentType
    positionsAvailable?: number
    positionsFilled?: number
    salaryMin?: number | null
    salaryMax?: number | null
    salaryCurrency?: string | null
    deadline?: Date | string | null
    status?: $Enums.JobStatus
    applyUrl?: string | null
    allowExternalApply?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobPostCreateOrConnectWithoutApplicationsInput = {
    where: JobPostWhereUniqueInput
    create: XOR<JobPostCreateWithoutApplicationsInput, JobPostUncheckedCreateWithoutApplicationsInput>
  }

  export type UserCreateWithoutJobApplicationsInput = {
    id?: string
    username: string
    email: string
    googleId?: string | null
    linkedinId?: string | null
    microsoftId?: string | null
    profilePic?: string | null
    profilePicOriginal?: string | null
    profilePicCrop?: InputJsonValue | null
    coverPhoto?: string | null
    coverPhotoOriginal?: string | null
    coverPhotoCrop?: InputJsonValue | null
    title?: string | null
    location?: string | null
    about?: string | null
    connections?: number
    phoneNo?: string | null
    phonePublic?: boolean
    emailPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    experience?: ExperienceCreateNestedManyWithoutUserInput
    education?: EducationCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    sentConnectionRequests?: ConnectionRequestCreateNestedManyWithoutFromUserInput
    receivedConnectionRequests?: ConnectionRequestCreateNestedManyWithoutToUserInput
    notificationsReceived?: NotificationCreateNestedManyWithoutUserInput
    notificationsSent?: NotificationCreateNestedManyWithoutFromUserInput
  }

  export type UserUncheckedCreateWithoutJobApplicationsInput = {
    id?: string
    username: string
    email: string
    googleId?: string | null
    linkedinId?: string | null
    microsoftId?: string | null
    profilePic?: string | null
    profilePicOriginal?: string | null
    profilePicCrop?: InputJsonValue | null
    coverPhoto?: string | null
    coverPhotoOriginal?: string | null
    coverPhotoCrop?: InputJsonValue | null
    title?: string | null
    location?: string | null
    about?: string | null
    connections?: number
    phoneNo?: string | null
    phonePublic?: boolean
    emailPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    experience?: ExperienceUncheckedCreateNestedManyWithoutUserInput
    education?: EducationUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    sentConnectionRequests?: ConnectionRequestUncheckedCreateNestedManyWithoutFromUserInput
    receivedConnectionRequests?: ConnectionRequestUncheckedCreateNestedManyWithoutToUserInput
    notificationsReceived?: NotificationUncheckedCreateNestedManyWithoutUserInput
    notificationsSent?: NotificationUncheckedCreateNestedManyWithoutFromUserInput
  }

  export type UserCreateOrConnectWithoutJobApplicationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutJobApplicationsInput, UserUncheckedCreateWithoutJobApplicationsInput>
  }

  export type JobPostUpsertWithoutApplicationsInput = {
    update: XOR<JobPostUpdateWithoutApplicationsInput, JobPostUncheckedUpdateWithoutApplicationsInput>
    create: XOR<JobPostCreateWithoutApplicationsInput, JobPostUncheckedCreateWithoutApplicationsInput>
    where?: JobPostWhereInput
  }

  export type JobPostUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: JobPostWhereInput
    data: XOR<JobPostUpdateWithoutApplicationsInput, JobPostUncheckedUpdateWithoutApplicationsInput>
  }

  export type JobPostUpdateWithoutApplicationsInput = {
    jobTitle?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    locationType?: NullableEnumJobLocationTypeFieldUpdateOperationsInput | $Enums.JobLocationType | null
    jobDetails?: NullableStringFieldUpdateOperationsInput | string | null
    jobRequirements?: JobPostUpdatejobRequirementsInput | string[]
    employmentType?: EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType
    positionsAvailable?: IntFieldUpdateOperationsInput | number
    positionsFilled?: IntFieldUpdateOperationsInput | number
    salaryMin?: NullableIntFieldUpdateOperationsInput | number | null
    salaryMax?: NullableIntFieldUpdateOperationsInput | number | null
    salaryCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    applyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    allowExternalApply?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutJobPostNestedInput
  }

  export type JobPostUncheckedUpdateWithoutApplicationsInput = {
    postId?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    locationType?: NullableEnumJobLocationTypeFieldUpdateOperationsInput | $Enums.JobLocationType | null
    jobDetails?: NullableStringFieldUpdateOperationsInput | string | null
    jobRequirements?: JobPostUpdatejobRequirementsInput | string[]
    employmentType?: EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType
    positionsAvailable?: IntFieldUpdateOperationsInput | number
    positionsFilled?: IntFieldUpdateOperationsInput | number
    salaryMin?: NullableIntFieldUpdateOperationsInput | number | null
    salaryMax?: NullableIntFieldUpdateOperationsInput | number | null
    salaryCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus
    applyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    allowExternalApply?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutJobApplicationsInput = {
    update: XOR<UserUpdateWithoutJobApplicationsInput, UserUncheckedUpdateWithoutJobApplicationsInput>
    create: XOR<UserCreateWithoutJobApplicationsInput, UserUncheckedCreateWithoutJobApplicationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutJobApplicationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutJobApplicationsInput, UserUncheckedUpdateWithoutJobApplicationsInput>
  }

  export type UserUpdateWithoutJobApplicationsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinId?: NullableStringFieldUpdateOperationsInput | string | null
    microsoftId?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicOriginal?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicCrop?: InputJsonValue | InputJsonValue | null
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhotoOriginal?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhotoCrop?: InputJsonValue | InputJsonValue | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    connections?: IntFieldUpdateOperationsInput | number
    phoneNo?: NullableStringFieldUpdateOperationsInput | string | null
    phonePublic?: BoolFieldUpdateOperationsInput | boolean
    emailPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    experience?: ExperienceUpdateManyWithoutUserNestedInput
    education?: EducationUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    sentConnectionRequests?: ConnectionRequestUpdateManyWithoutFromUserNestedInput
    receivedConnectionRequests?: ConnectionRequestUpdateManyWithoutToUserNestedInput
    notificationsReceived?: NotificationUpdateManyWithoutUserNestedInput
    notificationsSent?: NotificationUpdateManyWithoutFromUserNestedInput
  }

  export type UserUncheckedUpdateWithoutJobApplicationsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinId?: NullableStringFieldUpdateOperationsInput | string | null
    microsoftId?: NullableStringFieldUpdateOperationsInput | string | null
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicOriginal?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicCrop?: InputJsonValue | InputJsonValue | null
    coverPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhotoOriginal?: NullableStringFieldUpdateOperationsInput | string | null
    coverPhotoCrop?: InputJsonValue | InputJsonValue | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    about?: NullableStringFieldUpdateOperationsInput | string | null
    connections?: IntFieldUpdateOperationsInput | number
    phoneNo?: NullableStringFieldUpdateOperationsInput | string | null
    phonePublic?: BoolFieldUpdateOperationsInput | boolean
    emailPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    experience?: ExperienceUncheckedUpdateManyWithoutUserNestedInput
    education?: EducationUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    sentConnectionRequests?: ConnectionRequestUncheckedUpdateManyWithoutFromUserNestedInput
    receivedConnectionRequests?: ConnectionRequestUncheckedUpdateManyWithoutToUserNestedInput
    notificationsReceived?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    notificationsSent?: NotificationUncheckedUpdateManyWithoutFromUserNestedInput
  }

  export type JobApplicationCreateManyApplicantInput = {
    id?: string
    jobPostId: string
    resumeLetter?: string | null
    expectedSalary?: number | null
    availability?: string | null
    resumeBlobName: string
    status?: $Enums.ApplicationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExperienceCreateManyUserInput = {
    id?: string
    title: string
    employmentType: $Enums.EmploymentType
    company: string
    startMonth: number
    startYear: number
    endMonth?: number | null
    endYear?: number | null
    isCurrent?: boolean
  }

  export type EducationCreateManyUserInput = {
    id?: string
    school: string
    degree: string
    fieldOfStudy: string
    startMonth: number
    startYear: number
    endMonth: number
    endYear: number
  }

  export type PostCreateManyUserInput = {
    id?: string
    username: string
    profilePic?: string | null
    postType: string
    visibility?: string | null
    title?: string | null
    content: string
    media?: InputJsonValue | null
    mediaTypes?: PostCreatemediaTypesInput | string[]
    hasLinks?: boolean
    links?: InputJsonValue | null
    commentsDisabled?: boolean
    commentCount?: number
    likeCount?: number
    shareCount?: number
    savedCount?: number
    pollOptions?: PostCreatepollOptionsInput | string[]
    pollEndsAt?: Date | string | null
    pollVotes?: InputJsonValue | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConnectionRequestCreateManyFromUserInput = {
    id?: string
    toUserId: string
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConnectionRequestCreateManyToUserInput = {
    id?: string
    fromUserId: string
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationCreateManyUserInput = {
    id?: string
    fromUserId: string
    type: $Enums.NotificationType
    entityId?: string | null
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationCreateManyFromUserInput = {
    id?: string
    userId: string
    type: $Enums.NotificationType
    entityId?: string | null
    isRead?: boolean
    createdAt?: Date | string
  }

  export type JobApplicationUpdateWithoutApplicantInput = {
    resumeLetter?: NullableStringFieldUpdateOperationsInput | string | null
    expectedSalary?: NullableIntFieldUpdateOperationsInput | number | null
    availability?: NullableStringFieldUpdateOperationsInput | string | null
    resumeBlobName?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobPost?: JobPostUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type JobApplicationUncheckedUpdateWithoutApplicantInput = {
    jobPostId?: StringFieldUpdateOperationsInput | string
    resumeLetter?: NullableStringFieldUpdateOperationsInput | string | null
    expectedSalary?: NullableIntFieldUpdateOperationsInput | number | null
    availability?: NullableStringFieldUpdateOperationsInput | string | null
    resumeBlobName?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobApplicationUncheckedUpdateManyWithoutApplicantInput = {
    jobPostId?: StringFieldUpdateOperationsInput | string
    resumeLetter?: NullableStringFieldUpdateOperationsInput | string | null
    expectedSalary?: NullableIntFieldUpdateOperationsInput | number | null
    availability?: NullableStringFieldUpdateOperationsInput | string | null
    resumeBlobName?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExperienceUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    employmentType?: EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType
    company?: StringFieldUpdateOperationsInput | string
    startMonth?: IntFieldUpdateOperationsInput | number
    startYear?: IntFieldUpdateOperationsInput | number
    endMonth?: NullableIntFieldUpdateOperationsInput | number | null
    endYear?: NullableIntFieldUpdateOperationsInput | number | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExperienceUncheckedUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    employmentType?: EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType
    company?: StringFieldUpdateOperationsInput | string
    startMonth?: IntFieldUpdateOperationsInput | number
    startYear?: IntFieldUpdateOperationsInput | number
    endMonth?: NullableIntFieldUpdateOperationsInput | number | null
    endYear?: NullableIntFieldUpdateOperationsInput | number | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExperienceUncheckedUpdateManyWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    employmentType?: EnumEmploymentTypeFieldUpdateOperationsInput | $Enums.EmploymentType
    company?: StringFieldUpdateOperationsInput | string
    startMonth?: IntFieldUpdateOperationsInput | number
    startYear?: IntFieldUpdateOperationsInput | number
    endMonth?: NullableIntFieldUpdateOperationsInput | number | null
    endYear?: NullableIntFieldUpdateOperationsInput | number | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EducationUpdateWithoutUserInput = {
    school?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    fieldOfStudy?: StringFieldUpdateOperationsInput | string
    startMonth?: IntFieldUpdateOperationsInput | number
    startYear?: IntFieldUpdateOperationsInput | number
    endMonth?: IntFieldUpdateOperationsInput | number
    endYear?: IntFieldUpdateOperationsInput | number
  }

  export type EducationUncheckedUpdateWithoutUserInput = {
    school?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    fieldOfStudy?: StringFieldUpdateOperationsInput | string
    startMonth?: IntFieldUpdateOperationsInput | number
    startYear?: IntFieldUpdateOperationsInput | number
    endMonth?: IntFieldUpdateOperationsInput | number
    endYear?: IntFieldUpdateOperationsInput | number
  }

  export type EducationUncheckedUpdateManyWithoutUserInput = {
    school?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    fieldOfStudy?: StringFieldUpdateOperationsInput | string
    startMonth?: IntFieldUpdateOperationsInput | number
    startYear?: IntFieldUpdateOperationsInput | number
    endMonth?: IntFieldUpdateOperationsInput | number
    endYear?: IntFieldUpdateOperationsInput | number
  }

  export type PostUpdateWithoutUserInput = {
    username?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    postType?: StringFieldUpdateOperationsInput | string
    visibility?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    media?: InputJsonValue | InputJsonValue | null
    mediaTypes?: PostUpdatemediaTypesInput | string[]
    hasLinks?: BoolFieldUpdateOperationsInput | boolean
    links?: InputJsonValue | InputJsonValue | null
    commentsDisabled?: BoolFieldUpdateOperationsInput | boolean
    commentCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    shareCount?: IntFieldUpdateOperationsInput | number
    savedCount?: IntFieldUpdateOperationsInput | number
    pollOptions?: PostUpdatepollOptionsInput | string[]
    pollEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pollVotes?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobPost?: JobPostUpdateOneWithoutPostNestedInput
    comments?: CommentUpdateManyWithoutPostNestedInput
    interactions?: PostInteractionUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutUserInput = {
    username?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    postType?: StringFieldUpdateOperationsInput | string
    visibility?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    media?: InputJsonValue | InputJsonValue | null
    mediaTypes?: PostUpdatemediaTypesInput | string[]
    hasLinks?: BoolFieldUpdateOperationsInput | boolean
    links?: InputJsonValue | InputJsonValue | null
    commentsDisabled?: BoolFieldUpdateOperationsInput | boolean
    commentCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    shareCount?: IntFieldUpdateOperationsInput | number
    savedCount?: IntFieldUpdateOperationsInput | number
    pollOptions?: PostUpdatepollOptionsInput | string[]
    pollEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pollVotes?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jobPost?: JobPostUncheckedUpdateOneWithoutPostNestedInput
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
    interactions?: PostInteractionUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutUserInput = {
    username?: StringFieldUpdateOperationsInput | string
    profilePic?: NullableStringFieldUpdateOperationsInput | string | null
    postType?: StringFieldUpdateOperationsInput | string
    visibility?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    media?: InputJsonValue | InputJsonValue | null
    mediaTypes?: PostUpdatemediaTypesInput | string[]
    hasLinks?: BoolFieldUpdateOperationsInput | boolean
    links?: InputJsonValue | InputJsonValue | null
    commentsDisabled?: BoolFieldUpdateOperationsInput | boolean
    commentCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    shareCount?: IntFieldUpdateOperationsInput | number
    savedCount?: IntFieldUpdateOperationsInput | number
    pollOptions?: PostUpdatepollOptionsInput | string[]
    pollEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pollVotes?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectionRequestUpdateWithoutFromUserInput = {
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    toUser?: UserUpdateOneRequiredWithoutReceivedConnectionRequestsNestedInput
  }

  export type ConnectionRequestUncheckedUpdateWithoutFromUserInput = {
    toUserId?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectionRequestUncheckedUpdateManyWithoutFromUserInput = {
    toUserId?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectionRequestUpdateWithoutToUserInput = {
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromUser?: UserUpdateOneRequiredWithoutSentConnectionRequestsNestedInput
  }

  export type ConnectionRequestUncheckedUpdateWithoutToUserInput = {
    fromUserId?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConnectionRequestUncheckedUpdateManyWithoutToUserInput = {
    fromUserId?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutUserInput = {
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fromUser?: UserUpdateOneRequiredWithoutNotificationsSentNestedInput
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    fromUserId?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    fromUserId?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutFromUserInput = {
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsReceivedNestedInput
  }

  export type NotificationUncheckedUpdateWithoutFromUserInput = {
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutFromUserInput = {
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyPostInput = {
    id?: string
    userId: string
    username: string
    profilePic: string
    content: string
    media?: InputJsonValue | null
    likeCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    parentId?: string | null
    depth?: number
  }

  export type PostInteractionCreateManyPostInput = {
    id?: string
    userId: string
    type: $Enums.PostInteractionType
    createdAt?: Date | string
  }

  export type CommentUpdateWithoutPostInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profilePic?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    media?: InputJsonValue | InputJsonValue | null
    likeCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    depth?: IntFieldUpdateOperationsInput | number
    parent?: CommentUpdateOneWithoutRepliesNestedInput
    replies?: CommentUpdateManyWithoutParentNestedInput
  }

  export type CommentUncheckedUpdateWithoutPostInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profilePic?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    media?: InputJsonValue | InputJsonValue | null
    likeCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    depth?: IntFieldUpdateOperationsInput | number
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutPostInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profilePic?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    media?: InputJsonValue | InputJsonValue | null
    likeCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    depth?: IntFieldUpdateOperationsInput | number
  }

  export type PostInteractionUpdateWithoutPostInput = {
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumPostInteractionTypeFieldUpdateOperationsInput | $Enums.PostInteractionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostInteractionUncheckedUpdateWithoutPostInput = {
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumPostInteractionTypeFieldUpdateOperationsInput | $Enums.PostInteractionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostInteractionUncheckedUpdateManyWithoutPostInput = {
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumPostInteractionTypeFieldUpdateOperationsInput | $Enums.PostInteractionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyParentInput = {
    id?: string
    userId: string
    username: string
    profilePic: string
    content: string
    media?: InputJsonValue | null
    likeCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    postId: string
    depth?: number
  }

  export type CommentUpdateWithoutParentInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profilePic?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    media?: InputJsonValue | InputJsonValue | null
    likeCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    depth?: IntFieldUpdateOperationsInput | number
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput
    replies?: CommentUpdateManyWithoutParentNestedInput
  }

  export type CommentUncheckedUpdateWithoutParentInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profilePic?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    media?: InputJsonValue | InputJsonValue | null
    likeCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: StringFieldUpdateOperationsInput | string
    depth?: IntFieldUpdateOperationsInput | number
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutParentInput = {
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    profilePic?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    media?: InputJsonValue | InputJsonValue | null
    likeCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: StringFieldUpdateOperationsInput | string
    depth?: IntFieldUpdateOperationsInput | number
  }

  export type MessageCreateManyConversationInput = {
    id?: string
    senderId: string
    receiverId: string
    text?: string | null
    media?: InputJsonValue | null
    createdAt?: Date | string
  }

  export type MessageUpdateWithoutConversationInput = {
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    media?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateWithoutConversationInput = {
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    media?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutConversationInput = {
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    media?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobApplicationCreateManyJobPostInput = {
    id?: string
    applicantId: string
    resumeLetter?: string | null
    expectedSalary?: number | null
    availability?: string | null
    resumeBlobName: string
    status?: $Enums.ApplicationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JobApplicationUpdateWithoutJobPostInput = {
    resumeLetter?: NullableStringFieldUpdateOperationsInput | string | null
    expectedSalary?: NullableIntFieldUpdateOperationsInput | number | null
    availability?: NullableStringFieldUpdateOperationsInput | string | null
    resumeBlobName?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applicant?: UserUpdateOneRequiredWithoutJobApplicationsNestedInput
  }

  export type JobApplicationUncheckedUpdateWithoutJobPostInput = {
    applicantId?: StringFieldUpdateOperationsInput | string
    resumeLetter?: NullableStringFieldUpdateOperationsInput | string | null
    expectedSalary?: NullableIntFieldUpdateOperationsInput | number | null
    availability?: NullableStringFieldUpdateOperationsInput | string | null
    resumeBlobName?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobApplicationUncheckedUpdateManyWithoutJobPostInput = {
    applicantId?: StringFieldUpdateOperationsInput | string
    resumeLetter?: NullableStringFieldUpdateOperationsInput | string | null
    expectedSalary?: NullableIntFieldUpdateOperationsInput | number | null
    availability?: NullableStringFieldUpdateOperationsInput | string | null
    resumeBlobName?: StringFieldUpdateOperationsInput | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}