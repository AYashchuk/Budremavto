package web.encode;

/**
 * Created by admin on 29.07.2015.
 */
public class Encode {
    private String massage;

    public void setMassage(String massage) {
        this.massage = massage;
    }

    private void encode_big_ru(){

        massage = massage.replace("%D0%90","А");
        massage = massage.replace("%D0%91","Б");
        massage = massage.replace("%D0%92","В");
        massage = massage.replace("%D0%93","Г");
        massage = massage.replace("%D0%94","Д");
        massage = massage.replace("%D0%95","Е");
        massage = massage.replace("%D0%81","Ё");
        massage = massage.replace("%D0%96","Ж");
        massage = massage.replace("%D0%97","З");
        massage = massage.replace("%D0%98","И");
        massage = massage.replace("%D0%99","Й");
        massage = massage.replace("%D0%9A","К");
        massage = massage.replace("%D0%9B","Л");
        massage = massage.replace("%D0%9C","М");
        massage = massage.replace("%D0%9D","Н");
        massage = massage.replace("%D0%9E","О");
        massage = massage.replace("%D0%9F","П");
        massage = massage.replace("%D0%A0","Р");
        massage = massage.replace("%D0%A1","С");
        massage = massage.replace("%D0%A2","Т");
        massage = massage.replace("%D0%A3","У");
        massage = massage.replace("%D0%A4","Ф");
        massage = massage.replace("%D0%A5","Х");
        massage = massage.replace("%D0%A6","Ц");
        massage = massage.replace("%D0%A7","Ч");
        massage = massage.replace("%D0%A8","Ш");
        massage = massage.replace("%D0%A9","Щ");
        massage = massage.replace("%D0%AA","Ъ");
        massage = massage.replace("%D0%AB","Ы");
        massage = massage.replace("%D0%AC","Ь");
        massage = massage.replace("%D0%AD","Э");
        massage = massage.replace("%D0%AE","Ю");
        massage = massage.replace("%D0%AF","Я");
    }

    private void encode_small_ru(){
        massage = massage.replace("%D0%B0","а");
        massage = massage.replace("%D0%B1","б");
        massage = massage.replace("%D0%B2","в");
        massage = massage.replace("%D0%B3","г");
        massage = massage.replace("%D0%B4","д");
        massage = massage.replace("%D0%B5","е");
        massage = massage.replace("%D1%91","ё");
        massage = massage.replace("%D0%B6","ж");
        massage = massage.replace("%D0%B7","з");
        massage = massage.replace("%D0%B8","и");
        massage = massage.replace("%D0%B9","й");
        massage = massage.replace("%D0%BA","к");
        massage = massage.replace("%D0%BB","л");
        massage = massage.replace("%D0%BC","м");
        massage = massage.replace("%D0%BD","н");
        massage = massage.replace("%D0%BE","о");
        massage = massage.replace("%D0%BF","п");
        massage = massage.replace("%D1%80","р");
        massage = massage.replace("%D1%81","с");
        massage = massage.replace("%D1%82","т");
        massage = massage.replace("%D1%83","у");
        massage = massage.replace("%D1%84","ф");
        massage = massage.replace("%D1%85","х");
        massage = massage.replace("%D1%86","ц");
        massage = massage.replace("%D1%87","ч");
        massage = massage.replace("%D1%88","ш");
        massage = massage.replace("%D1%89","щ");
        massage = massage.replace("%D1%8A","ъ");
        massage = massage.replace("%D1%8B","ы");
        massage = massage.replace("%D1%8C","ь");
        massage = massage.replace("%D1%8D","э");
        massage = massage.replace("%D1%8E","ю");
        massage = massage.replace("%D1%8F","я");
    }

    public void encod_symbol(){
        massage = massage.replace("%20"," ");
        massage = massage.replace("%0A","\n");
        massage = massage.replace("%3F","?");
        massage = massage.replace("%2C",",");
        massage = massage.replace("%E2%84%96","№");
        massage = massage.replace("%3B",";");
        massage = massage.replace("%3A",":");
        massage = massage.replace("%5C","\\");
        massage = massage.replace("%2B","+");
        massage = massage.replace("%40","@");
        massage = massage.replace("%23","#");
        massage = massage.replace("%24","$");
        massage = massage.replace("%5E","^");
        massage = massage.replace("%26","&");
    }

    public String encod_RU(){

        encod_symbol();






        encode_big_ru();

        encode_small_ru();

        massage = massage.replace("%25","%");
        massage = massage.replace("%22","\"");
        return this.getMassage();
    }


    public String getMassage() {

        return massage;
    }

    public Encode(String massage) {

        this.massage = massage;
    }
}
