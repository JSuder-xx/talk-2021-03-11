/**
 * ## Practical: String Validations
 * 
 * Once again... skip to the bottom 👇
 */
module ReadMe11 {}

module StringValidationAPI {
  type Tag<tag extends string> = { __tag: tag };

  /** A string verified to be structured as an EMail. */
  export module EmailString {
    type EmailTag = Tag<"EMail">;
    type EmailString = string & EmailTag;
    /**
     * An EmailString
     * - Assignable to string **BUT** string is not assignable to this.
     * - Is a string with Something@SomethingElse. Essentially a string with an @ between two non-empty parts.
     **/
    export type Type = EmailString;
    type FromLiteral<s extends string> = string extends s
      ? unknown // if s is general (unrefined string) then fail
      : s extends `${infer _prefix}@${infer _suffix}`
      ? _prefix extends ""
        ? never
        : _suffix extends ""
        ? never
        : s & EmailTag
      : unknown;
    /** Refines the type of the given string to EmailString if it has two non-empty strings separated by @. */
    export const literal = <str extends string>(str: str): FromLiteral<str> =>
      str as any;
    /** If you have a general string, test and refine whether it is an EMail string. */
    export const test = (str: string): str is Type => {
      const [prefix, suffix] = (str || "").split("@");
      return !!prefix && !!suffix;
    };
  }

  type EatPrefix<prefix extends string, s> = s extends `${prefix}${infer rest}`
    ? rest
    : false;
  type EatDigit<s> = EatPrefix<
    "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9",
    s
  >;

  export module USPhoneNumberString {
    type EatLeftParen<s> = EatPrefix<"(", s>;
    type EatRightParen<s> = EatPrefix<")", s>;

    type EatThreeDigits<s> = EatDigit<EatDigit<EatDigit<s>>>;
    type EatFourDigits<s> = EatDigit<EatThreeDigits<s>>;
    type EatAreaCode<s> = EatRightParen<EatThreeDigits<EatLeftParen<s>>>;
    type EatPhoneNumber<s> = EatFourDigits<EatPrefix<"-", EatThreeDigits<s>>>;
    type EatPhoneNumberWithAreaCode<s> = EatPhoneNumber<EatAreaCode<s>>;

    type USPhoneNumberTag = Tag<"USPhoneNumber">;
    type USPhoneNumberString = string & USPhoneNumberTag;
    /**
     * A USPhoneNumberString
     * - Assignable to string **BUT** string is not assignable to this.
     * - Is a string that is either a seven digit or seven digit with area code.
     **/
    export type Type = USPhoneNumberString;

    type FromLiteral<s extends string> = EatPhoneNumber<s> extends string
      ? s & USPhoneNumberTag
      : EatPhoneNumberWithAreaCode<s> extends string
      ? s & USPhoneNumberTag
      : unknown;

    /** Refines the type of the given string to PhoneNumberString if it looks like a US phone number.. */
    export const literal = <str extends string>(str: str): FromLiteral<str> =>
      str as any;

    /** If you have a general string, test and refine whether it is an EMail string. */
    export const test = (str: string): str is Type => {
      const [prefix, suffix] = (str || "").split("@");
      return !!prefix && !!suffix;
    };
  }
}

//------------------------------------------------------------
// EXAMPLES
//------------------------------------------------------------
type Person = {
    firstName: string;
    phoneNumber: StringValidationAPI.USPhoneNumberString.Type;
    email: StringValidationAPI.EmailString.Type;
}

const validPerson: Person = {
    firstName: "Janice",
    // TRY: Remove a digit from the phone number
    phoneNumber: StringValidationAPI.USPhoneNumberString.literal("(123)123-4567"),
    // TRY: Remove the @ symbol OR remove all the text to the left of the @.
    email: StringValidationAPI.EmailString.literal("janice@gmail.com")
}