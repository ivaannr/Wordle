export interface DictionaryResponse {
  word: string;
  entries: Entry[];
  source: Source;
}

export interface Entry {
  lang: string;
  lemma: string;
  pos: string;
  ipa: string;
  definitions: DefinitionEntry[];
  forms: Form[];
}

export interface DefinitionEntry {
  locale: string;
  definitions: string[];
}

export interface Form {
  form: string;
  tag: string;
}

export interface Source {
  name: string;
  url: string;
  license: string;
}