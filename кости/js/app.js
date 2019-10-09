function first(){
    document.getElementById("out1").className += " hidden";
    if ($('#first11').html()==''){
        a1=Math.floor(Math.random() *6);
        a1 = a1+1;
        $('#first11').html(a1);

        a2=Math.floor(Math.random() *6);
        a2 = a2+1;
        $('#first12').html(a2);

        a3 = a1+a2;
        $('#first1s').html(a3);
        
    }
    else if ($('#first21').html()==''){
        a1=Math.floor(Math.random() *6);
        a1 = a1+1;
        $('#first21').html(a1);
    
        a2=Math.floor(Math.random() *6);
        a2 = a2+1;
        $('#first22').html(a2);
    
        a3 = a1+a2;
        $('#first2s').html(a3);
        }
    else if ($('#first31').html()==''){
        a1=Math.floor(Math.random() *6);
        a1 = a1+1;
        $('#first31').html(a1);
        
        a2=Math.floor(Math.random() *6);
        a2 = a2+1;
        $('#first32').html(a2);
        
        a3 = a1+a2;
        $('#first3s').html(a3);
        }
    else {
        alert('Ваши ходы закончились');

    }
}
function second(){
    document.getElementById("out1").className += " hidden";
    if ($('#second11').html()==''){
        b1=Math.floor(Math.random() *6);
        b1 = b1+1;
        $('#second11').html(b1);

        b2=Math.floor(Math.random() *6);
        b2 = b2+1;
        $('#second12').html(b2);

        b3 = b1+b2;
        $('#second1s').html(b3);
        
    }
    else if ($('#second21').html()==''){
        b1=Math.floor(Math.random() *6);
        b1 = b1+1;
        $('#second21').html(b1);
    
        b2=Math.floor(Math.random() *6);
        b2 = b2+1;
        $('#second22').html(b2);
    
        b3 = b1+b2;
        $('#second2s').html(b3);
        }
    else if ($('#second31').html()==''){
        b1=Math.floor(Math.random() *6);
        b1 = b1+1;
        $('#second31').html(b1);
        
        b2=Math.floor(Math.random() *6);
        b2 = b2+1;
        $('#second32').html(b2);
        
        b3 = b1+b2;
        $('#second3s').html(b3);
        }
    else {
        alert('Ваши ходы закончились');
    }
}
function res(){
    if ($('#first1s').html()!='' && $('#first2s').html()!='' && $('#first3s').html()!='' && $('#second1s').html()!='' && $('#second2s').html()!='' && $('#second3s').html()!=''){
    s1=parseInt($('#first1s').html())+parseInt($('#first2s').html())+parseInt($('#first3s').html());
    s2=parseInt($('#second1s').html())+parseInt($('#second2s').html())+parseInt($('#second3s').html());
    if (s1>s2){
        con1="Первый игрок победил!";
        $('#out').html(con1);
        document.getElementById("out1").className = document.getElementById("out1").className.replace( /(?:^|\s)hidden(?!\S)/g , '' );
        a='';
        $('#first11').html(a);
        $('#first12').html(a);
        $('#first1s').html(a);
        $('#first21').html(a);
        $('#first22').html(a);
        $('#first2s').html(a);
        $('#first31').html(a);
        $('#first32').html(a);
        $('#first3s').html(a);
        b='';
        $('#second11').html(b);
        $('#second12').html(b);
        $('#second1s').html(b);
        $('#second21').html(b);
        $('#second22').html(b);
        $('#second2s').html(b);
        $('#second31').html(b);
        $('#second32').html(b);
        $('#second3s').html(b);
    }
    else if (s1<s2) {
        con2="Второй игрок победил!";
        $('#out').html(con2);
        document.getElementById("out1").className = document.getElementById("out1").className.replace( /(?:^|\s)hidden(?!\S)/g , '' );
        a='';
        $('#first11').html(a);
        $('#first12').html(a);
        $('#first1s').html(a);
        $('#first21').html(a);
        $('#first22').html(a);
        $('#first2s').html(a);
        $('#first31').html(a);
        $('#first32').html(a);
        $('#first3s').html(a);
        b='';
        $('#second11').html(b);
        $('#second12').html(b);
        $('#second1s').html(b);
        $('#second21').html(b);
        $('#second22').html(b);
        $('#second2s').html(b);
        $('#second31').html(b);
        $('#second32').html(b);
        $('#second3s').html(b);
    }
    else {
        con3="Ничья";
        $('#out').html(con3);
        document.getElementById("out1").className = document.getElementById("out1").className.replace( /(?:^|\s)hidden(?!\S)/g , '' );
        a='';
        $('#first11').html(a);
        $('#first12').html(a);
        $('#first1s').html(a);
        $('#first21').html(a);
        $('#first22').html(a);
        $('#first2s').html(a);
        $('#first31').html(a);
        $('#first32').html(a);
        $('#first3s').html(a);
        b='';
        $('#second11').html(b);
        $('#second12').html(b);
        $('#second1s').html(b);
        $('#second21').html(b);
        $('#second22').html(b);
        $('#second2s').html(b);
        $('#second31').html(b);
        $('#second32').html(b);
        $('#second3s').html(b);
    }
}
}