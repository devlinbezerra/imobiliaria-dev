export default (selector) => {
    //1.Pegar todos os elementos da DOM referente ao selector informado
    const fields = Array.from(document.querySelectorAll(selector));

    //2.Transformar os elementos em um JSON com nome de chave e valores
    let json = '{';
    let end = ',';
    for (let i = 0; i < fields.length; i++){
        if(i === (fields.length - 1)) {
            end = '}';
        }
        json = json + '"'+fields[i].id+'":"'+fields[i].value+'"'+end;
    }

    //3.Retornar o JSON em forma de objeto
    return JSON.parse(json);
}