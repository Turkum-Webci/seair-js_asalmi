//bismillah
function ssmatematiknoktaasalmi(sayi){
    var a = 0;
    if(sayi < 2){
        return "yk";
    }
    while(a < Math.sqrt(sayi)){
        if(sayi % a == 0) return "yk";
        a = a + 1;
    }
    return "evt";
}
//elhamdülillah