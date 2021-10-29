class locators {
    constructor() {
        this.username = '#username';
        this.password = '#password';
        this.amit = '//button[contains(.,"Allow all")]';
        // catagory
        this.pooja = '//h3[contains(.,"Shop by department")]/following-sibling::ul/li[contains(.,"Men")]';
        // #sub Catagory
        this.gaurang = '//h2[contains(.,"Sale & Offers: Selected Lines")]/following-sibling::ul/li[contains(.,"Shop all Menswear Offers")]';
        this.krishna = '//h2[contains(.,"Accessories")]/following-sibling::ul/li[contains(.,"Watches")]';
       // #Product image by desc
        // this.getStartedHeader = '//img[@alt="Apple Watch Series 6 GPS, 44mm Space Grey Aluminium Case with Black Sport Band - Regular"]'
        // this.getStartedHeader = '//img[@alt="Apple Watch Series 6 GPS, 44mm Space Grey Aluminium Case with Black Sport Band - Regular"]/parent::*/..//button[contains(.,"Add to your basket")]'
        
        this.Close ='//span[contains(.,"Login")]/ancestor::div/div/div/button';
        this.Mobiles='//div[text()="Mobiles"]';
        this.Electronics='//span[text()="Electronics"]';
        this.MobileCompany='//a[@title="OPPO"]';
        this.PhoneRange='//h2[text()="Oppo Mobiles under ₹10K"]/parent::div/following-sibling::div/a';
        this.PhoneModel='//div[text()="OPPO A12 (Black, 32 GB)"]';
        this.AddToCart='//button[contains(.,"ADD TO CART")]';
        this.MyCart='//div[contains(text(),"My Cart")]';
        this.Home='a:nth-child(1) > img';
        this.Cart='//span[text()="Cart"]';
        this.PhoneModelInCart='//a[text()="OPPO A12 (Black, 32 GB)"]';
        this.PlaceOrder='//button[contains(.,"Place Order")]';
        this.EnterEmail='//label[contains(.,"Enter Email/Mobile number")]/parent::div/input';
        this.Continue='//button[contains(.,"CONTINUE")]';
        this.EnterMobile='//label[contains(.,"Enter Mobile number")]/parent::div/input';
        this.EnterPassword='//label[contains(.,"Enter Password")]/parent::div/input';
        this.Login='//button[contains(.,"Login")]';
        this.PaymentOptions='//span[text()="Payment Options"]/parent::h3';
        this.NetBanking='//div[text()="Net Banking"]';
        this.BanksDropDown='//h3[text()="Other Banks"]/following-sibling	::div/select';
    }
}

module.exports = locators;