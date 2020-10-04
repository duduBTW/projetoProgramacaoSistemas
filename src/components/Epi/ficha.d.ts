export interface Guia {
  EpiGuiaHeader: EpiGuiaHeader;
  EpiGuiaDetalhesItem: EpiGuiaDetalhes[];
  EpiGuiaHistoryItem: EpiGuiaHistory[];
}

export interface EpiGuiaHeader {
  FIECODIGO: string;
  FIEDATA: string;
  FIESTATUS: string;
  FIEQRCODE: string;
  EMPCODIGO: string;
  FUNCODIGO: string;
  FUNNOME: string;
  FUNCPF: string;
  Files: Array<Files>;

  //Func
  ARQGUID: string;
  ARQCODIGO: string;
  ARQNOME: string;
}

export interface EpiGuiaDetalhes {
  FIECODIGO: string;
  EPECODIGO: string;
  FIECA: string;
  FIEVALIDADE: string;
  FUNPROCESSO: string;
  FIEQUANTIDADE: string;
  FABCODIGO: string;
  FABCNPJ: string;
  FABRAZAOSOCIAL: string;
  FIERECEBIMENTO: string;
  EPITIPO: string;
  EPINOME: string;
  EPIDESCRICAO: string;
  FIEDESCRICAO: string;
  FIECODPARA: string;
  FIECODDE: string;

  //Func
  FIDCODIGO: string;
  FIESTATUS: string;
  EPIDEVOLUCAO: string;
  FIETROCA: string;

  //Dynamo
  EpiDynamoInfo: WizardCaEpi[];

  //Employee
  FUNCPF: string;
  FUNNOME: string;
  FUNCODIGO: string;

  // Header
  FIEDATA: string;
}

export interface EpiGuiaHistory extends EpiGuiaDetalhes {
  PARAFIEQUANTIDADE: string;
  PARAFIERECEBIMENTO: string;
  PARAFIETROCA: string;
  PARAFIESTATUS: string;
  PARAFIEDESCRICAO: string;
}

export interface Files {
  ARQCODIGO: string;
  ARQGUID: string;
  ARQNOME: string;
  ARQTIPO: string;
}
