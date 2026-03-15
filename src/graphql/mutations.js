/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCommissioningInspection = /* GraphQL */ `
  mutation CreateCommissioningInspection(
    $input: CreateCommissioningInspectionInput!
    $condition: ModelCommissioningInspectionConditionInput
  ) {
    createCommissioningInspection(input: $input, condition: $condition) {
      id
      siteId
      phase
      equipmentTag
      checklistItem
      status
      techAlias
      notes
      inspectionDate
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateCommissioningInspection = /* GraphQL */ `
  mutation UpdateCommissioningInspection(
    $input: UpdateCommissioningInspectionInput!
    $condition: ModelCommissioningInspectionConditionInput
  ) {
    updateCommissioningInspection(input: $input, condition: $condition) {
      id
      siteId
      phase
      equipmentTag
      checklistItem
      status
      techAlias
      notes
      inspectionDate
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteCommissioningInspection = /* GraphQL */ `
  mutation DeleteCommissioningInspection(
    $input: DeleteCommissioningInspectionInput!
    $condition: ModelCommissioningInspectionConditionInput
  ) {
    deleteCommissioningInspection(input: $input, condition: $condition) {
      id
      siteId
      phase
      equipmentTag
      checklistItem
      status
      techAlias
      notes
      inspectionDate
      createdAt
      updatedAt
      __typename
    }
  }
`;
