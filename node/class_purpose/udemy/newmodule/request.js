function encrypt(data){
    return 'encrypted date';
}

function send(url,data){
    const encryptedData=encrypt(data);
    console.log(`sending ${encryptedData} to ${url}`);
}