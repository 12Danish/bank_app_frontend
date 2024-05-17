export interface loanHistoryProps{
loan_id : number;
date_of_issuance : string;
date_of_return : string;
amount_taken : number;
fine : number;
repayable_amount : number;
status : string;

}

export interface loanLogsProps   {
    loan_id: number;
    entry_date: string ;
    amount_taken: number;
    fine: number;
    repayable_amount: number;
    status: string;
  }

  export interface returnTypeLoanHistory{
    loanHistory : loanHistoryProps[] | null;
  }