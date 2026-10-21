import ShowServiceItem from "./tools/ShowServiceItem.js";
import LoaderWindow from "./tools/loader.js";
import CopyToClipboard from "./tools/CopyToClipboard.js";
import MenuCollapser from "./tools/BurgerMenuManager.js"
import WhatsappMessageSender from "./tools/WhatsappMessageSender.js";
import backToTopButton from "./tools/BackToTop.js";

AOS.init();

//LoaderWindow('loader')

MenuCollapser('button', 'collapsable')

CopyToClipboard('mail', 'copy-mail')

WhatsappMessageSender("whatsapp", "form-button")

ShowServiceItem('service_thumb', 'service_img')

backToTopButton();





