package web.controller;

import org.apache.log4j.Logger;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;
import web.domain.User;
import web.encode.Encode;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.Locale;

/**
 * @author Yashchuk A.F.
 */
@WebServlet("/myServlet")
public class EventServlet extends HttpServlet {
    private WebApplicationContext context;
    private String actions;
    private static Logger log = Logger.getLogger(EventServlet.class);
    private final String befor_A = "<div class=\"action\">" +
            " <IMG SRC=\"img/map.png\">" +
            "   <H4>";
    private final String after_A = "</H4>" +
            "  </div>";

    @Override
    public void init() {
        log.info("method init() start");
        Locale.setDefault(Locale.ENGLISH);
        context = WebApplicationContextUtils.getWebApplicationContext(getServletContext());
        actions = generateHTMLcode("img/log1.png", "Привет ствуем с открытием нашего сайта!");
        log.info("method init() end");
    }

    @Override
    protected void doGet(HttpServletRequest request,
                         HttpServletResponse response)
            throws ServletException, IOException {
        log.info("method doGet() start");
        request.setAttribute("actions", actions);
        request.getRequestDispatcher("do.jsp").forward(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request,
                          HttpServletResponse response)
            throws ServletException, IOException {
        log.info("method doPost() start");
        if (checkPass(request, response)) {
            String massage = null;
            String requestEnc = request.getCharacterEncoding();
            try {
                String clientEnc = "UTF-8";
                massage = new String(request.getParameter("text").getBytes(requestEnc), clientEnc);
                String s = request.getParameter("img");
                System.out.println(s);
                System.out.println("befor encoding: " + massage);
                Encode encode = new Encode(massage);
                massage = encode.encod_RU();
                actions = actions + generateHTMLcode("img/log1.png", massage);
                /*File file = new File(getServletContext().getRealPath("/") + "/content/doing.html");
                System.out.println(-2);
                StringBuilder rebuildHTMLfile = readFileInUtf8(file, massage);
                System.out.println(-1);
                reWriteFile(file,rebuildHTMLfile);
                System.out.println(0);*/
            } catch (UnsupportedEncodingException e) {
                e.printStackTrace();
            }

            response.getWriter().print("<H4 style=\"color: gran;\"> Massage successfully add!</H4>");
        } else {
            response.getWriter().print("<H4 style=\"color: red;\"> Password not correct...</H4>");
//            try{
////                File file = new File(getServletContext().getRealPath("/") + "/content/do.html");
////                readFileInUtf8(file);
//                /*
////                System.out.println(Search.searchAndDelite(file,"do.html"));
//                if(file.exists()){
//                    FileReader fr = new FileReader(file);
//                    Scanner scanner = new Scanner(fr);
//                    while (scanner.hasNext()){
//                        System.out.println(scanner.nextLine());
//                    }
//                }*/
//            }catch (Exception e){
//                e.printStackTrace();
//            }

        }

    }


    private boolean checkPass(HttpServletRequest request, HttpServletResponse response) {
        log.info("method checkPass() start");
        User user = (User) context.getBean("andrew");
        String pass1 = request.getParameter("pass");
        log.info("method checkPass() check password: ["+user.getPassword()+"] - pass, with [" + pass1+"] = pass1." );
        if (user.getPassword().equals(pass1)) return true;
        else return false;
    }


    private String generateHTMLcode(String path,String massage){

        return "<div class=\"action\">" +
                " <IMG SRC=" + path + ">" +
                " <P>  <H5>" + massage + "</H5></P>" +
                "  </div>";
    }
}