export interface countryDetails {
    name: countryName;
    flags: flags; 
    population: number; 
    region: string, 
    capital: string[];
}

interface flags {
    png: string; 
    svg: string
}

export interface countryName {
    common: string;
    official: string;
}

interface currencies{
   [country: string] : { name: string; symbol: string}
}

interface languages {
    [language: string]: string
}

export interface countryDetailsComplete extends countryDetails {
    subregion: string;
    languages: languages
    tld: string;
    borders: string[];
    currencies: currencies
}

