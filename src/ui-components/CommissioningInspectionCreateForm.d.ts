/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CommissioningInspectionCreateFormInputValues = {
    siteId?: string;
    phase?: string;
    equipmentTag?: string;
    checklistItem?: string;
    status?: string;
    techAlias?: string;
    notes?: string;
    inspectionDate?: string;
};
export declare type CommissioningInspectionCreateFormValidationValues = {
    siteId?: ValidationFunction<string>;
    phase?: ValidationFunction<string>;
    equipmentTag?: ValidationFunction<string>;
    checklistItem?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    techAlias?: ValidationFunction<string>;
    notes?: ValidationFunction<string>;
    inspectionDate?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CommissioningInspectionCreateFormOverridesProps = {
    CommissioningInspectionCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    siteId?: PrimitiveOverrideProps<TextFieldProps>;
    phase?: PrimitiveOverrideProps<TextFieldProps>;
    equipmentTag?: PrimitiveOverrideProps<TextFieldProps>;
    checklistItem?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
    techAlias?: PrimitiveOverrideProps<TextFieldProps>;
    notes?: PrimitiveOverrideProps<TextFieldProps>;
    inspectionDate?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CommissioningInspectionCreateFormProps = React.PropsWithChildren<{
    overrides?: CommissioningInspectionCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CommissioningInspectionCreateFormInputValues) => CommissioningInspectionCreateFormInputValues;
    onSuccess?: (fields: CommissioningInspectionCreateFormInputValues) => void;
    onError?: (fields: CommissioningInspectionCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CommissioningInspectionCreateFormInputValues) => CommissioningInspectionCreateFormInputValues;
    onValidate?: CommissioningInspectionCreateFormValidationValues;
} & React.CSSProperties>;
export default function CommissioningInspectionCreateForm(props: CommissioningInspectionCreateFormProps): React.ReactElement;
