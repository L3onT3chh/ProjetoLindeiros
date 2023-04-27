export const parseToUrl = (name:string) => {
    name = name.trim().toLowerCase();
    name = name.replace(/[áàãâä]/g, 'a').replace(/[éèêë]/g, 'e').replace(/[íìîï]/g, 'i').replace(/[óòõôö]/g, 'o').replace(/[úùûü]/g, 'u').replace(/[ñ]/g, 'n');
    name = name.replace(/ç/g, 'c');
    name = name.replace(/[^a-z0-9]+/g, '_');
    return name;
}