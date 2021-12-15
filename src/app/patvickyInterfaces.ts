

export interface MyDetails {
  First991622002?: string;
  Last991622002?: string;
  LOGpatvicky?: string;
  IDpatvicky?: string;
  PROGpatvicky?: string;
}

export interface Company {
  BusinessNumber?: string;
  President?: string;
  Location?: string;
  HelpDesk?: string;
}

export interface RetailData {
  inventoryID: string;
  description: string;
  materialUsed: string;
  pieceName: string;
  listPrice: string;
}

export interface RootObject {
  myDetails: MyDetails;
  Company: Company;
  RetailData: RetailData[];
}

