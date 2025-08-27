




const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Danniel Ek', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 },
];

// Adicionar 10% de valor de mercado a todas as companhias -> MAP
// Filtrar somente companhias fundadas abaixo de 1990 -> FILTER
// Somar o valor de mercado das restantes -> REDUCE

const add10Percent = company => ({
    ...company,
    marketValue: company.marketValue * 1.10
  })

const filterCompanies = (company) => company.foundedOn < 1990

const calculateTotalMarketVelue = (acc, company) => acc + company.marketValue


const totalMarketValue = companies
  .map(add10Percent)
  .filter(filterCompanies)
  .reduce(calculateTotalMarketVelue, 0);


// Subtrair 10% de valor de marcado a todas as companhias
// Filtrar somente companhias fundados depois de 1980
// Somar o valor de mercado das restantes

const companies2 = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Danniel Ek', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 },
];

// Função que subtrai 10%
const subtract10 = company => {
    return {
        ...company, // mantém os outros dados
        marketValue: company.marketValue * 0.90
    }
}

// Função que filtra empresas fundadas após 1980
const filterCompanies2 = company => company.foundedOn > 1980

// Função para somar valores de mercado
const calculateCompanyValue = (acc, company) => acc + company.marketValue

// Encadeando tudo
const totalMarketValue2 = companies2
    .map(subtract10)
    .filter(filterCompanies2)
    .reduce(calculateCompanyValue, 0)

console.log(totalMarketValue2)










