/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createCommissioningInspection } from "../graphql/mutations";
const client = generateClient();
export default function CommissioningInspectionCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    siteId: "",
    phase: "",
    equipmentTag: "",
    checklistItem: "",
    status: "",
    techAlias: "",
    notes: "",
    inspectionDate: "",
  };
  const [siteId, setSiteId] = React.useState(initialValues.siteId);
  const [phase, setPhase] = React.useState(initialValues.phase);
  const [equipmentTag, setEquipmentTag] = React.useState(
    initialValues.equipmentTag
  );
  const [checklistItem, setChecklistItem] = React.useState(
    initialValues.checklistItem
  );
  const [status, setStatus] = React.useState(initialValues.status);
  const [techAlias, setTechAlias] = React.useState(initialValues.techAlias);
  const [notes, setNotes] = React.useState(initialValues.notes);
  const [inspectionDate, setInspectionDate] = React.useState(
    initialValues.inspectionDate
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setSiteId(initialValues.siteId);
    setPhase(initialValues.phase);
    setEquipmentTag(initialValues.equipmentTag);
    setChecklistItem(initialValues.checklistItem);
    setStatus(initialValues.status);
    setTechAlias(initialValues.techAlias);
    setNotes(initialValues.notes);
    setInspectionDate(initialValues.inspectionDate);
    setErrors({});
  };
  const validations = {
    siteId: [],
    phase: [],
    equipmentTag: [],
    checklistItem: [],
    status: [],
    techAlias: [],
    notes: [],
    inspectionDate: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          siteId,
          phase,
          equipmentTag,
          checklistItem,
          status,
          techAlias,
          notes,
          inspectionDate,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createCommissioningInspection.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "CommissioningInspectionCreateForm")}
      {...rest}
    >
      <TextField
        label="Site id"
        isRequired={false}
        isReadOnly={false}
        value={siteId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              siteId: value,
              phase,
              equipmentTag,
              checklistItem,
              status,
              techAlias,
              notes,
              inspectionDate,
            };
            const result = onChange(modelFields);
            value = result?.siteId ?? value;
          }
          if (errors.siteId?.hasError) {
            runValidationTasks("siteId", value);
          }
          setSiteId(value);
        }}
        onBlur={() => runValidationTasks("siteId", siteId)}
        errorMessage={errors.siteId?.errorMessage}
        hasError={errors.siteId?.hasError}
        {...getOverrideProps(overrides, "siteId")}
      ></TextField>
      <TextField
        label="Phase"
        isRequired={false}
        isReadOnly={false}
        value={phase}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              siteId,
              phase: value,
              equipmentTag,
              checklistItem,
              status,
              techAlias,
              notes,
              inspectionDate,
            };
            const result = onChange(modelFields);
            value = result?.phase ?? value;
          }
          if (errors.phase?.hasError) {
            runValidationTasks("phase", value);
          }
          setPhase(value);
        }}
        onBlur={() => runValidationTasks("phase", phase)}
        errorMessage={errors.phase?.errorMessage}
        hasError={errors.phase?.hasError}
        {...getOverrideProps(overrides, "phase")}
      ></TextField>
      <TextField
        label="Equipment tag"
        isRequired={false}
        isReadOnly={false}
        value={equipmentTag}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              siteId,
              phase,
              equipmentTag: value,
              checklistItem,
              status,
              techAlias,
              notes,
              inspectionDate,
            };
            const result = onChange(modelFields);
            value = result?.equipmentTag ?? value;
          }
          if (errors.equipmentTag?.hasError) {
            runValidationTasks("equipmentTag", value);
          }
          setEquipmentTag(value);
        }}
        onBlur={() => runValidationTasks("equipmentTag", equipmentTag)}
        errorMessage={errors.equipmentTag?.errorMessage}
        hasError={errors.equipmentTag?.hasError}
        {...getOverrideProps(overrides, "equipmentTag")}
      ></TextField>
      <TextField
        label="Checklist item"
        isRequired={false}
        isReadOnly={false}
        value={checklistItem}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              siteId,
              phase,
              equipmentTag,
              checklistItem: value,
              status,
              techAlias,
              notes,
              inspectionDate,
            };
            const result = onChange(modelFields);
            value = result?.checklistItem ?? value;
          }
          if (errors.checklistItem?.hasError) {
            runValidationTasks("checklistItem", value);
          }
          setChecklistItem(value);
        }}
        onBlur={() => runValidationTasks("checklistItem", checklistItem)}
        errorMessage={errors.checklistItem?.errorMessage}
        hasError={errors.checklistItem?.hasError}
        {...getOverrideProps(overrides, "checklistItem")}
      ></TextField>
      <SelectField
        label="Status"
        placeholder="Please select an option"
        isDisabled={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              siteId,
              phase,
              equipmentTag,
              checklistItem,
              status: value,
              techAlias,
              notes,
              inspectionDate,
            };
            const result = onChange(modelFields);
            value = result?.status ?? value;
          }
          if (errors.status?.hasError) {
            runValidationTasks("status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("status", status)}
        errorMessage={errors.status?.errorMessage}
        hasError={errors.status?.hasError}
        {...getOverrideProps(overrides, "status")}
      >
        <option
          children="Pass"
          value="PASS"
          {...getOverrideProps(overrides, "statusoption0")}
        ></option>
        <option
          children="Fail"
          value="FAIL"
          {...getOverrideProps(overrides, "statusoption1")}
        ></option>
        <option
          children="Pending"
          value="PENDING"
          {...getOverrideProps(overrides, "statusoption2")}
        ></option>
      </SelectField>
      <TextField
        label="Tech alias"
        isRequired={false}
        isReadOnly={false}
        value={techAlias}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              siteId,
              phase,
              equipmentTag,
              checklistItem,
              status,
              techAlias: value,
              notes,
              inspectionDate,
            };
            const result = onChange(modelFields);
            value = result?.techAlias ?? value;
          }
          if (errors.techAlias?.hasError) {
            runValidationTasks("techAlias", value);
          }
          setTechAlias(value);
        }}
        onBlur={() => runValidationTasks("techAlias", techAlias)}
        errorMessage={errors.techAlias?.errorMessage}
        hasError={errors.techAlias?.hasError}
        {...getOverrideProps(overrides, "techAlias")}
      ></TextField>
      <TextField
        label="Notes"
        isRequired={false}
        isReadOnly={false}
        value={notes}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              siteId,
              phase,
              equipmentTag,
              checklistItem,
              status,
              techAlias,
              notes: value,
              inspectionDate,
            };
            const result = onChange(modelFields);
            value = result?.notes ?? value;
          }
          if (errors.notes?.hasError) {
            runValidationTasks("notes", value);
          }
          setNotes(value);
        }}
        onBlur={() => runValidationTasks("notes", notes)}
        errorMessage={errors.notes?.errorMessage}
        hasError={errors.notes?.hasError}
        {...getOverrideProps(overrides, "notes")}
      ></TextField>
      <TextField
        label="Inspection date"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={inspectionDate && convertToLocal(new Date(inspectionDate))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              siteId,
              phase,
              equipmentTag,
              checklistItem,
              status,
              techAlias,
              notes,
              inspectionDate: value,
            };
            const result = onChange(modelFields);
            value = result?.inspectionDate ?? value;
          }
          if (errors.inspectionDate?.hasError) {
            runValidationTasks("inspectionDate", value);
          }
          setInspectionDate(value);
        }}
        onBlur={() => runValidationTasks("inspectionDate", inspectionDate)}
        errorMessage={errors.inspectionDate?.errorMessage}
        hasError={errors.inspectionDate?.hasError}
        {...getOverrideProps(overrides, "inspectionDate")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
