function zash(){
    res='';
    alph=' абвгдеёжзийклмнопрстуфхцчшщъыьэюя0123456789./-';
    word=$('#phrase').val().toLowerCase();
    key=$('#key').val().toLowerCase();
    i1=0;
    for(i=0;i<word.length;i++){

        a=alph.indexOf(word[i]);
        if(i1<key.length){
        b=alph.indexOf(key[i1]);
        i1++;
        }
        else{
            i1=0;
            b=alph.indexOf(key[i1]);
            i1++;
        }
        c=a+b;
        if(c>=47){
            c=c-47;
        }
        res=res+alph[c];
        $('#res').val(res);
    }
}
function rassh(){
    res='';
    alph=' абвгдеёжзийклмнопрстуфхцчшщъыьэюя0123456789./-';
    word=$('#phrase').val().toLowerCase();
    key=$('#key').val().toLowerCase();
    i1=0;
    for(i=0;i<word.length;i++){

        a=alph.indexOf(word[i]);
        if(i1<key.length){
        b=alph.indexOf(key[i1]);
        i1++;
        }
        else{
            i1=0;
            b=alph.indexOf(key[i1]);
            i1++;
        }
        c=a-b;
        if(c<0){
            c=c+47;
        }
        res=res+alph[c];
        $('#res').val(res);
    }
}
