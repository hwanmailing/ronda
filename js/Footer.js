

class Footer{
    constructor(){
        this.eMain = div({
            height:g_fToolbar*1.3 + 'px',
            color:g_sColor2,
            borderTop:`2px solid #111`,
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column',
            fontSize:'12px',
            fontFamily: g_sFont,
        });
        
        let cA = {
            marginRight:'20px',
            color:g_sColor3,
            cursor:'pointer',
        }
        let cA_Hover = {
            color:g_sColor5,
        }
        // let cBorderRight = {borderRight:`1px solid ${g_sColor2}`};
        let cSpace = { marginBottom:'10px' }
        let cSmallFont = { fontSize:'10px' }
        let eTop = div({...cSpace,marginTop:'10px'});

        this.eMain.append(
            eTop.append(
                // a(cA, lang('membership') ).hoverCss(cA_Hover).onClick(()=>{
                //     g_pTerms.popup_Membership();
                // }),
                a(cA, lang('policy_use') ).hoverCss(cA_Hover).onClick(()=>{
                    g_pTerms.popup_Use();
                }),
                a(cA, lang('policy_privacy') ).hoverCss(cA_Hover).onClick(()=>{
                    g_pTerms.popup_Privacy();
                }),
                a(cA, lang('policy_refund') ).hoverCss(cA_Hover).onClick(()=>{
                    g_pTerms.popup_Refund();
                }),
                a({...cA,...cSpace}, lang('policy_support')).hoverCss(cA_Hover).onClick(()=>{
                    const email = 'support@tumpla.com';
                    const subject = lang('support_email_title');
                    const body = lang('support_email_desc');
                    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                }),
            ),
            div({...cSpace,...cSmallFont}, lang('footer0') ),
            div({...cSpace,...cSmallFont}, lang('footer1') ),
            
        ).toBody();
    }
}

let g_pFooter = new Footer();

