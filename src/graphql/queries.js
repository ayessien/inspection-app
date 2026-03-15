/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCommissioningInspection = /* GraphQL */ `
  query GetCommissioningInspection($id: ID!) {
    getCommissioningInspection(id: $id) {
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
export const listCommissioningInspections = /* GraphQL */ `
  query ListCommissioningInspections(
    $filter: ModelCommissioningInspectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCommissioningInspections(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
