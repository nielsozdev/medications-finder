
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
 * Model Price
 * 
 */
export type Price = $Result.DefaultSelection<Prisma.$PricePayload>
/**
 * Model Family
 * 
 */
export type Family = $Result.DefaultSelection<Prisma.$FamilyPayload>
/**
 * Model SubFamily
 * 
 */
export type SubFamily = $Result.DefaultSelection<Prisma.$SubFamilyPayload>
/**
 * Model Medication
 * 
 */
export type Medication = $Result.DefaultSelection<Prisma.$MedicationPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model PharmaceuticalForm
 * 
 */
export type PharmaceuticalForm = $Result.DefaultSelection<Prisma.$PharmaceuticalFormPayload>
/**
 * Model Establishment
 * 
 */
export type Establishment = $Result.DefaultSelection<Prisma.$EstablishmentPayload>
/**
 * Model Manufacturer
 * 
 */
export type Manufacturer = $Result.DefaultSelection<Prisma.$ManufacturerPayload>
/**
 * Model District
 * 
 */
export type District = $Result.DefaultSelection<Prisma.$DistrictPayload>
/**
 * Model Province
 * 
 */
export type Province = $Result.DefaultSelection<Prisma.$ProvincePayload>
/**
 * Model Department
 * 
 */
export type Department = $Result.DefaultSelection<Prisma.$DepartmentPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Prices
 * const prices = await prisma.price.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Prices
   * const prices = await prisma.price.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.price`: Exposes CRUD operations for the **Price** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prices
    * const prices = await prisma.price.findMany()
    * ```
    */
  get price(): Prisma.PriceDelegate<ExtArgs>;

  /**
   * `prisma.family`: Exposes CRUD operations for the **Family** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Families
    * const families = await prisma.family.findMany()
    * ```
    */
  get family(): Prisma.FamilyDelegate<ExtArgs>;

  /**
   * `prisma.subFamily`: Exposes CRUD operations for the **SubFamily** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubFamilies
    * const subFamilies = await prisma.subFamily.findMany()
    * ```
    */
  get subFamily(): Prisma.SubFamilyDelegate<ExtArgs>;

  /**
   * `prisma.medication`: Exposes CRUD operations for the **Medication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Medications
    * const medications = await prisma.medication.findMany()
    * ```
    */
  get medication(): Prisma.MedicationDelegate<ExtArgs>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs>;

  /**
   * `prisma.pharmaceuticalForm`: Exposes CRUD operations for the **PharmaceuticalForm** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PharmaceuticalForms
    * const pharmaceuticalForms = await prisma.pharmaceuticalForm.findMany()
    * ```
    */
  get pharmaceuticalForm(): Prisma.PharmaceuticalFormDelegate<ExtArgs>;

  /**
   * `prisma.establishment`: Exposes CRUD operations for the **Establishment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Establishments
    * const establishments = await prisma.establishment.findMany()
    * ```
    */
  get establishment(): Prisma.EstablishmentDelegate<ExtArgs>;

  /**
   * `prisma.manufacturer`: Exposes CRUD operations for the **Manufacturer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Manufacturers
    * const manufacturers = await prisma.manufacturer.findMany()
    * ```
    */
  get manufacturer(): Prisma.ManufacturerDelegate<ExtArgs>;

  /**
   * `prisma.district`: Exposes CRUD operations for the **District** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Districts
    * const districts = await prisma.district.findMany()
    * ```
    */
  get district(): Prisma.DistrictDelegate<ExtArgs>;

  /**
   * `prisma.province`: Exposes CRUD operations for the **Province** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Provinces
    * const provinces = await prisma.province.findMany()
    * ```
    */
  get province(): Prisma.ProvinceDelegate<ExtArgs>;

  /**
   * `prisma.department`: Exposes CRUD operations for the **Department** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departments
    * const departments = await prisma.department.findMany()
    * ```
    */
  get department(): Prisma.DepartmentDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.16.2
   * Query Engine version: 34ace0eb2704183d2c05b60b52fba5c43c13f303
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Price: 'Price',
    Family: 'Family',
    SubFamily: 'SubFamily',
    Medication: 'Medication',
    Product: 'Product',
    PharmaceuticalForm: 'PharmaceuticalForm',
    Establishment: 'Establishment',
    Manufacturer: 'Manufacturer',
    District: 'District',
    Province: 'Province',
    Department: 'Department'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "price" | "family" | "subFamily" | "medication" | "product" | "pharmaceuticalForm" | "establishment" | "manufacturer" | "district" | "province" | "department"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Price: {
        payload: Prisma.$PricePayload<ExtArgs>
        fields: Prisma.PriceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PriceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PriceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>
          }
          findFirst: {
            args: Prisma.PriceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PriceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>
          }
          findMany: {
            args: Prisma.PriceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>[]
          }
          create: {
            args: Prisma.PriceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>
          }
          createMany: {
            args: Prisma.PriceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PriceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>[]
          }
          delete: {
            args: Prisma.PriceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>
          }
          update: {
            args: Prisma.PriceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>
          }
          deleteMany: {
            args: Prisma.PriceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PriceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PriceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>
          }
          aggregate: {
            args: Prisma.PriceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrice>
          }
          groupBy: {
            args: Prisma.PriceGroupByArgs<ExtArgs>
            result: $Utils.Optional<PriceGroupByOutputType>[]
          }
          count: {
            args: Prisma.PriceCountArgs<ExtArgs>
            result: $Utils.Optional<PriceCountAggregateOutputType> | number
          }
        }
      }
      Family: {
        payload: Prisma.$FamilyPayload<ExtArgs>
        fields: Prisma.FamilyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FamilyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FamilyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyPayload>
          }
          findFirst: {
            args: Prisma.FamilyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FamilyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyPayload>
          }
          findMany: {
            args: Prisma.FamilyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyPayload>[]
          }
          create: {
            args: Prisma.FamilyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyPayload>
          }
          createMany: {
            args: Prisma.FamilyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FamilyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyPayload>[]
          }
          delete: {
            args: Prisma.FamilyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyPayload>
          }
          update: {
            args: Prisma.FamilyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyPayload>
          }
          deleteMany: {
            args: Prisma.FamilyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FamilyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FamilyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FamilyPayload>
          }
          aggregate: {
            args: Prisma.FamilyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFamily>
          }
          groupBy: {
            args: Prisma.FamilyGroupByArgs<ExtArgs>
            result: $Utils.Optional<FamilyGroupByOutputType>[]
          }
          count: {
            args: Prisma.FamilyCountArgs<ExtArgs>
            result: $Utils.Optional<FamilyCountAggregateOutputType> | number
          }
        }
      }
      SubFamily: {
        payload: Prisma.$SubFamilyPayload<ExtArgs>
        fields: Prisma.SubFamilyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubFamilyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubFamilyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubFamilyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubFamilyPayload>
          }
          findFirst: {
            args: Prisma.SubFamilyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubFamilyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubFamilyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubFamilyPayload>
          }
          findMany: {
            args: Prisma.SubFamilyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubFamilyPayload>[]
          }
          create: {
            args: Prisma.SubFamilyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubFamilyPayload>
          }
          createMany: {
            args: Prisma.SubFamilyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubFamilyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubFamilyPayload>[]
          }
          delete: {
            args: Prisma.SubFamilyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubFamilyPayload>
          }
          update: {
            args: Prisma.SubFamilyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubFamilyPayload>
          }
          deleteMany: {
            args: Prisma.SubFamilyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubFamilyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubFamilyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubFamilyPayload>
          }
          aggregate: {
            args: Prisma.SubFamilyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubFamily>
          }
          groupBy: {
            args: Prisma.SubFamilyGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubFamilyGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubFamilyCountArgs<ExtArgs>
            result: $Utils.Optional<SubFamilyCountAggregateOutputType> | number
          }
        }
      }
      Medication: {
        payload: Prisma.$MedicationPayload<ExtArgs>
        fields: Prisma.MedicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          findFirst: {
            args: Prisma.MedicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          findMany: {
            args: Prisma.MedicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>[]
          }
          create: {
            args: Prisma.MedicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          createMany: {
            args: Prisma.MedicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MedicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>[]
          }
          delete: {
            args: Prisma.MedicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          update: {
            args: Prisma.MedicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          deleteMany: {
            args: Prisma.MedicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MedicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          aggregate: {
            args: Prisma.MedicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedication>
          }
          groupBy: {
            args: Prisma.MedicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicationCountArgs<ExtArgs>
            result: $Utils.Optional<MedicationCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      PharmaceuticalForm: {
        payload: Prisma.$PharmaceuticalFormPayload<ExtArgs>
        fields: Prisma.PharmaceuticalFormFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PharmaceuticalFormFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmaceuticalFormPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PharmaceuticalFormFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmaceuticalFormPayload>
          }
          findFirst: {
            args: Prisma.PharmaceuticalFormFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmaceuticalFormPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PharmaceuticalFormFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmaceuticalFormPayload>
          }
          findMany: {
            args: Prisma.PharmaceuticalFormFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmaceuticalFormPayload>[]
          }
          create: {
            args: Prisma.PharmaceuticalFormCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmaceuticalFormPayload>
          }
          createMany: {
            args: Prisma.PharmaceuticalFormCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PharmaceuticalFormCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmaceuticalFormPayload>[]
          }
          delete: {
            args: Prisma.PharmaceuticalFormDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmaceuticalFormPayload>
          }
          update: {
            args: Prisma.PharmaceuticalFormUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmaceuticalFormPayload>
          }
          deleteMany: {
            args: Prisma.PharmaceuticalFormDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PharmaceuticalFormUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PharmaceuticalFormUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PharmaceuticalFormPayload>
          }
          aggregate: {
            args: Prisma.PharmaceuticalFormAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePharmaceuticalForm>
          }
          groupBy: {
            args: Prisma.PharmaceuticalFormGroupByArgs<ExtArgs>
            result: $Utils.Optional<PharmaceuticalFormGroupByOutputType>[]
          }
          count: {
            args: Prisma.PharmaceuticalFormCountArgs<ExtArgs>
            result: $Utils.Optional<PharmaceuticalFormCountAggregateOutputType> | number
          }
        }
      }
      Establishment: {
        payload: Prisma.$EstablishmentPayload<ExtArgs>
        fields: Prisma.EstablishmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EstablishmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstablishmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EstablishmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstablishmentPayload>
          }
          findFirst: {
            args: Prisma.EstablishmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstablishmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EstablishmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstablishmentPayload>
          }
          findMany: {
            args: Prisma.EstablishmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstablishmentPayload>[]
          }
          create: {
            args: Prisma.EstablishmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstablishmentPayload>
          }
          createMany: {
            args: Prisma.EstablishmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EstablishmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstablishmentPayload>[]
          }
          delete: {
            args: Prisma.EstablishmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstablishmentPayload>
          }
          update: {
            args: Prisma.EstablishmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstablishmentPayload>
          }
          deleteMany: {
            args: Prisma.EstablishmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EstablishmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EstablishmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstablishmentPayload>
          }
          aggregate: {
            args: Prisma.EstablishmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstablishment>
          }
          groupBy: {
            args: Prisma.EstablishmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<EstablishmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.EstablishmentCountArgs<ExtArgs>
            result: $Utils.Optional<EstablishmentCountAggregateOutputType> | number
          }
        }
      }
      Manufacturer: {
        payload: Prisma.$ManufacturerPayload<ExtArgs>
        fields: Prisma.ManufacturerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ManufacturerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManufacturerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ManufacturerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManufacturerPayload>
          }
          findFirst: {
            args: Prisma.ManufacturerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManufacturerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ManufacturerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManufacturerPayload>
          }
          findMany: {
            args: Prisma.ManufacturerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManufacturerPayload>[]
          }
          create: {
            args: Prisma.ManufacturerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManufacturerPayload>
          }
          createMany: {
            args: Prisma.ManufacturerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ManufacturerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManufacturerPayload>[]
          }
          delete: {
            args: Prisma.ManufacturerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManufacturerPayload>
          }
          update: {
            args: Prisma.ManufacturerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManufacturerPayload>
          }
          deleteMany: {
            args: Prisma.ManufacturerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ManufacturerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ManufacturerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManufacturerPayload>
          }
          aggregate: {
            args: Prisma.ManufacturerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateManufacturer>
          }
          groupBy: {
            args: Prisma.ManufacturerGroupByArgs<ExtArgs>
            result: $Utils.Optional<ManufacturerGroupByOutputType>[]
          }
          count: {
            args: Prisma.ManufacturerCountArgs<ExtArgs>
            result: $Utils.Optional<ManufacturerCountAggregateOutputType> | number
          }
        }
      }
      District: {
        payload: Prisma.$DistrictPayload<ExtArgs>
        fields: Prisma.DistrictFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DistrictFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DistrictFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload>
          }
          findFirst: {
            args: Prisma.DistrictFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DistrictFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload>
          }
          findMany: {
            args: Prisma.DistrictFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload>[]
          }
          create: {
            args: Prisma.DistrictCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload>
          }
          createMany: {
            args: Prisma.DistrictCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DistrictCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload>[]
          }
          delete: {
            args: Prisma.DistrictDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload>
          }
          update: {
            args: Prisma.DistrictUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload>
          }
          deleteMany: {
            args: Prisma.DistrictDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DistrictUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DistrictUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistrictPayload>
          }
          aggregate: {
            args: Prisma.DistrictAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDistrict>
          }
          groupBy: {
            args: Prisma.DistrictGroupByArgs<ExtArgs>
            result: $Utils.Optional<DistrictGroupByOutputType>[]
          }
          count: {
            args: Prisma.DistrictCountArgs<ExtArgs>
            result: $Utils.Optional<DistrictCountAggregateOutputType> | number
          }
        }
      }
      Province: {
        payload: Prisma.$ProvincePayload<ExtArgs>
        fields: Prisma.ProvinceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProvinceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProvinceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload>
          }
          findFirst: {
            args: Prisma.ProvinceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProvinceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload>
          }
          findMany: {
            args: Prisma.ProvinceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload>[]
          }
          create: {
            args: Prisma.ProvinceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload>
          }
          createMany: {
            args: Prisma.ProvinceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProvinceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload>[]
          }
          delete: {
            args: Prisma.ProvinceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload>
          }
          update: {
            args: Prisma.ProvinceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload>
          }
          deleteMany: {
            args: Prisma.ProvinceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProvinceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProvinceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProvincePayload>
          }
          aggregate: {
            args: Prisma.ProvinceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProvince>
          }
          groupBy: {
            args: Prisma.ProvinceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProvinceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProvinceCountArgs<ExtArgs>
            result: $Utils.Optional<ProvinceCountAggregateOutputType> | number
          }
        }
      }
      Department: {
        payload: Prisma.$DepartmentPayload<ExtArgs>
        fields: Prisma.DepartmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepartmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepartmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findFirst: {
            args: Prisma.DepartmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepartmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findMany: {
            args: Prisma.DepartmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          create: {
            args: Prisma.DepartmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          createMany: {
            args: Prisma.DepartmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DepartmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          delete: {
            args: Prisma.DepartmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          update: {
            args: Prisma.DepartmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          deleteMany: {
            args: Prisma.DepartmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepartmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DepartmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          aggregate: {
            args: Prisma.DepartmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartment>
          }
          groupBy: {
            args: Prisma.DepartmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepartmentCountArgs<ExtArgs>
            result: $Utils.Optional<DepartmentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type FamilyCountOutputType
   */

  export type FamilyCountOutputType = {
    subFamilies: number
  }

  export type FamilyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subFamilies?: boolean | FamilyCountOutputTypeCountSubFamiliesArgs
  }

  // Custom InputTypes
  /**
   * FamilyCountOutputType without action
   */
  export type FamilyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamilyCountOutputType
     */
    select?: FamilyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FamilyCountOutputType without action
   */
  export type FamilyCountOutputTypeCountSubFamiliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubFamilyWhereInput
  }


  /**
   * Count Type SubFamilyCountOutputType
   */

  export type SubFamilyCountOutputType = {
    medications: number
  }

  export type SubFamilyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medications?: boolean | SubFamilyCountOutputTypeCountMedicationsArgs
  }

  // Custom InputTypes
  /**
   * SubFamilyCountOutputType without action
   */
  export type SubFamilyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubFamilyCountOutputType
     */
    select?: SubFamilyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubFamilyCountOutputType without action
   */
  export type SubFamilyCountOutputTypeCountMedicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicationWhereInput
  }


  /**
   * Count Type MedicationCountOutputType
   */

  export type MedicationCountOutputType = {
    products: number
  }

  export type MedicationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | MedicationCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * MedicationCountOutputType without action
   */
  export type MedicationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationCountOutputType
     */
    select?: MedicationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MedicationCountOutputType without action
   */
  export type MedicationCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    price: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    price?: boolean | ProductCountOutputTypeCountPriceArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountPriceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceWhereInput
  }


  /**
   * Count Type PharmaceuticalFormCountOutputType
   */

  export type PharmaceuticalFormCountOutputType = {
    medications: number
  }

  export type PharmaceuticalFormCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medications?: boolean | PharmaceuticalFormCountOutputTypeCountMedicationsArgs
  }

  // Custom InputTypes
  /**
   * PharmaceuticalFormCountOutputType without action
   */
  export type PharmaceuticalFormCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmaceuticalFormCountOutputType
     */
    select?: PharmaceuticalFormCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PharmaceuticalFormCountOutputType without action
   */
  export type PharmaceuticalFormCountOutputTypeCountMedicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicationWhereInput
  }


  /**
   * Count Type EstablishmentCountOutputType
   */

  export type EstablishmentCountOutputType = {
    price: number
  }

  export type EstablishmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    price?: boolean | EstablishmentCountOutputTypeCountPriceArgs
  }

  // Custom InputTypes
  /**
   * EstablishmentCountOutputType without action
   */
  export type EstablishmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstablishmentCountOutputType
     */
    select?: EstablishmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EstablishmentCountOutputType without action
   */
  export type EstablishmentCountOutputTypeCountPriceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceWhereInput
  }


  /**
   * Count Type ManufacturerCountOutputType
   */

  export type ManufacturerCountOutputType = {
    medications: number
  }

  export type ManufacturerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medications?: boolean | ManufacturerCountOutputTypeCountMedicationsArgs
  }

  // Custom InputTypes
  /**
   * ManufacturerCountOutputType without action
   */
  export type ManufacturerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManufacturerCountOutputType
     */
    select?: ManufacturerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ManufacturerCountOutputType without action
   */
  export type ManufacturerCountOutputTypeCountMedicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicationWhereInput
  }


  /**
   * Count Type DistrictCountOutputType
   */

  export type DistrictCountOutputType = {
    establishments: number
  }

  export type DistrictCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    establishments?: boolean | DistrictCountOutputTypeCountEstablishmentsArgs
  }

  // Custom InputTypes
  /**
   * DistrictCountOutputType without action
   */
  export type DistrictCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistrictCountOutputType
     */
    select?: DistrictCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DistrictCountOutputType without action
   */
  export type DistrictCountOutputTypeCountEstablishmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstablishmentWhereInput
  }


  /**
   * Count Type ProvinceCountOutputType
   */

  export type ProvinceCountOutputType = {
    districts: number
  }

  export type ProvinceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    districts?: boolean | ProvinceCountOutputTypeCountDistrictsArgs
  }

  // Custom InputTypes
  /**
   * ProvinceCountOutputType without action
   */
  export type ProvinceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProvinceCountOutputType
     */
    select?: ProvinceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProvinceCountOutputType without action
   */
  export type ProvinceCountOutputTypeCountDistrictsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DistrictWhereInput
  }


  /**
   * Count Type DepartmentCountOutputType
   */

  export type DepartmentCountOutputType = {
    provinces: number
  }

  export type DepartmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provinces?: boolean | DepartmentCountOutputTypeCountProvincesArgs
  }

  // Custom InputTypes
  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentCountOutputType
     */
    select?: DepartmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountProvincesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProvinceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Price
   */

  export type AggregatePrice = {
    _count: PriceCountAggregateOutputType | null
    _avg: PriceAvgAggregateOutputType | null
    _sum: PriceSumAggregateOutputType | null
    _min: PriceMinAggregateOutputType | null
    _max: PriceMaxAggregateOutputType | null
  }

  export type PriceAvgAggregateOutputType = {
    prices: Decimal | null
  }

  export type PriceSumAggregateOutputType = {
    prices: Decimal[]
  }

  export type PriceMinAggregateOutputType = {
    id: string | null
    idEstablishment: string | null
    idProduct: string | null
    updateAt: string | null
  }

  export type PriceMaxAggregateOutputType = {
    id: string | null
    idEstablishment: string | null
    idProduct: string | null
    updateAt: string | null
  }

  export type PriceCountAggregateOutputType = {
    id: number
    idEstablishment: number
    idProduct: number
    prices: number
    updateAt: number
    _all: number
  }


  export type PriceAvgAggregateInputType = {
    prices?: true
  }

  export type PriceSumAggregateInputType = {
    prices?: true
  }

  export type PriceMinAggregateInputType = {
    id?: true
    idEstablishment?: true
    idProduct?: true
    updateAt?: true
  }

  export type PriceMaxAggregateInputType = {
    id?: true
    idEstablishment?: true
    idProduct?: true
    updateAt?: true
  }

  export type PriceCountAggregateInputType = {
    id?: true
    idEstablishment?: true
    idProduct?: true
    prices?: true
    updateAt?: true
    _all?: true
  }

  export type PriceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Price to aggregate.
     */
    where?: PriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prices to fetch.
     */
    orderBy?: PriceOrderByWithRelationInput | PriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Prices
    **/
    _count?: true | PriceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PriceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PriceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PriceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PriceMaxAggregateInputType
  }

  export type GetPriceAggregateType<T extends PriceAggregateArgs> = {
        [P in keyof T & keyof AggregatePrice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrice[P]>
      : GetScalarType<T[P], AggregatePrice[P]>
  }




  export type PriceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceWhereInput
    orderBy?: PriceOrderByWithAggregationInput | PriceOrderByWithAggregationInput[]
    by: PriceScalarFieldEnum[] | PriceScalarFieldEnum
    having?: PriceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PriceCountAggregateInputType | true
    _avg?: PriceAvgAggregateInputType
    _sum?: PriceSumAggregateInputType
    _min?: PriceMinAggregateInputType
    _max?: PriceMaxAggregateInputType
  }

  export type PriceGroupByOutputType = {
    id: string
    idEstablishment: string
    idProduct: string
    prices: Decimal[]
    updateAt: string
    _count: PriceCountAggregateOutputType | null
    _avg: PriceAvgAggregateOutputType | null
    _sum: PriceSumAggregateOutputType | null
    _min: PriceMinAggregateOutputType | null
    _max: PriceMaxAggregateOutputType | null
  }

  type GetPriceGroupByPayload<T extends PriceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PriceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PriceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PriceGroupByOutputType[P]>
            : GetScalarType<T[P], PriceGroupByOutputType[P]>
        }
      >
    >


  export type PriceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idEstablishment?: boolean
    idProduct?: boolean
    prices?: boolean
    updateAt?: boolean
    establishment?: boolean | EstablishmentDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["price"]>

  export type PriceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idEstablishment?: boolean
    idProduct?: boolean
    prices?: boolean
    updateAt?: boolean
    establishment?: boolean | EstablishmentDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["price"]>

  export type PriceSelectScalar = {
    id?: boolean
    idEstablishment?: boolean
    idProduct?: boolean
    prices?: boolean
    updateAt?: boolean
  }

  export type PriceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    establishment?: boolean | EstablishmentDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type PriceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    establishment?: boolean | EstablishmentDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $PricePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Price"
    objects: {
      establishment: Prisma.$EstablishmentPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      idEstablishment: string
      idProduct: string
      prices: Prisma.Decimal[]
      updateAt: string
    }, ExtArgs["result"]["price"]>
    composites: {}
  }

  type PriceGetPayload<S extends boolean | null | undefined | PriceDefaultArgs> = $Result.GetResult<Prisma.$PricePayload, S>

  type PriceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PriceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PriceCountAggregateInputType | true
    }

  export interface PriceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Price'], meta: { name: 'Price' } }
    /**
     * Find zero or one Price that matches the filter.
     * @param {PriceFindUniqueArgs} args - Arguments to find a Price
     * @example
     * // Get one Price
     * const price = await prisma.price.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PriceFindUniqueArgs>(args: SelectSubset<T, PriceFindUniqueArgs<ExtArgs>>): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Price that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PriceFindUniqueOrThrowArgs} args - Arguments to find a Price
     * @example
     * // Get one Price
     * const price = await prisma.price.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PriceFindUniqueOrThrowArgs>(args: SelectSubset<T, PriceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Price that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceFindFirstArgs} args - Arguments to find a Price
     * @example
     * // Get one Price
     * const price = await prisma.price.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PriceFindFirstArgs>(args?: SelectSubset<T, PriceFindFirstArgs<ExtArgs>>): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Price that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceFindFirstOrThrowArgs} args - Arguments to find a Price
     * @example
     * // Get one Price
     * const price = await prisma.price.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PriceFindFirstOrThrowArgs>(args?: SelectSubset<T, PriceFindFirstOrThrowArgs<ExtArgs>>): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Prices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prices
     * const prices = await prisma.price.findMany()
     * 
     * // Get first 10 Prices
     * const prices = await prisma.price.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const priceWithIdOnly = await prisma.price.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PriceFindManyArgs>(args?: SelectSubset<T, PriceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Price.
     * @param {PriceCreateArgs} args - Arguments to create a Price.
     * @example
     * // Create one Price
     * const Price = await prisma.price.create({
     *   data: {
     *     // ... data to create a Price
     *   }
     * })
     * 
     */
    create<T extends PriceCreateArgs>(args: SelectSubset<T, PriceCreateArgs<ExtArgs>>): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Prices.
     * @param {PriceCreateManyArgs} args - Arguments to create many Prices.
     * @example
     * // Create many Prices
     * const price = await prisma.price.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PriceCreateManyArgs>(args?: SelectSubset<T, PriceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prices and returns the data saved in the database.
     * @param {PriceCreateManyAndReturnArgs} args - Arguments to create many Prices.
     * @example
     * // Create many Prices
     * const price = await prisma.price.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prices and only return the `id`
     * const priceWithIdOnly = await prisma.price.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PriceCreateManyAndReturnArgs>(args?: SelectSubset<T, PriceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Price.
     * @param {PriceDeleteArgs} args - Arguments to delete one Price.
     * @example
     * // Delete one Price
     * const Price = await prisma.price.delete({
     *   where: {
     *     // ... filter to delete one Price
     *   }
     * })
     * 
     */
    delete<T extends PriceDeleteArgs>(args: SelectSubset<T, PriceDeleteArgs<ExtArgs>>): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Price.
     * @param {PriceUpdateArgs} args - Arguments to update one Price.
     * @example
     * // Update one Price
     * const price = await prisma.price.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PriceUpdateArgs>(args: SelectSubset<T, PriceUpdateArgs<ExtArgs>>): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Prices.
     * @param {PriceDeleteManyArgs} args - Arguments to filter Prices to delete.
     * @example
     * // Delete a few Prices
     * const { count } = await prisma.price.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PriceDeleteManyArgs>(args?: SelectSubset<T, PriceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prices
     * const price = await prisma.price.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PriceUpdateManyArgs>(args: SelectSubset<T, PriceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Price.
     * @param {PriceUpsertArgs} args - Arguments to update or create a Price.
     * @example
     * // Update or create a Price
     * const price = await prisma.price.upsert({
     *   create: {
     *     // ... data to create a Price
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Price we want to update
     *   }
     * })
     */
    upsert<T extends PriceUpsertArgs>(args: SelectSubset<T, PriceUpsertArgs<ExtArgs>>): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Prices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceCountArgs} args - Arguments to filter Prices to count.
     * @example
     * // Count the number of Prices
     * const count = await prisma.price.count({
     *   where: {
     *     // ... the filter for the Prices we want to count
     *   }
     * })
    **/
    count<T extends PriceCountArgs>(
      args?: Subset<T, PriceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PriceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Price.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PriceAggregateArgs>(args: Subset<T, PriceAggregateArgs>): Prisma.PrismaPromise<GetPriceAggregateType<T>>

    /**
     * Group by Price.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceGroupByArgs} args - Group by arguments.
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
      T extends PriceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PriceGroupByArgs['orderBy'] }
        : { orderBy?: PriceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PriceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPriceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Price model
   */
  readonly fields: PriceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Price.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PriceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    establishment<T extends EstablishmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EstablishmentDefaultArgs<ExtArgs>>): Prisma__EstablishmentClient<$Result.GetResult<Prisma.$EstablishmentPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Price model
   */ 
  interface PriceFieldRefs {
    readonly id: FieldRef<"Price", 'String'>
    readonly idEstablishment: FieldRef<"Price", 'String'>
    readonly idProduct: FieldRef<"Price", 'String'>
    readonly prices: FieldRef<"Price", 'Decimal[]'>
    readonly updateAt: FieldRef<"Price", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Price findUnique
   */
  export type PriceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * Filter, which Price to fetch.
     */
    where: PriceWhereUniqueInput
  }

  /**
   * Price findUniqueOrThrow
   */
  export type PriceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * Filter, which Price to fetch.
     */
    where: PriceWhereUniqueInput
  }

  /**
   * Price findFirst
   */
  export type PriceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * Filter, which Price to fetch.
     */
    where?: PriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prices to fetch.
     */
    orderBy?: PriceOrderByWithRelationInput | PriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prices.
     */
    cursor?: PriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prices.
     */
    distinct?: PriceScalarFieldEnum | PriceScalarFieldEnum[]
  }

  /**
   * Price findFirstOrThrow
   */
  export type PriceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * Filter, which Price to fetch.
     */
    where?: PriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prices to fetch.
     */
    orderBy?: PriceOrderByWithRelationInput | PriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prices.
     */
    cursor?: PriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prices.
     */
    distinct?: PriceScalarFieldEnum | PriceScalarFieldEnum[]
  }

  /**
   * Price findMany
   */
  export type PriceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * Filter, which Prices to fetch.
     */
    where?: PriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prices to fetch.
     */
    orderBy?: PriceOrderByWithRelationInput | PriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Prices.
     */
    cursor?: PriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prices.
     */
    skip?: number
    distinct?: PriceScalarFieldEnum | PriceScalarFieldEnum[]
  }

  /**
   * Price create
   */
  export type PriceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * The data needed to create a Price.
     */
    data: XOR<PriceCreateInput, PriceUncheckedCreateInput>
  }

  /**
   * Price createMany
   */
  export type PriceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Prices.
     */
    data: PriceCreateManyInput | PriceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Price createManyAndReturn
   */
  export type PriceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Prices.
     */
    data: PriceCreateManyInput | PriceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Price update
   */
  export type PriceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * The data needed to update a Price.
     */
    data: XOR<PriceUpdateInput, PriceUncheckedUpdateInput>
    /**
     * Choose, which Price to update.
     */
    where: PriceWhereUniqueInput
  }

  /**
   * Price updateMany
   */
  export type PriceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Prices.
     */
    data: XOR<PriceUpdateManyMutationInput, PriceUncheckedUpdateManyInput>
    /**
     * Filter which Prices to update
     */
    where?: PriceWhereInput
  }

  /**
   * Price upsert
   */
  export type PriceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * The filter to search for the Price to update in case it exists.
     */
    where: PriceWhereUniqueInput
    /**
     * In case the Price found by the `where` argument doesn't exist, create a new Price with this data.
     */
    create: XOR<PriceCreateInput, PriceUncheckedCreateInput>
    /**
     * In case the Price was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PriceUpdateInput, PriceUncheckedUpdateInput>
  }

  /**
   * Price delete
   */
  export type PriceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * Filter which Price to delete.
     */
    where: PriceWhereUniqueInput
  }

  /**
   * Price deleteMany
   */
  export type PriceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prices to delete
     */
    where?: PriceWhereInput
  }

  /**
   * Price without action
   */
  export type PriceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
  }


  /**
   * Model Family
   */

  export type AggregateFamily = {
    _count: FamilyCountAggregateOutputType | null
    _min: FamilyMinAggregateOutputType | null
    _max: FamilyMaxAggregateOutputType | null
  }

  export type FamilyMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type FamilyMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type FamilyCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type FamilyMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type FamilyMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type FamilyCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type FamilyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Family to aggregate.
     */
    where?: FamilyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Families to fetch.
     */
    orderBy?: FamilyOrderByWithRelationInput | FamilyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FamilyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Families from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Families.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Families
    **/
    _count?: true | FamilyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FamilyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FamilyMaxAggregateInputType
  }

  export type GetFamilyAggregateType<T extends FamilyAggregateArgs> = {
        [P in keyof T & keyof AggregateFamily]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFamily[P]>
      : GetScalarType<T[P], AggregateFamily[P]>
  }




  export type FamilyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FamilyWhereInput
    orderBy?: FamilyOrderByWithAggregationInput | FamilyOrderByWithAggregationInput[]
    by: FamilyScalarFieldEnum[] | FamilyScalarFieldEnum
    having?: FamilyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FamilyCountAggregateInputType | true
    _min?: FamilyMinAggregateInputType
    _max?: FamilyMaxAggregateInputType
  }

  export type FamilyGroupByOutputType = {
    id: string
    name: string
    _count: FamilyCountAggregateOutputType | null
    _min: FamilyMinAggregateOutputType | null
    _max: FamilyMaxAggregateOutputType | null
  }

  type GetFamilyGroupByPayload<T extends FamilyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FamilyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FamilyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FamilyGroupByOutputType[P]>
            : GetScalarType<T[P], FamilyGroupByOutputType[P]>
        }
      >
    >


  export type FamilySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    subFamilies?: boolean | Family$subFamiliesArgs<ExtArgs>
    _count?: boolean | FamilyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["family"]>

  export type FamilySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["family"]>

  export type FamilySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type FamilyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subFamilies?: boolean | Family$subFamiliesArgs<ExtArgs>
    _count?: boolean | FamilyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FamilyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FamilyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Family"
    objects: {
      subFamilies: Prisma.$SubFamilyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["family"]>
    composites: {}
  }

  type FamilyGetPayload<S extends boolean | null | undefined | FamilyDefaultArgs> = $Result.GetResult<Prisma.$FamilyPayload, S>

  type FamilyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FamilyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FamilyCountAggregateInputType | true
    }

  export interface FamilyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Family'], meta: { name: 'Family' } }
    /**
     * Find zero or one Family that matches the filter.
     * @param {FamilyFindUniqueArgs} args - Arguments to find a Family
     * @example
     * // Get one Family
     * const family = await prisma.family.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FamilyFindUniqueArgs>(args: SelectSubset<T, FamilyFindUniqueArgs<ExtArgs>>): Prisma__FamilyClient<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Family that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FamilyFindUniqueOrThrowArgs} args - Arguments to find a Family
     * @example
     * // Get one Family
     * const family = await prisma.family.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FamilyFindUniqueOrThrowArgs>(args: SelectSubset<T, FamilyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FamilyClient<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Family that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyFindFirstArgs} args - Arguments to find a Family
     * @example
     * // Get one Family
     * const family = await prisma.family.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FamilyFindFirstArgs>(args?: SelectSubset<T, FamilyFindFirstArgs<ExtArgs>>): Prisma__FamilyClient<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Family that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyFindFirstOrThrowArgs} args - Arguments to find a Family
     * @example
     * // Get one Family
     * const family = await prisma.family.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FamilyFindFirstOrThrowArgs>(args?: SelectSubset<T, FamilyFindFirstOrThrowArgs<ExtArgs>>): Prisma__FamilyClient<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Families that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Families
     * const families = await prisma.family.findMany()
     * 
     * // Get first 10 Families
     * const families = await prisma.family.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const familyWithIdOnly = await prisma.family.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FamilyFindManyArgs>(args?: SelectSubset<T, FamilyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Family.
     * @param {FamilyCreateArgs} args - Arguments to create a Family.
     * @example
     * // Create one Family
     * const Family = await prisma.family.create({
     *   data: {
     *     // ... data to create a Family
     *   }
     * })
     * 
     */
    create<T extends FamilyCreateArgs>(args: SelectSubset<T, FamilyCreateArgs<ExtArgs>>): Prisma__FamilyClient<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Families.
     * @param {FamilyCreateManyArgs} args - Arguments to create many Families.
     * @example
     * // Create many Families
     * const family = await prisma.family.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FamilyCreateManyArgs>(args?: SelectSubset<T, FamilyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Families and returns the data saved in the database.
     * @param {FamilyCreateManyAndReturnArgs} args - Arguments to create many Families.
     * @example
     * // Create many Families
     * const family = await prisma.family.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Families and only return the `id`
     * const familyWithIdOnly = await prisma.family.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FamilyCreateManyAndReturnArgs>(args?: SelectSubset<T, FamilyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Family.
     * @param {FamilyDeleteArgs} args - Arguments to delete one Family.
     * @example
     * // Delete one Family
     * const Family = await prisma.family.delete({
     *   where: {
     *     // ... filter to delete one Family
     *   }
     * })
     * 
     */
    delete<T extends FamilyDeleteArgs>(args: SelectSubset<T, FamilyDeleteArgs<ExtArgs>>): Prisma__FamilyClient<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Family.
     * @param {FamilyUpdateArgs} args - Arguments to update one Family.
     * @example
     * // Update one Family
     * const family = await prisma.family.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FamilyUpdateArgs>(args: SelectSubset<T, FamilyUpdateArgs<ExtArgs>>): Prisma__FamilyClient<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Families.
     * @param {FamilyDeleteManyArgs} args - Arguments to filter Families to delete.
     * @example
     * // Delete a few Families
     * const { count } = await prisma.family.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FamilyDeleteManyArgs>(args?: SelectSubset<T, FamilyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Families.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Families
     * const family = await prisma.family.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FamilyUpdateManyArgs>(args: SelectSubset<T, FamilyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Family.
     * @param {FamilyUpsertArgs} args - Arguments to update or create a Family.
     * @example
     * // Update or create a Family
     * const family = await prisma.family.upsert({
     *   create: {
     *     // ... data to create a Family
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Family we want to update
     *   }
     * })
     */
    upsert<T extends FamilyUpsertArgs>(args: SelectSubset<T, FamilyUpsertArgs<ExtArgs>>): Prisma__FamilyClient<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Families.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyCountArgs} args - Arguments to filter Families to count.
     * @example
     * // Count the number of Families
     * const count = await prisma.family.count({
     *   where: {
     *     // ... the filter for the Families we want to count
     *   }
     * })
    **/
    count<T extends FamilyCountArgs>(
      args?: Subset<T, FamilyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FamilyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Family.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FamilyAggregateArgs>(args: Subset<T, FamilyAggregateArgs>): Prisma.PrismaPromise<GetFamilyAggregateType<T>>

    /**
     * Group by Family.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamilyGroupByArgs} args - Group by arguments.
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
      T extends FamilyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FamilyGroupByArgs['orderBy'] }
        : { orderBy?: FamilyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FamilyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFamilyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Family model
   */
  readonly fields: FamilyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Family.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FamilyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subFamilies<T extends Family$subFamiliesArgs<ExtArgs> = {}>(args?: Subset<T, Family$subFamiliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubFamilyPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Family model
   */ 
  interface FamilyFieldRefs {
    readonly id: FieldRef<"Family", 'String'>
    readonly name: FieldRef<"Family", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Family findUnique
   */
  export type FamilyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyInclude<ExtArgs> | null
    /**
     * Filter, which Family to fetch.
     */
    where: FamilyWhereUniqueInput
  }

  /**
   * Family findUniqueOrThrow
   */
  export type FamilyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyInclude<ExtArgs> | null
    /**
     * Filter, which Family to fetch.
     */
    where: FamilyWhereUniqueInput
  }

  /**
   * Family findFirst
   */
  export type FamilyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyInclude<ExtArgs> | null
    /**
     * Filter, which Family to fetch.
     */
    where?: FamilyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Families to fetch.
     */
    orderBy?: FamilyOrderByWithRelationInput | FamilyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Families.
     */
    cursor?: FamilyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Families from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Families.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Families.
     */
    distinct?: FamilyScalarFieldEnum | FamilyScalarFieldEnum[]
  }

  /**
   * Family findFirstOrThrow
   */
  export type FamilyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyInclude<ExtArgs> | null
    /**
     * Filter, which Family to fetch.
     */
    where?: FamilyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Families to fetch.
     */
    orderBy?: FamilyOrderByWithRelationInput | FamilyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Families.
     */
    cursor?: FamilyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Families from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Families.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Families.
     */
    distinct?: FamilyScalarFieldEnum | FamilyScalarFieldEnum[]
  }

  /**
   * Family findMany
   */
  export type FamilyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyInclude<ExtArgs> | null
    /**
     * Filter, which Families to fetch.
     */
    where?: FamilyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Families to fetch.
     */
    orderBy?: FamilyOrderByWithRelationInput | FamilyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Families.
     */
    cursor?: FamilyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Families from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Families.
     */
    skip?: number
    distinct?: FamilyScalarFieldEnum | FamilyScalarFieldEnum[]
  }

  /**
   * Family create
   */
  export type FamilyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyInclude<ExtArgs> | null
    /**
     * The data needed to create a Family.
     */
    data: XOR<FamilyCreateInput, FamilyUncheckedCreateInput>
  }

  /**
   * Family createMany
   */
  export type FamilyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Families.
     */
    data: FamilyCreateManyInput | FamilyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Family createManyAndReturn
   */
  export type FamilyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Families.
     */
    data: FamilyCreateManyInput | FamilyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Family update
   */
  export type FamilyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyInclude<ExtArgs> | null
    /**
     * The data needed to update a Family.
     */
    data: XOR<FamilyUpdateInput, FamilyUncheckedUpdateInput>
    /**
     * Choose, which Family to update.
     */
    where: FamilyWhereUniqueInput
  }

  /**
   * Family updateMany
   */
  export type FamilyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Families.
     */
    data: XOR<FamilyUpdateManyMutationInput, FamilyUncheckedUpdateManyInput>
    /**
     * Filter which Families to update
     */
    where?: FamilyWhereInput
  }

  /**
   * Family upsert
   */
  export type FamilyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyInclude<ExtArgs> | null
    /**
     * The filter to search for the Family to update in case it exists.
     */
    where: FamilyWhereUniqueInput
    /**
     * In case the Family found by the `where` argument doesn't exist, create a new Family with this data.
     */
    create: XOR<FamilyCreateInput, FamilyUncheckedCreateInput>
    /**
     * In case the Family was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FamilyUpdateInput, FamilyUncheckedUpdateInput>
  }

  /**
   * Family delete
   */
  export type FamilyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyInclude<ExtArgs> | null
    /**
     * Filter which Family to delete.
     */
    where: FamilyWhereUniqueInput
  }

  /**
   * Family deleteMany
   */
  export type FamilyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Families to delete
     */
    where?: FamilyWhereInput
  }

  /**
   * Family.subFamilies
   */
  export type Family$subFamiliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubFamily
     */
    select?: SubFamilySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubFamilyInclude<ExtArgs> | null
    where?: SubFamilyWhereInput
    orderBy?: SubFamilyOrderByWithRelationInput | SubFamilyOrderByWithRelationInput[]
    cursor?: SubFamilyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubFamilyScalarFieldEnum | SubFamilyScalarFieldEnum[]
  }

  /**
   * Family without action
   */
  export type FamilyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Family
     */
    select?: FamilySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FamilyInclude<ExtArgs> | null
  }


  /**
   * Model SubFamily
   */

  export type AggregateSubFamily = {
    _count: SubFamilyCountAggregateOutputType | null
    _min: SubFamilyMinAggregateOutputType | null
    _max: SubFamilyMaxAggregateOutputType | null
  }

  export type SubFamilyMinAggregateOutputType = {
    id: string | null
    group: string | null
    idFamily: string | null
    name: string | null
    nameSuggestion: string | null
  }

  export type SubFamilyMaxAggregateOutputType = {
    id: string | null
    group: string | null
    idFamily: string | null
    name: string | null
    nameSuggestion: string | null
  }

  export type SubFamilyCountAggregateOutputType = {
    id: number
    group: number
    idFamily: number
    name: number
    nameSuggestion: number
    _all: number
  }


  export type SubFamilyMinAggregateInputType = {
    id?: true
    group?: true
    idFamily?: true
    name?: true
    nameSuggestion?: true
  }

  export type SubFamilyMaxAggregateInputType = {
    id?: true
    group?: true
    idFamily?: true
    name?: true
    nameSuggestion?: true
  }

  export type SubFamilyCountAggregateInputType = {
    id?: true
    group?: true
    idFamily?: true
    name?: true
    nameSuggestion?: true
    _all?: true
  }

  export type SubFamilyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubFamily to aggregate.
     */
    where?: SubFamilyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubFamilies to fetch.
     */
    orderBy?: SubFamilyOrderByWithRelationInput | SubFamilyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubFamilyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubFamilies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubFamilies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubFamilies
    **/
    _count?: true | SubFamilyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubFamilyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubFamilyMaxAggregateInputType
  }

  export type GetSubFamilyAggregateType<T extends SubFamilyAggregateArgs> = {
        [P in keyof T & keyof AggregateSubFamily]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubFamily[P]>
      : GetScalarType<T[P], AggregateSubFamily[P]>
  }




  export type SubFamilyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubFamilyWhereInput
    orderBy?: SubFamilyOrderByWithAggregationInput | SubFamilyOrderByWithAggregationInput[]
    by: SubFamilyScalarFieldEnum[] | SubFamilyScalarFieldEnum
    having?: SubFamilyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubFamilyCountAggregateInputType | true
    _min?: SubFamilyMinAggregateInputType
    _max?: SubFamilyMaxAggregateInputType
  }

  export type SubFamilyGroupByOutputType = {
    id: string
    group: string
    idFamily: string
    name: string
    nameSuggestion: string
    _count: SubFamilyCountAggregateOutputType | null
    _min: SubFamilyMinAggregateOutputType | null
    _max: SubFamilyMaxAggregateOutputType | null
  }

  type GetSubFamilyGroupByPayload<T extends SubFamilyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubFamilyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubFamilyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubFamilyGroupByOutputType[P]>
            : GetScalarType<T[P], SubFamilyGroupByOutputType[P]>
        }
      >
    >


  export type SubFamilySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    group?: boolean
    idFamily?: boolean
    name?: boolean
    nameSuggestion?: boolean
    medications?: boolean | SubFamily$medicationsArgs<ExtArgs>
    family?: boolean | FamilyDefaultArgs<ExtArgs>
    _count?: boolean | SubFamilyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subFamily"]>

  export type SubFamilySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    group?: boolean
    idFamily?: boolean
    name?: boolean
    nameSuggestion?: boolean
    family?: boolean | FamilyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subFamily"]>

  export type SubFamilySelectScalar = {
    id?: boolean
    group?: boolean
    idFamily?: boolean
    name?: boolean
    nameSuggestion?: boolean
  }

  export type SubFamilyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medications?: boolean | SubFamily$medicationsArgs<ExtArgs>
    family?: boolean | FamilyDefaultArgs<ExtArgs>
    _count?: boolean | SubFamilyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubFamilyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    family?: boolean | FamilyDefaultArgs<ExtArgs>
  }

  export type $SubFamilyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubFamily"
    objects: {
      medications: Prisma.$MedicationPayload<ExtArgs>[]
      family: Prisma.$FamilyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      group: string
      idFamily: string
      name: string
      nameSuggestion: string
    }, ExtArgs["result"]["subFamily"]>
    composites: {}
  }

  type SubFamilyGetPayload<S extends boolean | null | undefined | SubFamilyDefaultArgs> = $Result.GetResult<Prisma.$SubFamilyPayload, S>

  type SubFamilyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SubFamilyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SubFamilyCountAggregateInputType | true
    }

  export interface SubFamilyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubFamily'], meta: { name: 'SubFamily' } }
    /**
     * Find zero or one SubFamily that matches the filter.
     * @param {SubFamilyFindUniqueArgs} args - Arguments to find a SubFamily
     * @example
     * // Get one SubFamily
     * const subFamily = await prisma.subFamily.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubFamilyFindUniqueArgs>(args: SelectSubset<T, SubFamilyFindUniqueArgs<ExtArgs>>): Prisma__SubFamilyClient<$Result.GetResult<Prisma.$SubFamilyPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SubFamily that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SubFamilyFindUniqueOrThrowArgs} args - Arguments to find a SubFamily
     * @example
     * // Get one SubFamily
     * const subFamily = await prisma.subFamily.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubFamilyFindUniqueOrThrowArgs>(args: SelectSubset<T, SubFamilyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubFamilyClient<$Result.GetResult<Prisma.$SubFamilyPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SubFamily that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubFamilyFindFirstArgs} args - Arguments to find a SubFamily
     * @example
     * // Get one SubFamily
     * const subFamily = await prisma.subFamily.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubFamilyFindFirstArgs>(args?: SelectSubset<T, SubFamilyFindFirstArgs<ExtArgs>>): Prisma__SubFamilyClient<$Result.GetResult<Prisma.$SubFamilyPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SubFamily that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubFamilyFindFirstOrThrowArgs} args - Arguments to find a SubFamily
     * @example
     * // Get one SubFamily
     * const subFamily = await prisma.subFamily.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubFamilyFindFirstOrThrowArgs>(args?: SelectSubset<T, SubFamilyFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubFamilyClient<$Result.GetResult<Prisma.$SubFamilyPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SubFamilies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubFamilyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubFamilies
     * const subFamilies = await prisma.subFamily.findMany()
     * 
     * // Get first 10 SubFamilies
     * const subFamilies = await prisma.subFamily.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subFamilyWithIdOnly = await prisma.subFamily.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubFamilyFindManyArgs>(args?: SelectSubset<T, SubFamilyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubFamilyPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SubFamily.
     * @param {SubFamilyCreateArgs} args - Arguments to create a SubFamily.
     * @example
     * // Create one SubFamily
     * const SubFamily = await prisma.subFamily.create({
     *   data: {
     *     // ... data to create a SubFamily
     *   }
     * })
     * 
     */
    create<T extends SubFamilyCreateArgs>(args: SelectSubset<T, SubFamilyCreateArgs<ExtArgs>>): Prisma__SubFamilyClient<$Result.GetResult<Prisma.$SubFamilyPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SubFamilies.
     * @param {SubFamilyCreateManyArgs} args - Arguments to create many SubFamilies.
     * @example
     * // Create many SubFamilies
     * const subFamily = await prisma.subFamily.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubFamilyCreateManyArgs>(args?: SelectSubset<T, SubFamilyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubFamilies and returns the data saved in the database.
     * @param {SubFamilyCreateManyAndReturnArgs} args - Arguments to create many SubFamilies.
     * @example
     * // Create many SubFamilies
     * const subFamily = await prisma.subFamily.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubFamilies and only return the `id`
     * const subFamilyWithIdOnly = await prisma.subFamily.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubFamilyCreateManyAndReturnArgs>(args?: SelectSubset<T, SubFamilyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubFamilyPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SubFamily.
     * @param {SubFamilyDeleteArgs} args - Arguments to delete one SubFamily.
     * @example
     * // Delete one SubFamily
     * const SubFamily = await prisma.subFamily.delete({
     *   where: {
     *     // ... filter to delete one SubFamily
     *   }
     * })
     * 
     */
    delete<T extends SubFamilyDeleteArgs>(args: SelectSubset<T, SubFamilyDeleteArgs<ExtArgs>>): Prisma__SubFamilyClient<$Result.GetResult<Prisma.$SubFamilyPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SubFamily.
     * @param {SubFamilyUpdateArgs} args - Arguments to update one SubFamily.
     * @example
     * // Update one SubFamily
     * const subFamily = await prisma.subFamily.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubFamilyUpdateArgs>(args: SelectSubset<T, SubFamilyUpdateArgs<ExtArgs>>): Prisma__SubFamilyClient<$Result.GetResult<Prisma.$SubFamilyPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SubFamilies.
     * @param {SubFamilyDeleteManyArgs} args - Arguments to filter SubFamilies to delete.
     * @example
     * // Delete a few SubFamilies
     * const { count } = await prisma.subFamily.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubFamilyDeleteManyArgs>(args?: SelectSubset<T, SubFamilyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubFamilies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubFamilyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubFamilies
     * const subFamily = await prisma.subFamily.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubFamilyUpdateManyArgs>(args: SelectSubset<T, SubFamilyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SubFamily.
     * @param {SubFamilyUpsertArgs} args - Arguments to update or create a SubFamily.
     * @example
     * // Update or create a SubFamily
     * const subFamily = await prisma.subFamily.upsert({
     *   create: {
     *     // ... data to create a SubFamily
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubFamily we want to update
     *   }
     * })
     */
    upsert<T extends SubFamilyUpsertArgs>(args: SelectSubset<T, SubFamilyUpsertArgs<ExtArgs>>): Prisma__SubFamilyClient<$Result.GetResult<Prisma.$SubFamilyPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SubFamilies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubFamilyCountArgs} args - Arguments to filter SubFamilies to count.
     * @example
     * // Count the number of SubFamilies
     * const count = await prisma.subFamily.count({
     *   where: {
     *     // ... the filter for the SubFamilies we want to count
     *   }
     * })
    **/
    count<T extends SubFamilyCountArgs>(
      args?: Subset<T, SubFamilyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubFamilyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubFamily.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubFamilyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubFamilyAggregateArgs>(args: Subset<T, SubFamilyAggregateArgs>): Prisma.PrismaPromise<GetSubFamilyAggregateType<T>>

    /**
     * Group by SubFamily.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubFamilyGroupByArgs} args - Group by arguments.
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
      T extends SubFamilyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubFamilyGroupByArgs['orderBy'] }
        : { orderBy?: SubFamilyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubFamilyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubFamilyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubFamily model
   */
  readonly fields: SubFamilyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubFamily.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubFamilyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medications<T extends SubFamily$medicationsArgs<ExtArgs> = {}>(args?: Subset<T, SubFamily$medicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findMany"> | Null>
    family<T extends FamilyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FamilyDefaultArgs<ExtArgs>>): Prisma__FamilyClient<$Result.GetResult<Prisma.$FamilyPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the SubFamily model
   */ 
  interface SubFamilyFieldRefs {
    readonly id: FieldRef<"SubFamily", 'String'>
    readonly group: FieldRef<"SubFamily", 'String'>
    readonly idFamily: FieldRef<"SubFamily", 'String'>
    readonly name: FieldRef<"SubFamily", 'String'>
    readonly nameSuggestion: FieldRef<"SubFamily", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SubFamily findUnique
   */
  export type SubFamilyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubFamily
     */
    select?: SubFamilySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubFamilyInclude<ExtArgs> | null
    /**
     * Filter, which SubFamily to fetch.
     */
    where: SubFamilyWhereUniqueInput
  }

  /**
   * SubFamily findUniqueOrThrow
   */
  export type SubFamilyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubFamily
     */
    select?: SubFamilySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubFamilyInclude<ExtArgs> | null
    /**
     * Filter, which SubFamily to fetch.
     */
    where: SubFamilyWhereUniqueInput
  }

  /**
   * SubFamily findFirst
   */
  export type SubFamilyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubFamily
     */
    select?: SubFamilySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubFamilyInclude<ExtArgs> | null
    /**
     * Filter, which SubFamily to fetch.
     */
    where?: SubFamilyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubFamilies to fetch.
     */
    orderBy?: SubFamilyOrderByWithRelationInput | SubFamilyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubFamilies.
     */
    cursor?: SubFamilyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubFamilies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubFamilies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubFamilies.
     */
    distinct?: SubFamilyScalarFieldEnum | SubFamilyScalarFieldEnum[]
  }

  /**
   * SubFamily findFirstOrThrow
   */
  export type SubFamilyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubFamily
     */
    select?: SubFamilySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubFamilyInclude<ExtArgs> | null
    /**
     * Filter, which SubFamily to fetch.
     */
    where?: SubFamilyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubFamilies to fetch.
     */
    orderBy?: SubFamilyOrderByWithRelationInput | SubFamilyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubFamilies.
     */
    cursor?: SubFamilyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubFamilies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubFamilies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubFamilies.
     */
    distinct?: SubFamilyScalarFieldEnum | SubFamilyScalarFieldEnum[]
  }

  /**
   * SubFamily findMany
   */
  export type SubFamilyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubFamily
     */
    select?: SubFamilySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubFamilyInclude<ExtArgs> | null
    /**
     * Filter, which SubFamilies to fetch.
     */
    where?: SubFamilyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubFamilies to fetch.
     */
    orderBy?: SubFamilyOrderByWithRelationInput | SubFamilyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubFamilies.
     */
    cursor?: SubFamilyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubFamilies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubFamilies.
     */
    skip?: number
    distinct?: SubFamilyScalarFieldEnum | SubFamilyScalarFieldEnum[]
  }

  /**
   * SubFamily create
   */
  export type SubFamilyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubFamily
     */
    select?: SubFamilySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubFamilyInclude<ExtArgs> | null
    /**
     * The data needed to create a SubFamily.
     */
    data: XOR<SubFamilyCreateInput, SubFamilyUncheckedCreateInput>
  }

  /**
   * SubFamily createMany
   */
  export type SubFamilyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubFamilies.
     */
    data: SubFamilyCreateManyInput | SubFamilyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubFamily createManyAndReturn
   */
  export type SubFamilyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubFamily
     */
    select?: SubFamilySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SubFamilies.
     */
    data: SubFamilyCreateManyInput | SubFamilyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubFamilyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubFamily update
   */
  export type SubFamilyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubFamily
     */
    select?: SubFamilySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubFamilyInclude<ExtArgs> | null
    /**
     * The data needed to update a SubFamily.
     */
    data: XOR<SubFamilyUpdateInput, SubFamilyUncheckedUpdateInput>
    /**
     * Choose, which SubFamily to update.
     */
    where: SubFamilyWhereUniqueInput
  }

  /**
   * SubFamily updateMany
   */
  export type SubFamilyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubFamilies.
     */
    data: XOR<SubFamilyUpdateManyMutationInput, SubFamilyUncheckedUpdateManyInput>
    /**
     * Filter which SubFamilies to update
     */
    where?: SubFamilyWhereInput
  }

  /**
   * SubFamily upsert
   */
  export type SubFamilyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubFamily
     */
    select?: SubFamilySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubFamilyInclude<ExtArgs> | null
    /**
     * The filter to search for the SubFamily to update in case it exists.
     */
    where: SubFamilyWhereUniqueInput
    /**
     * In case the SubFamily found by the `where` argument doesn't exist, create a new SubFamily with this data.
     */
    create: XOR<SubFamilyCreateInput, SubFamilyUncheckedCreateInput>
    /**
     * In case the SubFamily was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubFamilyUpdateInput, SubFamilyUncheckedUpdateInput>
  }

  /**
   * SubFamily delete
   */
  export type SubFamilyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubFamily
     */
    select?: SubFamilySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubFamilyInclude<ExtArgs> | null
    /**
     * Filter which SubFamily to delete.
     */
    where: SubFamilyWhereUniqueInput
  }

  /**
   * SubFamily deleteMany
   */
  export type SubFamilyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubFamilies to delete
     */
    where?: SubFamilyWhereInput
  }

  /**
   * SubFamily.medications
   */
  export type SubFamily$medicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    where?: MedicationWhereInput
    orderBy?: MedicationOrderByWithRelationInput | MedicationOrderByWithRelationInput[]
    cursor?: MedicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicationScalarFieldEnum | MedicationScalarFieldEnum[]
  }

  /**
   * SubFamily without action
   */
  export type SubFamilyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubFamily
     */
    select?: SubFamilySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubFamilyInclude<ExtArgs> | null
  }


  /**
   * Model Medication
   */

  export type AggregateMedication = {
    _count: MedicationCountAggregateOutputType | null
    _avg: MedicationAvgAggregateOutputType | null
    _sum: MedicationSumAggregateOutputType | null
    _min: MedicationMinAggregateOutputType | null
    _max: MedicationMaxAggregateOutputType | null
  }

  export type MedicationAvgAggregateOutputType = {
    fractions: number | null
  }

  export type MedicationSumAggregateOutputType = {
    fractions: number | null
  }

  export type MedicationMinAggregateOutputType = {
    id: string | null
    concentration: string | null
    fractions: number | null
    idPharmaceuticalForm: string | null
    idManufacturer: string | null
    idSubFamily: string | null
    name: string | null
    totalActivePrinciple: string | null
  }

  export type MedicationMaxAggregateOutputType = {
    id: string | null
    concentration: string | null
    fractions: number | null
    idPharmaceuticalForm: string | null
    idManufacturer: string | null
    idSubFamily: string | null
    name: string | null
    totalActivePrinciple: string | null
  }

  export type MedicationCountAggregateOutputType = {
    id: number
    concentration: number
    fractions: number
    idPharmaceuticalForm: number
    idManufacturer: number
    idSubFamily: number
    name: number
    totalActivePrinciple: number
    _all: number
  }


  export type MedicationAvgAggregateInputType = {
    fractions?: true
  }

  export type MedicationSumAggregateInputType = {
    fractions?: true
  }

  export type MedicationMinAggregateInputType = {
    id?: true
    concentration?: true
    fractions?: true
    idPharmaceuticalForm?: true
    idManufacturer?: true
    idSubFamily?: true
    name?: true
    totalActivePrinciple?: true
  }

  export type MedicationMaxAggregateInputType = {
    id?: true
    concentration?: true
    fractions?: true
    idPharmaceuticalForm?: true
    idManufacturer?: true
    idSubFamily?: true
    name?: true
    totalActivePrinciple?: true
  }

  export type MedicationCountAggregateInputType = {
    id?: true
    concentration?: true
    fractions?: true
    idPharmaceuticalForm?: true
    idManufacturer?: true
    idSubFamily?: true
    name?: true
    totalActivePrinciple?: true
    _all?: true
  }

  export type MedicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medication to aggregate.
     */
    where?: MedicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medications to fetch.
     */
    orderBy?: MedicationOrderByWithRelationInput | MedicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Medications
    **/
    _count?: true | MedicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MedicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MedicationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicationMaxAggregateInputType
  }

  export type GetMedicationAggregateType<T extends MedicationAggregateArgs> = {
        [P in keyof T & keyof AggregateMedication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedication[P]>
      : GetScalarType<T[P], AggregateMedication[P]>
  }




  export type MedicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicationWhereInput
    orderBy?: MedicationOrderByWithAggregationInput | MedicationOrderByWithAggregationInput[]
    by: MedicationScalarFieldEnum[] | MedicationScalarFieldEnum
    having?: MedicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicationCountAggregateInputType | true
    _avg?: MedicationAvgAggregateInputType
    _sum?: MedicationSumAggregateInputType
    _min?: MedicationMinAggregateInputType
    _max?: MedicationMaxAggregateInputType
  }

  export type MedicationGroupByOutputType = {
    id: string
    concentration: string
    fractions: number
    idPharmaceuticalForm: string
    idManufacturer: string
    idSubFamily: string
    name: string
    totalActivePrinciple: string
    _count: MedicationCountAggregateOutputType | null
    _avg: MedicationAvgAggregateOutputType | null
    _sum: MedicationSumAggregateOutputType | null
    _min: MedicationMinAggregateOutputType | null
    _max: MedicationMaxAggregateOutputType | null
  }

  type GetMedicationGroupByPayload<T extends MedicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicationGroupByOutputType[P]>
            : GetScalarType<T[P], MedicationGroupByOutputType[P]>
        }
      >
    >


  export type MedicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    concentration?: boolean
    fractions?: boolean
    idPharmaceuticalForm?: boolean
    idManufacturer?: boolean
    idSubFamily?: boolean
    name?: boolean
    totalActivePrinciple?: boolean
    products?: boolean | Medication$productsArgs<ExtArgs>
    pharmaceuticalForm?: boolean | PharmaceuticalFormDefaultArgs<ExtArgs>
    manufacturer?: boolean | ManufacturerDefaultArgs<ExtArgs>
    subFamily?: boolean | SubFamilyDefaultArgs<ExtArgs>
    _count?: boolean | MedicationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medication"]>

  export type MedicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    concentration?: boolean
    fractions?: boolean
    idPharmaceuticalForm?: boolean
    idManufacturer?: boolean
    idSubFamily?: boolean
    name?: boolean
    totalActivePrinciple?: boolean
    pharmaceuticalForm?: boolean | PharmaceuticalFormDefaultArgs<ExtArgs>
    manufacturer?: boolean | ManufacturerDefaultArgs<ExtArgs>
    subFamily?: boolean | SubFamilyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medication"]>

  export type MedicationSelectScalar = {
    id?: boolean
    concentration?: boolean
    fractions?: boolean
    idPharmaceuticalForm?: boolean
    idManufacturer?: boolean
    idSubFamily?: boolean
    name?: boolean
    totalActivePrinciple?: boolean
  }

  export type MedicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Medication$productsArgs<ExtArgs>
    pharmaceuticalForm?: boolean | PharmaceuticalFormDefaultArgs<ExtArgs>
    manufacturer?: boolean | ManufacturerDefaultArgs<ExtArgs>
    subFamily?: boolean | SubFamilyDefaultArgs<ExtArgs>
    _count?: boolean | MedicationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MedicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pharmaceuticalForm?: boolean | PharmaceuticalFormDefaultArgs<ExtArgs>
    manufacturer?: boolean | ManufacturerDefaultArgs<ExtArgs>
    subFamily?: boolean | SubFamilyDefaultArgs<ExtArgs>
  }

  export type $MedicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Medication"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>[]
      pharmaceuticalForm: Prisma.$PharmaceuticalFormPayload<ExtArgs>
      manufacturer: Prisma.$ManufacturerPayload<ExtArgs>
      subFamily: Prisma.$SubFamilyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      concentration: string
      fractions: number
      idPharmaceuticalForm: string
      idManufacturer: string
      idSubFamily: string
      name: string
      totalActivePrinciple: string
    }, ExtArgs["result"]["medication"]>
    composites: {}
  }

  type MedicationGetPayload<S extends boolean | null | undefined | MedicationDefaultArgs> = $Result.GetResult<Prisma.$MedicationPayload, S>

  type MedicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MedicationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MedicationCountAggregateInputType | true
    }

  export interface MedicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Medication'], meta: { name: 'Medication' } }
    /**
     * Find zero or one Medication that matches the filter.
     * @param {MedicationFindUniqueArgs} args - Arguments to find a Medication
     * @example
     * // Get one Medication
     * const medication = await prisma.medication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicationFindUniqueArgs>(args: SelectSubset<T, MedicationFindUniqueArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Medication that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MedicationFindUniqueOrThrowArgs} args - Arguments to find a Medication
     * @example
     * // Get one Medication
     * const medication = await prisma.medication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicationFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Medication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationFindFirstArgs} args - Arguments to find a Medication
     * @example
     * // Get one Medication
     * const medication = await prisma.medication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicationFindFirstArgs>(args?: SelectSubset<T, MedicationFindFirstArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Medication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationFindFirstOrThrowArgs} args - Arguments to find a Medication
     * @example
     * // Get one Medication
     * const medication = await prisma.medication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicationFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Medications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medications
     * const medications = await prisma.medication.findMany()
     * 
     * // Get first 10 Medications
     * const medications = await prisma.medication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicationWithIdOnly = await prisma.medication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedicationFindManyArgs>(args?: SelectSubset<T, MedicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Medication.
     * @param {MedicationCreateArgs} args - Arguments to create a Medication.
     * @example
     * // Create one Medication
     * const Medication = await prisma.medication.create({
     *   data: {
     *     // ... data to create a Medication
     *   }
     * })
     * 
     */
    create<T extends MedicationCreateArgs>(args: SelectSubset<T, MedicationCreateArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Medications.
     * @param {MedicationCreateManyArgs} args - Arguments to create many Medications.
     * @example
     * // Create many Medications
     * const medication = await prisma.medication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicationCreateManyArgs>(args?: SelectSubset<T, MedicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Medications and returns the data saved in the database.
     * @param {MedicationCreateManyAndReturnArgs} args - Arguments to create many Medications.
     * @example
     * // Create many Medications
     * const medication = await prisma.medication.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Medications and only return the `id`
     * const medicationWithIdOnly = await prisma.medication.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MedicationCreateManyAndReturnArgs>(args?: SelectSubset<T, MedicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Medication.
     * @param {MedicationDeleteArgs} args - Arguments to delete one Medication.
     * @example
     * // Delete one Medication
     * const Medication = await prisma.medication.delete({
     *   where: {
     *     // ... filter to delete one Medication
     *   }
     * })
     * 
     */
    delete<T extends MedicationDeleteArgs>(args: SelectSubset<T, MedicationDeleteArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Medication.
     * @param {MedicationUpdateArgs} args - Arguments to update one Medication.
     * @example
     * // Update one Medication
     * const medication = await prisma.medication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicationUpdateArgs>(args: SelectSubset<T, MedicationUpdateArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Medications.
     * @param {MedicationDeleteManyArgs} args - Arguments to filter Medications to delete.
     * @example
     * // Delete a few Medications
     * const { count } = await prisma.medication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicationDeleteManyArgs>(args?: SelectSubset<T, MedicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medications
     * const medication = await prisma.medication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicationUpdateManyArgs>(args: SelectSubset<T, MedicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Medication.
     * @param {MedicationUpsertArgs} args - Arguments to update or create a Medication.
     * @example
     * // Update or create a Medication
     * const medication = await prisma.medication.upsert({
     *   create: {
     *     // ... data to create a Medication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medication we want to update
     *   }
     * })
     */
    upsert<T extends MedicationUpsertArgs>(args: SelectSubset<T, MedicationUpsertArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Medications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationCountArgs} args - Arguments to filter Medications to count.
     * @example
     * // Count the number of Medications
     * const count = await prisma.medication.count({
     *   where: {
     *     // ... the filter for the Medications we want to count
     *   }
     * })
    **/
    count<T extends MedicationCountArgs>(
      args?: Subset<T, MedicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Medication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MedicationAggregateArgs>(args: Subset<T, MedicationAggregateArgs>): Prisma.PrismaPromise<GetMedicationAggregateType<T>>

    /**
     * Group by Medication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationGroupByArgs} args - Group by arguments.
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
      T extends MedicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicationGroupByArgs['orderBy'] }
        : { orderBy?: MedicationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MedicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Medication model
   */
  readonly fields: MedicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Medication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends Medication$productsArgs<ExtArgs> = {}>(args?: Subset<T, Medication$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany"> | Null>
    pharmaceuticalForm<T extends PharmaceuticalFormDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PharmaceuticalFormDefaultArgs<ExtArgs>>): Prisma__PharmaceuticalFormClient<$Result.GetResult<Prisma.$PharmaceuticalFormPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    manufacturer<T extends ManufacturerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ManufacturerDefaultArgs<ExtArgs>>): Prisma__ManufacturerClient<$Result.GetResult<Prisma.$ManufacturerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    subFamily<T extends SubFamilyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubFamilyDefaultArgs<ExtArgs>>): Prisma__SubFamilyClient<$Result.GetResult<Prisma.$SubFamilyPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Medication model
   */ 
  interface MedicationFieldRefs {
    readonly id: FieldRef<"Medication", 'String'>
    readonly concentration: FieldRef<"Medication", 'String'>
    readonly fractions: FieldRef<"Medication", 'Int'>
    readonly idPharmaceuticalForm: FieldRef<"Medication", 'String'>
    readonly idManufacturer: FieldRef<"Medication", 'String'>
    readonly idSubFamily: FieldRef<"Medication", 'String'>
    readonly name: FieldRef<"Medication", 'String'>
    readonly totalActivePrinciple: FieldRef<"Medication", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Medication findUnique
   */
  export type MedicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medication to fetch.
     */
    where: MedicationWhereUniqueInput
  }

  /**
   * Medication findUniqueOrThrow
   */
  export type MedicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medication to fetch.
     */
    where: MedicationWhereUniqueInput
  }

  /**
   * Medication findFirst
   */
  export type MedicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medication to fetch.
     */
    where?: MedicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medications to fetch.
     */
    orderBy?: MedicationOrderByWithRelationInput | MedicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medications.
     */
    cursor?: MedicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medications.
     */
    distinct?: MedicationScalarFieldEnum | MedicationScalarFieldEnum[]
  }

  /**
   * Medication findFirstOrThrow
   */
  export type MedicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medication to fetch.
     */
    where?: MedicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medications to fetch.
     */
    orderBy?: MedicationOrderByWithRelationInput | MedicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medications.
     */
    cursor?: MedicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medications.
     */
    distinct?: MedicationScalarFieldEnum | MedicationScalarFieldEnum[]
  }

  /**
   * Medication findMany
   */
  export type MedicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medications to fetch.
     */
    where?: MedicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medications to fetch.
     */
    orderBy?: MedicationOrderByWithRelationInput | MedicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Medications.
     */
    cursor?: MedicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medications.
     */
    skip?: number
    distinct?: MedicationScalarFieldEnum | MedicationScalarFieldEnum[]
  }

  /**
   * Medication create
   */
  export type MedicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * The data needed to create a Medication.
     */
    data: XOR<MedicationCreateInput, MedicationUncheckedCreateInput>
  }

  /**
   * Medication createMany
   */
  export type MedicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Medications.
     */
    data: MedicationCreateManyInput | MedicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Medication createManyAndReturn
   */
  export type MedicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Medications.
     */
    data: MedicationCreateManyInput | MedicationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Medication update
   */
  export type MedicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * The data needed to update a Medication.
     */
    data: XOR<MedicationUpdateInput, MedicationUncheckedUpdateInput>
    /**
     * Choose, which Medication to update.
     */
    where: MedicationWhereUniqueInput
  }

  /**
   * Medication updateMany
   */
  export type MedicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Medications.
     */
    data: XOR<MedicationUpdateManyMutationInput, MedicationUncheckedUpdateManyInput>
    /**
     * Filter which Medications to update
     */
    where?: MedicationWhereInput
  }

  /**
   * Medication upsert
   */
  export type MedicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * The filter to search for the Medication to update in case it exists.
     */
    where: MedicationWhereUniqueInput
    /**
     * In case the Medication found by the `where` argument doesn't exist, create a new Medication with this data.
     */
    create: XOR<MedicationCreateInput, MedicationUncheckedCreateInput>
    /**
     * In case the Medication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicationUpdateInput, MedicationUncheckedUpdateInput>
  }

  /**
   * Medication delete
   */
  export type MedicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter which Medication to delete.
     */
    where: MedicationWhereUniqueInput
  }

  /**
   * Medication deleteMany
   */
  export type MedicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medications to delete
     */
    where?: MedicationWhereInput
  }

  /**
   * Medication.products
   */
  export type Medication$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Medication without action
   */
  export type MedicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    idMedication: string | null
    name: string | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    idMedication: string | null
    name: string | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    idMedication: number
    name: number
    _all: number
  }


  export type ProductMinAggregateInputType = {
    id?: true
    idMedication?: true
    name?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    idMedication?: true
    name?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    idMedication?: true
    name?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    idMedication: string
    name: string
    _count: ProductCountAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idMedication?: boolean
    name?: boolean
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
    price?: boolean | Product$priceArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idMedication?: boolean
    name?: boolean
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    idMedication?: boolean
    name?: boolean
  }

  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
    price?: boolean | Product$priceArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      medication: Prisma.$MedicationPayload<ExtArgs>
      price: Prisma.$PricePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      idMedication: string
      name: string
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medication<T extends MedicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicationDefaultArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    price<T extends Product$priceArgs<ExtArgs> = {}>(args?: Subset<T, Product$priceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Product model
   */ 
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly idMedication: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
  }

  /**
   * Product.price
   */
  export type Product$priceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    where?: PriceWhereInput
    orderBy?: PriceOrderByWithRelationInput | PriceOrderByWithRelationInput[]
    cursor?: PriceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PriceScalarFieldEnum | PriceScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model PharmaceuticalForm
   */

  export type AggregatePharmaceuticalForm = {
    _count: PharmaceuticalFormCountAggregateOutputType | null
    _min: PharmaceuticalFormMinAggregateOutputType | null
    _max: PharmaceuticalFormMaxAggregateOutputType | null
  }

  export type PharmaceuticalFormMinAggregateOutputType = {
    id: string | null
    group: string | null
    groupCode: string | null
    name: string | null
  }

  export type PharmaceuticalFormMaxAggregateOutputType = {
    id: string | null
    group: string | null
    groupCode: string | null
    name: string | null
  }

  export type PharmaceuticalFormCountAggregateOutputType = {
    id: number
    group: number
    groupCode: number
    name: number
    _all: number
  }


  export type PharmaceuticalFormMinAggregateInputType = {
    id?: true
    group?: true
    groupCode?: true
    name?: true
  }

  export type PharmaceuticalFormMaxAggregateInputType = {
    id?: true
    group?: true
    groupCode?: true
    name?: true
  }

  export type PharmaceuticalFormCountAggregateInputType = {
    id?: true
    group?: true
    groupCode?: true
    name?: true
    _all?: true
  }

  export type PharmaceuticalFormAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PharmaceuticalForm to aggregate.
     */
    where?: PharmaceuticalFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PharmaceuticalForms to fetch.
     */
    orderBy?: PharmaceuticalFormOrderByWithRelationInput | PharmaceuticalFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PharmaceuticalFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PharmaceuticalForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PharmaceuticalForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PharmaceuticalForms
    **/
    _count?: true | PharmaceuticalFormCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PharmaceuticalFormMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PharmaceuticalFormMaxAggregateInputType
  }

  export type GetPharmaceuticalFormAggregateType<T extends PharmaceuticalFormAggregateArgs> = {
        [P in keyof T & keyof AggregatePharmaceuticalForm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePharmaceuticalForm[P]>
      : GetScalarType<T[P], AggregatePharmaceuticalForm[P]>
  }




  export type PharmaceuticalFormGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PharmaceuticalFormWhereInput
    orderBy?: PharmaceuticalFormOrderByWithAggregationInput | PharmaceuticalFormOrderByWithAggregationInput[]
    by: PharmaceuticalFormScalarFieldEnum[] | PharmaceuticalFormScalarFieldEnum
    having?: PharmaceuticalFormScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PharmaceuticalFormCountAggregateInputType | true
    _min?: PharmaceuticalFormMinAggregateInputType
    _max?: PharmaceuticalFormMaxAggregateInputType
  }

  export type PharmaceuticalFormGroupByOutputType = {
    id: string
    group: string
    groupCode: string
    name: string
    _count: PharmaceuticalFormCountAggregateOutputType | null
    _min: PharmaceuticalFormMinAggregateOutputType | null
    _max: PharmaceuticalFormMaxAggregateOutputType | null
  }

  type GetPharmaceuticalFormGroupByPayload<T extends PharmaceuticalFormGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PharmaceuticalFormGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PharmaceuticalFormGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PharmaceuticalFormGroupByOutputType[P]>
            : GetScalarType<T[P], PharmaceuticalFormGroupByOutputType[P]>
        }
      >
    >


  export type PharmaceuticalFormSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    group?: boolean
    groupCode?: boolean
    name?: boolean
    medications?: boolean | PharmaceuticalForm$medicationsArgs<ExtArgs>
    _count?: boolean | PharmaceuticalFormCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pharmaceuticalForm"]>

  export type PharmaceuticalFormSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    group?: boolean
    groupCode?: boolean
    name?: boolean
  }, ExtArgs["result"]["pharmaceuticalForm"]>

  export type PharmaceuticalFormSelectScalar = {
    id?: boolean
    group?: boolean
    groupCode?: boolean
    name?: boolean
  }

  export type PharmaceuticalFormInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medications?: boolean | PharmaceuticalForm$medicationsArgs<ExtArgs>
    _count?: boolean | PharmaceuticalFormCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PharmaceuticalFormIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PharmaceuticalFormPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PharmaceuticalForm"
    objects: {
      medications: Prisma.$MedicationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      group: string
      groupCode: string
      name: string
    }, ExtArgs["result"]["pharmaceuticalForm"]>
    composites: {}
  }

  type PharmaceuticalFormGetPayload<S extends boolean | null | undefined | PharmaceuticalFormDefaultArgs> = $Result.GetResult<Prisma.$PharmaceuticalFormPayload, S>

  type PharmaceuticalFormCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PharmaceuticalFormFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PharmaceuticalFormCountAggregateInputType | true
    }

  export interface PharmaceuticalFormDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PharmaceuticalForm'], meta: { name: 'PharmaceuticalForm' } }
    /**
     * Find zero or one PharmaceuticalForm that matches the filter.
     * @param {PharmaceuticalFormFindUniqueArgs} args - Arguments to find a PharmaceuticalForm
     * @example
     * // Get one PharmaceuticalForm
     * const pharmaceuticalForm = await prisma.pharmaceuticalForm.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PharmaceuticalFormFindUniqueArgs>(args: SelectSubset<T, PharmaceuticalFormFindUniqueArgs<ExtArgs>>): Prisma__PharmaceuticalFormClient<$Result.GetResult<Prisma.$PharmaceuticalFormPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PharmaceuticalForm that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PharmaceuticalFormFindUniqueOrThrowArgs} args - Arguments to find a PharmaceuticalForm
     * @example
     * // Get one PharmaceuticalForm
     * const pharmaceuticalForm = await prisma.pharmaceuticalForm.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PharmaceuticalFormFindUniqueOrThrowArgs>(args: SelectSubset<T, PharmaceuticalFormFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PharmaceuticalFormClient<$Result.GetResult<Prisma.$PharmaceuticalFormPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PharmaceuticalForm that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmaceuticalFormFindFirstArgs} args - Arguments to find a PharmaceuticalForm
     * @example
     * // Get one PharmaceuticalForm
     * const pharmaceuticalForm = await prisma.pharmaceuticalForm.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PharmaceuticalFormFindFirstArgs>(args?: SelectSubset<T, PharmaceuticalFormFindFirstArgs<ExtArgs>>): Prisma__PharmaceuticalFormClient<$Result.GetResult<Prisma.$PharmaceuticalFormPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PharmaceuticalForm that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmaceuticalFormFindFirstOrThrowArgs} args - Arguments to find a PharmaceuticalForm
     * @example
     * // Get one PharmaceuticalForm
     * const pharmaceuticalForm = await prisma.pharmaceuticalForm.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PharmaceuticalFormFindFirstOrThrowArgs>(args?: SelectSubset<T, PharmaceuticalFormFindFirstOrThrowArgs<ExtArgs>>): Prisma__PharmaceuticalFormClient<$Result.GetResult<Prisma.$PharmaceuticalFormPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PharmaceuticalForms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmaceuticalFormFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PharmaceuticalForms
     * const pharmaceuticalForms = await prisma.pharmaceuticalForm.findMany()
     * 
     * // Get first 10 PharmaceuticalForms
     * const pharmaceuticalForms = await prisma.pharmaceuticalForm.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pharmaceuticalFormWithIdOnly = await prisma.pharmaceuticalForm.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PharmaceuticalFormFindManyArgs>(args?: SelectSubset<T, PharmaceuticalFormFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PharmaceuticalFormPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PharmaceuticalForm.
     * @param {PharmaceuticalFormCreateArgs} args - Arguments to create a PharmaceuticalForm.
     * @example
     * // Create one PharmaceuticalForm
     * const PharmaceuticalForm = await prisma.pharmaceuticalForm.create({
     *   data: {
     *     // ... data to create a PharmaceuticalForm
     *   }
     * })
     * 
     */
    create<T extends PharmaceuticalFormCreateArgs>(args: SelectSubset<T, PharmaceuticalFormCreateArgs<ExtArgs>>): Prisma__PharmaceuticalFormClient<$Result.GetResult<Prisma.$PharmaceuticalFormPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PharmaceuticalForms.
     * @param {PharmaceuticalFormCreateManyArgs} args - Arguments to create many PharmaceuticalForms.
     * @example
     * // Create many PharmaceuticalForms
     * const pharmaceuticalForm = await prisma.pharmaceuticalForm.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PharmaceuticalFormCreateManyArgs>(args?: SelectSubset<T, PharmaceuticalFormCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PharmaceuticalForms and returns the data saved in the database.
     * @param {PharmaceuticalFormCreateManyAndReturnArgs} args - Arguments to create many PharmaceuticalForms.
     * @example
     * // Create many PharmaceuticalForms
     * const pharmaceuticalForm = await prisma.pharmaceuticalForm.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PharmaceuticalForms and only return the `id`
     * const pharmaceuticalFormWithIdOnly = await prisma.pharmaceuticalForm.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PharmaceuticalFormCreateManyAndReturnArgs>(args?: SelectSubset<T, PharmaceuticalFormCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PharmaceuticalFormPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PharmaceuticalForm.
     * @param {PharmaceuticalFormDeleteArgs} args - Arguments to delete one PharmaceuticalForm.
     * @example
     * // Delete one PharmaceuticalForm
     * const PharmaceuticalForm = await prisma.pharmaceuticalForm.delete({
     *   where: {
     *     // ... filter to delete one PharmaceuticalForm
     *   }
     * })
     * 
     */
    delete<T extends PharmaceuticalFormDeleteArgs>(args: SelectSubset<T, PharmaceuticalFormDeleteArgs<ExtArgs>>): Prisma__PharmaceuticalFormClient<$Result.GetResult<Prisma.$PharmaceuticalFormPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PharmaceuticalForm.
     * @param {PharmaceuticalFormUpdateArgs} args - Arguments to update one PharmaceuticalForm.
     * @example
     * // Update one PharmaceuticalForm
     * const pharmaceuticalForm = await prisma.pharmaceuticalForm.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PharmaceuticalFormUpdateArgs>(args: SelectSubset<T, PharmaceuticalFormUpdateArgs<ExtArgs>>): Prisma__PharmaceuticalFormClient<$Result.GetResult<Prisma.$PharmaceuticalFormPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PharmaceuticalForms.
     * @param {PharmaceuticalFormDeleteManyArgs} args - Arguments to filter PharmaceuticalForms to delete.
     * @example
     * // Delete a few PharmaceuticalForms
     * const { count } = await prisma.pharmaceuticalForm.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PharmaceuticalFormDeleteManyArgs>(args?: SelectSubset<T, PharmaceuticalFormDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PharmaceuticalForms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmaceuticalFormUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PharmaceuticalForms
     * const pharmaceuticalForm = await prisma.pharmaceuticalForm.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PharmaceuticalFormUpdateManyArgs>(args: SelectSubset<T, PharmaceuticalFormUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PharmaceuticalForm.
     * @param {PharmaceuticalFormUpsertArgs} args - Arguments to update or create a PharmaceuticalForm.
     * @example
     * // Update or create a PharmaceuticalForm
     * const pharmaceuticalForm = await prisma.pharmaceuticalForm.upsert({
     *   create: {
     *     // ... data to create a PharmaceuticalForm
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PharmaceuticalForm we want to update
     *   }
     * })
     */
    upsert<T extends PharmaceuticalFormUpsertArgs>(args: SelectSubset<T, PharmaceuticalFormUpsertArgs<ExtArgs>>): Prisma__PharmaceuticalFormClient<$Result.GetResult<Prisma.$PharmaceuticalFormPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PharmaceuticalForms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmaceuticalFormCountArgs} args - Arguments to filter PharmaceuticalForms to count.
     * @example
     * // Count the number of PharmaceuticalForms
     * const count = await prisma.pharmaceuticalForm.count({
     *   where: {
     *     // ... the filter for the PharmaceuticalForms we want to count
     *   }
     * })
    **/
    count<T extends PharmaceuticalFormCountArgs>(
      args?: Subset<T, PharmaceuticalFormCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PharmaceuticalFormCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PharmaceuticalForm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmaceuticalFormAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PharmaceuticalFormAggregateArgs>(args: Subset<T, PharmaceuticalFormAggregateArgs>): Prisma.PrismaPromise<GetPharmaceuticalFormAggregateType<T>>

    /**
     * Group by PharmaceuticalForm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PharmaceuticalFormGroupByArgs} args - Group by arguments.
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
      T extends PharmaceuticalFormGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PharmaceuticalFormGroupByArgs['orderBy'] }
        : { orderBy?: PharmaceuticalFormGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PharmaceuticalFormGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPharmaceuticalFormGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PharmaceuticalForm model
   */
  readonly fields: PharmaceuticalFormFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PharmaceuticalForm.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PharmaceuticalFormClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medications<T extends PharmaceuticalForm$medicationsArgs<ExtArgs> = {}>(args?: Subset<T, PharmaceuticalForm$medicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the PharmaceuticalForm model
   */ 
  interface PharmaceuticalFormFieldRefs {
    readonly id: FieldRef<"PharmaceuticalForm", 'String'>
    readonly group: FieldRef<"PharmaceuticalForm", 'String'>
    readonly groupCode: FieldRef<"PharmaceuticalForm", 'String'>
    readonly name: FieldRef<"PharmaceuticalForm", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PharmaceuticalForm findUnique
   */
  export type PharmaceuticalFormFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmaceuticalForm
     */
    select?: PharmaceuticalFormSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmaceuticalFormInclude<ExtArgs> | null
    /**
     * Filter, which PharmaceuticalForm to fetch.
     */
    where: PharmaceuticalFormWhereUniqueInput
  }

  /**
   * PharmaceuticalForm findUniqueOrThrow
   */
  export type PharmaceuticalFormFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmaceuticalForm
     */
    select?: PharmaceuticalFormSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmaceuticalFormInclude<ExtArgs> | null
    /**
     * Filter, which PharmaceuticalForm to fetch.
     */
    where: PharmaceuticalFormWhereUniqueInput
  }

  /**
   * PharmaceuticalForm findFirst
   */
  export type PharmaceuticalFormFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmaceuticalForm
     */
    select?: PharmaceuticalFormSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmaceuticalFormInclude<ExtArgs> | null
    /**
     * Filter, which PharmaceuticalForm to fetch.
     */
    where?: PharmaceuticalFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PharmaceuticalForms to fetch.
     */
    orderBy?: PharmaceuticalFormOrderByWithRelationInput | PharmaceuticalFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PharmaceuticalForms.
     */
    cursor?: PharmaceuticalFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PharmaceuticalForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PharmaceuticalForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PharmaceuticalForms.
     */
    distinct?: PharmaceuticalFormScalarFieldEnum | PharmaceuticalFormScalarFieldEnum[]
  }

  /**
   * PharmaceuticalForm findFirstOrThrow
   */
  export type PharmaceuticalFormFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmaceuticalForm
     */
    select?: PharmaceuticalFormSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmaceuticalFormInclude<ExtArgs> | null
    /**
     * Filter, which PharmaceuticalForm to fetch.
     */
    where?: PharmaceuticalFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PharmaceuticalForms to fetch.
     */
    orderBy?: PharmaceuticalFormOrderByWithRelationInput | PharmaceuticalFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PharmaceuticalForms.
     */
    cursor?: PharmaceuticalFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PharmaceuticalForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PharmaceuticalForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PharmaceuticalForms.
     */
    distinct?: PharmaceuticalFormScalarFieldEnum | PharmaceuticalFormScalarFieldEnum[]
  }

  /**
   * PharmaceuticalForm findMany
   */
  export type PharmaceuticalFormFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmaceuticalForm
     */
    select?: PharmaceuticalFormSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmaceuticalFormInclude<ExtArgs> | null
    /**
     * Filter, which PharmaceuticalForms to fetch.
     */
    where?: PharmaceuticalFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PharmaceuticalForms to fetch.
     */
    orderBy?: PharmaceuticalFormOrderByWithRelationInput | PharmaceuticalFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PharmaceuticalForms.
     */
    cursor?: PharmaceuticalFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PharmaceuticalForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PharmaceuticalForms.
     */
    skip?: number
    distinct?: PharmaceuticalFormScalarFieldEnum | PharmaceuticalFormScalarFieldEnum[]
  }

  /**
   * PharmaceuticalForm create
   */
  export type PharmaceuticalFormCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmaceuticalForm
     */
    select?: PharmaceuticalFormSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmaceuticalFormInclude<ExtArgs> | null
    /**
     * The data needed to create a PharmaceuticalForm.
     */
    data: XOR<PharmaceuticalFormCreateInput, PharmaceuticalFormUncheckedCreateInput>
  }

  /**
   * PharmaceuticalForm createMany
   */
  export type PharmaceuticalFormCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PharmaceuticalForms.
     */
    data: PharmaceuticalFormCreateManyInput | PharmaceuticalFormCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PharmaceuticalForm createManyAndReturn
   */
  export type PharmaceuticalFormCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmaceuticalForm
     */
    select?: PharmaceuticalFormSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PharmaceuticalForms.
     */
    data: PharmaceuticalFormCreateManyInput | PharmaceuticalFormCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PharmaceuticalForm update
   */
  export type PharmaceuticalFormUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmaceuticalForm
     */
    select?: PharmaceuticalFormSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmaceuticalFormInclude<ExtArgs> | null
    /**
     * The data needed to update a PharmaceuticalForm.
     */
    data: XOR<PharmaceuticalFormUpdateInput, PharmaceuticalFormUncheckedUpdateInput>
    /**
     * Choose, which PharmaceuticalForm to update.
     */
    where: PharmaceuticalFormWhereUniqueInput
  }

  /**
   * PharmaceuticalForm updateMany
   */
  export type PharmaceuticalFormUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PharmaceuticalForms.
     */
    data: XOR<PharmaceuticalFormUpdateManyMutationInput, PharmaceuticalFormUncheckedUpdateManyInput>
    /**
     * Filter which PharmaceuticalForms to update
     */
    where?: PharmaceuticalFormWhereInput
  }

  /**
   * PharmaceuticalForm upsert
   */
  export type PharmaceuticalFormUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmaceuticalForm
     */
    select?: PharmaceuticalFormSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmaceuticalFormInclude<ExtArgs> | null
    /**
     * The filter to search for the PharmaceuticalForm to update in case it exists.
     */
    where: PharmaceuticalFormWhereUniqueInput
    /**
     * In case the PharmaceuticalForm found by the `where` argument doesn't exist, create a new PharmaceuticalForm with this data.
     */
    create: XOR<PharmaceuticalFormCreateInput, PharmaceuticalFormUncheckedCreateInput>
    /**
     * In case the PharmaceuticalForm was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PharmaceuticalFormUpdateInput, PharmaceuticalFormUncheckedUpdateInput>
  }

  /**
   * PharmaceuticalForm delete
   */
  export type PharmaceuticalFormDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmaceuticalForm
     */
    select?: PharmaceuticalFormSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmaceuticalFormInclude<ExtArgs> | null
    /**
     * Filter which PharmaceuticalForm to delete.
     */
    where: PharmaceuticalFormWhereUniqueInput
  }

  /**
   * PharmaceuticalForm deleteMany
   */
  export type PharmaceuticalFormDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PharmaceuticalForms to delete
     */
    where?: PharmaceuticalFormWhereInput
  }

  /**
   * PharmaceuticalForm.medications
   */
  export type PharmaceuticalForm$medicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    where?: MedicationWhereInput
    orderBy?: MedicationOrderByWithRelationInput | MedicationOrderByWithRelationInput[]
    cursor?: MedicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicationScalarFieldEnum | MedicationScalarFieldEnum[]
  }

  /**
   * PharmaceuticalForm without action
   */
  export type PharmaceuticalFormDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PharmaceuticalForm
     */
    select?: PharmaceuticalFormSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PharmaceuticalFormInclude<ExtArgs> | null
  }


  /**
   * Model Establishment
   */

  export type AggregateEstablishment = {
    _count: EstablishmentCountAggregateOutputType | null
    _min: EstablishmentMinAggregateOutputType | null
    _max: EstablishmentMaxAggregateOutputType | null
  }

  export type EstablishmentMinAggregateOutputType = {
    id: string | null
    address: string | null
    name: string | null
    type: string | null
    typeId: string | null
    idDistrict: string | null
    phone: string | null
  }

  export type EstablishmentMaxAggregateOutputType = {
    id: string | null
    address: string | null
    name: string | null
    type: string | null
    typeId: string | null
    idDistrict: string | null
    phone: string | null
  }

  export type EstablishmentCountAggregateOutputType = {
    id: number
    address: number
    name: number
    type: number
    typeId: number
    idDistrict: number
    phone: number
    _all: number
  }


  export type EstablishmentMinAggregateInputType = {
    id?: true
    address?: true
    name?: true
    type?: true
    typeId?: true
    idDistrict?: true
    phone?: true
  }

  export type EstablishmentMaxAggregateInputType = {
    id?: true
    address?: true
    name?: true
    type?: true
    typeId?: true
    idDistrict?: true
    phone?: true
  }

  export type EstablishmentCountAggregateInputType = {
    id?: true
    address?: true
    name?: true
    type?: true
    typeId?: true
    idDistrict?: true
    phone?: true
    _all?: true
  }

  export type EstablishmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Establishment to aggregate.
     */
    where?: EstablishmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Establishments to fetch.
     */
    orderBy?: EstablishmentOrderByWithRelationInput | EstablishmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EstablishmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Establishments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Establishments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Establishments
    **/
    _count?: true | EstablishmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EstablishmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EstablishmentMaxAggregateInputType
  }

  export type GetEstablishmentAggregateType<T extends EstablishmentAggregateArgs> = {
        [P in keyof T & keyof AggregateEstablishment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstablishment[P]>
      : GetScalarType<T[P], AggregateEstablishment[P]>
  }




  export type EstablishmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstablishmentWhereInput
    orderBy?: EstablishmentOrderByWithAggregationInput | EstablishmentOrderByWithAggregationInput[]
    by: EstablishmentScalarFieldEnum[] | EstablishmentScalarFieldEnum
    having?: EstablishmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EstablishmentCountAggregateInputType | true
    _min?: EstablishmentMinAggregateInputType
    _max?: EstablishmentMaxAggregateInputType
  }

  export type EstablishmentGroupByOutputType = {
    id: string
    address: string
    name: string
    type: string
    typeId: string
    idDistrict: string
    phone: string | null
    _count: EstablishmentCountAggregateOutputType | null
    _min: EstablishmentMinAggregateOutputType | null
    _max: EstablishmentMaxAggregateOutputType | null
  }

  type GetEstablishmentGroupByPayload<T extends EstablishmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EstablishmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EstablishmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EstablishmentGroupByOutputType[P]>
            : GetScalarType<T[P], EstablishmentGroupByOutputType[P]>
        }
      >
    >


  export type EstablishmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    name?: boolean
    type?: boolean
    typeId?: boolean
    idDistrict?: boolean
    phone?: boolean
    district?: boolean | DistrictDefaultArgs<ExtArgs>
    price?: boolean | Establishment$priceArgs<ExtArgs>
    _count?: boolean | EstablishmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["establishment"]>

  export type EstablishmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    name?: boolean
    type?: boolean
    typeId?: boolean
    idDistrict?: boolean
    phone?: boolean
    district?: boolean | DistrictDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["establishment"]>

  export type EstablishmentSelectScalar = {
    id?: boolean
    address?: boolean
    name?: boolean
    type?: boolean
    typeId?: boolean
    idDistrict?: boolean
    phone?: boolean
  }

  export type EstablishmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    district?: boolean | DistrictDefaultArgs<ExtArgs>
    price?: boolean | Establishment$priceArgs<ExtArgs>
    _count?: boolean | EstablishmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EstablishmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    district?: boolean | DistrictDefaultArgs<ExtArgs>
  }

  export type $EstablishmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Establishment"
    objects: {
      district: Prisma.$DistrictPayload<ExtArgs>
      price: Prisma.$PricePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      address: string
      name: string
      type: string
      typeId: string
      idDistrict: string
      phone: string | null
    }, ExtArgs["result"]["establishment"]>
    composites: {}
  }

  type EstablishmentGetPayload<S extends boolean | null | undefined | EstablishmentDefaultArgs> = $Result.GetResult<Prisma.$EstablishmentPayload, S>

  type EstablishmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EstablishmentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EstablishmentCountAggregateInputType | true
    }

  export interface EstablishmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Establishment'], meta: { name: 'Establishment' } }
    /**
     * Find zero or one Establishment that matches the filter.
     * @param {EstablishmentFindUniqueArgs} args - Arguments to find a Establishment
     * @example
     * // Get one Establishment
     * const establishment = await prisma.establishment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EstablishmentFindUniqueArgs>(args: SelectSubset<T, EstablishmentFindUniqueArgs<ExtArgs>>): Prisma__EstablishmentClient<$Result.GetResult<Prisma.$EstablishmentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Establishment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EstablishmentFindUniqueOrThrowArgs} args - Arguments to find a Establishment
     * @example
     * // Get one Establishment
     * const establishment = await prisma.establishment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EstablishmentFindUniqueOrThrowArgs>(args: SelectSubset<T, EstablishmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EstablishmentClient<$Result.GetResult<Prisma.$EstablishmentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Establishment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstablishmentFindFirstArgs} args - Arguments to find a Establishment
     * @example
     * // Get one Establishment
     * const establishment = await prisma.establishment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EstablishmentFindFirstArgs>(args?: SelectSubset<T, EstablishmentFindFirstArgs<ExtArgs>>): Prisma__EstablishmentClient<$Result.GetResult<Prisma.$EstablishmentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Establishment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstablishmentFindFirstOrThrowArgs} args - Arguments to find a Establishment
     * @example
     * // Get one Establishment
     * const establishment = await prisma.establishment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EstablishmentFindFirstOrThrowArgs>(args?: SelectSubset<T, EstablishmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__EstablishmentClient<$Result.GetResult<Prisma.$EstablishmentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Establishments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstablishmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Establishments
     * const establishments = await prisma.establishment.findMany()
     * 
     * // Get first 10 Establishments
     * const establishments = await prisma.establishment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const establishmentWithIdOnly = await prisma.establishment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EstablishmentFindManyArgs>(args?: SelectSubset<T, EstablishmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstablishmentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Establishment.
     * @param {EstablishmentCreateArgs} args - Arguments to create a Establishment.
     * @example
     * // Create one Establishment
     * const Establishment = await prisma.establishment.create({
     *   data: {
     *     // ... data to create a Establishment
     *   }
     * })
     * 
     */
    create<T extends EstablishmentCreateArgs>(args: SelectSubset<T, EstablishmentCreateArgs<ExtArgs>>): Prisma__EstablishmentClient<$Result.GetResult<Prisma.$EstablishmentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Establishments.
     * @param {EstablishmentCreateManyArgs} args - Arguments to create many Establishments.
     * @example
     * // Create many Establishments
     * const establishment = await prisma.establishment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EstablishmentCreateManyArgs>(args?: SelectSubset<T, EstablishmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Establishments and returns the data saved in the database.
     * @param {EstablishmentCreateManyAndReturnArgs} args - Arguments to create many Establishments.
     * @example
     * // Create many Establishments
     * const establishment = await prisma.establishment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Establishments and only return the `id`
     * const establishmentWithIdOnly = await prisma.establishment.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EstablishmentCreateManyAndReturnArgs>(args?: SelectSubset<T, EstablishmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstablishmentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Establishment.
     * @param {EstablishmentDeleteArgs} args - Arguments to delete one Establishment.
     * @example
     * // Delete one Establishment
     * const Establishment = await prisma.establishment.delete({
     *   where: {
     *     // ... filter to delete one Establishment
     *   }
     * })
     * 
     */
    delete<T extends EstablishmentDeleteArgs>(args: SelectSubset<T, EstablishmentDeleteArgs<ExtArgs>>): Prisma__EstablishmentClient<$Result.GetResult<Prisma.$EstablishmentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Establishment.
     * @param {EstablishmentUpdateArgs} args - Arguments to update one Establishment.
     * @example
     * // Update one Establishment
     * const establishment = await prisma.establishment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EstablishmentUpdateArgs>(args: SelectSubset<T, EstablishmentUpdateArgs<ExtArgs>>): Prisma__EstablishmentClient<$Result.GetResult<Prisma.$EstablishmentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Establishments.
     * @param {EstablishmentDeleteManyArgs} args - Arguments to filter Establishments to delete.
     * @example
     * // Delete a few Establishments
     * const { count } = await prisma.establishment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EstablishmentDeleteManyArgs>(args?: SelectSubset<T, EstablishmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Establishments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstablishmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Establishments
     * const establishment = await prisma.establishment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EstablishmentUpdateManyArgs>(args: SelectSubset<T, EstablishmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Establishment.
     * @param {EstablishmentUpsertArgs} args - Arguments to update or create a Establishment.
     * @example
     * // Update or create a Establishment
     * const establishment = await prisma.establishment.upsert({
     *   create: {
     *     // ... data to create a Establishment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Establishment we want to update
     *   }
     * })
     */
    upsert<T extends EstablishmentUpsertArgs>(args: SelectSubset<T, EstablishmentUpsertArgs<ExtArgs>>): Prisma__EstablishmentClient<$Result.GetResult<Prisma.$EstablishmentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Establishments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstablishmentCountArgs} args - Arguments to filter Establishments to count.
     * @example
     * // Count the number of Establishments
     * const count = await prisma.establishment.count({
     *   where: {
     *     // ... the filter for the Establishments we want to count
     *   }
     * })
    **/
    count<T extends EstablishmentCountArgs>(
      args?: Subset<T, EstablishmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EstablishmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Establishment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstablishmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EstablishmentAggregateArgs>(args: Subset<T, EstablishmentAggregateArgs>): Prisma.PrismaPromise<GetEstablishmentAggregateType<T>>

    /**
     * Group by Establishment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstablishmentGroupByArgs} args - Group by arguments.
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
      T extends EstablishmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EstablishmentGroupByArgs['orderBy'] }
        : { orderBy?: EstablishmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EstablishmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstablishmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Establishment model
   */
  readonly fields: EstablishmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Establishment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EstablishmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    district<T extends DistrictDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DistrictDefaultArgs<ExtArgs>>): Prisma__DistrictClient<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    price<T extends Establishment$priceArgs<ExtArgs> = {}>(args?: Subset<T, Establishment$priceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Establishment model
   */ 
  interface EstablishmentFieldRefs {
    readonly id: FieldRef<"Establishment", 'String'>
    readonly address: FieldRef<"Establishment", 'String'>
    readonly name: FieldRef<"Establishment", 'String'>
    readonly type: FieldRef<"Establishment", 'String'>
    readonly typeId: FieldRef<"Establishment", 'String'>
    readonly idDistrict: FieldRef<"Establishment", 'String'>
    readonly phone: FieldRef<"Establishment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Establishment findUnique
   */
  export type EstablishmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Establishment
     */
    select?: EstablishmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentInclude<ExtArgs> | null
    /**
     * Filter, which Establishment to fetch.
     */
    where: EstablishmentWhereUniqueInput
  }

  /**
   * Establishment findUniqueOrThrow
   */
  export type EstablishmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Establishment
     */
    select?: EstablishmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentInclude<ExtArgs> | null
    /**
     * Filter, which Establishment to fetch.
     */
    where: EstablishmentWhereUniqueInput
  }

  /**
   * Establishment findFirst
   */
  export type EstablishmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Establishment
     */
    select?: EstablishmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentInclude<ExtArgs> | null
    /**
     * Filter, which Establishment to fetch.
     */
    where?: EstablishmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Establishments to fetch.
     */
    orderBy?: EstablishmentOrderByWithRelationInput | EstablishmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Establishments.
     */
    cursor?: EstablishmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Establishments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Establishments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Establishments.
     */
    distinct?: EstablishmentScalarFieldEnum | EstablishmentScalarFieldEnum[]
  }

  /**
   * Establishment findFirstOrThrow
   */
  export type EstablishmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Establishment
     */
    select?: EstablishmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentInclude<ExtArgs> | null
    /**
     * Filter, which Establishment to fetch.
     */
    where?: EstablishmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Establishments to fetch.
     */
    orderBy?: EstablishmentOrderByWithRelationInput | EstablishmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Establishments.
     */
    cursor?: EstablishmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Establishments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Establishments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Establishments.
     */
    distinct?: EstablishmentScalarFieldEnum | EstablishmentScalarFieldEnum[]
  }

  /**
   * Establishment findMany
   */
  export type EstablishmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Establishment
     */
    select?: EstablishmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentInclude<ExtArgs> | null
    /**
     * Filter, which Establishments to fetch.
     */
    where?: EstablishmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Establishments to fetch.
     */
    orderBy?: EstablishmentOrderByWithRelationInput | EstablishmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Establishments.
     */
    cursor?: EstablishmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Establishments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Establishments.
     */
    skip?: number
    distinct?: EstablishmentScalarFieldEnum | EstablishmentScalarFieldEnum[]
  }

  /**
   * Establishment create
   */
  export type EstablishmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Establishment
     */
    select?: EstablishmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Establishment.
     */
    data: XOR<EstablishmentCreateInput, EstablishmentUncheckedCreateInput>
  }

  /**
   * Establishment createMany
   */
  export type EstablishmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Establishments.
     */
    data: EstablishmentCreateManyInput | EstablishmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Establishment createManyAndReturn
   */
  export type EstablishmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Establishment
     */
    select?: EstablishmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Establishments.
     */
    data: EstablishmentCreateManyInput | EstablishmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Establishment update
   */
  export type EstablishmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Establishment
     */
    select?: EstablishmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Establishment.
     */
    data: XOR<EstablishmentUpdateInput, EstablishmentUncheckedUpdateInput>
    /**
     * Choose, which Establishment to update.
     */
    where: EstablishmentWhereUniqueInput
  }

  /**
   * Establishment updateMany
   */
  export type EstablishmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Establishments.
     */
    data: XOR<EstablishmentUpdateManyMutationInput, EstablishmentUncheckedUpdateManyInput>
    /**
     * Filter which Establishments to update
     */
    where?: EstablishmentWhereInput
  }

  /**
   * Establishment upsert
   */
  export type EstablishmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Establishment
     */
    select?: EstablishmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Establishment to update in case it exists.
     */
    where: EstablishmentWhereUniqueInput
    /**
     * In case the Establishment found by the `where` argument doesn't exist, create a new Establishment with this data.
     */
    create: XOR<EstablishmentCreateInput, EstablishmentUncheckedCreateInput>
    /**
     * In case the Establishment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EstablishmentUpdateInput, EstablishmentUncheckedUpdateInput>
  }

  /**
   * Establishment delete
   */
  export type EstablishmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Establishment
     */
    select?: EstablishmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentInclude<ExtArgs> | null
    /**
     * Filter which Establishment to delete.
     */
    where: EstablishmentWhereUniqueInput
  }

  /**
   * Establishment deleteMany
   */
  export type EstablishmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Establishments to delete
     */
    where?: EstablishmentWhereInput
  }

  /**
   * Establishment.price
   */
  export type Establishment$priceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    where?: PriceWhereInput
    orderBy?: PriceOrderByWithRelationInput | PriceOrderByWithRelationInput[]
    cursor?: PriceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PriceScalarFieldEnum | PriceScalarFieldEnum[]
  }

  /**
   * Establishment without action
   */
  export type EstablishmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Establishment
     */
    select?: EstablishmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentInclude<ExtArgs> | null
  }


  /**
   * Model Manufacturer
   */

  export type AggregateManufacturer = {
    _count: ManufacturerCountAggregateOutputType | null
    _min: ManufacturerMinAggregateOutputType | null
    _max: ManufacturerMaxAggregateOutputType | null
  }

  export type ManufacturerMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type ManufacturerMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type ManufacturerCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type ManufacturerMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type ManufacturerMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type ManufacturerCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type ManufacturerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Manufacturer to aggregate.
     */
    where?: ManufacturerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Manufacturers to fetch.
     */
    orderBy?: ManufacturerOrderByWithRelationInput | ManufacturerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ManufacturerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Manufacturers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Manufacturers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Manufacturers
    **/
    _count?: true | ManufacturerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ManufacturerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ManufacturerMaxAggregateInputType
  }

  export type GetManufacturerAggregateType<T extends ManufacturerAggregateArgs> = {
        [P in keyof T & keyof AggregateManufacturer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateManufacturer[P]>
      : GetScalarType<T[P], AggregateManufacturer[P]>
  }




  export type ManufacturerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ManufacturerWhereInput
    orderBy?: ManufacturerOrderByWithAggregationInput | ManufacturerOrderByWithAggregationInput[]
    by: ManufacturerScalarFieldEnum[] | ManufacturerScalarFieldEnum
    having?: ManufacturerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ManufacturerCountAggregateInputType | true
    _min?: ManufacturerMinAggregateInputType
    _max?: ManufacturerMaxAggregateInputType
  }

  export type ManufacturerGroupByOutputType = {
    id: string
    name: string | null
    _count: ManufacturerCountAggregateOutputType | null
    _min: ManufacturerMinAggregateOutputType | null
    _max: ManufacturerMaxAggregateOutputType | null
  }

  type GetManufacturerGroupByPayload<T extends ManufacturerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ManufacturerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ManufacturerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ManufacturerGroupByOutputType[P]>
            : GetScalarType<T[P], ManufacturerGroupByOutputType[P]>
        }
      >
    >


  export type ManufacturerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    medications?: boolean | Manufacturer$medicationsArgs<ExtArgs>
    _count?: boolean | ManufacturerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["manufacturer"]>

  export type ManufacturerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["manufacturer"]>

  export type ManufacturerSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type ManufacturerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medications?: boolean | Manufacturer$medicationsArgs<ExtArgs>
    _count?: boolean | ManufacturerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ManufacturerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ManufacturerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Manufacturer"
    objects: {
      medications: Prisma.$MedicationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
    }, ExtArgs["result"]["manufacturer"]>
    composites: {}
  }

  type ManufacturerGetPayload<S extends boolean | null | undefined | ManufacturerDefaultArgs> = $Result.GetResult<Prisma.$ManufacturerPayload, S>

  type ManufacturerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ManufacturerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ManufacturerCountAggregateInputType | true
    }

  export interface ManufacturerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Manufacturer'], meta: { name: 'Manufacturer' } }
    /**
     * Find zero or one Manufacturer that matches the filter.
     * @param {ManufacturerFindUniqueArgs} args - Arguments to find a Manufacturer
     * @example
     * // Get one Manufacturer
     * const manufacturer = await prisma.manufacturer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ManufacturerFindUniqueArgs>(args: SelectSubset<T, ManufacturerFindUniqueArgs<ExtArgs>>): Prisma__ManufacturerClient<$Result.GetResult<Prisma.$ManufacturerPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Manufacturer that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ManufacturerFindUniqueOrThrowArgs} args - Arguments to find a Manufacturer
     * @example
     * // Get one Manufacturer
     * const manufacturer = await prisma.manufacturer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ManufacturerFindUniqueOrThrowArgs>(args: SelectSubset<T, ManufacturerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ManufacturerClient<$Result.GetResult<Prisma.$ManufacturerPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Manufacturer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacturerFindFirstArgs} args - Arguments to find a Manufacturer
     * @example
     * // Get one Manufacturer
     * const manufacturer = await prisma.manufacturer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ManufacturerFindFirstArgs>(args?: SelectSubset<T, ManufacturerFindFirstArgs<ExtArgs>>): Prisma__ManufacturerClient<$Result.GetResult<Prisma.$ManufacturerPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Manufacturer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacturerFindFirstOrThrowArgs} args - Arguments to find a Manufacturer
     * @example
     * // Get one Manufacturer
     * const manufacturer = await prisma.manufacturer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ManufacturerFindFirstOrThrowArgs>(args?: SelectSubset<T, ManufacturerFindFirstOrThrowArgs<ExtArgs>>): Prisma__ManufacturerClient<$Result.GetResult<Prisma.$ManufacturerPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Manufacturers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacturerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Manufacturers
     * const manufacturers = await prisma.manufacturer.findMany()
     * 
     * // Get first 10 Manufacturers
     * const manufacturers = await prisma.manufacturer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const manufacturerWithIdOnly = await prisma.manufacturer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ManufacturerFindManyArgs>(args?: SelectSubset<T, ManufacturerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManufacturerPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Manufacturer.
     * @param {ManufacturerCreateArgs} args - Arguments to create a Manufacturer.
     * @example
     * // Create one Manufacturer
     * const Manufacturer = await prisma.manufacturer.create({
     *   data: {
     *     // ... data to create a Manufacturer
     *   }
     * })
     * 
     */
    create<T extends ManufacturerCreateArgs>(args: SelectSubset<T, ManufacturerCreateArgs<ExtArgs>>): Prisma__ManufacturerClient<$Result.GetResult<Prisma.$ManufacturerPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Manufacturers.
     * @param {ManufacturerCreateManyArgs} args - Arguments to create many Manufacturers.
     * @example
     * // Create many Manufacturers
     * const manufacturer = await prisma.manufacturer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ManufacturerCreateManyArgs>(args?: SelectSubset<T, ManufacturerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Manufacturers and returns the data saved in the database.
     * @param {ManufacturerCreateManyAndReturnArgs} args - Arguments to create many Manufacturers.
     * @example
     * // Create many Manufacturers
     * const manufacturer = await prisma.manufacturer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Manufacturers and only return the `id`
     * const manufacturerWithIdOnly = await prisma.manufacturer.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ManufacturerCreateManyAndReturnArgs>(args?: SelectSubset<T, ManufacturerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManufacturerPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Manufacturer.
     * @param {ManufacturerDeleteArgs} args - Arguments to delete one Manufacturer.
     * @example
     * // Delete one Manufacturer
     * const Manufacturer = await prisma.manufacturer.delete({
     *   where: {
     *     // ... filter to delete one Manufacturer
     *   }
     * })
     * 
     */
    delete<T extends ManufacturerDeleteArgs>(args: SelectSubset<T, ManufacturerDeleteArgs<ExtArgs>>): Prisma__ManufacturerClient<$Result.GetResult<Prisma.$ManufacturerPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Manufacturer.
     * @param {ManufacturerUpdateArgs} args - Arguments to update one Manufacturer.
     * @example
     * // Update one Manufacturer
     * const manufacturer = await prisma.manufacturer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ManufacturerUpdateArgs>(args: SelectSubset<T, ManufacturerUpdateArgs<ExtArgs>>): Prisma__ManufacturerClient<$Result.GetResult<Prisma.$ManufacturerPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Manufacturers.
     * @param {ManufacturerDeleteManyArgs} args - Arguments to filter Manufacturers to delete.
     * @example
     * // Delete a few Manufacturers
     * const { count } = await prisma.manufacturer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ManufacturerDeleteManyArgs>(args?: SelectSubset<T, ManufacturerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Manufacturers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacturerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Manufacturers
     * const manufacturer = await prisma.manufacturer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ManufacturerUpdateManyArgs>(args: SelectSubset<T, ManufacturerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Manufacturer.
     * @param {ManufacturerUpsertArgs} args - Arguments to update or create a Manufacturer.
     * @example
     * // Update or create a Manufacturer
     * const manufacturer = await prisma.manufacturer.upsert({
     *   create: {
     *     // ... data to create a Manufacturer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Manufacturer we want to update
     *   }
     * })
     */
    upsert<T extends ManufacturerUpsertArgs>(args: SelectSubset<T, ManufacturerUpsertArgs<ExtArgs>>): Prisma__ManufacturerClient<$Result.GetResult<Prisma.$ManufacturerPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Manufacturers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacturerCountArgs} args - Arguments to filter Manufacturers to count.
     * @example
     * // Count the number of Manufacturers
     * const count = await prisma.manufacturer.count({
     *   where: {
     *     // ... the filter for the Manufacturers we want to count
     *   }
     * })
    **/
    count<T extends ManufacturerCountArgs>(
      args?: Subset<T, ManufacturerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ManufacturerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Manufacturer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacturerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ManufacturerAggregateArgs>(args: Subset<T, ManufacturerAggregateArgs>): Prisma.PrismaPromise<GetManufacturerAggregateType<T>>

    /**
     * Group by Manufacturer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManufacturerGroupByArgs} args - Group by arguments.
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
      T extends ManufacturerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ManufacturerGroupByArgs['orderBy'] }
        : { orderBy?: ManufacturerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ManufacturerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetManufacturerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Manufacturer model
   */
  readonly fields: ManufacturerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Manufacturer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ManufacturerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medications<T extends Manufacturer$medicationsArgs<ExtArgs> = {}>(args?: Subset<T, Manufacturer$medicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Manufacturer model
   */ 
  interface ManufacturerFieldRefs {
    readonly id: FieldRef<"Manufacturer", 'String'>
    readonly name: FieldRef<"Manufacturer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Manufacturer findUnique
   */
  export type ManufacturerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manufacturer
     */
    select?: ManufacturerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManufacturerInclude<ExtArgs> | null
    /**
     * Filter, which Manufacturer to fetch.
     */
    where: ManufacturerWhereUniqueInput
  }

  /**
   * Manufacturer findUniqueOrThrow
   */
  export type ManufacturerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manufacturer
     */
    select?: ManufacturerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManufacturerInclude<ExtArgs> | null
    /**
     * Filter, which Manufacturer to fetch.
     */
    where: ManufacturerWhereUniqueInput
  }

  /**
   * Manufacturer findFirst
   */
  export type ManufacturerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manufacturer
     */
    select?: ManufacturerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManufacturerInclude<ExtArgs> | null
    /**
     * Filter, which Manufacturer to fetch.
     */
    where?: ManufacturerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Manufacturers to fetch.
     */
    orderBy?: ManufacturerOrderByWithRelationInput | ManufacturerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Manufacturers.
     */
    cursor?: ManufacturerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Manufacturers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Manufacturers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Manufacturers.
     */
    distinct?: ManufacturerScalarFieldEnum | ManufacturerScalarFieldEnum[]
  }

  /**
   * Manufacturer findFirstOrThrow
   */
  export type ManufacturerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manufacturer
     */
    select?: ManufacturerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManufacturerInclude<ExtArgs> | null
    /**
     * Filter, which Manufacturer to fetch.
     */
    where?: ManufacturerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Manufacturers to fetch.
     */
    orderBy?: ManufacturerOrderByWithRelationInput | ManufacturerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Manufacturers.
     */
    cursor?: ManufacturerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Manufacturers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Manufacturers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Manufacturers.
     */
    distinct?: ManufacturerScalarFieldEnum | ManufacturerScalarFieldEnum[]
  }

  /**
   * Manufacturer findMany
   */
  export type ManufacturerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manufacturer
     */
    select?: ManufacturerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManufacturerInclude<ExtArgs> | null
    /**
     * Filter, which Manufacturers to fetch.
     */
    where?: ManufacturerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Manufacturers to fetch.
     */
    orderBy?: ManufacturerOrderByWithRelationInput | ManufacturerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Manufacturers.
     */
    cursor?: ManufacturerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Manufacturers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Manufacturers.
     */
    skip?: number
    distinct?: ManufacturerScalarFieldEnum | ManufacturerScalarFieldEnum[]
  }

  /**
   * Manufacturer create
   */
  export type ManufacturerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manufacturer
     */
    select?: ManufacturerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManufacturerInclude<ExtArgs> | null
    /**
     * The data needed to create a Manufacturer.
     */
    data: XOR<ManufacturerCreateInput, ManufacturerUncheckedCreateInput>
  }

  /**
   * Manufacturer createMany
   */
  export type ManufacturerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Manufacturers.
     */
    data: ManufacturerCreateManyInput | ManufacturerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Manufacturer createManyAndReturn
   */
  export type ManufacturerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manufacturer
     */
    select?: ManufacturerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Manufacturers.
     */
    data: ManufacturerCreateManyInput | ManufacturerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Manufacturer update
   */
  export type ManufacturerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manufacturer
     */
    select?: ManufacturerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManufacturerInclude<ExtArgs> | null
    /**
     * The data needed to update a Manufacturer.
     */
    data: XOR<ManufacturerUpdateInput, ManufacturerUncheckedUpdateInput>
    /**
     * Choose, which Manufacturer to update.
     */
    where: ManufacturerWhereUniqueInput
  }

  /**
   * Manufacturer updateMany
   */
  export type ManufacturerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Manufacturers.
     */
    data: XOR<ManufacturerUpdateManyMutationInput, ManufacturerUncheckedUpdateManyInput>
    /**
     * Filter which Manufacturers to update
     */
    where?: ManufacturerWhereInput
  }

  /**
   * Manufacturer upsert
   */
  export type ManufacturerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manufacturer
     */
    select?: ManufacturerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManufacturerInclude<ExtArgs> | null
    /**
     * The filter to search for the Manufacturer to update in case it exists.
     */
    where: ManufacturerWhereUniqueInput
    /**
     * In case the Manufacturer found by the `where` argument doesn't exist, create a new Manufacturer with this data.
     */
    create: XOR<ManufacturerCreateInput, ManufacturerUncheckedCreateInput>
    /**
     * In case the Manufacturer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ManufacturerUpdateInput, ManufacturerUncheckedUpdateInput>
  }

  /**
   * Manufacturer delete
   */
  export type ManufacturerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manufacturer
     */
    select?: ManufacturerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManufacturerInclude<ExtArgs> | null
    /**
     * Filter which Manufacturer to delete.
     */
    where: ManufacturerWhereUniqueInput
  }

  /**
   * Manufacturer deleteMany
   */
  export type ManufacturerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Manufacturers to delete
     */
    where?: ManufacturerWhereInput
  }

  /**
   * Manufacturer.medications
   */
  export type Manufacturer$medicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    where?: MedicationWhereInput
    orderBy?: MedicationOrderByWithRelationInput | MedicationOrderByWithRelationInput[]
    cursor?: MedicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicationScalarFieldEnum | MedicationScalarFieldEnum[]
  }

  /**
   * Manufacturer without action
   */
  export type ManufacturerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manufacturer
     */
    select?: ManufacturerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManufacturerInclude<ExtArgs> | null
  }


  /**
   * Model District
   */

  export type AggregateDistrict = {
    _count: DistrictCountAggregateOutputType | null
    _min: DistrictMinAggregateOutputType | null
    _max: DistrictMaxAggregateOutputType | null
  }

  export type DistrictMinAggregateOutputType = {
    id: string | null
    name: string | null
    idProvince: string | null
  }

  export type DistrictMaxAggregateOutputType = {
    id: string | null
    name: string | null
    idProvince: string | null
  }

  export type DistrictCountAggregateOutputType = {
    id: number
    name: number
    idProvince: number
    _all: number
  }


  export type DistrictMinAggregateInputType = {
    id?: true
    name?: true
    idProvince?: true
  }

  export type DistrictMaxAggregateInputType = {
    id?: true
    name?: true
    idProvince?: true
  }

  export type DistrictCountAggregateInputType = {
    id?: true
    name?: true
    idProvince?: true
    _all?: true
  }

  export type DistrictAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which District to aggregate.
     */
    where?: DistrictWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Districts to fetch.
     */
    orderBy?: DistrictOrderByWithRelationInput | DistrictOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DistrictWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Districts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Districts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Districts
    **/
    _count?: true | DistrictCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DistrictMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DistrictMaxAggregateInputType
  }

  export type GetDistrictAggregateType<T extends DistrictAggregateArgs> = {
        [P in keyof T & keyof AggregateDistrict]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDistrict[P]>
      : GetScalarType<T[P], AggregateDistrict[P]>
  }




  export type DistrictGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DistrictWhereInput
    orderBy?: DistrictOrderByWithAggregationInput | DistrictOrderByWithAggregationInput[]
    by: DistrictScalarFieldEnum[] | DistrictScalarFieldEnum
    having?: DistrictScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DistrictCountAggregateInputType | true
    _min?: DistrictMinAggregateInputType
    _max?: DistrictMaxAggregateInputType
  }

  export type DistrictGroupByOutputType = {
    id: string
    name: string
    idProvince: string
    _count: DistrictCountAggregateOutputType | null
    _min: DistrictMinAggregateOutputType | null
    _max: DistrictMaxAggregateOutputType | null
  }

  type GetDistrictGroupByPayload<T extends DistrictGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DistrictGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DistrictGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DistrictGroupByOutputType[P]>
            : GetScalarType<T[P], DistrictGroupByOutputType[P]>
        }
      >
    >


  export type DistrictSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    idProvince?: boolean
    province?: boolean | ProvinceDefaultArgs<ExtArgs>
    establishments?: boolean | District$establishmentsArgs<ExtArgs>
    _count?: boolean | DistrictCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["district"]>

  export type DistrictSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    idProvince?: boolean
    province?: boolean | ProvinceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["district"]>

  export type DistrictSelectScalar = {
    id?: boolean
    name?: boolean
    idProvince?: boolean
  }

  export type DistrictInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    province?: boolean | ProvinceDefaultArgs<ExtArgs>
    establishments?: boolean | District$establishmentsArgs<ExtArgs>
    _count?: boolean | DistrictCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DistrictIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    province?: boolean | ProvinceDefaultArgs<ExtArgs>
  }

  export type $DistrictPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "District"
    objects: {
      province: Prisma.$ProvincePayload<ExtArgs>
      establishments: Prisma.$EstablishmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      idProvince: string
    }, ExtArgs["result"]["district"]>
    composites: {}
  }

  type DistrictGetPayload<S extends boolean | null | undefined | DistrictDefaultArgs> = $Result.GetResult<Prisma.$DistrictPayload, S>

  type DistrictCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DistrictFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DistrictCountAggregateInputType | true
    }

  export interface DistrictDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['District'], meta: { name: 'District' } }
    /**
     * Find zero or one District that matches the filter.
     * @param {DistrictFindUniqueArgs} args - Arguments to find a District
     * @example
     * // Get one District
     * const district = await prisma.district.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DistrictFindUniqueArgs>(args: SelectSubset<T, DistrictFindUniqueArgs<ExtArgs>>): Prisma__DistrictClient<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one District that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DistrictFindUniqueOrThrowArgs} args - Arguments to find a District
     * @example
     * // Get one District
     * const district = await prisma.district.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DistrictFindUniqueOrThrowArgs>(args: SelectSubset<T, DistrictFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DistrictClient<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first District that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictFindFirstArgs} args - Arguments to find a District
     * @example
     * // Get one District
     * const district = await prisma.district.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DistrictFindFirstArgs>(args?: SelectSubset<T, DistrictFindFirstArgs<ExtArgs>>): Prisma__DistrictClient<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first District that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictFindFirstOrThrowArgs} args - Arguments to find a District
     * @example
     * // Get one District
     * const district = await prisma.district.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DistrictFindFirstOrThrowArgs>(args?: SelectSubset<T, DistrictFindFirstOrThrowArgs<ExtArgs>>): Prisma__DistrictClient<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Districts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Districts
     * const districts = await prisma.district.findMany()
     * 
     * // Get first 10 Districts
     * const districts = await prisma.district.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const districtWithIdOnly = await prisma.district.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DistrictFindManyArgs>(args?: SelectSubset<T, DistrictFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a District.
     * @param {DistrictCreateArgs} args - Arguments to create a District.
     * @example
     * // Create one District
     * const District = await prisma.district.create({
     *   data: {
     *     // ... data to create a District
     *   }
     * })
     * 
     */
    create<T extends DistrictCreateArgs>(args: SelectSubset<T, DistrictCreateArgs<ExtArgs>>): Prisma__DistrictClient<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Districts.
     * @param {DistrictCreateManyArgs} args - Arguments to create many Districts.
     * @example
     * // Create many Districts
     * const district = await prisma.district.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DistrictCreateManyArgs>(args?: SelectSubset<T, DistrictCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Districts and returns the data saved in the database.
     * @param {DistrictCreateManyAndReturnArgs} args - Arguments to create many Districts.
     * @example
     * // Create many Districts
     * const district = await prisma.district.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Districts and only return the `id`
     * const districtWithIdOnly = await prisma.district.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DistrictCreateManyAndReturnArgs>(args?: SelectSubset<T, DistrictCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a District.
     * @param {DistrictDeleteArgs} args - Arguments to delete one District.
     * @example
     * // Delete one District
     * const District = await prisma.district.delete({
     *   where: {
     *     // ... filter to delete one District
     *   }
     * })
     * 
     */
    delete<T extends DistrictDeleteArgs>(args: SelectSubset<T, DistrictDeleteArgs<ExtArgs>>): Prisma__DistrictClient<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one District.
     * @param {DistrictUpdateArgs} args - Arguments to update one District.
     * @example
     * // Update one District
     * const district = await prisma.district.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DistrictUpdateArgs>(args: SelectSubset<T, DistrictUpdateArgs<ExtArgs>>): Prisma__DistrictClient<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Districts.
     * @param {DistrictDeleteManyArgs} args - Arguments to filter Districts to delete.
     * @example
     * // Delete a few Districts
     * const { count } = await prisma.district.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DistrictDeleteManyArgs>(args?: SelectSubset<T, DistrictDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Districts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Districts
     * const district = await prisma.district.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DistrictUpdateManyArgs>(args: SelectSubset<T, DistrictUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one District.
     * @param {DistrictUpsertArgs} args - Arguments to update or create a District.
     * @example
     * // Update or create a District
     * const district = await prisma.district.upsert({
     *   create: {
     *     // ... data to create a District
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the District we want to update
     *   }
     * })
     */
    upsert<T extends DistrictUpsertArgs>(args: SelectSubset<T, DistrictUpsertArgs<ExtArgs>>): Prisma__DistrictClient<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Districts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictCountArgs} args - Arguments to filter Districts to count.
     * @example
     * // Count the number of Districts
     * const count = await prisma.district.count({
     *   where: {
     *     // ... the filter for the Districts we want to count
     *   }
     * })
    **/
    count<T extends DistrictCountArgs>(
      args?: Subset<T, DistrictCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DistrictCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a District.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DistrictAggregateArgs>(args: Subset<T, DistrictAggregateArgs>): Prisma.PrismaPromise<GetDistrictAggregateType<T>>

    /**
     * Group by District.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistrictGroupByArgs} args - Group by arguments.
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
      T extends DistrictGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DistrictGroupByArgs['orderBy'] }
        : { orderBy?: DistrictGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DistrictGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDistrictGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the District model
   */
  readonly fields: DistrictFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for District.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DistrictClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    province<T extends ProvinceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProvinceDefaultArgs<ExtArgs>>): Prisma__ProvinceClient<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    establishments<T extends District$establishmentsArgs<ExtArgs> = {}>(args?: Subset<T, District$establishmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstablishmentPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the District model
   */ 
  interface DistrictFieldRefs {
    readonly id: FieldRef<"District", 'String'>
    readonly name: FieldRef<"District", 'String'>
    readonly idProvince: FieldRef<"District", 'String'>
  }
    

  // Custom InputTypes
  /**
   * District findUnique
   */
  export type DistrictFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrictInclude<ExtArgs> | null
    /**
     * Filter, which District to fetch.
     */
    where: DistrictWhereUniqueInput
  }

  /**
   * District findUniqueOrThrow
   */
  export type DistrictFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrictInclude<ExtArgs> | null
    /**
     * Filter, which District to fetch.
     */
    where: DistrictWhereUniqueInput
  }

  /**
   * District findFirst
   */
  export type DistrictFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrictInclude<ExtArgs> | null
    /**
     * Filter, which District to fetch.
     */
    where?: DistrictWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Districts to fetch.
     */
    orderBy?: DistrictOrderByWithRelationInput | DistrictOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Districts.
     */
    cursor?: DistrictWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Districts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Districts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Districts.
     */
    distinct?: DistrictScalarFieldEnum | DistrictScalarFieldEnum[]
  }

  /**
   * District findFirstOrThrow
   */
  export type DistrictFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrictInclude<ExtArgs> | null
    /**
     * Filter, which District to fetch.
     */
    where?: DistrictWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Districts to fetch.
     */
    orderBy?: DistrictOrderByWithRelationInput | DistrictOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Districts.
     */
    cursor?: DistrictWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Districts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Districts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Districts.
     */
    distinct?: DistrictScalarFieldEnum | DistrictScalarFieldEnum[]
  }

  /**
   * District findMany
   */
  export type DistrictFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrictInclude<ExtArgs> | null
    /**
     * Filter, which Districts to fetch.
     */
    where?: DistrictWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Districts to fetch.
     */
    orderBy?: DistrictOrderByWithRelationInput | DistrictOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Districts.
     */
    cursor?: DistrictWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Districts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Districts.
     */
    skip?: number
    distinct?: DistrictScalarFieldEnum | DistrictScalarFieldEnum[]
  }

  /**
   * District create
   */
  export type DistrictCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrictInclude<ExtArgs> | null
    /**
     * The data needed to create a District.
     */
    data: XOR<DistrictCreateInput, DistrictUncheckedCreateInput>
  }

  /**
   * District createMany
   */
  export type DistrictCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Districts.
     */
    data: DistrictCreateManyInput | DistrictCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * District createManyAndReturn
   */
  export type DistrictCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Districts.
     */
    data: DistrictCreateManyInput | DistrictCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrictIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * District update
   */
  export type DistrictUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrictInclude<ExtArgs> | null
    /**
     * The data needed to update a District.
     */
    data: XOR<DistrictUpdateInput, DistrictUncheckedUpdateInput>
    /**
     * Choose, which District to update.
     */
    where: DistrictWhereUniqueInput
  }

  /**
   * District updateMany
   */
  export type DistrictUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Districts.
     */
    data: XOR<DistrictUpdateManyMutationInput, DistrictUncheckedUpdateManyInput>
    /**
     * Filter which Districts to update
     */
    where?: DistrictWhereInput
  }

  /**
   * District upsert
   */
  export type DistrictUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrictInclude<ExtArgs> | null
    /**
     * The filter to search for the District to update in case it exists.
     */
    where: DistrictWhereUniqueInput
    /**
     * In case the District found by the `where` argument doesn't exist, create a new District with this data.
     */
    create: XOR<DistrictCreateInput, DistrictUncheckedCreateInput>
    /**
     * In case the District was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DistrictUpdateInput, DistrictUncheckedUpdateInput>
  }

  /**
   * District delete
   */
  export type DistrictDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrictInclude<ExtArgs> | null
    /**
     * Filter which District to delete.
     */
    where: DistrictWhereUniqueInput
  }

  /**
   * District deleteMany
   */
  export type DistrictDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Districts to delete
     */
    where?: DistrictWhereInput
  }

  /**
   * District.establishments
   */
  export type District$establishmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Establishment
     */
    select?: EstablishmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentInclude<ExtArgs> | null
    where?: EstablishmentWhereInput
    orderBy?: EstablishmentOrderByWithRelationInput | EstablishmentOrderByWithRelationInput[]
    cursor?: EstablishmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EstablishmentScalarFieldEnum | EstablishmentScalarFieldEnum[]
  }

  /**
   * District without action
   */
  export type DistrictDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrictInclude<ExtArgs> | null
  }


  /**
   * Model Province
   */

  export type AggregateProvince = {
    _count: ProvinceCountAggregateOutputType | null
    _min: ProvinceMinAggregateOutputType | null
    _max: ProvinceMaxAggregateOutputType | null
  }

  export type ProvinceMinAggregateOutputType = {
    id: string | null
    name: string | null
    idDepartment: string | null
  }

  export type ProvinceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    idDepartment: string | null
  }

  export type ProvinceCountAggregateOutputType = {
    id: number
    name: number
    idDepartment: number
    _all: number
  }


  export type ProvinceMinAggregateInputType = {
    id?: true
    name?: true
    idDepartment?: true
  }

  export type ProvinceMaxAggregateInputType = {
    id?: true
    name?: true
    idDepartment?: true
  }

  export type ProvinceCountAggregateInputType = {
    id?: true
    name?: true
    idDepartment?: true
    _all?: true
  }

  export type ProvinceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Province to aggregate.
     */
    where?: ProvinceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Provinces to fetch.
     */
    orderBy?: ProvinceOrderByWithRelationInput | ProvinceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProvinceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Provinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Provinces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Provinces
    **/
    _count?: true | ProvinceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProvinceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProvinceMaxAggregateInputType
  }

  export type GetProvinceAggregateType<T extends ProvinceAggregateArgs> = {
        [P in keyof T & keyof AggregateProvince]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProvince[P]>
      : GetScalarType<T[P], AggregateProvince[P]>
  }




  export type ProvinceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProvinceWhereInput
    orderBy?: ProvinceOrderByWithAggregationInput | ProvinceOrderByWithAggregationInput[]
    by: ProvinceScalarFieldEnum[] | ProvinceScalarFieldEnum
    having?: ProvinceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProvinceCountAggregateInputType | true
    _min?: ProvinceMinAggregateInputType
    _max?: ProvinceMaxAggregateInputType
  }

  export type ProvinceGroupByOutputType = {
    id: string
    name: string
    idDepartment: string
    _count: ProvinceCountAggregateOutputType | null
    _min: ProvinceMinAggregateOutputType | null
    _max: ProvinceMaxAggregateOutputType | null
  }

  type GetProvinceGroupByPayload<T extends ProvinceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProvinceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProvinceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProvinceGroupByOutputType[P]>
            : GetScalarType<T[P], ProvinceGroupByOutputType[P]>
        }
      >
    >


  export type ProvinceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    idDepartment?: boolean
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    districts?: boolean | Province$districtsArgs<ExtArgs>
    _count?: boolean | ProvinceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["province"]>

  export type ProvinceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    idDepartment?: boolean
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["province"]>

  export type ProvinceSelectScalar = {
    id?: boolean
    name?: boolean
    idDepartment?: boolean
  }

  export type ProvinceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
    districts?: boolean | Province$districtsArgs<ExtArgs>
    _count?: boolean | ProvinceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProvinceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }

  export type $ProvincePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Province"
    objects: {
      department: Prisma.$DepartmentPayload<ExtArgs>
      districts: Prisma.$DistrictPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      idDepartment: string
    }, ExtArgs["result"]["province"]>
    composites: {}
  }

  type ProvinceGetPayload<S extends boolean | null | undefined | ProvinceDefaultArgs> = $Result.GetResult<Prisma.$ProvincePayload, S>

  type ProvinceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProvinceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProvinceCountAggregateInputType | true
    }

  export interface ProvinceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Province'], meta: { name: 'Province' } }
    /**
     * Find zero or one Province that matches the filter.
     * @param {ProvinceFindUniqueArgs} args - Arguments to find a Province
     * @example
     * // Get one Province
     * const province = await prisma.province.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProvinceFindUniqueArgs>(args: SelectSubset<T, ProvinceFindUniqueArgs<ExtArgs>>): Prisma__ProvinceClient<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Province that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProvinceFindUniqueOrThrowArgs} args - Arguments to find a Province
     * @example
     * // Get one Province
     * const province = await prisma.province.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProvinceFindUniqueOrThrowArgs>(args: SelectSubset<T, ProvinceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProvinceClient<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Province that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinceFindFirstArgs} args - Arguments to find a Province
     * @example
     * // Get one Province
     * const province = await prisma.province.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProvinceFindFirstArgs>(args?: SelectSubset<T, ProvinceFindFirstArgs<ExtArgs>>): Prisma__ProvinceClient<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Province that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinceFindFirstOrThrowArgs} args - Arguments to find a Province
     * @example
     * // Get one Province
     * const province = await prisma.province.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProvinceFindFirstOrThrowArgs>(args?: SelectSubset<T, ProvinceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProvinceClient<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Provinces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Provinces
     * const provinces = await prisma.province.findMany()
     * 
     * // Get first 10 Provinces
     * const provinces = await prisma.province.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const provinceWithIdOnly = await prisma.province.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProvinceFindManyArgs>(args?: SelectSubset<T, ProvinceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Province.
     * @param {ProvinceCreateArgs} args - Arguments to create a Province.
     * @example
     * // Create one Province
     * const Province = await prisma.province.create({
     *   data: {
     *     // ... data to create a Province
     *   }
     * })
     * 
     */
    create<T extends ProvinceCreateArgs>(args: SelectSubset<T, ProvinceCreateArgs<ExtArgs>>): Prisma__ProvinceClient<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Provinces.
     * @param {ProvinceCreateManyArgs} args - Arguments to create many Provinces.
     * @example
     * // Create many Provinces
     * const province = await prisma.province.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProvinceCreateManyArgs>(args?: SelectSubset<T, ProvinceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Provinces and returns the data saved in the database.
     * @param {ProvinceCreateManyAndReturnArgs} args - Arguments to create many Provinces.
     * @example
     * // Create many Provinces
     * const province = await prisma.province.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Provinces and only return the `id`
     * const provinceWithIdOnly = await prisma.province.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProvinceCreateManyAndReturnArgs>(args?: SelectSubset<T, ProvinceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Province.
     * @param {ProvinceDeleteArgs} args - Arguments to delete one Province.
     * @example
     * // Delete one Province
     * const Province = await prisma.province.delete({
     *   where: {
     *     // ... filter to delete one Province
     *   }
     * })
     * 
     */
    delete<T extends ProvinceDeleteArgs>(args: SelectSubset<T, ProvinceDeleteArgs<ExtArgs>>): Prisma__ProvinceClient<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Province.
     * @param {ProvinceUpdateArgs} args - Arguments to update one Province.
     * @example
     * // Update one Province
     * const province = await prisma.province.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProvinceUpdateArgs>(args: SelectSubset<T, ProvinceUpdateArgs<ExtArgs>>): Prisma__ProvinceClient<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Provinces.
     * @param {ProvinceDeleteManyArgs} args - Arguments to filter Provinces to delete.
     * @example
     * // Delete a few Provinces
     * const { count } = await prisma.province.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProvinceDeleteManyArgs>(args?: SelectSubset<T, ProvinceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Provinces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Provinces
     * const province = await prisma.province.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProvinceUpdateManyArgs>(args: SelectSubset<T, ProvinceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Province.
     * @param {ProvinceUpsertArgs} args - Arguments to update or create a Province.
     * @example
     * // Update or create a Province
     * const province = await prisma.province.upsert({
     *   create: {
     *     // ... data to create a Province
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Province we want to update
     *   }
     * })
     */
    upsert<T extends ProvinceUpsertArgs>(args: SelectSubset<T, ProvinceUpsertArgs<ExtArgs>>): Prisma__ProvinceClient<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Provinces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinceCountArgs} args - Arguments to filter Provinces to count.
     * @example
     * // Count the number of Provinces
     * const count = await prisma.province.count({
     *   where: {
     *     // ... the filter for the Provinces we want to count
     *   }
     * })
    **/
    count<T extends ProvinceCountArgs>(
      args?: Subset<T, ProvinceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProvinceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Province.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProvinceAggregateArgs>(args: Subset<T, ProvinceAggregateArgs>): Prisma.PrismaPromise<GetProvinceAggregateType<T>>

    /**
     * Group by Province.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProvinceGroupByArgs} args - Group by arguments.
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
      T extends ProvinceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProvinceGroupByArgs['orderBy'] }
        : { orderBy?: ProvinceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProvinceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProvinceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Province model
   */
  readonly fields: ProvinceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Province.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProvinceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    department<T extends DepartmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepartmentDefaultArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    districts<T extends Province$districtsArgs<ExtArgs> = {}>(args?: Subset<T, Province$districtsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistrictPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Province model
   */ 
  interface ProvinceFieldRefs {
    readonly id: FieldRef<"Province", 'String'>
    readonly name: FieldRef<"Province", 'String'>
    readonly idDepartment: FieldRef<"Province", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Province findUnique
   */
  export type ProvinceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
    /**
     * Filter, which Province to fetch.
     */
    where: ProvinceWhereUniqueInput
  }

  /**
   * Province findUniqueOrThrow
   */
  export type ProvinceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
    /**
     * Filter, which Province to fetch.
     */
    where: ProvinceWhereUniqueInput
  }

  /**
   * Province findFirst
   */
  export type ProvinceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
    /**
     * Filter, which Province to fetch.
     */
    where?: ProvinceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Provinces to fetch.
     */
    orderBy?: ProvinceOrderByWithRelationInput | ProvinceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Provinces.
     */
    cursor?: ProvinceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Provinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Provinces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Provinces.
     */
    distinct?: ProvinceScalarFieldEnum | ProvinceScalarFieldEnum[]
  }

  /**
   * Province findFirstOrThrow
   */
  export type ProvinceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
    /**
     * Filter, which Province to fetch.
     */
    where?: ProvinceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Provinces to fetch.
     */
    orderBy?: ProvinceOrderByWithRelationInput | ProvinceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Provinces.
     */
    cursor?: ProvinceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Provinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Provinces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Provinces.
     */
    distinct?: ProvinceScalarFieldEnum | ProvinceScalarFieldEnum[]
  }

  /**
   * Province findMany
   */
  export type ProvinceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
    /**
     * Filter, which Provinces to fetch.
     */
    where?: ProvinceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Provinces to fetch.
     */
    orderBy?: ProvinceOrderByWithRelationInput | ProvinceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Provinces.
     */
    cursor?: ProvinceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Provinces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Provinces.
     */
    skip?: number
    distinct?: ProvinceScalarFieldEnum | ProvinceScalarFieldEnum[]
  }

  /**
   * Province create
   */
  export type ProvinceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
    /**
     * The data needed to create a Province.
     */
    data: XOR<ProvinceCreateInput, ProvinceUncheckedCreateInput>
  }

  /**
   * Province createMany
   */
  export type ProvinceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Provinces.
     */
    data: ProvinceCreateManyInput | ProvinceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Province createManyAndReturn
   */
  export type ProvinceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Provinces.
     */
    data: ProvinceCreateManyInput | ProvinceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Province update
   */
  export type ProvinceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
    /**
     * The data needed to update a Province.
     */
    data: XOR<ProvinceUpdateInput, ProvinceUncheckedUpdateInput>
    /**
     * Choose, which Province to update.
     */
    where: ProvinceWhereUniqueInput
  }

  /**
   * Province updateMany
   */
  export type ProvinceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Provinces.
     */
    data: XOR<ProvinceUpdateManyMutationInput, ProvinceUncheckedUpdateManyInput>
    /**
     * Filter which Provinces to update
     */
    where?: ProvinceWhereInput
  }

  /**
   * Province upsert
   */
  export type ProvinceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
    /**
     * The filter to search for the Province to update in case it exists.
     */
    where: ProvinceWhereUniqueInput
    /**
     * In case the Province found by the `where` argument doesn't exist, create a new Province with this data.
     */
    create: XOR<ProvinceCreateInput, ProvinceUncheckedCreateInput>
    /**
     * In case the Province was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProvinceUpdateInput, ProvinceUncheckedUpdateInput>
  }

  /**
   * Province delete
   */
  export type ProvinceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
    /**
     * Filter which Province to delete.
     */
    where: ProvinceWhereUniqueInput
  }

  /**
   * Province deleteMany
   */
  export type ProvinceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Provinces to delete
     */
    where?: ProvinceWhereInput
  }

  /**
   * Province.districts
   */
  export type Province$districtsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the District
     */
    select?: DistrictSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistrictInclude<ExtArgs> | null
    where?: DistrictWhereInput
    orderBy?: DistrictOrderByWithRelationInput | DistrictOrderByWithRelationInput[]
    cursor?: DistrictWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DistrictScalarFieldEnum | DistrictScalarFieldEnum[]
  }

  /**
   * Province without action
   */
  export type ProvinceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
  }


  /**
   * Model Department
   */

  export type AggregateDepartment = {
    _count: DepartmentCountAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  export type DepartmentMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type DepartmentMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type DepartmentCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type DepartmentMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type DepartmentMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type DepartmentCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type DepartmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Department to aggregate.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Departments
    **/
    _count?: true | DepartmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentMaxAggregateInputType
  }

  export type GetDepartmentAggregateType<T extends DepartmentAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartment[P]>
      : GetScalarType<T[P], AggregateDepartment[P]>
  }




  export type DepartmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentWhereInput
    orderBy?: DepartmentOrderByWithAggregationInput | DepartmentOrderByWithAggregationInput[]
    by: DepartmentScalarFieldEnum[] | DepartmentScalarFieldEnum
    having?: DepartmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentCountAggregateInputType | true
    _min?: DepartmentMinAggregateInputType
    _max?: DepartmentMaxAggregateInputType
  }

  export type DepartmentGroupByOutputType = {
    id: string
    name: string
    _count: DepartmentCountAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  type GetDepartmentGroupByPayload<T extends DepartmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
        }
      >
    >


  export type DepartmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    provinces?: boolean | Department$provincesArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type DepartmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provinces?: boolean | Department$provincesArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DepartmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DepartmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Department"
    objects: {
      provinces: Prisma.$ProvincePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["department"]>
    composites: {}
  }

  type DepartmentGetPayload<S extends boolean | null | undefined | DepartmentDefaultArgs> = $Result.GetResult<Prisma.$DepartmentPayload, S>

  type DepartmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DepartmentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DepartmentCountAggregateInputType | true
    }

  export interface DepartmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Department'], meta: { name: 'Department' } }
    /**
     * Find zero or one Department that matches the filter.
     * @param {DepartmentFindUniqueArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepartmentFindUniqueArgs>(args: SelectSubset<T, DepartmentFindUniqueArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Department that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DepartmentFindUniqueOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepartmentFindUniqueOrThrowArgs>(args: SelectSubset<T, DepartmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Department that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepartmentFindFirstArgs>(args?: SelectSubset<T, DepartmentFindFirstArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Department that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepartmentFindFirstOrThrowArgs>(args?: SelectSubset<T, DepartmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departments
     * const departments = await prisma.department.findMany()
     * 
     * // Get first 10 Departments
     * const departments = await prisma.department.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const departmentWithIdOnly = await prisma.department.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DepartmentFindManyArgs>(args?: SelectSubset<T, DepartmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Department.
     * @param {DepartmentCreateArgs} args - Arguments to create a Department.
     * @example
     * // Create one Department
     * const Department = await prisma.department.create({
     *   data: {
     *     // ... data to create a Department
     *   }
     * })
     * 
     */
    create<T extends DepartmentCreateArgs>(args: SelectSubset<T, DepartmentCreateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Departments.
     * @param {DepartmentCreateManyArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepartmentCreateManyArgs>(args?: SelectSubset<T, DepartmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Departments and returns the data saved in the database.
     * @param {DepartmentCreateManyAndReturnArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Departments and only return the `id`
     * const departmentWithIdOnly = await prisma.department.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DepartmentCreateManyAndReturnArgs>(args?: SelectSubset<T, DepartmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Department.
     * @param {DepartmentDeleteArgs} args - Arguments to delete one Department.
     * @example
     * // Delete one Department
     * const Department = await prisma.department.delete({
     *   where: {
     *     // ... filter to delete one Department
     *   }
     * })
     * 
     */
    delete<T extends DepartmentDeleteArgs>(args: SelectSubset<T, DepartmentDeleteArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Department.
     * @param {DepartmentUpdateArgs} args - Arguments to update one Department.
     * @example
     * // Update one Department
     * const department = await prisma.department.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepartmentUpdateArgs>(args: SelectSubset<T, DepartmentUpdateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Departments.
     * @param {DepartmentDeleteManyArgs} args - Arguments to filter Departments to delete.
     * @example
     * // Delete a few Departments
     * const { count } = await prisma.department.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepartmentDeleteManyArgs>(args?: SelectSubset<T, DepartmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepartmentUpdateManyArgs>(args: SelectSubset<T, DepartmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Department.
     * @param {DepartmentUpsertArgs} args - Arguments to update or create a Department.
     * @example
     * // Update or create a Department
     * const department = await prisma.department.upsert({
     *   create: {
     *     // ... data to create a Department
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Department we want to update
     *   }
     * })
     */
    upsert<T extends DepartmentUpsertArgs>(args: SelectSubset<T, DepartmentUpsertArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentCountArgs} args - Arguments to filter Departments to count.
     * @example
     * // Count the number of Departments
     * const count = await prisma.department.count({
     *   where: {
     *     // ... the filter for the Departments we want to count
     *   }
     * })
    **/
    count<T extends DepartmentCountArgs>(
      args?: Subset<T, DepartmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DepartmentAggregateArgs>(args: Subset<T, DepartmentAggregateArgs>): Prisma.PrismaPromise<GetDepartmentAggregateType<T>>

    /**
     * Group by Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentGroupByArgs} args - Group by arguments.
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
      T extends DepartmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartmentGroupByArgs['orderBy'] }
        : { orderBy?: DepartmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DepartmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Department model
   */
  readonly fields: DepartmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Department.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepartmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    provinces<T extends Department$provincesArgs<ExtArgs> = {}>(args?: Subset<T, Department$provincesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProvincePayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Department model
   */ 
  interface DepartmentFieldRefs {
    readonly id: FieldRef<"Department", 'String'>
    readonly name: FieldRef<"Department", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Department findUnique
   */
  export type DepartmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findUniqueOrThrow
   */
  export type DepartmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findFirst
   */
  export type DepartmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findFirstOrThrow
   */
  export type DepartmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findMany
   */
  export type DepartmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department create
   */
  export type DepartmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Department.
     */
    data: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
  }

  /**
   * Department createMany
   */
  export type DepartmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Department createManyAndReturn
   */
  export type DepartmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Department update
   */
  export type DepartmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Department.
     */
    data: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
    /**
     * Choose, which Department to update.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department updateMany
   */
  export type DepartmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
  }

  /**
   * Department upsert
   */
  export type DepartmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Department to update in case it exists.
     */
    where: DepartmentWhereUniqueInput
    /**
     * In case the Department found by the `where` argument doesn't exist, create a new Department with this data.
     */
    create: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
    /**
     * In case the Department was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
  }

  /**
   * Department delete
   */
  export type DepartmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter which Department to delete.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department deleteMany
   */
  export type DepartmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departments to delete
     */
    where?: DepartmentWhereInput
  }

  /**
   * Department.provinces
   */
  export type Department$provincesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Province
     */
    select?: ProvinceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProvinceInclude<ExtArgs> | null
    where?: ProvinceWhereInput
    orderBy?: ProvinceOrderByWithRelationInput | ProvinceOrderByWithRelationInput[]
    cursor?: ProvinceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProvinceScalarFieldEnum | ProvinceScalarFieldEnum[]
  }

  /**
   * Department without action
   */
  export type DepartmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PriceScalarFieldEnum: {
    id: 'id',
    idEstablishment: 'idEstablishment',
    idProduct: 'idProduct',
    prices: 'prices',
    updateAt: 'updateAt'
  };

  export type PriceScalarFieldEnum = (typeof PriceScalarFieldEnum)[keyof typeof PriceScalarFieldEnum]


  export const FamilyScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type FamilyScalarFieldEnum = (typeof FamilyScalarFieldEnum)[keyof typeof FamilyScalarFieldEnum]


  export const SubFamilyScalarFieldEnum: {
    id: 'id',
    group: 'group',
    idFamily: 'idFamily',
    name: 'name',
    nameSuggestion: 'nameSuggestion'
  };

  export type SubFamilyScalarFieldEnum = (typeof SubFamilyScalarFieldEnum)[keyof typeof SubFamilyScalarFieldEnum]


  export const MedicationScalarFieldEnum: {
    id: 'id',
    concentration: 'concentration',
    fractions: 'fractions',
    idPharmaceuticalForm: 'idPharmaceuticalForm',
    idManufacturer: 'idManufacturer',
    idSubFamily: 'idSubFamily',
    name: 'name',
    totalActivePrinciple: 'totalActivePrinciple'
  };

  export type MedicationScalarFieldEnum = (typeof MedicationScalarFieldEnum)[keyof typeof MedicationScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    idMedication: 'idMedication',
    name: 'name'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const PharmaceuticalFormScalarFieldEnum: {
    id: 'id',
    group: 'group',
    groupCode: 'groupCode',
    name: 'name'
  };

  export type PharmaceuticalFormScalarFieldEnum = (typeof PharmaceuticalFormScalarFieldEnum)[keyof typeof PharmaceuticalFormScalarFieldEnum]


  export const EstablishmentScalarFieldEnum: {
    id: 'id',
    address: 'address',
    name: 'name',
    type: 'type',
    typeId: 'typeId',
    idDistrict: 'idDistrict',
    phone: 'phone'
  };

  export type EstablishmentScalarFieldEnum = (typeof EstablishmentScalarFieldEnum)[keyof typeof EstablishmentScalarFieldEnum]


  export const ManufacturerScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type ManufacturerScalarFieldEnum = (typeof ManufacturerScalarFieldEnum)[keyof typeof ManufacturerScalarFieldEnum]


  export const DistrictScalarFieldEnum: {
    id: 'id',
    name: 'name',
    idProvince: 'idProvince'
  };

  export type DistrictScalarFieldEnum = (typeof DistrictScalarFieldEnum)[keyof typeof DistrictScalarFieldEnum]


  export const ProvinceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    idDepartment: 'idDepartment'
  };

  export type ProvinceScalarFieldEnum = (typeof ProvinceScalarFieldEnum)[keyof typeof ProvinceScalarFieldEnum]


  export const DepartmentScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type DepartmentScalarFieldEnum = (typeof DepartmentScalarFieldEnum)[keyof typeof DepartmentScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type PriceWhereInput = {
    AND?: PriceWhereInput | PriceWhereInput[]
    OR?: PriceWhereInput[]
    NOT?: PriceWhereInput | PriceWhereInput[]
    id?: StringFilter<"Price"> | string
    idEstablishment?: StringFilter<"Price"> | string
    idProduct?: StringFilter<"Price"> | string
    prices?: DecimalNullableListFilter<"Price">
    updateAt?: StringFilter<"Price"> | string
    establishment?: XOR<EstablishmentRelationFilter, EstablishmentWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type PriceOrderByWithRelationInput = {
    id?: SortOrder
    idEstablishment?: SortOrder
    idProduct?: SortOrder
    prices?: SortOrder
    updateAt?: SortOrder
    establishment?: EstablishmentOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type PriceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PriceWhereInput | PriceWhereInput[]
    OR?: PriceWhereInput[]
    NOT?: PriceWhereInput | PriceWhereInput[]
    idEstablishment?: StringFilter<"Price"> | string
    idProduct?: StringFilter<"Price"> | string
    prices?: DecimalNullableListFilter<"Price">
    updateAt?: StringFilter<"Price"> | string
    establishment?: XOR<EstablishmentRelationFilter, EstablishmentWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }, "id" | "id">

  export type PriceOrderByWithAggregationInput = {
    id?: SortOrder
    idEstablishment?: SortOrder
    idProduct?: SortOrder
    prices?: SortOrder
    updateAt?: SortOrder
    _count?: PriceCountOrderByAggregateInput
    _avg?: PriceAvgOrderByAggregateInput
    _max?: PriceMaxOrderByAggregateInput
    _min?: PriceMinOrderByAggregateInput
    _sum?: PriceSumOrderByAggregateInput
  }

  export type PriceScalarWhereWithAggregatesInput = {
    AND?: PriceScalarWhereWithAggregatesInput | PriceScalarWhereWithAggregatesInput[]
    OR?: PriceScalarWhereWithAggregatesInput[]
    NOT?: PriceScalarWhereWithAggregatesInput | PriceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Price"> | string
    idEstablishment?: StringWithAggregatesFilter<"Price"> | string
    idProduct?: StringWithAggregatesFilter<"Price"> | string
    prices?: DecimalNullableListFilter<"Price">
    updateAt?: StringWithAggregatesFilter<"Price"> | string
  }

  export type FamilyWhereInput = {
    AND?: FamilyWhereInput | FamilyWhereInput[]
    OR?: FamilyWhereInput[]
    NOT?: FamilyWhereInput | FamilyWhereInput[]
    id?: StringFilter<"Family"> | string
    name?: StringFilter<"Family"> | string
    subFamilies?: SubFamilyListRelationFilter
  }

  export type FamilyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    subFamilies?: SubFamilyOrderByRelationAggregateInput
  }

  export type FamilyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FamilyWhereInput | FamilyWhereInput[]
    OR?: FamilyWhereInput[]
    NOT?: FamilyWhereInput | FamilyWhereInput[]
    name?: StringFilter<"Family"> | string
    subFamilies?: SubFamilyListRelationFilter
  }, "id" | "id">

  export type FamilyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: FamilyCountOrderByAggregateInput
    _max?: FamilyMaxOrderByAggregateInput
    _min?: FamilyMinOrderByAggregateInput
  }

  export type FamilyScalarWhereWithAggregatesInput = {
    AND?: FamilyScalarWhereWithAggregatesInput | FamilyScalarWhereWithAggregatesInput[]
    OR?: FamilyScalarWhereWithAggregatesInput[]
    NOT?: FamilyScalarWhereWithAggregatesInput | FamilyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Family"> | string
    name?: StringWithAggregatesFilter<"Family"> | string
  }

  export type SubFamilyWhereInput = {
    AND?: SubFamilyWhereInput | SubFamilyWhereInput[]
    OR?: SubFamilyWhereInput[]
    NOT?: SubFamilyWhereInput | SubFamilyWhereInput[]
    id?: StringFilter<"SubFamily"> | string
    group?: StringFilter<"SubFamily"> | string
    idFamily?: StringFilter<"SubFamily"> | string
    name?: StringFilter<"SubFamily"> | string
    nameSuggestion?: StringFilter<"SubFamily"> | string
    medications?: MedicationListRelationFilter
    family?: XOR<FamilyRelationFilter, FamilyWhereInput>
  }

  export type SubFamilyOrderByWithRelationInput = {
    id?: SortOrder
    group?: SortOrder
    idFamily?: SortOrder
    name?: SortOrder
    nameSuggestion?: SortOrder
    medications?: MedicationOrderByRelationAggregateInput
    family?: FamilyOrderByWithRelationInput
  }

  export type SubFamilyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubFamilyWhereInput | SubFamilyWhereInput[]
    OR?: SubFamilyWhereInput[]
    NOT?: SubFamilyWhereInput | SubFamilyWhereInput[]
    group?: StringFilter<"SubFamily"> | string
    idFamily?: StringFilter<"SubFamily"> | string
    name?: StringFilter<"SubFamily"> | string
    nameSuggestion?: StringFilter<"SubFamily"> | string
    medications?: MedicationListRelationFilter
    family?: XOR<FamilyRelationFilter, FamilyWhereInput>
  }, "id" | "id">

  export type SubFamilyOrderByWithAggregationInput = {
    id?: SortOrder
    group?: SortOrder
    idFamily?: SortOrder
    name?: SortOrder
    nameSuggestion?: SortOrder
    _count?: SubFamilyCountOrderByAggregateInput
    _max?: SubFamilyMaxOrderByAggregateInput
    _min?: SubFamilyMinOrderByAggregateInput
  }

  export type SubFamilyScalarWhereWithAggregatesInput = {
    AND?: SubFamilyScalarWhereWithAggregatesInput | SubFamilyScalarWhereWithAggregatesInput[]
    OR?: SubFamilyScalarWhereWithAggregatesInput[]
    NOT?: SubFamilyScalarWhereWithAggregatesInput | SubFamilyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SubFamily"> | string
    group?: StringWithAggregatesFilter<"SubFamily"> | string
    idFamily?: StringWithAggregatesFilter<"SubFamily"> | string
    name?: StringWithAggregatesFilter<"SubFamily"> | string
    nameSuggestion?: StringWithAggregatesFilter<"SubFamily"> | string
  }

  export type MedicationWhereInput = {
    AND?: MedicationWhereInput | MedicationWhereInput[]
    OR?: MedicationWhereInput[]
    NOT?: MedicationWhereInput | MedicationWhereInput[]
    id?: StringFilter<"Medication"> | string
    concentration?: StringFilter<"Medication"> | string
    fractions?: IntFilter<"Medication"> | number
    idPharmaceuticalForm?: StringFilter<"Medication"> | string
    idManufacturer?: StringFilter<"Medication"> | string
    idSubFamily?: StringFilter<"Medication"> | string
    name?: StringFilter<"Medication"> | string
    totalActivePrinciple?: StringFilter<"Medication"> | string
    products?: ProductListRelationFilter
    pharmaceuticalForm?: XOR<PharmaceuticalFormRelationFilter, PharmaceuticalFormWhereInput>
    manufacturer?: XOR<ManufacturerRelationFilter, ManufacturerWhereInput>
    subFamily?: XOR<SubFamilyRelationFilter, SubFamilyWhereInput>
  }

  export type MedicationOrderByWithRelationInput = {
    id?: SortOrder
    concentration?: SortOrder
    fractions?: SortOrder
    idPharmaceuticalForm?: SortOrder
    idManufacturer?: SortOrder
    idSubFamily?: SortOrder
    name?: SortOrder
    totalActivePrinciple?: SortOrder
    products?: ProductOrderByRelationAggregateInput
    pharmaceuticalForm?: PharmaceuticalFormOrderByWithRelationInput
    manufacturer?: ManufacturerOrderByWithRelationInput
    subFamily?: SubFamilyOrderByWithRelationInput
  }

  export type MedicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MedicationWhereInput | MedicationWhereInput[]
    OR?: MedicationWhereInput[]
    NOT?: MedicationWhereInput | MedicationWhereInput[]
    concentration?: StringFilter<"Medication"> | string
    fractions?: IntFilter<"Medication"> | number
    idPharmaceuticalForm?: StringFilter<"Medication"> | string
    idManufacturer?: StringFilter<"Medication"> | string
    idSubFamily?: StringFilter<"Medication"> | string
    name?: StringFilter<"Medication"> | string
    totalActivePrinciple?: StringFilter<"Medication"> | string
    products?: ProductListRelationFilter
    pharmaceuticalForm?: XOR<PharmaceuticalFormRelationFilter, PharmaceuticalFormWhereInput>
    manufacturer?: XOR<ManufacturerRelationFilter, ManufacturerWhereInput>
    subFamily?: XOR<SubFamilyRelationFilter, SubFamilyWhereInput>
  }, "id" | "id">

  export type MedicationOrderByWithAggregationInput = {
    id?: SortOrder
    concentration?: SortOrder
    fractions?: SortOrder
    idPharmaceuticalForm?: SortOrder
    idManufacturer?: SortOrder
    idSubFamily?: SortOrder
    name?: SortOrder
    totalActivePrinciple?: SortOrder
    _count?: MedicationCountOrderByAggregateInput
    _avg?: MedicationAvgOrderByAggregateInput
    _max?: MedicationMaxOrderByAggregateInput
    _min?: MedicationMinOrderByAggregateInput
    _sum?: MedicationSumOrderByAggregateInput
  }

  export type MedicationScalarWhereWithAggregatesInput = {
    AND?: MedicationScalarWhereWithAggregatesInput | MedicationScalarWhereWithAggregatesInput[]
    OR?: MedicationScalarWhereWithAggregatesInput[]
    NOT?: MedicationScalarWhereWithAggregatesInput | MedicationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Medication"> | string
    concentration?: StringWithAggregatesFilter<"Medication"> | string
    fractions?: IntWithAggregatesFilter<"Medication"> | number
    idPharmaceuticalForm?: StringWithAggregatesFilter<"Medication"> | string
    idManufacturer?: StringWithAggregatesFilter<"Medication"> | string
    idSubFamily?: StringWithAggregatesFilter<"Medication"> | string
    name?: StringWithAggregatesFilter<"Medication"> | string
    totalActivePrinciple?: StringWithAggregatesFilter<"Medication"> | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    idMedication?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    medication?: XOR<MedicationRelationFilter, MedicationWhereInput>
    price?: PriceListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    idMedication?: SortOrder
    name?: SortOrder
    medication?: MedicationOrderByWithRelationInput
    price?: PriceOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    idMedication?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    medication?: XOR<MedicationRelationFilter, MedicationWhereInput>
    price?: PriceListRelationFilter
  }, "id" | "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    idMedication?: SortOrder
    name?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    idMedication?: StringWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
  }

  export type PharmaceuticalFormWhereInput = {
    AND?: PharmaceuticalFormWhereInput | PharmaceuticalFormWhereInput[]
    OR?: PharmaceuticalFormWhereInput[]
    NOT?: PharmaceuticalFormWhereInput | PharmaceuticalFormWhereInput[]
    id?: StringFilter<"PharmaceuticalForm"> | string
    group?: StringFilter<"PharmaceuticalForm"> | string
    groupCode?: StringFilter<"PharmaceuticalForm"> | string
    name?: StringFilter<"PharmaceuticalForm"> | string
    medications?: MedicationListRelationFilter
  }

  export type PharmaceuticalFormOrderByWithRelationInput = {
    id?: SortOrder
    group?: SortOrder
    groupCode?: SortOrder
    name?: SortOrder
    medications?: MedicationOrderByRelationAggregateInput
  }

  export type PharmaceuticalFormWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PharmaceuticalFormWhereInput | PharmaceuticalFormWhereInput[]
    OR?: PharmaceuticalFormWhereInput[]
    NOT?: PharmaceuticalFormWhereInput | PharmaceuticalFormWhereInput[]
    group?: StringFilter<"PharmaceuticalForm"> | string
    groupCode?: StringFilter<"PharmaceuticalForm"> | string
    name?: StringFilter<"PharmaceuticalForm"> | string
    medications?: MedicationListRelationFilter
  }, "id" | "id">

  export type PharmaceuticalFormOrderByWithAggregationInput = {
    id?: SortOrder
    group?: SortOrder
    groupCode?: SortOrder
    name?: SortOrder
    _count?: PharmaceuticalFormCountOrderByAggregateInput
    _max?: PharmaceuticalFormMaxOrderByAggregateInput
    _min?: PharmaceuticalFormMinOrderByAggregateInput
  }

  export type PharmaceuticalFormScalarWhereWithAggregatesInput = {
    AND?: PharmaceuticalFormScalarWhereWithAggregatesInput | PharmaceuticalFormScalarWhereWithAggregatesInput[]
    OR?: PharmaceuticalFormScalarWhereWithAggregatesInput[]
    NOT?: PharmaceuticalFormScalarWhereWithAggregatesInput | PharmaceuticalFormScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PharmaceuticalForm"> | string
    group?: StringWithAggregatesFilter<"PharmaceuticalForm"> | string
    groupCode?: StringWithAggregatesFilter<"PharmaceuticalForm"> | string
    name?: StringWithAggregatesFilter<"PharmaceuticalForm"> | string
  }

  export type EstablishmentWhereInput = {
    AND?: EstablishmentWhereInput | EstablishmentWhereInput[]
    OR?: EstablishmentWhereInput[]
    NOT?: EstablishmentWhereInput | EstablishmentWhereInput[]
    id?: StringFilter<"Establishment"> | string
    address?: StringFilter<"Establishment"> | string
    name?: StringFilter<"Establishment"> | string
    type?: StringFilter<"Establishment"> | string
    typeId?: StringFilter<"Establishment"> | string
    idDistrict?: StringFilter<"Establishment"> | string
    phone?: StringNullableFilter<"Establishment"> | string | null
    district?: XOR<DistrictRelationFilter, DistrictWhereInput>
    price?: PriceListRelationFilter
  }

  export type EstablishmentOrderByWithRelationInput = {
    id?: SortOrder
    address?: SortOrder
    name?: SortOrder
    type?: SortOrder
    typeId?: SortOrder
    idDistrict?: SortOrder
    phone?: SortOrderInput | SortOrder
    district?: DistrictOrderByWithRelationInput
    price?: PriceOrderByRelationAggregateInput
  }

  export type EstablishmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EstablishmentWhereInput | EstablishmentWhereInput[]
    OR?: EstablishmentWhereInput[]
    NOT?: EstablishmentWhereInput | EstablishmentWhereInput[]
    address?: StringFilter<"Establishment"> | string
    name?: StringFilter<"Establishment"> | string
    type?: StringFilter<"Establishment"> | string
    typeId?: StringFilter<"Establishment"> | string
    idDistrict?: StringFilter<"Establishment"> | string
    phone?: StringNullableFilter<"Establishment"> | string | null
    district?: XOR<DistrictRelationFilter, DistrictWhereInput>
    price?: PriceListRelationFilter
  }, "id" | "id">

  export type EstablishmentOrderByWithAggregationInput = {
    id?: SortOrder
    address?: SortOrder
    name?: SortOrder
    type?: SortOrder
    typeId?: SortOrder
    idDistrict?: SortOrder
    phone?: SortOrderInput | SortOrder
    _count?: EstablishmentCountOrderByAggregateInput
    _max?: EstablishmentMaxOrderByAggregateInput
    _min?: EstablishmentMinOrderByAggregateInput
  }

  export type EstablishmentScalarWhereWithAggregatesInput = {
    AND?: EstablishmentScalarWhereWithAggregatesInput | EstablishmentScalarWhereWithAggregatesInput[]
    OR?: EstablishmentScalarWhereWithAggregatesInput[]
    NOT?: EstablishmentScalarWhereWithAggregatesInput | EstablishmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Establishment"> | string
    address?: StringWithAggregatesFilter<"Establishment"> | string
    name?: StringWithAggregatesFilter<"Establishment"> | string
    type?: StringWithAggregatesFilter<"Establishment"> | string
    typeId?: StringWithAggregatesFilter<"Establishment"> | string
    idDistrict?: StringWithAggregatesFilter<"Establishment"> | string
    phone?: StringNullableWithAggregatesFilter<"Establishment"> | string | null
  }

  export type ManufacturerWhereInput = {
    AND?: ManufacturerWhereInput | ManufacturerWhereInput[]
    OR?: ManufacturerWhereInput[]
    NOT?: ManufacturerWhereInput | ManufacturerWhereInput[]
    id?: StringFilter<"Manufacturer"> | string
    name?: StringNullableFilter<"Manufacturer"> | string | null
    medications?: MedicationListRelationFilter
  }

  export type ManufacturerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    medications?: MedicationOrderByRelationAggregateInput
  }

  export type ManufacturerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ManufacturerWhereInput | ManufacturerWhereInput[]
    OR?: ManufacturerWhereInput[]
    NOT?: ManufacturerWhereInput | ManufacturerWhereInput[]
    name?: StringNullableFilter<"Manufacturer"> | string | null
    medications?: MedicationListRelationFilter
  }, "id" | "id">

  export type ManufacturerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    _count?: ManufacturerCountOrderByAggregateInput
    _max?: ManufacturerMaxOrderByAggregateInput
    _min?: ManufacturerMinOrderByAggregateInput
  }

  export type ManufacturerScalarWhereWithAggregatesInput = {
    AND?: ManufacturerScalarWhereWithAggregatesInput | ManufacturerScalarWhereWithAggregatesInput[]
    OR?: ManufacturerScalarWhereWithAggregatesInput[]
    NOT?: ManufacturerScalarWhereWithAggregatesInput | ManufacturerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Manufacturer"> | string
    name?: StringNullableWithAggregatesFilter<"Manufacturer"> | string | null
  }

  export type DistrictWhereInput = {
    AND?: DistrictWhereInput | DistrictWhereInput[]
    OR?: DistrictWhereInput[]
    NOT?: DistrictWhereInput | DistrictWhereInput[]
    id?: StringFilter<"District"> | string
    name?: StringFilter<"District"> | string
    idProvince?: StringFilter<"District"> | string
    province?: XOR<ProvinceRelationFilter, ProvinceWhereInput>
    establishments?: EstablishmentListRelationFilter
  }

  export type DistrictOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    idProvince?: SortOrder
    province?: ProvinceOrderByWithRelationInput
    establishments?: EstablishmentOrderByRelationAggregateInput
  }

  export type DistrictWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DistrictWhereInput | DistrictWhereInput[]
    OR?: DistrictWhereInput[]
    NOT?: DistrictWhereInput | DistrictWhereInput[]
    name?: StringFilter<"District"> | string
    idProvince?: StringFilter<"District"> | string
    province?: XOR<ProvinceRelationFilter, ProvinceWhereInput>
    establishments?: EstablishmentListRelationFilter
  }, "id" | "id">

  export type DistrictOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    idProvince?: SortOrder
    _count?: DistrictCountOrderByAggregateInput
    _max?: DistrictMaxOrderByAggregateInput
    _min?: DistrictMinOrderByAggregateInput
  }

  export type DistrictScalarWhereWithAggregatesInput = {
    AND?: DistrictScalarWhereWithAggregatesInput | DistrictScalarWhereWithAggregatesInput[]
    OR?: DistrictScalarWhereWithAggregatesInput[]
    NOT?: DistrictScalarWhereWithAggregatesInput | DistrictScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"District"> | string
    name?: StringWithAggregatesFilter<"District"> | string
    idProvince?: StringWithAggregatesFilter<"District"> | string
  }

  export type ProvinceWhereInput = {
    AND?: ProvinceWhereInput | ProvinceWhereInput[]
    OR?: ProvinceWhereInput[]
    NOT?: ProvinceWhereInput | ProvinceWhereInput[]
    id?: StringFilter<"Province"> | string
    name?: StringFilter<"Province"> | string
    idDepartment?: StringFilter<"Province"> | string
    department?: XOR<DepartmentRelationFilter, DepartmentWhereInput>
    districts?: DistrictListRelationFilter
  }

  export type ProvinceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    idDepartment?: SortOrder
    department?: DepartmentOrderByWithRelationInput
    districts?: DistrictOrderByRelationAggregateInput
  }

  export type ProvinceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProvinceWhereInput | ProvinceWhereInput[]
    OR?: ProvinceWhereInput[]
    NOT?: ProvinceWhereInput | ProvinceWhereInput[]
    name?: StringFilter<"Province"> | string
    idDepartment?: StringFilter<"Province"> | string
    department?: XOR<DepartmentRelationFilter, DepartmentWhereInput>
    districts?: DistrictListRelationFilter
  }, "id" | "id">

  export type ProvinceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    idDepartment?: SortOrder
    _count?: ProvinceCountOrderByAggregateInput
    _max?: ProvinceMaxOrderByAggregateInput
    _min?: ProvinceMinOrderByAggregateInput
  }

  export type ProvinceScalarWhereWithAggregatesInput = {
    AND?: ProvinceScalarWhereWithAggregatesInput | ProvinceScalarWhereWithAggregatesInput[]
    OR?: ProvinceScalarWhereWithAggregatesInput[]
    NOT?: ProvinceScalarWhereWithAggregatesInput | ProvinceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Province"> | string
    name?: StringWithAggregatesFilter<"Province"> | string
    idDepartment?: StringWithAggregatesFilter<"Province"> | string
  }

  export type DepartmentWhereInput = {
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    id?: StringFilter<"Department"> | string
    name?: StringFilter<"Department"> | string
    provinces?: ProvinceListRelationFilter
  }

  export type DepartmentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    provinces?: ProvinceOrderByRelationAggregateInput
  }

  export type DepartmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    name?: StringFilter<"Department"> | string
    provinces?: ProvinceListRelationFilter
  }, "id" | "id">

  export type DepartmentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: DepartmentCountOrderByAggregateInput
    _max?: DepartmentMaxOrderByAggregateInput
    _min?: DepartmentMinOrderByAggregateInput
  }

  export type DepartmentScalarWhereWithAggregatesInput = {
    AND?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    OR?: DepartmentScalarWhereWithAggregatesInput[]
    NOT?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Department"> | string
    name?: StringWithAggregatesFilter<"Department"> | string
  }

  export type PriceCreateInput = {
    id: string
    prices?: PriceCreatepricesInput | Decimal[] | DecimalJsLike[] | number[] | string[]
    updateAt: string
    establishment: EstablishmentCreateNestedOneWithoutPriceInput
    product: ProductCreateNestedOneWithoutPriceInput
  }

  export type PriceUncheckedCreateInput = {
    id: string
    idEstablishment: string
    idProduct: string
    prices?: PriceCreatepricesInput | Decimal[] | DecimalJsLike[] | number[] | string[]
    updateAt: string
  }

  export type PriceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    prices?: PriceUpdatepricesInput | Decimal[] | DecimalJsLike[] | number[] | string[]
    updateAt?: StringFieldUpdateOperationsInput | string
    establishment?: EstablishmentUpdateOneRequiredWithoutPriceNestedInput
    product?: ProductUpdateOneRequiredWithoutPriceNestedInput
  }

  export type PriceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    idEstablishment?: StringFieldUpdateOperationsInput | string
    idProduct?: StringFieldUpdateOperationsInput | string
    prices?: PriceUpdatepricesInput | Decimal[] | DecimalJsLike[] | number[] | string[]
    updateAt?: StringFieldUpdateOperationsInput | string
  }

  export type PriceCreateManyInput = {
    id: string
    idEstablishment: string
    idProduct: string
    prices?: PriceCreatepricesInput | Decimal[] | DecimalJsLike[] | number[] | string[]
    updateAt: string
  }

  export type PriceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    prices?: PriceUpdatepricesInput | Decimal[] | DecimalJsLike[] | number[] | string[]
    updateAt?: StringFieldUpdateOperationsInput | string
  }

  export type PriceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    idEstablishment?: StringFieldUpdateOperationsInput | string
    idProduct?: StringFieldUpdateOperationsInput | string
    prices?: PriceUpdatepricesInput | Decimal[] | DecimalJsLike[] | number[] | string[]
    updateAt?: StringFieldUpdateOperationsInput | string
  }

  export type FamilyCreateInput = {
    id: string
    name: string
    subFamilies?: SubFamilyCreateNestedManyWithoutFamilyInput
  }

  export type FamilyUncheckedCreateInput = {
    id: string
    name: string
    subFamilies?: SubFamilyUncheckedCreateNestedManyWithoutFamilyInput
  }

  export type FamilyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subFamilies?: SubFamilyUpdateManyWithoutFamilyNestedInput
  }

  export type FamilyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    subFamilies?: SubFamilyUncheckedUpdateManyWithoutFamilyNestedInput
  }

  export type FamilyCreateManyInput = {
    id: string
    name: string
  }

  export type FamilyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type FamilyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SubFamilyCreateInput = {
    id: string
    group: string
    name: string
    nameSuggestion: string
    medications?: MedicationCreateNestedManyWithoutSubFamilyInput
    family: FamilyCreateNestedOneWithoutSubFamiliesInput
  }

  export type SubFamilyUncheckedCreateInput = {
    id: string
    group: string
    idFamily: string
    name: string
    nameSuggestion: string
    medications?: MedicationUncheckedCreateNestedManyWithoutSubFamilyInput
  }

  export type SubFamilyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameSuggestion?: StringFieldUpdateOperationsInput | string
    medications?: MedicationUpdateManyWithoutSubFamilyNestedInput
    family?: FamilyUpdateOneRequiredWithoutSubFamiliesNestedInput
  }

  export type SubFamilyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    idFamily?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameSuggestion?: StringFieldUpdateOperationsInput | string
    medications?: MedicationUncheckedUpdateManyWithoutSubFamilyNestedInput
  }

  export type SubFamilyCreateManyInput = {
    id: string
    group: string
    idFamily: string
    name: string
    nameSuggestion: string
  }

  export type SubFamilyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameSuggestion?: StringFieldUpdateOperationsInput | string
  }

  export type SubFamilyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    idFamily?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameSuggestion?: StringFieldUpdateOperationsInput | string
  }

  export type MedicationCreateInput = {
    id: string
    concentration: string
    fractions: number
    name: string
    totalActivePrinciple: string
    products?: ProductCreateNestedManyWithoutMedicationInput
    pharmaceuticalForm: PharmaceuticalFormCreateNestedOneWithoutMedicationsInput
    manufacturer: ManufacturerCreateNestedOneWithoutMedicationsInput
    subFamily: SubFamilyCreateNestedOneWithoutMedicationsInput
  }

  export type MedicationUncheckedCreateInput = {
    id: string
    concentration: string
    fractions: number
    idPharmaceuticalForm: string
    idManufacturer: string
    idSubFamily: string
    name: string
    totalActivePrinciple: string
    products?: ProductUncheckedCreateNestedManyWithoutMedicationInput
  }

  export type MedicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    concentration?: StringFieldUpdateOperationsInput | string
    fractions?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    totalActivePrinciple?: StringFieldUpdateOperationsInput | string
    products?: ProductUpdateManyWithoutMedicationNestedInput
    pharmaceuticalForm?: PharmaceuticalFormUpdateOneRequiredWithoutMedicationsNestedInput
    manufacturer?: ManufacturerUpdateOneRequiredWithoutMedicationsNestedInput
    subFamily?: SubFamilyUpdateOneRequiredWithoutMedicationsNestedInput
  }

  export type MedicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    concentration?: StringFieldUpdateOperationsInput | string
    fractions?: IntFieldUpdateOperationsInput | number
    idPharmaceuticalForm?: StringFieldUpdateOperationsInput | string
    idManufacturer?: StringFieldUpdateOperationsInput | string
    idSubFamily?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalActivePrinciple?: StringFieldUpdateOperationsInput | string
    products?: ProductUncheckedUpdateManyWithoutMedicationNestedInput
  }

  export type MedicationCreateManyInput = {
    id: string
    concentration: string
    fractions: number
    idPharmaceuticalForm: string
    idManufacturer: string
    idSubFamily: string
    name: string
    totalActivePrinciple: string
  }

  export type MedicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    concentration?: StringFieldUpdateOperationsInput | string
    fractions?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    totalActivePrinciple?: StringFieldUpdateOperationsInput | string
  }

  export type MedicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    concentration?: StringFieldUpdateOperationsInput | string
    fractions?: IntFieldUpdateOperationsInput | number
    idPharmaceuticalForm?: StringFieldUpdateOperationsInput | string
    idManufacturer?: StringFieldUpdateOperationsInput | string
    idSubFamily?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalActivePrinciple?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateInput = {
    id: string
    name: string
    medication: MedicationCreateNestedOneWithoutProductsInput
    price?: PriceCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id: string
    idMedication: string
    name: string
    price?: PriceUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    medication?: MedicationUpdateOneRequiredWithoutProductsNestedInput
    price?: PriceUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    idMedication?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: PriceUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id: string
    idMedication: string
    name: string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    idMedication?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PharmaceuticalFormCreateInput = {
    id: string
    group: string
    groupCode: string
    name: string
    medications?: MedicationCreateNestedManyWithoutPharmaceuticalFormInput
  }

  export type PharmaceuticalFormUncheckedCreateInput = {
    id: string
    group: string
    groupCode: string
    name: string
    medications?: MedicationUncheckedCreateNestedManyWithoutPharmaceuticalFormInput
  }

  export type PharmaceuticalFormUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    groupCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    medications?: MedicationUpdateManyWithoutPharmaceuticalFormNestedInput
  }

  export type PharmaceuticalFormUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    groupCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    medications?: MedicationUncheckedUpdateManyWithoutPharmaceuticalFormNestedInput
  }

  export type PharmaceuticalFormCreateManyInput = {
    id: string
    group: string
    groupCode: string
    name: string
  }

  export type PharmaceuticalFormUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    groupCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PharmaceuticalFormUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    groupCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type EstablishmentCreateInput = {
    id: string
    address: string
    name: string
    type: string
    typeId: string
    phone?: string | null
    district: DistrictCreateNestedOneWithoutEstablishmentsInput
    price?: PriceCreateNestedManyWithoutEstablishmentInput
  }

  export type EstablishmentUncheckedCreateInput = {
    id: string
    address: string
    name: string
    type: string
    typeId: string
    idDistrict: string
    phone?: string | null
    price?: PriceUncheckedCreateNestedManyWithoutEstablishmentInput
  }

  export type EstablishmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    typeId?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    district?: DistrictUpdateOneRequiredWithoutEstablishmentsNestedInput
    price?: PriceUpdateManyWithoutEstablishmentNestedInput
  }

  export type EstablishmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    typeId?: StringFieldUpdateOperationsInput | string
    idDistrict?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    price?: PriceUncheckedUpdateManyWithoutEstablishmentNestedInput
  }

  export type EstablishmentCreateManyInput = {
    id: string
    address: string
    name: string
    type: string
    typeId: string
    idDistrict: string
    phone?: string | null
  }

  export type EstablishmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    typeId?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EstablishmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    typeId?: StringFieldUpdateOperationsInput | string
    idDistrict?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ManufacturerCreateInput = {
    id: string
    name?: string | null
    medications?: MedicationCreateNestedManyWithoutManufacturerInput
  }

  export type ManufacturerUncheckedCreateInput = {
    id: string
    name?: string | null
    medications?: MedicationUncheckedCreateNestedManyWithoutManufacturerInput
  }

  export type ManufacturerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    medications?: MedicationUpdateManyWithoutManufacturerNestedInput
  }

  export type ManufacturerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    medications?: MedicationUncheckedUpdateManyWithoutManufacturerNestedInput
  }

  export type ManufacturerCreateManyInput = {
    id: string
    name?: string | null
  }

  export type ManufacturerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ManufacturerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DistrictCreateInput = {
    id: string
    name: string
    province: ProvinceCreateNestedOneWithoutDistrictsInput
    establishments?: EstablishmentCreateNestedManyWithoutDistrictInput
  }

  export type DistrictUncheckedCreateInput = {
    id: string
    name: string
    idProvince: string
    establishments?: EstablishmentUncheckedCreateNestedManyWithoutDistrictInput
  }

  export type DistrictUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    province?: ProvinceUpdateOneRequiredWithoutDistrictsNestedInput
    establishments?: EstablishmentUpdateManyWithoutDistrictNestedInput
  }

  export type DistrictUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    idProvince?: StringFieldUpdateOperationsInput | string
    establishments?: EstablishmentUncheckedUpdateManyWithoutDistrictNestedInput
  }

  export type DistrictCreateManyInput = {
    id: string
    name: string
    idProvince: string
  }

  export type DistrictUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DistrictUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    idProvince?: StringFieldUpdateOperationsInput | string
  }

  export type ProvinceCreateInput = {
    id: string
    name: string
    department: DepartmentCreateNestedOneWithoutProvincesInput
    districts?: DistrictCreateNestedManyWithoutProvinceInput
  }

  export type ProvinceUncheckedCreateInput = {
    id: string
    name: string
    idDepartment: string
    districts?: DistrictUncheckedCreateNestedManyWithoutProvinceInput
  }

  export type ProvinceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    department?: DepartmentUpdateOneRequiredWithoutProvincesNestedInput
    districts?: DistrictUpdateManyWithoutProvinceNestedInput
  }

  export type ProvinceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    idDepartment?: StringFieldUpdateOperationsInput | string
    districts?: DistrictUncheckedUpdateManyWithoutProvinceNestedInput
  }

  export type ProvinceCreateManyInput = {
    id: string
    name: string
    idDepartment: string
  }

  export type ProvinceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProvinceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    idDepartment?: StringFieldUpdateOperationsInput | string
  }

  export type DepartmentCreateInput = {
    id: string
    name: string
    provinces?: ProvinceCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateInput = {
    id: string
    name: string
    provinces?: ProvinceUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    provinces?: ProvinceUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    provinces?: ProvinceUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentCreateManyInput = {
    id: string
    name: string
  }

  export type DepartmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DepartmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
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

  export type DecimalNullableListFilter<$PrismaModel = never> = {
    equals?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    has?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    hasEvery?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    hasSome?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EstablishmentRelationFilter = {
    is?: EstablishmentWhereInput
    isNot?: EstablishmentWhereInput
  }

  export type ProductRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type PriceCountOrderByAggregateInput = {
    id?: SortOrder
    idEstablishment?: SortOrder
    idProduct?: SortOrder
    prices?: SortOrder
    updateAt?: SortOrder
  }

  export type PriceAvgOrderByAggregateInput = {
    prices?: SortOrder
  }

  export type PriceMaxOrderByAggregateInput = {
    id?: SortOrder
    idEstablishment?: SortOrder
    idProduct?: SortOrder
    updateAt?: SortOrder
  }

  export type PriceMinOrderByAggregateInput = {
    id?: SortOrder
    idEstablishment?: SortOrder
    idProduct?: SortOrder
    updateAt?: SortOrder
  }

  export type PriceSumOrderByAggregateInput = {
    prices?: SortOrder
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

  export type SubFamilyListRelationFilter = {
    every?: SubFamilyWhereInput
    some?: SubFamilyWhereInput
    none?: SubFamilyWhereInput
  }

  export type SubFamilyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FamilyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type FamilyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type FamilyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type MedicationListRelationFilter = {
    every?: MedicationWhereInput
    some?: MedicationWhereInput
    none?: MedicationWhereInput
  }

  export type FamilyRelationFilter = {
    is?: FamilyWhereInput
    isNot?: FamilyWhereInput
  }

  export type MedicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubFamilyCountOrderByAggregateInput = {
    id?: SortOrder
    group?: SortOrder
    idFamily?: SortOrder
    name?: SortOrder
    nameSuggestion?: SortOrder
  }

  export type SubFamilyMaxOrderByAggregateInput = {
    id?: SortOrder
    group?: SortOrder
    idFamily?: SortOrder
    name?: SortOrder
    nameSuggestion?: SortOrder
  }

  export type SubFamilyMinOrderByAggregateInput = {
    id?: SortOrder
    group?: SortOrder
    idFamily?: SortOrder
    name?: SortOrder
    nameSuggestion?: SortOrder
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

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type PharmaceuticalFormRelationFilter = {
    is?: PharmaceuticalFormWhereInput
    isNot?: PharmaceuticalFormWhereInput
  }

  export type ManufacturerRelationFilter = {
    is?: ManufacturerWhereInput
    isNot?: ManufacturerWhereInput
  }

  export type SubFamilyRelationFilter = {
    is?: SubFamilyWhereInput
    isNot?: SubFamilyWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MedicationCountOrderByAggregateInput = {
    id?: SortOrder
    concentration?: SortOrder
    fractions?: SortOrder
    idPharmaceuticalForm?: SortOrder
    idManufacturer?: SortOrder
    idSubFamily?: SortOrder
    name?: SortOrder
    totalActivePrinciple?: SortOrder
  }

  export type MedicationAvgOrderByAggregateInput = {
    fractions?: SortOrder
  }

  export type MedicationMaxOrderByAggregateInput = {
    id?: SortOrder
    concentration?: SortOrder
    fractions?: SortOrder
    idPharmaceuticalForm?: SortOrder
    idManufacturer?: SortOrder
    idSubFamily?: SortOrder
    name?: SortOrder
    totalActivePrinciple?: SortOrder
  }

  export type MedicationMinOrderByAggregateInput = {
    id?: SortOrder
    concentration?: SortOrder
    fractions?: SortOrder
    idPharmaceuticalForm?: SortOrder
    idManufacturer?: SortOrder
    idSubFamily?: SortOrder
    name?: SortOrder
    totalActivePrinciple?: SortOrder
  }

  export type MedicationSumOrderByAggregateInput = {
    fractions?: SortOrder
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

  export type MedicationRelationFilter = {
    is?: MedicationWhereInput
    isNot?: MedicationWhereInput
  }

  export type PriceListRelationFilter = {
    every?: PriceWhereInput
    some?: PriceWhereInput
    none?: PriceWhereInput
  }

  export type PriceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    idMedication?: SortOrder
    name?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    idMedication?: SortOrder
    name?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    idMedication?: SortOrder
    name?: SortOrder
  }

  export type PharmaceuticalFormCountOrderByAggregateInput = {
    id?: SortOrder
    group?: SortOrder
    groupCode?: SortOrder
    name?: SortOrder
  }

  export type PharmaceuticalFormMaxOrderByAggregateInput = {
    id?: SortOrder
    group?: SortOrder
    groupCode?: SortOrder
    name?: SortOrder
  }

  export type PharmaceuticalFormMinOrderByAggregateInput = {
    id?: SortOrder
    group?: SortOrder
    groupCode?: SortOrder
    name?: SortOrder
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
  }

  export type DistrictRelationFilter = {
    is?: DistrictWhereInput
    isNot?: DistrictWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EstablishmentCountOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    name?: SortOrder
    type?: SortOrder
    typeId?: SortOrder
    idDistrict?: SortOrder
    phone?: SortOrder
  }

  export type EstablishmentMaxOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    name?: SortOrder
    type?: SortOrder
    typeId?: SortOrder
    idDistrict?: SortOrder
    phone?: SortOrder
  }

  export type EstablishmentMinOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    name?: SortOrder
    type?: SortOrder
    typeId?: SortOrder
    idDistrict?: SortOrder
    phone?: SortOrder
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
  }

  export type ManufacturerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ManufacturerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ManufacturerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ProvinceRelationFilter = {
    is?: ProvinceWhereInput
    isNot?: ProvinceWhereInput
  }

  export type EstablishmentListRelationFilter = {
    every?: EstablishmentWhereInput
    some?: EstablishmentWhereInput
    none?: EstablishmentWhereInput
  }

  export type EstablishmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DistrictCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    idProvince?: SortOrder
  }

  export type DistrictMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    idProvince?: SortOrder
  }

  export type DistrictMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    idProvince?: SortOrder
  }

  export type DepartmentRelationFilter = {
    is?: DepartmentWhereInput
    isNot?: DepartmentWhereInput
  }

  export type DistrictListRelationFilter = {
    every?: DistrictWhereInput
    some?: DistrictWhereInput
    none?: DistrictWhereInput
  }

  export type DistrictOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProvinceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    idDepartment?: SortOrder
  }

  export type ProvinceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    idDepartment?: SortOrder
  }

  export type ProvinceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    idDepartment?: SortOrder
  }

  export type ProvinceListRelationFilter = {
    every?: ProvinceWhereInput
    some?: ProvinceWhereInput
    none?: ProvinceWhereInput
  }

  export type ProvinceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DepartmentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type DepartmentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type DepartmentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type PriceCreatepricesInput = {
    set: Decimal[] | DecimalJsLike[] | number[] | string[]
  }

  export type EstablishmentCreateNestedOneWithoutPriceInput = {
    create?: XOR<EstablishmentCreateWithoutPriceInput, EstablishmentUncheckedCreateWithoutPriceInput>
    connectOrCreate?: EstablishmentCreateOrConnectWithoutPriceInput
    connect?: EstablishmentWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutPriceInput = {
    create?: XOR<ProductCreateWithoutPriceInput, ProductUncheckedCreateWithoutPriceInput>
    connectOrCreate?: ProductCreateOrConnectWithoutPriceInput
    connect?: ProductWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type PriceUpdatepricesInput = {
    set?: Decimal[] | DecimalJsLike[] | number[] | string[]
    push?: Decimal | DecimalJsLike | number | string | Decimal[] | DecimalJsLike[] | number[] | string[]
  }

  export type EstablishmentUpdateOneRequiredWithoutPriceNestedInput = {
    create?: XOR<EstablishmentCreateWithoutPriceInput, EstablishmentUncheckedCreateWithoutPriceInput>
    connectOrCreate?: EstablishmentCreateOrConnectWithoutPriceInput
    upsert?: EstablishmentUpsertWithoutPriceInput
    connect?: EstablishmentWhereUniqueInput
    update?: XOR<XOR<EstablishmentUpdateToOneWithWhereWithoutPriceInput, EstablishmentUpdateWithoutPriceInput>, EstablishmentUncheckedUpdateWithoutPriceInput>
  }

  export type ProductUpdateOneRequiredWithoutPriceNestedInput = {
    create?: XOR<ProductCreateWithoutPriceInput, ProductUncheckedCreateWithoutPriceInput>
    connectOrCreate?: ProductCreateOrConnectWithoutPriceInput
    upsert?: ProductUpsertWithoutPriceInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutPriceInput, ProductUpdateWithoutPriceInput>, ProductUncheckedUpdateWithoutPriceInput>
  }

  export type SubFamilyCreateNestedManyWithoutFamilyInput = {
    create?: XOR<SubFamilyCreateWithoutFamilyInput, SubFamilyUncheckedCreateWithoutFamilyInput> | SubFamilyCreateWithoutFamilyInput[] | SubFamilyUncheckedCreateWithoutFamilyInput[]
    connectOrCreate?: SubFamilyCreateOrConnectWithoutFamilyInput | SubFamilyCreateOrConnectWithoutFamilyInput[]
    createMany?: SubFamilyCreateManyFamilyInputEnvelope
    connect?: SubFamilyWhereUniqueInput | SubFamilyWhereUniqueInput[]
  }

  export type SubFamilyUncheckedCreateNestedManyWithoutFamilyInput = {
    create?: XOR<SubFamilyCreateWithoutFamilyInput, SubFamilyUncheckedCreateWithoutFamilyInput> | SubFamilyCreateWithoutFamilyInput[] | SubFamilyUncheckedCreateWithoutFamilyInput[]
    connectOrCreate?: SubFamilyCreateOrConnectWithoutFamilyInput | SubFamilyCreateOrConnectWithoutFamilyInput[]
    createMany?: SubFamilyCreateManyFamilyInputEnvelope
    connect?: SubFamilyWhereUniqueInput | SubFamilyWhereUniqueInput[]
  }

  export type SubFamilyUpdateManyWithoutFamilyNestedInput = {
    create?: XOR<SubFamilyCreateWithoutFamilyInput, SubFamilyUncheckedCreateWithoutFamilyInput> | SubFamilyCreateWithoutFamilyInput[] | SubFamilyUncheckedCreateWithoutFamilyInput[]
    connectOrCreate?: SubFamilyCreateOrConnectWithoutFamilyInput | SubFamilyCreateOrConnectWithoutFamilyInput[]
    upsert?: SubFamilyUpsertWithWhereUniqueWithoutFamilyInput | SubFamilyUpsertWithWhereUniqueWithoutFamilyInput[]
    createMany?: SubFamilyCreateManyFamilyInputEnvelope
    set?: SubFamilyWhereUniqueInput | SubFamilyWhereUniqueInput[]
    disconnect?: SubFamilyWhereUniqueInput | SubFamilyWhereUniqueInput[]
    delete?: SubFamilyWhereUniqueInput | SubFamilyWhereUniqueInput[]
    connect?: SubFamilyWhereUniqueInput | SubFamilyWhereUniqueInput[]
    update?: SubFamilyUpdateWithWhereUniqueWithoutFamilyInput | SubFamilyUpdateWithWhereUniqueWithoutFamilyInput[]
    updateMany?: SubFamilyUpdateManyWithWhereWithoutFamilyInput | SubFamilyUpdateManyWithWhereWithoutFamilyInput[]
    deleteMany?: SubFamilyScalarWhereInput | SubFamilyScalarWhereInput[]
  }

  export type SubFamilyUncheckedUpdateManyWithoutFamilyNestedInput = {
    create?: XOR<SubFamilyCreateWithoutFamilyInput, SubFamilyUncheckedCreateWithoutFamilyInput> | SubFamilyCreateWithoutFamilyInput[] | SubFamilyUncheckedCreateWithoutFamilyInput[]
    connectOrCreate?: SubFamilyCreateOrConnectWithoutFamilyInput | SubFamilyCreateOrConnectWithoutFamilyInput[]
    upsert?: SubFamilyUpsertWithWhereUniqueWithoutFamilyInput | SubFamilyUpsertWithWhereUniqueWithoutFamilyInput[]
    createMany?: SubFamilyCreateManyFamilyInputEnvelope
    set?: SubFamilyWhereUniqueInput | SubFamilyWhereUniqueInput[]
    disconnect?: SubFamilyWhereUniqueInput | SubFamilyWhereUniqueInput[]
    delete?: SubFamilyWhereUniqueInput | SubFamilyWhereUniqueInput[]
    connect?: SubFamilyWhereUniqueInput | SubFamilyWhereUniqueInput[]
    update?: SubFamilyUpdateWithWhereUniqueWithoutFamilyInput | SubFamilyUpdateWithWhereUniqueWithoutFamilyInput[]
    updateMany?: SubFamilyUpdateManyWithWhereWithoutFamilyInput | SubFamilyUpdateManyWithWhereWithoutFamilyInput[]
    deleteMany?: SubFamilyScalarWhereInput | SubFamilyScalarWhereInput[]
  }

  export type MedicationCreateNestedManyWithoutSubFamilyInput = {
    create?: XOR<MedicationCreateWithoutSubFamilyInput, MedicationUncheckedCreateWithoutSubFamilyInput> | MedicationCreateWithoutSubFamilyInput[] | MedicationUncheckedCreateWithoutSubFamilyInput[]
    connectOrCreate?: MedicationCreateOrConnectWithoutSubFamilyInput | MedicationCreateOrConnectWithoutSubFamilyInput[]
    createMany?: MedicationCreateManySubFamilyInputEnvelope
    connect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
  }

  export type FamilyCreateNestedOneWithoutSubFamiliesInput = {
    create?: XOR<FamilyCreateWithoutSubFamiliesInput, FamilyUncheckedCreateWithoutSubFamiliesInput>
    connectOrCreate?: FamilyCreateOrConnectWithoutSubFamiliesInput
    connect?: FamilyWhereUniqueInput
  }

  export type MedicationUncheckedCreateNestedManyWithoutSubFamilyInput = {
    create?: XOR<MedicationCreateWithoutSubFamilyInput, MedicationUncheckedCreateWithoutSubFamilyInput> | MedicationCreateWithoutSubFamilyInput[] | MedicationUncheckedCreateWithoutSubFamilyInput[]
    connectOrCreate?: MedicationCreateOrConnectWithoutSubFamilyInput | MedicationCreateOrConnectWithoutSubFamilyInput[]
    createMany?: MedicationCreateManySubFamilyInputEnvelope
    connect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
  }

  export type MedicationUpdateManyWithoutSubFamilyNestedInput = {
    create?: XOR<MedicationCreateWithoutSubFamilyInput, MedicationUncheckedCreateWithoutSubFamilyInput> | MedicationCreateWithoutSubFamilyInput[] | MedicationUncheckedCreateWithoutSubFamilyInput[]
    connectOrCreate?: MedicationCreateOrConnectWithoutSubFamilyInput | MedicationCreateOrConnectWithoutSubFamilyInput[]
    upsert?: MedicationUpsertWithWhereUniqueWithoutSubFamilyInput | MedicationUpsertWithWhereUniqueWithoutSubFamilyInput[]
    createMany?: MedicationCreateManySubFamilyInputEnvelope
    set?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    disconnect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    delete?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    connect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    update?: MedicationUpdateWithWhereUniqueWithoutSubFamilyInput | MedicationUpdateWithWhereUniqueWithoutSubFamilyInput[]
    updateMany?: MedicationUpdateManyWithWhereWithoutSubFamilyInput | MedicationUpdateManyWithWhereWithoutSubFamilyInput[]
    deleteMany?: MedicationScalarWhereInput | MedicationScalarWhereInput[]
  }

  export type FamilyUpdateOneRequiredWithoutSubFamiliesNestedInput = {
    create?: XOR<FamilyCreateWithoutSubFamiliesInput, FamilyUncheckedCreateWithoutSubFamiliesInput>
    connectOrCreate?: FamilyCreateOrConnectWithoutSubFamiliesInput
    upsert?: FamilyUpsertWithoutSubFamiliesInput
    connect?: FamilyWhereUniqueInput
    update?: XOR<XOR<FamilyUpdateToOneWithWhereWithoutSubFamiliesInput, FamilyUpdateWithoutSubFamiliesInput>, FamilyUncheckedUpdateWithoutSubFamiliesInput>
  }

  export type MedicationUncheckedUpdateManyWithoutSubFamilyNestedInput = {
    create?: XOR<MedicationCreateWithoutSubFamilyInput, MedicationUncheckedCreateWithoutSubFamilyInput> | MedicationCreateWithoutSubFamilyInput[] | MedicationUncheckedCreateWithoutSubFamilyInput[]
    connectOrCreate?: MedicationCreateOrConnectWithoutSubFamilyInput | MedicationCreateOrConnectWithoutSubFamilyInput[]
    upsert?: MedicationUpsertWithWhereUniqueWithoutSubFamilyInput | MedicationUpsertWithWhereUniqueWithoutSubFamilyInput[]
    createMany?: MedicationCreateManySubFamilyInputEnvelope
    set?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    disconnect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    delete?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    connect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    update?: MedicationUpdateWithWhereUniqueWithoutSubFamilyInput | MedicationUpdateWithWhereUniqueWithoutSubFamilyInput[]
    updateMany?: MedicationUpdateManyWithWhereWithoutSubFamilyInput | MedicationUpdateManyWithWhereWithoutSubFamilyInput[]
    deleteMany?: MedicationScalarWhereInput | MedicationScalarWhereInput[]
  }

  export type ProductCreateNestedManyWithoutMedicationInput = {
    create?: XOR<ProductCreateWithoutMedicationInput, ProductUncheckedCreateWithoutMedicationInput> | ProductCreateWithoutMedicationInput[] | ProductUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutMedicationInput | ProductCreateOrConnectWithoutMedicationInput[]
    createMany?: ProductCreateManyMedicationInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type PharmaceuticalFormCreateNestedOneWithoutMedicationsInput = {
    create?: XOR<PharmaceuticalFormCreateWithoutMedicationsInput, PharmaceuticalFormUncheckedCreateWithoutMedicationsInput>
    connectOrCreate?: PharmaceuticalFormCreateOrConnectWithoutMedicationsInput
    connect?: PharmaceuticalFormWhereUniqueInput
  }

  export type ManufacturerCreateNestedOneWithoutMedicationsInput = {
    create?: XOR<ManufacturerCreateWithoutMedicationsInput, ManufacturerUncheckedCreateWithoutMedicationsInput>
    connectOrCreate?: ManufacturerCreateOrConnectWithoutMedicationsInput
    connect?: ManufacturerWhereUniqueInput
  }

  export type SubFamilyCreateNestedOneWithoutMedicationsInput = {
    create?: XOR<SubFamilyCreateWithoutMedicationsInput, SubFamilyUncheckedCreateWithoutMedicationsInput>
    connectOrCreate?: SubFamilyCreateOrConnectWithoutMedicationsInput
    connect?: SubFamilyWhereUniqueInput
  }

  export type ProductUncheckedCreateNestedManyWithoutMedicationInput = {
    create?: XOR<ProductCreateWithoutMedicationInput, ProductUncheckedCreateWithoutMedicationInput> | ProductCreateWithoutMedicationInput[] | ProductUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutMedicationInput | ProductCreateOrConnectWithoutMedicationInput[]
    createMany?: ProductCreateManyMedicationInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductUpdateManyWithoutMedicationNestedInput = {
    create?: XOR<ProductCreateWithoutMedicationInput, ProductUncheckedCreateWithoutMedicationInput> | ProductCreateWithoutMedicationInput[] | ProductUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutMedicationInput | ProductCreateOrConnectWithoutMedicationInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutMedicationInput | ProductUpsertWithWhereUniqueWithoutMedicationInput[]
    createMany?: ProductCreateManyMedicationInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutMedicationInput | ProductUpdateWithWhereUniqueWithoutMedicationInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutMedicationInput | ProductUpdateManyWithWhereWithoutMedicationInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type PharmaceuticalFormUpdateOneRequiredWithoutMedicationsNestedInput = {
    create?: XOR<PharmaceuticalFormCreateWithoutMedicationsInput, PharmaceuticalFormUncheckedCreateWithoutMedicationsInput>
    connectOrCreate?: PharmaceuticalFormCreateOrConnectWithoutMedicationsInput
    upsert?: PharmaceuticalFormUpsertWithoutMedicationsInput
    connect?: PharmaceuticalFormWhereUniqueInput
    update?: XOR<XOR<PharmaceuticalFormUpdateToOneWithWhereWithoutMedicationsInput, PharmaceuticalFormUpdateWithoutMedicationsInput>, PharmaceuticalFormUncheckedUpdateWithoutMedicationsInput>
  }

  export type ManufacturerUpdateOneRequiredWithoutMedicationsNestedInput = {
    create?: XOR<ManufacturerCreateWithoutMedicationsInput, ManufacturerUncheckedCreateWithoutMedicationsInput>
    connectOrCreate?: ManufacturerCreateOrConnectWithoutMedicationsInput
    upsert?: ManufacturerUpsertWithoutMedicationsInput
    connect?: ManufacturerWhereUniqueInput
    update?: XOR<XOR<ManufacturerUpdateToOneWithWhereWithoutMedicationsInput, ManufacturerUpdateWithoutMedicationsInput>, ManufacturerUncheckedUpdateWithoutMedicationsInput>
  }

  export type SubFamilyUpdateOneRequiredWithoutMedicationsNestedInput = {
    create?: XOR<SubFamilyCreateWithoutMedicationsInput, SubFamilyUncheckedCreateWithoutMedicationsInput>
    connectOrCreate?: SubFamilyCreateOrConnectWithoutMedicationsInput
    upsert?: SubFamilyUpsertWithoutMedicationsInput
    connect?: SubFamilyWhereUniqueInput
    update?: XOR<XOR<SubFamilyUpdateToOneWithWhereWithoutMedicationsInput, SubFamilyUpdateWithoutMedicationsInput>, SubFamilyUncheckedUpdateWithoutMedicationsInput>
  }

  export type ProductUncheckedUpdateManyWithoutMedicationNestedInput = {
    create?: XOR<ProductCreateWithoutMedicationInput, ProductUncheckedCreateWithoutMedicationInput> | ProductCreateWithoutMedicationInput[] | ProductUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutMedicationInput | ProductCreateOrConnectWithoutMedicationInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutMedicationInput | ProductUpsertWithWhereUniqueWithoutMedicationInput[]
    createMany?: ProductCreateManyMedicationInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutMedicationInput | ProductUpdateWithWhereUniqueWithoutMedicationInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutMedicationInput | ProductUpdateManyWithWhereWithoutMedicationInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type MedicationCreateNestedOneWithoutProductsInput = {
    create?: XOR<MedicationCreateWithoutProductsInput, MedicationUncheckedCreateWithoutProductsInput>
    connectOrCreate?: MedicationCreateOrConnectWithoutProductsInput
    connect?: MedicationWhereUniqueInput
  }

  export type PriceCreateNestedManyWithoutProductInput = {
    create?: XOR<PriceCreateWithoutProductInput, PriceUncheckedCreateWithoutProductInput> | PriceCreateWithoutProductInput[] | PriceUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PriceCreateOrConnectWithoutProductInput | PriceCreateOrConnectWithoutProductInput[]
    createMany?: PriceCreateManyProductInputEnvelope
    connect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
  }

  export type PriceUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<PriceCreateWithoutProductInput, PriceUncheckedCreateWithoutProductInput> | PriceCreateWithoutProductInput[] | PriceUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PriceCreateOrConnectWithoutProductInput | PriceCreateOrConnectWithoutProductInput[]
    createMany?: PriceCreateManyProductInputEnvelope
    connect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
  }

  export type MedicationUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<MedicationCreateWithoutProductsInput, MedicationUncheckedCreateWithoutProductsInput>
    connectOrCreate?: MedicationCreateOrConnectWithoutProductsInput
    upsert?: MedicationUpsertWithoutProductsInput
    connect?: MedicationWhereUniqueInput
    update?: XOR<XOR<MedicationUpdateToOneWithWhereWithoutProductsInput, MedicationUpdateWithoutProductsInput>, MedicationUncheckedUpdateWithoutProductsInput>
  }

  export type PriceUpdateManyWithoutProductNestedInput = {
    create?: XOR<PriceCreateWithoutProductInput, PriceUncheckedCreateWithoutProductInput> | PriceCreateWithoutProductInput[] | PriceUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PriceCreateOrConnectWithoutProductInput | PriceCreateOrConnectWithoutProductInput[]
    upsert?: PriceUpsertWithWhereUniqueWithoutProductInput | PriceUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: PriceCreateManyProductInputEnvelope
    set?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    disconnect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    delete?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    connect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    update?: PriceUpdateWithWhereUniqueWithoutProductInput | PriceUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: PriceUpdateManyWithWhereWithoutProductInput | PriceUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: PriceScalarWhereInput | PriceScalarWhereInput[]
  }

  export type PriceUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<PriceCreateWithoutProductInput, PriceUncheckedCreateWithoutProductInput> | PriceCreateWithoutProductInput[] | PriceUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PriceCreateOrConnectWithoutProductInput | PriceCreateOrConnectWithoutProductInput[]
    upsert?: PriceUpsertWithWhereUniqueWithoutProductInput | PriceUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: PriceCreateManyProductInputEnvelope
    set?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    disconnect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    delete?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    connect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    update?: PriceUpdateWithWhereUniqueWithoutProductInput | PriceUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: PriceUpdateManyWithWhereWithoutProductInput | PriceUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: PriceScalarWhereInput | PriceScalarWhereInput[]
  }

  export type MedicationCreateNestedManyWithoutPharmaceuticalFormInput = {
    create?: XOR<MedicationCreateWithoutPharmaceuticalFormInput, MedicationUncheckedCreateWithoutPharmaceuticalFormInput> | MedicationCreateWithoutPharmaceuticalFormInput[] | MedicationUncheckedCreateWithoutPharmaceuticalFormInput[]
    connectOrCreate?: MedicationCreateOrConnectWithoutPharmaceuticalFormInput | MedicationCreateOrConnectWithoutPharmaceuticalFormInput[]
    createMany?: MedicationCreateManyPharmaceuticalFormInputEnvelope
    connect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
  }

  export type MedicationUncheckedCreateNestedManyWithoutPharmaceuticalFormInput = {
    create?: XOR<MedicationCreateWithoutPharmaceuticalFormInput, MedicationUncheckedCreateWithoutPharmaceuticalFormInput> | MedicationCreateWithoutPharmaceuticalFormInput[] | MedicationUncheckedCreateWithoutPharmaceuticalFormInput[]
    connectOrCreate?: MedicationCreateOrConnectWithoutPharmaceuticalFormInput | MedicationCreateOrConnectWithoutPharmaceuticalFormInput[]
    createMany?: MedicationCreateManyPharmaceuticalFormInputEnvelope
    connect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
  }

  export type MedicationUpdateManyWithoutPharmaceuticalFormNestedInput = {
    create?: XOR<MedicationCreateWithoutPharmaceuticalFormInput, MedicationUncheckedCreateWithoutPharmaceuticalFormInput> | MedicationCreateWithoutPharmaceuticalFormInput[] | MedicationUncheckedCreateWithoutPharmaceuticalFormInput[]
    connectOrCreate?: MedicationCreateOrConnectWithoutPharmaceuticalFormInput | MedicationCreateOrConnectWithoutPharmaceuticalFormInput[]
    upsert?: MedicationUpsertWithWhereUniqueWithoutPharmaceuticalFormInput | MedicationUpsertWithWhereUniqueWithoutPharmaceuticalFormInput[]
    createMany?: MedicationCreateManyPharmaceuticalFormInputEnvelope
    set?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    disconnect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    delete?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    connect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    update?: MedicationUpdateWithWhereUniqueWithoutPharmaceuticalFormInput | MedicationUpdateWithWhereUniqueWithoutPharmaceuticalFormInput[]
    updateMany?: MedicationUpdateManyWithWhereWithoutPharmaceuticalFormInput | MedicationUpdateManyWithWhereWithoutPharmaceuticalFormInput[]
    deleteMany?: MedicationScalarWhereInput | MedicationScalarWhereInput[]
  }

  export type MedicationUncheckedUpdateManyWithoutPharmaceuticalFormNestedInput = {
    create?: XOR<MedicationCreateWithoutPharmaceuticalFormInput, MedicationUncheckedCreateWithoutPharmaceuticalFormInput> | MedicationCreateWithoutPharmaceuticalFormInput[] | MedicationUncheckedCreateWithoutPharmaceuticalFormInput[]
    connectOrCreate?: MedicationCreateOrConnectWithoutPharmaceuticalFormInput | MedicationCreateOrConnectWithoutPharmaceuticalFormInput[]
    upsert?: MedicationUpsertWithWhereUniqueWithoutPharmaceuticalFormInput | MedicationUpsertWithWhereUniqueWithoutPharmaceuticalFormInput[]
    createMany?: MedicationCreateManyPharmaceuticalFormInputEnvelope
    set?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    disconnect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    delete?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    connect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    update?: MedicationUpdateWithWhereUniqueWithoutPharmaceuticalFormInput | MedicationUpdateWithWhereUniqueWithoutPharmaceuticalFormInput[]
    updateMany?: MedicationUpdateManyWithWhereWithoutPharmaceuticalFormInput | MedicationUpdateManyWithWhereWithoutPharmaceuticalFormInput[]
    deleteMany?: MedicationScalarWhereInput | MedicationScalarWhereInput[]
  }

  export type DistrictCreateNestedOneWithoutEstablishmentsInput = {
    create?: XOR<DistrictCreateWithoutEstablishmentsInput, DistrictUncheckedCreateWithoutEstablishmentsInput>
    connectOrCreate?: DistrictCreateOrConnectWithoutEstablishmentsInput
    connect?: DistrictWhereUniqueInput
  }

  export type PriceCreateNestedManyWithoutEstablishmentInput = {
    create?: XOR<PriceCreateWithoutEstablishmentInput, PriceUncheckedCreateWithoutEstablishmentInput> | PriceCreateWithoutEstablishmentInput[] | PriceUncheckedCreateWithoutEstablishmentInput[]
    connectOrCreate?: PriceCreateOrConnectWithoutEstablishmentInput | PriceCreateOrConnectWithoutEstablishmentInput[]
    createMany?: PriceCreateManyEstablishmentInputEnvelope
    connect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
  }

  export type PriceUncheckedCreateNestedManyWithoutEstablishmentInput = {
    create?: XOR<PriceCreateWithoutEstablishmentInput, PriceUncheckedCreateWithoutEstablishmentInput> | PriceCreateWithoutEstablishmentInput[] | PriceUncheckedCreateWithoutEstablishmentInput[]
    connectOrCreate?: PriceCreateOrConnectWithoutEstablishmentInput | PriceCreateOrConnectWithoutEstablishmentInput[]
    createMany?: PriceCreateManyEstablishmentInputEnvelope
    connect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DistrictUpdateOneRequiredWithoutEstablishmentsNestedInput = {
    create?: XOR<DistrictCreateWithoutEstablishmentsInput, DistrictUncheckedCreateWithoutEstablishmentsInput>
    connectOrCreate?: DistrictCreateOrConnectWithoutEstablishmentsInput
    upsert?: DistrictUpsertWithoutEstablishmentsInput
    connect?: DistrictWhereUniqueInput
    update?: XOR<XOR<DistrictUpdateToOneWithWhereWithoutEstablishmentsInput, DistrictUpdateWithoutEstablishmentsInput>, DistrictUncheckedUpdateWithoutEstablishmentsInput>
  }

  export type PriceUpdateManyWithoutEstablishmentNestedInput = {
    create?: XOR<PriceCreateWithoutEstablishmentInput, PriceUncheckedCreateWithoutEstablishmentInput> | PriceCreateWithoutEstablishmentInput[] | PriceUncheckedCreateWithoutEstablishmentInput[]
    connectOrCreate?: PriceCreateOrConnectWithoutEstablishmentInput | PriceCreateOrConnectWithoutEstablishmentInput[]
    upsert?: PriceUpsertWithWhereUniqueWithoutEstablishmentInput | PriceUpsertWithWhereUniqueWithoutEstablishmentInput[]
    createMany?: PriceCreateManyEstablishmentInputEnvelope
    set?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    disconnect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    delete?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    connect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    update?: PriceUpdateWithWhereUniqueWithoutEstablishmentInput | PriceUpdateWithWhereUniqueWithoutEstablishmentInput[]
    updateMany?: PriceUpdateManyWithWhereWithoutEstablishmentInput | PriceUpdateManyWithWhereWithoutEstablishmentInput[]
    deleteMany?: PriceScalarWhereInput | PriceScalarWhereInput[]
  }

  export type PriceUncheckedUpdateManyWithoutEstablishmentNestedInput = {
    create?: XOR<PriceCreateWithoutEstablishmentInput, PriceUncheckedCreateWithoutEstablishmentInput> | PriceCreateWithoutEstablishmentInput[] | PriceUncheckedCreateWithoutEstablishmentInput[]
    connectOrCreate?: PriceCreateOrConnectWithoutEstablishmentInput | PriceCreateOrConnectWithoutEstablishmentInput[]
    upsert?: PriceUpsertWithWhereUniqueWithoutEstablishmentInput | PriceUpsertWithWhereUniqueWithoutEstablishmentInput[]
    createMany?: PriceCreateManyEstablishmentInputEnvelope
    set?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    disconnect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    delete?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    connect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    update?: PriceUpdateWithWhereUniqueWithoutEstablishmentInput | PriceUpdateWithWhereUniqueWithoutEstablishmentInput[]
    updateMany?: PriceUpdateManyWithWhereWithoutEstablishmentInput | PriceUpdateManyWithWhereWithoutEstablishmentInput[]
    deleteMany?: PriceScalarWhereInput | PriceScalarWhereInput[]
  }

  export type MedicationCreateNestedManyWithoutManufacturerInput = {
    create?: XOR<MedicationCreateWithoutManufacturerInput, MedicationUncheckedCreateWithoutManufacturerInput> | MedicationCreateWithoutManufacturerInput[] | MedicationUncheckedCreateWithoutManufacturerInput[]
    connectOrCreate?: MedicationCreateOrConnectWithoutManufacturerInput | MedicationCreateOrConnectWithoutManufacturerInput[]
    createMany?: MedicationCreateManyManufacturerInputEnvelope
    connect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
  }

  export type MedicationUncheckedCreateNestedManyWithoutManufacturerInput = {
    create?: XOR<MedicationCreateWithoutManufacturerInput, MedicationUncheckedCreateWithoutManufacturerInput> | MedicationCreateWithoutManufacturerInput[] | MedicationUncheckedCreateWithoutManufacturerInput[]
    connectOrCreate?: MedicationCreateOrConnectWithoutManufacturerInput | MedicationCreateOrConnectWithoutManufacturerInput[]
    createMany?: MedicationCreateManyManufacturerInputEnvelope
    connect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
  }

  export type MedicationUpdateManyWithoutManufacturerNestedInput = {
    create?: XOR<MedicationCreateWithoutManufacturerInput, MedicationUncheckedCreateWithoutManufacturerInput> | MedicationCreateWithoutManufacturerInput[] | MedicationUncheckedCreateWithoutManufacturerInput[]
    connectOrCreate?: MedicationCreateOrConnectWithoutManufacturerInput | MedicationCreateOrConnectWithoutManufacturerInput[]
    upsert?: MedicationUpsertWithWhereUniqueWithoutManufacturerInput | MedicationUpsertWithWhereUniqueWithoutManufacturerInput[]
    createMany?: MedicationCreateManyManufacturerInputEnvelope
    set?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    disconnect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    delete?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    connect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    update?: MedicationUpdateWithWhereUniqueWithoutManufacturerInput | MedicationUpdateWithWhereUniqueWithoutManufacturerInput[]
    updateMany?: MedicationUpdateManyWithWhereWithoutManufacturerInput | MedicationUpdateManyWithWhereWithoutManufacturerInput[]
    deleteMany?: MedicationScalarWhereInput | MedicationScalarWhereInput[]
  }

  export type MedicationUncheckedUpdateManyWithoutManufacturerNestedInput = {
    create?: XOR<MedicationCreateWithoutManufacturerInput, MedicationUncheckedCreateWithoutManufacturerInput> | MedicationCreateWithoutManufacturerInput[] | MedicationUncheckedCreateWithoutManufacturerInput[]
    connectOrCreate?: MedicationCreateOrConnectWithoutManufacturerInput | MedicationCreateOrConnectWithoutManufacturerInput[]
    upsert?: MedicationUpsertWithWhereUniqueWithoutManufacturerInput | MedicationUpsertWithWhereUniqueWithoutManufacturerInput[]
    createMany?: MedicationCreateManyManufacturerInputEnvelope
    set?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    disconnect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    delete?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    connect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    update?: MedicationUpdateWithWhereUniqueWithoutManufacturerInput | MedicationUpdateWithWhereUniqueWithoutManufacturerInput[]
    updateMany?: MedicationUpdateManyWithWhereWithoutManufacturerInput | MedicationUpdateManyWithWhereWithoutManufacturerInput[]
    deleteMany?: MedicationScalarWhereInput | MedicationScalarWhereInput[]
  }

  export type ProvinceCreateNestedOneWithoutDistrictsInput = {
    create?: XOR<ProvinceCreateWithoutDistrictsInput, ProvinceUncheckedCreateWithoutDistrictsInput>
    connectOrCreate?: ProvinceCreateOrConnectWithoutDistrictsInput
    connect?: ProvinceWhereUniqueInput
  }

  export type EstablishmentCreateNestedManyWithoutDistrictInput = {
    create?: XOR<EstablishmentCreateWithoutDistrictInput, EstablishmentUncheckedCreateWithoutDistrictInput> | EstablishmentCreateWithoutDistrictInput[] | EstablishmentUncheckedCreateWithoutDistrictInput[]
    connectOrCreate?: EstablishmentCreateOrConnectWithoutDistrictInput | EstablishmentCreateOrConnectWithoutDistrictInput[]
    createMany?: EstablishmentCreateManyDistrictInputEnvelope
    connect?: EstablishmentWhereUniqueInput | EstablishmentWhereUniqueInput[]
  }

  export type EstablishmentUncheckedCreateNestedManyWithoutDistrictInput = {
    create?: XOR<EstablishmentCreateWithoutDistrictInput, EstablishmentUncheckedCreateWithoutDistrictInput> | EstablishmentCreateWithoutDistrictInput[] | EstablishmentUncheckedCreateWithoutDistrictInput[]
    connectOrCreate?: EstablishmentCreateOrConnectWithoutDistrictInput | EstablishmentCreateOrConnectWithoutDistrictInput[]
    createMany?: EstablishmentCreateManyDistrictInputEnvelope
    connect?: EstablishmentWhereUniqueInput | EstablishmentWhereUniqueInput[]
  }

  export type ProvinceUpdateOneRequiredWithoutDistrictsNestedInput = {
    create?: XOR<ProvinceCreateWithoutDistrictsInput, ProvinceUncheckedCreateWithoutDistrictsInput>
    connectOrCreate?: ProvinceCreateOrConnectWithoutDistrictsInput
    upsert?: ProvinceUpsertWithoutDistrictsInput
    connect?: ProvinceWhereUniqueInput
    update?: XOR<XOR<ProvinceUpdateToOneWithWhereWithoutDistrictsInput, ProvinceUpdateWithoutDistrictsInput>, ProvinceUncheckedUpdateWithoutDistrictsInput>
  }

  export type EstablishmentUpdateManyWithoutDistrictNestedInput = {
    create?: XOR<EstablishmentCreateWithoutDistrictInput, EstablishmentUncheckedCreateWithoutDistrictInput> | EstablishmentCreateWithoutDistrictInput[] | EstablishmentUncheckedCreateWithoutDistrictInput[]
    connectOrCreate?: EstablishmentCreateOrConnectWithoutDistrictInput | EstablishmentCreateOrConnectWithoutDistrictInput[]
    upsert?: EstablishmentUpsertWithWhereUniqueWithoutDistrictInput | EstablishmentUpsertWithWhereUniqueWithoutDistrictInput[]
    createMany?: EstablishmentCreateManyDistrictInputEnvelope
    set?: EstablishmentWhereUniqueInput | EstablishmentWhereUniqueInput[]
    disconnect?: EstablishmentWhereUniqueInput | EstablishmentWhereUniqueInput[]
    delete?: EstablishmentWhereUniqueInput | EstablishmentWhereUniqueInput[]
    connect?: EstablishmentWhereUniqueInput | EstablishmentWhereUniqueInput[]
    update?: EstablishmentUpdateWithWhereUniqueWithoutDistrictInput | EstablishmentUpdateWithWhereUniqueWithoutDistrictInput[]
    updateMany?: EstablishmentUpdateManyWithWhereWithoutDistrictInput | EstablishmentUpdateManyWithWhereWithoutDistrictInput[]
    deleteMany?: EstablishmentScalarWhereInput | EstablishmentScalarWhereInput[]
  }

  export type EstablishmentUncheckedUpdateManyWithoutDistrictNestedInput = {
    create?: XOR<EstablishmentCreateWithoutDistrictInput, EstablishmentUncheckedCreateWithoutDistrictInput> | EstablishmentCreateWithoutDistrictInput[] | EstablishmentUncheckedCreateWithoutDistrictInput[]
    connectOrCreate?: EstablishmentCreateOrConnectWithoutDistrictInput | EstablishmentCreateOrConnectWithoutDistrictInput[]
    upsert?: EstablishmentUpsertWithWhereUniqueWithoutDistrictInput | EstablishmentUpsertWithWhereUniqueWithoutDistrictInput[]
    createMany?: EstablishmentCreateManyDistrictInputEnvelope
    set?: EstablishmentWhereUniqueInput | EstablishmentWhereUniqueInput[]
    disconnect?: EstablishmentWhereUniqueInput | EstablishmentWhereUniqueInput[]
    delete?: EstablishmentWhereUniqueInput | EstablishmentWhereUniqueInput[]
    connect?: EstablishmentWhereUniqueInput | EstablishmentWhereUniqueInput[]
    update?: EstablishmentUpdateWithWhereUniqueWithoutDistrictInput | EstablishmentUpdateWithWhereUniqueWithoutDistrictInput[]
    updateMany?: EstablishmentUpdateManyWithWhereWithoutDistrictInput | EstablishmentUpdateManyWithWhereWithoutDistrictInput[]
    deleteMany?: EstablishmentScalarWhereInput | EstablishmentScalarWhereInput[]
  }

  export type DepartmentCreateNestedOneWithoutProvincesInput = {
    create?: XOR<DepartmentCreateWithoutProvincesInput, DepartmentUncheckedCreateWithoutProvincesInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutProvincesInput
    connect?: DepartmentWhereUniqueInput
  }

  export type DistrictCreateNestedManyWithoutProvinceInput = {
    create?: XOR<DistrictCreateWithoutProvinceInput, DistrictUncheckedCreateWithoutProvinceInput> | DistrictCreateWithoutProvinceInput[] | DistrictUncheckedCreateWithoutProvinceInput[]
    connectOrCreate?: DistrictCreateOrConnectWithoutProvinceInput | DistrictCreateOrConnectWithoutProvinceInput[]
    createMany?: DistrictCreateManyProvinceInputEnvelope
    connect?: DistrictWhereUniqueInput | DistrictWhereUniqueInput[]
  }

  export type DistrictUncheckedCreateNestedManyWithoutProvinceInput = {
    create?: XOR<DistrictCreateWithoutProvinceInput, DistrictUncheckedCreateWithoutProvinceInput> | DistrictCreateWithoutProvinceInput[] | DistrictUncheckedCreateWithoutProvinceInput[]
    connectOrCreate?: DistrictCreateOrConnectWithoutProvinceInput | DistrictCreateOrConnectWithoutProvinceInput[]
    createMany?: DistrictCreateManyProvinceInputEnvelope
    connect?: DistrictWhereUniqueInput | DistrictWhereUniqueInput[]
  }

  export type DepartmentUpdateOneRequiredWithoutProvincesNestedInput = {
    create?: XOR<DepartmentCreateWithoutProvincesInput, DepartmentUncheckedCreateWithoutProvincesInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutProvincesInput
    upsert?: DepartmentUpsertWithoutProvincesInput
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutProvincesInput, DepartmentUpdateWithoutProvincesInput>, DepartmentUncheckedUpdateWithoutProvincesInput>
  }

  export type DistrictUpdateManyWithoutProvinceNestedInput = {
    create?: XOR<DistrictCreateWithoutProvinceInput, DistrictUncheckedCreateWithoutProvinceInput> | DistrictCreateWithoutProvinceInput[] | DistrictUncheckedCreateWithoutProvinceInput[]
    connectOrCreate?: DistrictCreateOrConnectWithoutProvinceInput | DistrictCreateOrConnectWithoutProvinceInput[]
    upsert?: DistrictUpsertWithWhereUniqueWithoutProvinceInput | DistrictUpsertWithWhereUniqueWithoutProvinceInput[]
    createMany?: DistrictCreateManyProvinceInputEnvelope
    set?: DistrictWhereUniqueInput | DistrictWhereUniqueInput[]
    disconnect?: DistrictWhereUniqueInput | DistrictWhereUniqueInput[]
    delete?: DistrictWhereUniqueInput | DistrictWhereUniqueInput[]
    connect?: DistrictWhereUniqueInput | DistrictWhereUniqueInput[]
    update?: DistrictUpdateWithWhereUniqueWithoutProvinceInput | DistrictUpdateWithWhereUniqueWithoutProvinceInput[]
    updateMany?: DistrictUpdateManyWithWhereWithoutProvinceInput | DistrictUpdateManyWithWhereWithoutProvinceInput[]
    deleteMany?: DistrictScalarWhereInput | DistrictScalarWhereInput[]
  }

  export type DistrictUncheckedUpdateManyWithoutProvinceNestedInput = {
    create?: XOR<DistrictCreateWithoutProvinceInput, DistrictUncheckedCreateWithoutProvinceInput> | DistrictCreateWithoutProvinceInput[] | DistrictUncheckedCreateWithoutProvinceInput[]
    connectOrCreate?: DistrictCreateOrConnectWithoutProvinceInput | DistrictCreateOrConnectWithoutProvinceInput[]
    upsert?: DistrictUpsertWithWhereUniqueWithoutProvinceInput | DistrictUpsertWithWhereUniqueWithoutProvinceInput[]
    createMany?: DistrictCreateManyProvinceInputEnvelope
    set?: DistrictWhereUniqueInput | DistrictWhereUniqueInput[]
    disconnect?: DistrictWhereUniqueInput | DistrictWhereUniqueInput[]
    delete?: DistrictWhereUniqueInput | DistrictWhereUniqueInput[]
    connect?: DistrictWhereUniqueInput | DistrictWhereUniqueInput[]
    update?: DistrictUpdateWithWhereUniqueWithoutProvinceInput | DistrictUpdateWithWhereUniqueWithoutProvinceInput[]
    updateMany?: DistrictUpdateManyWithWhereWithoutProvinceInput | DistrictUpdateManyWithWhereWithoutProvinceInput[]
    deleteMany?: DistrictScalarWhereInput | DistrictScalarWhereInput[]
  }

  export type ProvinceCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<ProvinceCreateWithoutDepartmentInput, ProvinceUncheckedCreateWithoutDepartmentInput> | ProvinceCreateWithoutDepartmentInput[] | ProvinceUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: ProvinceCreateOrConnectWithoutDepartmentInput | ProvinceCreateOrConnectWithoutDepartmentInput[]
    createMany?: ProvinceCreateManyDepartmentInputEnvelope
    connect?: ProvinceWhereUniqueInput | ProvinceWhereUniqueInput[]
  }

  export type ProvinceUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<ProvinceCreateWithoutDepartmentInput, ProvinceUncheckedCreateWithoutDepartmentInput> | ProvinceCreateWithoutDepartmentInput[] | ProvinceUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: ProvinceCreateOrConnectWithoutDepartmentInput | ProvinceCreateOrConnectWithoutDepartmentInput[]
    createMany?: ProvinceCreateManyDepartmentInputEnvelope
    connect?: ProvinceWhereUniqueInput | ProvinceWhereUniqueInput[]
  }

  export type ProvinceUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<ProvinceCreateWithoutDepartmentInput, ProvinceUncheckedCreateWithoutDepartmentInput> | ProvinceCreateWithoutDepartmentInput[] | ProvinceUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: ProvinceCreateOrConnectWithoutDepartmentInput | ProvinceCreateOrConnectWithoutDepartmentInput[]
    upsert?: ProvinceUpsertWithWhereUniqueWithoutDepartmentInput | ProvinceUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: ProvinceCreateManyDepartmentInputEnvelope
    set?: ProvinceWhereUniqueInput | ProvinceWhereUniqueInput[]
    disconnect?: ProvinceWhereUniqueInput | ProvinceWhereUniqueInput[]
    delete?: ProvinceWhereUniqueInput | ProvinceWhereUniqueInput[]
    connect?: ProvinceWhereUniqueInput | ProvinceWhereUniqueInput[]
    update?: ProvinceUpdateWithWhereUniqueWithoutDepartmentInput | ProvinceUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: ProvinceUpdateManyWithWhereWithoutDepartmentInput | ProvinceUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: ProvinceScalarWhereInput | ProvinceScalarWhereInput[]
  }

  export type ProvinceUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<ProvinceCreateWithoutDepartmentInput, ProvinceUncheckedCreateWithoutDepartmentInput> | ProvinceCreateWithoutDepartmentInput[] | ProvinceUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: ProvinceCreateOrConnectWithoutDepartmentInput | ProvinceCreateOrConnectWithoutDepartmentInput[]
    upsert?: ProvinceUpsertWithWhereUniqueWithoutDepartmentInput | ProvinceUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: ProvinceCreateManyDepartmentInputEnvelope
    set?: ProvinceWhereUniqueInput | ProvinceWhereUniqueInput[]
    disconnect?: ProvinceWhereUniqueInput | ProvinceWhereUniqueInput[]
    delete?: ProvinceWhereUniqueInput | ProvinceWhereUniqueInput[]
    connect?: ProvinceWhereUniqueInput | ProvinceWhereUniqueInput[]
    update?: ProvinceUpdateWithWhereUniqueWithoutDepartmentInput | ProvinceUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: ProvinceUpdateManyWithWhereWithoutDepartmentInput | ProvinceUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: ProvinceScalarWhereInput | ProvinceScalarWhereInput[]
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
  }

  export type EstablishmentCreateWithoutPriceInput = {
    id: string
    address: string
    name: string
    type: string
    typeId: string
    phone?: string | null
    district: DistrictCreateNestedOneWithoutEstablishmentsInput
  }

  export type EstablishmentUncheckedCreateWithoutPriceInput = {
    id: string
    address: string
    name: string
    type: string
    typeId: string
    idDistrict: string
    phone?: string | null
  }

  export type EstablishmentCreateOrConnectWithoutPriceInput = {
    where: EstablishmentWhereUniqueInput
    create: XOR<EstablishmentCreateWithoutPriceInput, EstablishmentUncheckedCreateWithoutPriceInput>
  }

  export type ProductCreateWithoutPriceInput = {
    id: string
    name: string
    medication: MedicationCreateNestedOneWithoutProductsInput
  }

  export type ProductUncheckedCreateWithoutPriceInput = {
    id: string
    idMedication: string
    name: string
  }

  export type ProductCreateOrConnectWithoutPriceInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutPriceInput, ProductUncheckedCreateWithoutPriceInput>
  }

  export type EstablishmentUpsertWithoutPriceInput = {
    update: XOR<EstablishmentUpdateWithoutPriceInput, EstablishmentUncheckedUpdateWithoutPriceInput>
    create: XOR<EstablishmentCreateWithoutPriceInput, EstablishmentUncheckedCreateWithoutPriceInput>
    where?: EstablishmentWhereInput
  }

  export type EstablishmentUpdateToOneWithWhereWithoutPriceInput = {
    where?: EstablishmentWhereInput
    data: XOR<EstablishmentUpdateWithoutPriceInput, EstablishmentUncheckedUpdateWithoutPriceInput>
  }

  export type EstablishmentUpdateWithoutPriceInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    typeId?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    district?: DistrictUpdateOneRequiredWithoutEstablishmentsNestedInput
  }

  export type EstablishmentUncheckedUpdateWithoutPriceInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    typeId?: StringFieldUpdateOperationsInput | string
    idDistrict?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductUpsertWithoutPriceInput = {
    update: XOR<ProductUpdateWithoutPriceInput, ProductUncheckedUpdateWithoutPriceInput>
    create: XOR<ProductCreateWithoutPriceInput, ProductUncheckedCreateWithoutPriceInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutPriceInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutPriceInput, ProductUncheckedUpdateWithoutPriceInput>
  }

  export type ProductUpdateWithoutPriceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    medication?: MedicationUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateWithoutPriceInput = {
    id?: StringFieldUpdateOperationsInput | string
    idMedication?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SubFamilyCreateWithoutFamilyInput = {
    id: string
    group: string
    name: string
    nameSuggestion: string
    medications?: MedicationCreateNestedManyWithoutSubFamilyInput
  }

  export type SubFamilyUncheckedCreateWithoutFamilyInput = {
    id: string
    group: string
    name: string
    nameSuggestion: string
    medications?: MedicationUncheckedCreateNestedManyWithoutSubFamilyInput
  }

  export type SubFamilyCreateOrConnectWithoutFamilyInput = {
    where: SubFamilyWhereUniqueInput
    create: XOR<SubFamilyCreateWithoutFamilyInput, SubFamilyUncheckedCreateWithoutFamilyInput>
  }

  export type SubFamilyCreateManyFamilyInputEnvelope = {
    data: SubFamilyCreateManyFamilyInput | SubFamilyCreateManyFamilyInput[]
    skipDuplicates?: boolean
  }

  export type SubFamilyUpsertWithWhereUniqueWithoutFamilyInput = {
    where: SubFamilyWhereUniqueInput
    update: XOR<SubFamilyUpdateWithoutFamilyInput, SubFamilyUncheckedUpdateWithoutFamilyInput>
    create: XOR<SubFamilyCreateWithoutFamilyInput, SubFamilyUncheckedCreateWithoutFamilyInput>
  }

  export type SubFamilyUpdateWithWhereUniqueWithoutFamilyInput = {
    where: SubFamilyWhereUniqueInput
    data: XOR<SubFamilyUpdateWithoutFamilyInput, SubFamilyUncheckedUpdateWithoutFamilyInput>
  }

  export type SubFamilyUpdateManyWithWhereWithoutFamilyInput = {
    where: SubFamilyScalarWhereInput
    data: XOR<SubFamilyUpdateManyMutationInput, SubFamilyUncheckedUpdateManyWithoutFamilyInput>
  }

  export type SubFamilyScalarWhereInput = {
    AND?: SubFamilyScalarWhereInput | SubFamilyScalarWhereInput[]
    OR?: SubFamilyScalarWhereInput[]
    NOT?: SubFamilyScalarWhereInput | SubFamilyScalarWhereInput[]
    id?: StringFilter<"SubFamily"> | string
    group?: StringFilter<"SubFamily"> | string
    idFamily?: StringFilter<"SubFamily"> | string
    name?: StringFilter<"SubFamily"> | string
    nameSuggestion?: StringFilter<"SubFamily"> | string
  }

  export type MedicationCreateWithoutSubFamilyInput = {
    id: string
    concentration: string
    fractions: number
    name: string
    totalActivePrinciple: string
    products?: ProductCreateNestedManyWithoutMedicationInput
    pharmaceuticalForm: PharmaceuticalFormCreateNestedOneWithoutMedicationsInput
    manufacturer: ManufacturerCreateNestedOneWithoutMedicationsInput
  }

  export type MedicationUncheckedCreateWithoutSubFamilyInput = {
    id: string
    concentration: string
    fractions: number
    idPharmaceuticalForm: string
    idManufacturer: string
    name: string
    totalActivePrinciple: string
    products?: ProductUncheckedCreateNestedManyWithoutMedicationInput
  }

  export type MedicationCreateOrConnectWithoutSubFamilyInput = {
    where: MedicationWhereUniqueInput
    create: XOR<MedicationCreateWithoutSubFamilyInput, MedicationUncheckedCreateWithoutSubFamilyInput>
  }

  export type MedicationCreateManySubFamilyInputEnvelope = {
    data: MedicationCreateManySubFamilyInput | MedicationCreateManySubFamilyInput[]
    skipDuplicates?: boolean
  }

  export type FamilyCreateWithoutSubFamiliesInput = {
    id: string
    name: string
  }

  export type FamilyUncheckedCreateWithoutSubFamiliesInput = {
    id: string
    name: string
  }

  export type FamilyCreateOrConnectWithoutSubFamiliesInput = {
    where: FamilyWhereUniqueInput
    create: XOR<FamilyCreateWithoutSubFamiliesInput, FamilyUncheckedCreateWithoutSubFamiliesInput>
  }

  export type MedicationUpsertWithWhereUniqueWithoutSubFamilyInput = {
    where: MedicationWhereUniqueInput
    update: XOR<MedicationUpdateWithoutSubFamilyInput, MedicationUncheckedUpdateWithoutSubFamilyInput>
    create: XOR<MedicationCreateWithoutSubFamilyInput, MedicationUncheckedCreateWithoutSubFamilyInput>
  }

  export type MedicationUpdateWithWhereUniqueWithoutSubFamilyInput = {
    where: MedicationWhereUniqueInput
    data: XOR<MedicationUpdateWithoutSubFamilyInput, MedicationUncheckedUpdateWithoutSubFamilyInput>
  }

  export type MedicationUpdateManyWithWhereWithoutSubFamilyInput = {
    where: MedicationScalarWhereInput
    data: XOR<MedicationUpdateManyMutationInput, MedicationUncheckedUpdateManyWithoutSubFamilyInput>
  }

  export type MedicationScalarWhereInput = {
    AND?: MedicationScalarWhereInput | MedicationScalarWhereInput[]
    OR?: MedicationScalarWhereInput[]
    NOT?: MedicationScalarWhereInput | MedicationScalarWhereInput[]
    id?: StringFilter<"Medication"> | string
    concentration?: StringFilter<"Medication"> | string
    fractions?: IntFilter<"Medication"> | number
    idPharmaceuticalForm?: StringFilter<"Medication"> | string
    idManufacturer?: StringFilter<"Medication"> | string
    idSubFamily?: StringFilter<"Medication"> | string
    name?: StringFilter<"Medication"> | string
    totalActivePrinciple?: StringFilter<"Medication"> | string
  }

  export type FamilyUpsertWithoutSubFamiliesInput = {
    update: XOR<FamilyUpdateWithoutSubFamiliesInput, FamilyUncheckedUpdateWithoutSubFamiliesInput>
    create: XOR<FamilyCreateWithoutSubFamiliesInput, FamilyUncheckedCreateWithoutSubFamiliesInput>
    where?: FamilyWhereInput
  }

  export type FamilyUpdateToOneWithWhereWithoutSubFamiliesInput = {
    where?: FamilyWhereInput
    data: XOR<FamilyUpdateWithoutSubFamiliesInput, FamilyUncheckedUpdateWithoutSubFamiliesInput>
  }

  export type FamilyUpdateWithoutSubFamiliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type FamilyUncheckedUpdateWithoutSubFamiliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateWithoutMedicationInput = {
    id: string
    name: string
    price?: PriceCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutMedicationInput = {
    id: string
    name: string
    price?: PriceUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutMedicationInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutMedicationInput, ProductUncheckedCreateWithoutMedicationInput>
  }

  export type ProductCreateManyMedicationInputEnvelope = {
    data: ProductCreateManyMedicationInput | ProductCreateManyMedicationInput[]
    skipDuplicates?: boolean
  }

  export type PharmaceuticalFormCreateWithoutMedicationsInput = {
    id: string
    group: string
    groupCode: string
    name: string
  }

  export type PharmaceuticalFormUncheckedCreateWithoutMedicationsInput = {
    id: string
    group: string
    groupCode: string
    name: string
  }

  export type PharmaceuticalFormCreateOrConnectWithoutMedicationsInput = {
    where: PharmaceuticalFormWhereUniqueInput
    create: XOR<PharmaceuticalFormCreateWithoutMedicationsInput, PharmaceuticalFormUncheckedCreateWithoutMedicationsInput>
  }

  export type ManufacturerCreateWithoutMedicationsInput = {
    id: string
    name?: string | null
  }

  export type ManufacturerUncheckedCreateWithoutMedicationsInput = {
    id: string
    name?: string | null
  }

  export type ManufacturerCreateOrConnectWithoutMedicationsInput = {
    where: ManufacturerWhereUniqueInput
    create: XOR<ManufacturerCreateWithoutMedicationsInput, ManufacturerUncheckedCreateWithoutMedicationsInput>
  }

  export type SubFamilyCreateWithoutMedicationsInput = {
    id: string
    group: string
    name: string
    nameSuggestion: string
    family: FamilyCreateNestedOneWithoutSubFamiliesInput
  }

  export type SubFamilyUncheckedCreateWithoutMedicationsInput = {
    id: string
    group: string
    idFamily: string
    name: string
    nameSuggestion: string
  }

  export type SubFamilyCreateOrConnectWithoutMedicationsInput = {
    where: SubFamilyWhereUniqueInput
    create: XOR<SubFamilyCreateWithoutMedicationsInput, SubFamilyUncheckedCreateWithoutMedicationsInput>
  }

  export type ProductUpsertWithWhereUniqueWithoutMedicationInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutMedicationInput, ProductUncheckedUpdateWithoutMedicationInput>
    create: XOR<ProductCreateWithoutMedicationInput, ProductUncheckedCreateWithoutMedicationInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutMedicationInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutMedicationInput, ProductUncheckedUpdateWithoutMedicationInput>
  }

  export type ProductUpdateManyWithWhereWithoutMedicationInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutMedicationInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: StringFilter<"Product"> | string
    idMedication?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
  }

  export type PharmaceuticalFormUpsertWithoutMedicationsInput = {
    update: XOR<PharmaceuticalFormUpdateWithoutMedicationsInput, PharmaceuticalFormUncheckedUpdateWithoutMedicationsInput>
    create: XOR<PharmaceuticalFormCreateWithoutMedicationsInput, PharmaceuticalFormUncheckedCreateWithoutMedicationsInput>
    where?: PharmaceuticalFormWhereInput
  }

  export type PharmaceuticalFormUpdateToOneWithWhereWithoutMedicationsInput = {
    where?: PharmaceuticalFormWhereInput
    data: XOR<PharmaceuticalFormUpdateWithoutMedicationsInput, PharmaceuticalFormUncheckedUpdateWithoutMedicationsInput>
  }

  export type PharmaceuticalFormUpdateWithoutMedicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    groupCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PharmaceuticalFormUncheckedUpdateWithoutMedicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    groupCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ManufacturerUpsertWithoutMedicationsInput = {
    update: XOR<ManufacturerUpdateWithoutMedicationsInput, ManufacturerUncheckedUpdateWithoutMedicationsInput>
    create: XOR<ManufacturerCreateWithoutMedicationsInput, ManufacturerUncheckedCreateWithoutMedicationsInput>
    where?: ManufacturerWhereInput
  }

  export type ManufacturerUpdateToOneWithWhereWithoutMedicationsInput = {
    where?: ManufacturerWhereInput
    data: XOR<ManufacturerUpdateWithoutMedicationsInput, ManufacturerUncheckedUpdateWithoutMedicationsInput>
  }

  export type ManufacturerUpdateWithoutMedicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ManufacturerUncheckedUpdateWithoutMedicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubFamilyUpsertWithoutMedicationsInput = {
    update: XOR<SubFamilyUpdateWithoutMedicationsInput, SubFamilyUncheckedUpdateWithoutMedicationsInput>
    create: XOR<SubFamilyCreateWithoutMedicationsInput, SubFamilyUncheckedCreateWithoutMedicationsInput>
    where?: SubFamilyWhereInput
  }

  export type SubFamilyUpdateToOneWithWhereWithoutMedicationsInput = {
    where?: SubFamilyWhereInput
    data: XOR<SubFamilyUpdateWithoutMedicationsInput, SubFamilyUncheckedUpdateWithoutMedicationsInput>
  }

  export type SubFamilyUpdateWithoutMedicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameSuggestion?: StringFieldUpdateOperationsInput | string
    family?: FamilyUpdateOneRequiredWithoutSubFamiliesNestedInput
  }

  export type SubFamilyUncheckedUpdateWithoutMedicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    idFamily?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameSuggestion?: StringFieldUpdateOperationsInput | string
  }

  export type MedicationCreateWithoutProductsInput = {
    id: string
    concentration: string
    fractions: number
    name: string
    totalActivePrinciple: string
    pharmaceuticalForm: PharmaceuticalFormCreateNestedOneWithoutMedicationsInput
    manufacturer: ManufacturerCreateNestedOneWithoutMedicationsInput
    subFamily: SubFamilyCreateNestedOneWithoutMedicationsInput
  }

  export type MedicationUncheckedCreateWithoutProductsInput = {
    id: string
    concentration: string
    fractions: number
    idPharmaceuticalForm: string
    idManufacturer: string
    idSubFamily: string
    name: string
    totalActivePrinciple: string
  }

  export type MedicationCreateOrConnectWithoutProductsInput = {
    where: MedicationWhereUniqueInput
    create: XOR<MedicationCreateWithoutProductsInput, MedicationUncheckedCreateWithoutProductsInput>
  }

  export type PriceCreateWithoutProductInput = {
    id: string
    prices?: PriceCreatepricesInput | Decimal[] | DecimalJsLike[] | number[] | string[]
    updateAt: string
    establishment: EstablishmentCreateNestedOneWithoutPriceInput
  }

  export type PriceUncheckedCreateWithoutProductInput = {
    id: string
    idEstablishment: string
    prices?: PriceCreatepricesInput | Decimal[] | DecimalJsLike[] | number[] | string[]
    updateAt: string
  }

  export type PriceCreateOrConnectWithoutProductInput = {
    where: PriceWhereUniqueInput
    create: XOR<PriceCreateWithoutProductInput, PriceUncheckedCreateWithoutProductInput>
  }

  export type PriceCreateManyProductInputEnvelope = {
    data: PriceCreateManyProductInput | PriceCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type MedicationUpsertWithoutProductsInput = {
    update: XOR<MedicationUpdateWithoutProductsInput, MedicationUncheckedUpdateWithoutProductsInput>
    create: XOR<MedicationCreateWithoutProductsInput, MedicationUncheckedCreateWithoutProductsInput>
    where?: MedicationWhereInput
  }

  export type MedicationUpdateToOneWithWhereWithoutProductsInput = {
    where?: MedicationWhereInput
    data: XOR<MedicationUpdateWithoutProductsInput, MedicationUncheckedUpdateWithoutProductsInput>
  }

  export type MedicationUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    concentration?: StringFieldUpdateOperationsInput | string
    fractions?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    totalActivePrinciple?: StringFieldUpdateOperationsInput | string
    pharmaceuticalForm?: PharmaceuticalFormUpdateOneRequiredWithoutMedicationsNestedInput
    manufacturer?: ManufacturerUpdateOneRequiredWithoutMedicationsNestedInput
    subFamily?: SubFamilyUpdateOneRequiredWithoutMedicationsNestedInput
  }

  export type MedicationUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    concentration?: StringFieldUpdateOperationsInput | string
    fractions?: IntFieldUpdateOperationsInput | number
    idPharmaceuticalForm?: StringFieldUpdateOperationsInput | string
    idManufacturer?: StringFieldUpdateOperationsInput | string
    idSubFamily?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalActivePrinciple?: StringFieldUpdateOperationsInput | string
  }

  export type PriceUpsertWithWhereUniqueWithoutProductInput = {
    where: PriceWhereUniqueInput
    update: XOR<PriceUpdateWithoutProductInput, PriceUncheckedUpdateWithoutProductInput>
    create: XOR<PriceCreateWithoutProductInput, PriceUncheckedCreateWithoutProductInput>
  }

  export type PriceUpdateWithWhereUniqueWithoutProductInput = {
    where: PriceWhereUniqueInput
    data: XOR<PriceUpdateWithoutProductInput, PriceUncheckedUpdateWithoutProductInput>
  }

  export type PriceUpdateManyWithWhereWithoutProductInput = {
    where: PriceScalarWhereInput
    data: XOR<PriceUpdateManyMutationInput, PriceUncheckedUpdateManyWithoutProductInput>
  }

  export type PriceScalarWhereInput = {
    AND?: PriceScalarWhereInput | PriceScalarWhereInput[]
    OR?: PriceScalarWhereInput[]
    NOT?: PriceScalarWhereInput | PriceScalarWhereInput[]
    id?: StringFilter<"Price"> | string
    idEstablishment?: StringFilter<"Price"> | string
    idProduct?: StringFilter<"Price"> | string
    prices?: DecimalNullableListFilter<"Price">
    updateAt?: StringFilter<"Price"> | string
  }

  export type MedicationCreateWithoutPharmaceuticalFormInput = {
    id: string
    concentration: string
    fractions: number
    name: string
    totalActivePrinciple: string
    products?: ProductCreateNestedManyWithoutMedicationInput
    manufacturer: ManufacturerCreateNestedOneWithoutMedicationsInput
    subFamily: SubFamilyCreateNestedOneWithoutMedicationsInput
  }

  export type MedicationUncheckedCreateWithoutPharmaceuticalFormInput = {
    id: string
    concentration: string
    fractions: number
    idManufacturer: string
    idSubFamily: string
    name: string
    totalActivePrinciple: string
    products?: ProductUncheckedCreateNestedManyWithoutMedicationInput
  }

  export type MedicationCreateOrConnectWithoutPharmaceuticalFormInput = {
    where: MedicationWhereUniqueInput
    create: XOR<MedicationCreateWithoutPharmaceuticalFormInput, MedicationUncheckedCreateWithoutPharmaceuticalFormInput>
  }

  export type MedicationCreateManyPharmaceuticalFormInputEnvelope = {
    data: MedicationCreateManyPharmaceuticalFormInput | MedicationCreateManyPharmaceuticalFormInput[]
    skipDuplicates?: boolean
  }

  export type MedicationUpsertWithWhereUniqueWithoutPharmaceuticalFormInput = {
    where: MedicationWhereUniqueInput
    update: XOR<MedicationUpdateWithoutPharmaceuticalFormInput, MedicationUncheckedUpdateWithoutPharmaceuticalFormInput>
    create: XOR<MedicationCreateWithoutPharmaceuticalFormInput, MedicationUncheckedCreateWithoutPharmaceuticalFormInput>
  }

  export type MedicationUpdateWithWhereUniqueWithoutPharmaceuticalFormInput = {
    where: MedicationWhereUniqueInput
    data: XOR<MedicationUpdateWithoutPharmaceuticalFormInput, MedicationUncheckedUpdateWithoutPharmaceuticalFormInput>
  }

  export type MedicationUpdateManyWithWhereWithoutPharmaceuticalFormInput = {
    where: MedicationScalarWhereInput
    data: XOR<MedicationUpdateManyMutationInput, MedicationUncheckedUpdateManyWithoutPharmaceuticalFormInput>
  }

  export type DistrictCreateWithoutEstablishmentsInput = {
    id: string
    name: string
    province: ProvinceCreateNestedOneWithoutDistrictsInput
  }

  export type DistrictUncheckedCreateWithoutEstablishmentsInput = {
    id: string
    name: string
    idProvince: string
  }

  export type DistrictCreateOrConnectWithoutEstablishmentsInput = {
    where: DistrictWhereUniqueInput
    create: XOR<DistrictCreateWithoutEstablishmentsInput, DistrictUncheckedCreateWithoutEstablishmentsInput>
  }

  export type PriceCreateWithoutEstablishmentInput = {
    id: string
    prices?: PriceCreatepricesInput | Decimal[] | DecimalJsLike[] | number[] | string[]
    updateAt: string
    product: ProductCreateNestedOneWithoutPriceInput
  }

  export type PriceUncheckedCreateWithoutEstablishmentInput = {
    id: string
    idProduct: string
    prices?: PriceCreatepricesInput | Decimal[] | DecimalJsLike[] | number[] | string[]
    updateAt: string
  }

  export type PriceCreateOrConnectWithoutEstablishmentInput = {
    where: PriceWhereUniqueInput
    create: XOR<PriceCreateWithoutEstablishmentInput, PriceUncheckedCreateWithoutEstablishmentInput>
  }

  export type PriceCreateManyEstablishmentInputEnvelope = {
    data: PriceCreateManyEstablishmentInput | PriceCreateManyEstablishmentInput[]
    skipDuplicates?: boolean
  }

  export type DistrictUpsertWithoutEstablishmentsInput = {
    update: XOR<DistrictUpdateWithoutEstablishmentsInput, DistrictUncheckedUpdateWithoutEstablishmentsInput>
    create: XOR<DistrictCreateWithoutEstablishmentsInput, DistrictUncheckedCreateWithoutEstablishmentsInput>
    where?: DistrictWhereInput
  }

  export type DistrictUpdateToOneWithWhereWithoutEstablishmentsInput = {
    where?: DistrictWhereInput
    data: XOR<DistrictUpdateWithoutEstablishmentsInput, DistrictUncheckedUpdateWithoutEstablishmentsInput>
  }

  export type DistrictUpdateWithoutEstablishmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    province?: ProvinceUpdateOneRequiredWithoutDistrictsNestedInput
  }

  export type DistrictUncheckedUpdateWithoutEstablishmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    idProvince?: StringFieldUpdateOperationsInput | string
  }

  export type PriceUpsertWithWhereUniqueWithoutEstablishmentInput = {
    where: PriceWhereUniqueInput
    update: XOR<PriceUpdateWithoutEstablishmentInput, PriceUncheckedUpdateWithoutEstablishmentInput>
    create: XOR<PriceCreateWithoutEstablishmentInput, PriceUncheckedCreateWithoutEstablishmentInput>
  }

  export type PriceUpdateWithWhereUniqueWithoutEstablishmentInput = {
    where: PriceWhereUniqueInput
    data: XOR<PriceUpdateWithoutEstablishmentInput, PriceUncheckedUpdateWithoutEstablishmentInput>
  }

  export type PriceUpdateManyWithWhereWithoutEstablishmentInput = {
    where: PriceScalarWhereInput
    data: XOR<PriceUpdateManyMutationInput, PriceUncheckedUpdateManyWithoutEstablishmentInput>
  }

  export type MedicationCreateWithoutManufacturerInput = {
    id: string
    concentration: string
    fractions: number
    name: string
    totalActivePrinciple: string
    products?: ProductCreateNestedManyWithoutMedicationInput
    pharmaceuticalForm: PharmaceuticalFormCreateNestedOneWithoutMedicationsInput
    subFamily: SubFamilyCreateNestedOneWithoutMedicationsInput
  }

  export type MedicationUncheckedCreateWithoutManufacturerInput = {
    id: string
    concentration: string
    fractions: number
    idPharmaceuticalForm: string
    idSubFamily: string
    name: string
    totalActivePrinciple: string
    products?: ProductUncheckedCreateNestedManyWithoutMedicationInput
  }

  export type MedicationCreateOrConnectWithoutManufacturerInput = {
    where: MedicationWhereUniqueInput
    create: XOR<MedicationCreateWithoutManufacturerInput, MedicationUncheckedCreateWithoutManufacturerInput>
  }

  export type MedicationCreateManyManufacturerInputEnvelope = {
    data: MedicationCreateManyManufacturerInput | MedicationCreateManyManufacturerInput[]
    skipDuplicates?: boolean
  }

  export type MedicationUpsertWithWhereUniqueWithoutManufacturerInput = {
    where: MedicationWhereUniqueInput
    update: XOR<MedicationUpdateWithoutManufacturerInput, MedicationUncheckedUpdateWithoutManufacturerInput>
    create: XOR<MedicationCreateWithoutManufacturerInput, MedicationUncheckedCreateWithoutManufacturerInput>
  }

  export type MedicationUpdateWithWhereUniqueWithoutManufacturerInput = {
    where: MedicationWhereUniqueInput
    data: XOR<MedicationUpdateWithoutManufacturerInput, MedicationUncheckedUpdateWithoutManufacturerInput>
  }

  export type MedicationUpdateManyWithWhereWithoutManufacturerInput = {
    where: MedicationScalarWhereInput
    data: XOR<MedicationUpdateManyMutationInput, MedicationUncheckedUpdateManyWithoutManufacturerInput>
  }

  export type ProvinceCreateWithoutDistrictsInput = {
    id: string
    name: string
    department: DepartmentCreateNestedOneWithoutProvincesInput
  }

  export type ProvinceUncheckedCreateWithoutDistrictsInput = {
    id: string
    name: string
    idDepartment: string
  }

  export type ProvinceCreateOrConnectWithoutDistrictsInput = {
    where: ProvinceWhereUniqueInput
    create: XOR<ProvinceCreateWithoutDistrictsInput, ProvinceUncheckedCreateWithoutDistrictsInput>
  }

  export type EstablishmentCreateWithoutDistrictInput = {
    id: string
    address: string
    name: string
    type: string
    typeId: string
    phone?: string | null
    price?: PriceCreateNestedManyWithoutEstablishmentInput
  }

  export type EstablishmentUncheckedCreateWithoutDistrictInput = {
    id: string
    address: string
    name: string
    type: string
    typeId: string
    phone?: string | null
    price?: PriceUncheckedCreateNestedManyWithoutEstablishmentInput
  }

  export type EstablishmentCreateOrConnectWithoutDistrictInput = {
    where: EstablishmentWhereUniqueInput
    create: XOR<EstablishmentCreateWithoutDistrictInput, EstablishmentUncheckedCreateWithoutDistrictInput>
  }

  export type EstablishmentCreateManyDistrictInputEnvelope = {
    data: EstablishmentCreateManyDistrictInput | EstablishmentCreateManyDistrictInput[]
    skipDuplicates?: boolean
  }

  export type ProvinceUpsertWithoutDistrictsInput = {
    update: XOR<ProvinceUpdateWithoutDistrictsInput, ProvinceUncheckedUpdateWithoutDistrictsInput>
    create: XOR<ProvinceCreateWithoutDistrictsInput, ProvinceUncheckedCreateWithoutDistrictsInput>
    where?: ProvinceWhereInput
  }

  export type ProvinceUpdateToOneWithWhereWithoutDistrictsInput = {
    where?: ProvinceWhereInput
    data: XOR<ProvinceUpdateWithoutDistrictsInput, ProvinceUncheckedUpdateWithoutDistrictsInput>
  }

  export type ProvinceUpdateWithoutDistrictsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    department?: DepartmentUpdateOneRequiredWithoutProvincesNestedInput
  }

  export type ProvinceUncheckedUpdateWithoutDistrictsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    idDepartment?: StringFieldUpdateOperationsInput | string
  }

  export type EstablishmentUpsertWithWhereUniqueWithoutDistrictInput = {
    where: EstablishmentWhereUniqueInput
    update: XOR<EstablishmentUpdateWithoutDistrictInput, EstablishmentUncheckedUpdateWithoutDistrictInput>
    create: XOR<EstablishmentCreateWithoutDistrictInput, EstablishmentUncheckedCreateWithoutDistrictInput>
  }

  export type EstablishmentUpdateWithWhereUniqueWithoutDistrictInput = {
    where: EstablishmentWhereUniqueInput
    data: XOR<EstablishmentUpdateWithoutDistrictInput, EstablishmentUncheckedUpdateWithoutDistrictInput>
  }

  export type EstablishmentUpdateManyWithWhereWithoutDistrictInput = {
    where: EstablishmentScalarWhereInput
    data: XOR<EstablishmentUpdateManyMutationInput, EstablishmentUncheckedUpdateManyWithoutDistrictInput>
  }

  export type EstablishmentScalarWhereInput = {
    AND?: EstablishmentScalarWhereInput | EstablishmentScalarWhereInput[]
    OR?: EstablishmentScalarWhereInput[]
    NOT?: EstablishmentScalarWhereInput | EstablishmentScalarWhereInput[]
    id?: StringFilter<"Establishment"> | string
    address?: StringFilter<"Establishment"> | string
    name?: StringFilter<"Establishment"> | string
    type?: StringFilter<"Establishment"> | string
    typeId?: StringFilter<"Establishment"> | string
    idDistrict?: StringFilter<"Establishment"> | string
    phone?: StringNullableFilter<"Establishment"> | string | null
  }

  export type DepartmentCreateWithoutProvincesInput = {
    id: string
    name: string
  }

  export type DepartmentUncheckedCreateWithoutProvincesInput = {
    id: string
    name: string
  }

  export type DepartmentCreateOrConnectWithoutProvincesInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutProvincesInput, DepartmentUncheckedCreateWithoutProvincesInput>
  }

  export type DistrictCreateWithoutProvinceInput = {
    id: string
    name: string
    establishments?: EstablishmentCreateNestedManyWithoutDistrictInput
  }

  export type DistrictUncheckedCreateWithoutProvinceInput = {
    id: string
    name: string
    establishments?: EstablishmentUncheckedCreateNestedManyWithoutDistrictInput
  }

  export type DistrictCreateOrConnectWithoutProvinceInput = {
    where: DistrictWhereUniqueInput
    create: XOR<DistrictCreateWithoutProvinceInput, DistrictUncheckedCreateWithoutProvinceInput>
  }

  export type DistrictCreateManyProvinceInputEnvelope = {
    data: DistrictCreateManyProvinceInput | DistrictCreateManyProvinceInput[]
    skipDuplicates?: boolean
  }

  export type DepartmentUpsertWithoutProvincesInput = {
    update: XOR<DepartmentUpdateWithoutProvincesInput, DepartmentUncheckedUpdateWithoutProvincesInput>
    create: XOR<DepartmentCreateWithoutProvincesInput, DepartmentUncheckedCreateWithoutProvincesInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutProvincesInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutProvincesInput, DepartmentUncheckedUpdateWithoutProvincesInput>
  }

  export type DepartmentUpdateWithoutProvincesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DepartmentUncheckedUpdateWithoutProvincesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DistrictUpsertWithWhereUniqueWithoutProvinceInput = {
    where: DistrictWhereUniqueInput
    update: XOR<DistrictUpdateWithoutProvinceInput, DistrictUncheckedUpdateWithoutProvinceInput>
    create: XOR<DistrictCreateWithoutProvinceInput, DistrictUncheckedCreateWithoutProvinceInput>
  }

  export type DistrictUpdateWithWhereUniqueWithoutProvinceInput = {
    where: DistrictWhereUniqueInput
    data: XOR<DistrictUpdateWithoutProvinceInput, DistrictUncheckedUpdateWithoutProvinceInput>
  }

  export type DistrictUpdateManyWithWhereWithoutProvinceInput = {
    where: DistrictScalarWhereInput
    data: XOR<DistrictUpdateManyMutationInput, DistrictUncheckedUpdateManyWithoutProvinceInput>
  }

  export type DistrictScalarWhereInput = {
    AND?: DistrictScalarWhereInput | DistrictScalarWhereInput[]
    OR?: DistrictScalarWhereInput[]
    NOT?: DistrictScalarWhereInput | DistrictScalarWhereInput[]
    id?: StringFilter<"District"> | string
    name?: StringFilter<"District"> | string
    idProvince?: StringFilter<"District"> | string
  }

  export type ProvinceCreateWithoutDepartmentInput = {
    id: string
    name: string
    districts?: DistrictCreateNestedManyWithoutProvinceInput
  }

  export type ProvinceUncheckedCreateWithoutDepartmentInput = {
    id: string
    name: string
    districts?: DistrictUncheckedCreateNestedManyWithoutProvinceInput
  }

  export type ProvinceCreateOrConnectWithoutDepartmentInput = {
    where: ProvinceWhereUniqueInput
    create: XOR<ProvinceCreateWithoutDepartmentInput, ProvinceUncheckedCreateWithoutDepartmentInput>
  }

  export type ProvinceCreateManyDepartmentInputEnvelope = {
    data: ProvinceCreateManyDepartmentInput | ProvinceCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type ProvinceUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: ProvinceWhereUniqueInput
    update: XOR<ProvinceUpdateWithoutDepartmentInput, ProvinceUncheckedUpdateWithoutDepartmentInput>
    create: XOR<ProvinceCreateWithoutDepartmentInput, ProvinceUncheckedCreateWithoutDepartmentInput>
  }

  export type ProvinceUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: ProvinceWhereUniqueInput
    data: XOR<ProvinceUpdateWithoutDepartmentInput, ProvinceUncheckedUpdateWithoutDepartmentInput>
  }

  export type ProvinceUpdateManyWithWhereWithoutDepartmentInput = {
    where: ProvinceScalarWhereInput
    data: XOR<ProvinceUpdateManyMutationInput, ProvinceUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type ProvinceScalarWhereInput = {
    AND?: ProvinceScalarWhereInput | ProvinceScalarWhereInput[]
    OR?: ProvinceScalarWhereInput[]
    NOT?: ProvinceScalarWhereInput | ProvinceScalarWhereInput[]
    id?: StringFilter<"Province"> | string
    name?: StringFilter<"Province"> | string
    idDepartment?: StringFilter<"Province"> | string
  }

  export type SubFamilyCreateManyFamilyInput = {
    id: string
    group: string
    name: string
    nameSuggestion: string
  }

  export type SubFamilyUpdateWithoutFamilyInput = {
    id?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameSuggestion?: StringFieldUpdateOperationsInput | string
    medications?: MedicationUpdateManyWithoutSubFamilyNestedInput
  }

  export type SubFamilyUncheckedUpdateWithoutFamilyInput = {
    id?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameSuggestion?: StringFieldUpdateOperationsInput | string
    medications?: MedicationUncheckedUpdateManyWithoutSubFamilyNestedInput
  }

  export type SubFamilyUncheckedUpdateManyWithoutFamilyInput = {
    id?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nameSuggestion?: StringFieldUpdateOperationsInput | string
  }

  export type MedicationCreateManySubFamilyInput = {
    id: string
    concentration: string
    fractions: number
    idPharmaceuticalForm: string
    idManufacturer: string
    name: string
    totalActivePrinciple: string
  }

  export type MedicationUpdateWithoutSubFamilyInput = {
    id?: StringFieldUpdateOperationsInput | string
    concentration?: StringFieldUpdateOperationsInput | string
    fractions?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    totalActivePrinciple?: StringFieldUpdateOperationsInput | string
    products?: ProductUpdateManyWithoutMedicationNestedInput
    pharmaceuticalForm?: PharmaceuticalFormUpdateOneRequiredWithoutMedicationsNestedInput
    manufacturer?: ManufacturerUpdateOneRequiredWithoutMedicationsNestedInput
  }

  export type MedicationUncheckedUpdateWithoutSubFamilyInput = {
    id?: StringFieldUpdateOperationsInput | string
    concentration?: StringFieldUpdateOperationsInput | string
    fractions?: IntFieldUpdateOperationsInput | number
    idPharmaceuticalForm?: StringFieldUpdateOperationsInput | string
    idManufacturer?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalActivePrinciple?: StringFieldUpdateOperationsInput | string
    products?: ProductUncheckedUpdateManyWithoutMedicationNestedInput
  }

  export type MedicationUncheckedUpdateManyWithoutSubFamilyInput = {
    id?: StringFieldUpdateOperationsInput | string
    concentration?: StringFieldUpdateOperationsInput | string
    fractions?: IntFieldUpdateOperationsInput | number
    idPharmaceuticalForm?: StringFieldUpdateOperationsInput | string
    idManufacturer?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalActivePrinciple?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateManyMedicationInput = {
    id: string
    name: string
  }

  export type ProductUpdateWithoutMedicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: PriceUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutMedicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: PriceUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutMedicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PriceCreateManyProductInput = {
    id: string
    idEstablishment: string
    prices?: PriceCreatepricesInput | Decimal[] | DecimalJsLike[] | number[] | string[]
    updateAt: string
  }

  export type PriceUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    prices?: PriceUpdatepricesInput | Decimal[] | DecimalJsLike[] | number[] | string[]
    updateAt?: StringFieldUpdateOperationsInput | string
    establishment?: EstablishmentUpdateOneRequiredWithoutPriceNestedInput
  }

  export type PriceUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    idEstablishment?: StringFieldUpdateOperationsInput | string
    prices?: PriceUpdatepricesInput | Decimal[] | DecimalJsLike[] | number[] | string[]
    updateAt?: StringFieldUpdateOperationsInput | string
  }

  export type PriceUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    idEstablishment?: StringFieldUpdateOperationsInput | string
    prices?: PriceUpdatepricesInput | Decimal[] | DecimalJsLike[] | number[] | string[]
    updateAt?: StringFieldUpdateOperationsInput | string
  }

  export type MedicationCreateManyPharmaceuticalFormInput = {
    id: string
    concentration: string
    fractions: number
    idManufacturer: string
    idSubFamily: string
    name: string
    totalActivePrinciple: string
  }

  export type MedicationUpdateWithoutPharmaceuticalFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    concentration?: StringFieldUpdateOperationsInput | string
    fractions?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    totalActivePrinciple?: StringFieldUpdateOperationsInput | string
    products?: ProductUpdateManyWithoutMedicationNestedInput
    manufacturer?: ManufacturerUpdateOneRequiredWithoutMedicationsNestedInput
    subFamily?: SubFamilyUpdateOneRequiredWithoutMedicationsNestedInput
  }

  export type MedicationUncheckedUpdateWithoutPharmaceuticalFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    concentration?: StringFieldUpdateOperationsInput | string
    fractions?: IntFieldUpdateOperationsInput | number
    idManufacturer?: StringFieldUpdateOperationsInput | string
    idSubFamily?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalActivePrinciple?: StringFieldUpdateOperationsInput | string
    products?: ProductUncheckedUpdateManyWithoutMedicationNestedInput
  }

  export type MedicationUncheckedUpdateManyWithoutPharmaceuticalFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    concentration?: StringFieldUpdateOperationsInput | string
    fractions?: IntFieldUpdateOperationsInput | number
    idManufacturer?: StringFieldUpdateOperationsInput | string
    idSubFamily?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalActivePrinciple?: StringFieldUpdateOperationsInput | string
  }

  export type PriceCreateManyEstablishmentInput = {
    id: string
    idProduct: string
    prices?: PriceCreatepricesInput | Decimal[] | DecimalJsLike[] | number[] | string[]
    updateAt: string
  }

  export type PriceUpdateWithoutEstablishmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    prices?: PriceUpdatepricesInput | Decimal[] | DecimalJsLike[] | number[] | string[]
    updateAt?: StringFieldUpdateOperationsInput | string
    product?: ProductUpdateOneRequiredWithoutPriceNestedInput
  }

  export type PriceUncheckedUpdateWithoutEstablishmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    idProduct?: StringFieldUpdateOperationsInput | string
    prices?: PriceUpdatepricesInput | Decimal[] | DecimalJsLike[] | number[] | string[]
    updateAt?: StringFieldUpdateOperationsInput | string
  }

  export type PriceUncheckedUpdateManyWithoutEstablishmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    idProduct?: StringFieldUpdateOperationsInput | string
    prices?: PriceUpdatepricesInput | Decimal[] | DecimalJsLike[] | number[] | string[]
    updateAt?: StringFieldUpdateOperationsInput | string
  }

  export type MedicationCreateManyManufacturerInput = {
    id: string
    concentration: string
    fractions: number
    idPharmaceuticalForm: string
    idSubFamily: string
    name: string
    totalActivePrinciple: string
  }

  export type MedicationUpdateWithoutManufacturerInput = {
    id?: StringFieldUpdateOperationsInput | string
    concentration?: StringFieldUpdateOperationsInput | string
    fractions?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    totalActivePrinciple?: StringFieldUpdateOperationsInput | string
    products?: ProductUpdateManyWithoutMedicationNestedInput
    pharmaceuticalForm?: PharmaceuticalFormUpdateOneRequiredWithoutMedicationsNestedInput
    subFamily?: SubFamilyUpdateOneRequiredWithoutMedicationsNestedInput
  }

  export type MedicationUncheckedUpdateWithoutManufacturerInput = {
    id?: StringFieldUpdateOperationsInput | string
    concentration?: StringFieldUpdateOperationsInput | string
    fractions?: IntFieldUpdateOperationsInput | number
    idPharmaceuticalForm?: StringFieldUpdateOperationsInput | string
    idSubFamily?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalActivePrinciple?: StringFieldUpdateOperationsInput | string
    products?: ProductUncheckedUpdateManyWithoutMedicationNestedInput
  }

  export type MedicationUncheckedUpdateManyWithoutManufacturerInput = {
    id?: StringFieldUpdateOperationsInput | string
    concentration?: StringFieldUpdateOperationsInput | string
    fractions?: IntFieldUpdateOperationsInput | number
    idPharmaceuticalForm?: StringFieldUpdateOperationsInput | string
    idSubFamily?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    totalActivePrinciple?: StringFieldUpdateOperationsInput | string
  }

  export type EstablishmentCreateManyDistrictInput = {
    id: string
    address: string
    name: string
    type: string
    typeId: string
    phone?: string | null
  }

  export type EstablishmentUpdateWithoutDistrictInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    typeId?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    price?: PriceUpdateManyWithoutEstablishmentNestedInput
  }

  export type EstablishmentUncheckedUpdateWithoutDistrictInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    typeId?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    price?: PriceUncheckedUpdateManyWithoutEstablishmentNestedInput
  }

  export type EstablishmentUncheckedUpdateManyWithoutDistrictInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    typeId?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DistrictCreateManyProvinceInput = {
    id: string
    name: string
  }

  export type DistrictUpdateWithoutProvinceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    establishments?: EstablishmentUpdateManyWithoutDistrictNestedInput
  }

  export type DistrictUncheckedUpdateWithoutProvinceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    establishments?: EstablishmentUncheckedUpdateManyWithoutDistrictNestedInput
  }

  export type DistrictUncheckedUpdateManyWithoutProvinceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProvinceCreateManyDepartmentInput = {
    id: string
    name: string
  }

  export type ProvinceUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    districts?: DistrictUpdateManyWithoutProvinceNestedInput
  }

  export type ProvinceUncheckedUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    districts?: DistrictUncheckedUpdateManyWithoutProvinceNestedInput
  }

  export type ProvinceUncheckedUpdateManyWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use FamilyCountOutputTypeDefaultArgs instead
     */
    export type FamilyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FamilyCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SubFamilyCountOutputTypeDefaultArgs instead
     */
    export type SubFamilyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SubFamilyCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MedicationCountOutputTypeDefaultArgs instead
     */
    export type MedicationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MedicationCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductCountOutputTypeDefaultArgs instead
     */
    export type ProductCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PharmaceuticalFormCountOutputTypeDefaultArgs instead
     */
    export type PharmaceuticalFormCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PharmaceuticalFormCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EstablishmentCountOutputTypeDefaultArgs instead
     */
    export type EstablishmentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EstablishmentCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ManufacturerCountOutputTypeDefaultArgs instead
     */
    export type ManufacturerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ManufacturerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DistrictCountOutputTypeDefaultArgs instead
     */
    export type DistrictCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DistrictCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProvinceCountOutputTypeDefaultArgs instead
     */
    export type ProvinceCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProvinceCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DepartmentCountOutputTypeDefaultArgs instead
     */
    export type DepartmentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DepartmentCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PriceDefaultArgs instead
     */
    export type PriceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PriceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FamilyDefaultArgs instead
     */
    export type FamilyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FamilyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SubFamilyDefaultArgs instead
     */
    export type SubFamilyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SubFamilyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MedicationDefaultArgs instead
     */
    export type MedicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MedicationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductDefaultArgs instead
     */
    export type ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PharmaceuticalFormDefaultArgs instead
     */
    export type PharmaceuticalFormArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PharmaceuticalFormDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EstablishmentDefaultArgs instead
     */
    export type EstablishmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EstablishmentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ManufacturerDefaultArgs instead
     */
    export type ManufacturerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ManufacturerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DistrictDefaultArgs instead
     */
    export type DistrictArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DistrictDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProvinceDefaultArgs instead
     */
    export type ProvinceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProvinceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DepartmentDefaultArgs instead
     */
    export type DepartmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DepartmentDefaultArgs<ExtArgs>

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