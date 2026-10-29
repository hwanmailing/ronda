class Terms {
    constructor() {
      this.eDocs = div({
        color: g_sColor3,
        display: 'flex',
        flexDirection: 'column',
        // justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#0c0c0c',
        borderRadius: '5px',
        width: '90%',
        height: '100%',
        fontFamily: g_sFont,
        // 
      });//.toBody();
  
      this.eDocsHead = div({
        position: 'relative',
        width: '100%',
      });
      this.eDocsTitle = h1({
        // padding:'5px',
        // height: g_fToolbar + 'px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }, 'title');
  
      this.eCloseBtn = createSVG('close', g_sColor5, 40, 40).css({
        cursor: 'pointer',
        position: 'absolute',
        right: '10px',
        top: '10px'
      }).hoverCss({ stroke: g_sColor6 }, true).onClick(() => {
        g_pOverlay.hide();// this.hide();
      });
  
      this.eDocsBody = pre({
        // height:`calc(100% - ${g_fToolbar}px)`,
  
        boxSizing: 'border-box',
        padding: '20px',
        // display:'flex',
        // justifyContent:'center',
        // alignItems:'center',
        width: '100%',
        overflowY: 'auto',
        whiteSpace: 'pre-wrap',
      }, 'body');
  
      
  
      this.eDocs.append(
        this.eDocsHead.append(
          this.eDocsTitle,
          this.eCloseBtn,
        ),
        this.eDocsBody,
      );
      this.eDocs.hide();
  
      //this.pMembership = new Membership(this.eDocsBody);
      //this.pMembership.hide();
  
      //g_pOverlay.add(this.eDocs);
    }
  
    // showMembership(bShow = true){
    //   this.pMembership.show(bShow);
    //   if( bShow ){
    //     this.eDocsTitle.css({color:g_sColor5});
    //     this.eDocs.css({backgroundColor: g_sColor3,});
    //   }else{
    //     this.eDocsTitle.css({color:g_sColor3});
    //     this.eDocs.css({backgroundColor: '#0c0c0c',});
    //   }
    // }
  
    popup_Use() {
      //this.showMembership(false);
      this.eDocsTitle.text(lang('policy_use'));
      this.eDocsBody.text(this.getTerms_use());
      this.show();
    }
  
    popup_Privacy() {
      //this.showMembership(false);
      this.eDocsTitle.text(lang('policy_privacy'));
      this.eDocsBody.text(this.getTerms_Privacy());
      this.show();
    }
  
    popup_Refund() {
      //this.showMembership(false);
      this.eDocsTitle.text(lang('policy_refund'));
      this.eDocsBody.text(this.getTerms_Refund());
      this.show();
    }
  
    // popup_Membership() {
    //   //this.eDocsTitle.text(lang('membership'));
    //   this.eDocsTitle.text(lang('membership'));
    //   this.eDocsBody.text('');
    //   this.showMembership();
    //   //this.eDocsBody.text(this.getTerms_Membership());
    //   this.show();
    // }
  
    hide() {
      this.show(false);
    }
  
    show(bShow) {
      this.eDocs.show(bShow);
      g_pOverlay.showWith(this.eDocs);
    }
  
    getTerms_use() {
      if (isKorea()) {
        return `
  제1조(목적) 이 약관은 OO 회사(전자상거래 사업자)가 운영하는 OO 사이버 몰(이하 “몰”이라 한다)에서 제공하는 인터넷 관련 서비스(이하 “서비스”라 한다)를 이용함에 있어 사이버 몰과 이용자의 권리․의무 및 책임사항을 규정함을 목적으로 합니다.
    ※「PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그 성질에 반하지 않는 한 이 약관을 준용합니다.」
  제2조(정의)
    ① “몰”이란 OO 회사가 재화 또는 용역(이하 “재화 등”이라 함)을 이용자에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 재화 등을 거래할 수 있도록 설정한 가상의 영업장을 말하며, 아울러 사이버몰을 운영하는 사업자의 의미로도 사용합니다.
    ② “이용자”란 “몰”에 접속하여 이 약관에 따라 “몰”이 제공하는 서비스를 받는 회원 및 비회원을 말합니다.
    ③ ‘회원’이라 함은 “몰”에 회원등록을 한 자로서, 계속적으로 “몰”이 제공하는 서비스를 이용할 수 있는 자를 말합니다.
    ④ ‘비회원’이라 함은 회원에 가입하지 않고 “몰”이 제공하는 서비스를 이용하는 자를 말합니다.
  제3조 (약관 등의 명시와 설명 및 개정) 
    ① “몰”은 이 약관의 내용과 상호 및 대표자 성명, 영업소 소재지 주소, 전화번호, 전자우편주소, 사업자등록번호, 통신판매업 신고번호, 개인정보관리책임자등을 이용자가 쉽게 알 수 있도록 초기 서비스화면(전면)에 게시합니다. 다만, 약관의 내용은 이용자가 연결화면을 통하여 볼 수 있도록 할 수 있습니다.
    ② “몰은 이용자가 약관에 동의하기에 앞서 약관에 정하여져 있는 내용 중 청약철회․배송책임․환불조건 등과 같은 중요한 내용을 이용자가 이해할 수 있도록 별도의 연결화면 또는 팝업화면 등을 제공하여 이용자의 확인을 구하여야 합니다.
    ③ “몰”은 「전자상거래 등에서의 소비자보호에 관한 법률」, 「약관의 규제에 관한 법률」, 「전자문서 및 전자거래기본법」, 「전자금융거래법」, 「전자서명법」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」, 「방문판매 등에 관한 법률」, 「소비자기본법」 등 관련 법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.
    ④ “몰”이 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 몰의 초기화면에 그 적용일자 7일 이전부터 적용일자 전일까지 공지합니다. 다만, 이용자에게 불리하게 약관내용을 변경하는 경우에는 최소한 30일 이상의 사전 유예기간을 두고 공지합니다.  이 경우 "몰“은 개정 전 내용과 개정 후 내용을 명확하게 비교하여 이용자가 알기 쉽도록 표시합니다. 
    ⑤ “몰”이 약관을 개정할 경우에는 그 개정약관은 그 적용일자 이후에 체결되는 계약에만 적용되고 그 이전에 이미 체결된 계약에 대해서는 개정 전의 약관조항이 그대로 적용됩니다. 다만 이미 계약을 체결한 이용자가 개정약관 조항의 적용을 받기를 원하는 뜻을 제3항에 의한 개정약관의 공지기간 내에 “몰”에 송신하여 “몰”의 동의를 받은 경우에는 개정약관 조항이 적용됩니다.
    ⑥ 이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 전자상거래 등에서의 소비자보호에 관한 법률, 약관의 규제 등에 관한 법률, 공정거래위원회가 정하는 전자상거래 등에서의 소비자 보호지침 및 관계법령 또는 상관례에 따릅니다.
  제4조(서비스의 제공 및 변경) 
    ① “몰”은 다음과 같은 업무를 수행합니다.
      1. 재화 또는 용역에 대한 정보 제공 및 구매계약의 체결
      2. 구매계약이 체결된 재화 또는 용역의 배송
      3. 기타 “몰”이 정하는 업무
    ② “몰”은 재화 또는 용역의 품절 또는 기술적 사양의 변경 등의 경우에는 장차 체결되는 계약에 의해 제공할 재화 또는 용역의 내용을 변경할 수 있습니다. 이 경우에는 변경된 재화 또는 용역의 내용 및 제공일자를 명시하여 현재의 재화 또는 용역의 내용을 게시한 곳에 즉시 공지합니다.
    ③ “몰”이 제공하기로 이용자와 계약을 체결한 서비스의 내용을 재화등의 품절 또는 기술적 사양의 변경 등의 사유로 변경할 경우에는 그 사유를 이용자에게 통지 가능한 주소로 즉시 통지합니다.
    ④ 전항의 경우 “몰”은 이로 인하여 이용자가 입은 손해를 배상합니다. 다만, “몰”이 고의 또는 과실이 없음을 입증하는 경우에는 그러하지 아니합니다.
  제5조(서비스의 중단) 
    ① “몰”은 컴퓨터 등 정보통신설비의 보수점검․교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다.
    ② “몰”은 제1항의 사유로 서비스의 제공이 일시적으로 중단됨으로 인하여 이용자 또는 제3자가 입은 손해에 대하여 배상합니다. 단, “몰”이 고의 또는 과실이 없음을 입증하는 경우에는 그러하지 아니합니다.
    ③ 사업종목의 전환, 사업의 포기, 업체 간의 통합 등의 이유로 서비스를 제공할 수 없게 되는 경우에는 “몰”은 제8조에 정한 방법으로 이용자에게 통지하고 당초 “몰”에서 제시한 조건에 따라 소비자에게 보상합니다. 다만, “몰”이 보상기준 등을 고지하지 아니한 경우에는 이용자들의 마일리지 또는 적립금 등을 “몰”에서 통용되는 통화가치에 상응하는 현물 또는 현금으로 이용자에게 지급합니다.
  제6조(회원가입) 
    ① 이용자는 “몰”이 정한 가입 양식에 따라 회원정보를 기입한 후 이 약관에 동의한다는 의사표시를 함으로서 회원가입을 신청합니다.
    ② “몰”은 제1항과 같이 회원으로 가입할 것을 신청한 이용자 중 다음 각 호에 해당하지 않는 한 회원으로 등록합니다.
      1. 가입신청자가 이 약관 제7조제3항에 의하여 이전에 회원자격을 상실한 적이 있는 경우, 다만 제7조제3항에 의한 회원자격 상실 후 3년이 경과한 자로서 “몰”의 회원재가입 승낙을 얻은 경우에는 예외로 한다.
      2. 등록 내용에 허위, 기재누락, 오기가 있는 경우
      3. 기타 회원으로 등록하는 것이 “몰”의 기술상 현저히 지장이 있다고 판단되는 경우
    ③ 회원가입계약의 성립 시기는 “몰”의 승낙이 회원에게 도달한 시점으로 합니다.
    ④ 회원은 회원가입 시 등록한 사항에 변경이 있는 경우, 상당한 기간 이내에 “몰”에 대하여 회원정보 수정 등의 방법으로 그 변경사항을 알려야 합니다.
  제7조(회원 탈퇴 및 자격 상실 등) 
    ① 회원은 “몰”에 언제든지 탈퇴를 요청할 수 있으며 “몰”은 즉시 회원탈퇴를 처리합니다.
    ② 회원이 다음 각 호의 사유에 해당하는 경우, “몰”은 회원자격을 제한 및 정지시킬 수 있습니다.
      1. 가입 신청 시에 허위 내용을 등록한 경우
      2. “몰”을 이용하여 구입한 재화 등의 대금, 기타 “몰”이용에 관련하여 회원이 부담하는 채무를 기일에 지급하지 않는 경우
      3. 다른 사람의 “몰” 이용을 방해하거나 그 정보를 도용하는 등 전자상거래 질서를 위협하는 경우
      4. “몰”을 이용하여 법령 또는 이 약관이 금지하거나 공서양속에 반하는 행위를 하는 경우
    ③ “몰”이 회원 자격을 제한․정지 시킨 후, 동일한 행위가 2회 이상 반복되거나 30일 이내에 그 사유가 시정되지 아니하는 경우 “몰”은 회원자격을 상실시킬 수 있습니다.
    ④ “몰”이 회원자격을 상실시키는 경우에는 회원등록을 말소합니다. 이 경우 회원에게 이를 통지하고, 회원등록 말소 전에 최소한 30일 이상의 기간을 정하여 소명할 기회를 부여합니다.
  제8조(회원에 대한 통지)
    ① “몰”이 회원에 대한 통지를 하는 경우, 회원이 “몰”과 미리 약정하여 지정한 전자우편 주소로 할 수 있습니다.
    ② “몰”은 불특정다수 회원에 대한 통지의 경우 1주일이상 “몰” 게시판에 게시함으로서 개별 통지에 갈음할 수 있습니다. 다만, 회원 본인의 거래와 관련하여 중대한 영향을 미치는 사항에 대하여는 개별통지를 합니다.
  제9조(구매신청 및 개인정보 제공 동의 등) 
    ① “몰”이용자는 “몰”상에서 다음 또는 이와 유사한 방법에 의하여 구매를 신청하며, “몰”은 이용자가 구매신청을 함에 있어서 다음의 각 내용을 알기 쉽게 제공하여야 합니다. 
        1. 재화 등의 검색 및 선택
        2. 받는 사람의 성명, 주소, 전화번호, 전자우편주소(또는 이동전화번호) 등의 입력
        3. 약관내용, 청약철회권이 제한되는 서비스, 배송료․설치비 등의 비용부담과 관련한 내용에 대한 확인
        4. 이 약관에 동의하고 위 3.호의 사항을 확인하거나 거부하는 표시
           (예, 마우스 클릭)
        5. 재화등의 구매신청 및 이에 관한 확인 또는 “몰”의 확인에 대한 동의
        6. 결제방법의 선택
    ② “몰”이 제3자에게 구매자 개인정보를 제공할 필요가 있는 경우 1) 개인정보를 제공받는 자, 2)개인정보를 제공받는 자의 개인정보 이용목적, 3) 제공하는 개인정보의 항목, 4) 개인정보를 제공받는 자의 개인정보 보유 및 이용기간을 구매자에게 알리고 동의를 받아야 합니다. (동의를 받은 사항이 변경되는 경우에도 같습니다.)
    ③ “몰”이 제3자에게 구매자의 개인정보를 취급할 수 있도록 업무를 위탁하는 경우에는 1) 개인정보 취급위탁을 받는 자, 2) 개인정보 취급위탁을 하는 업무의 내용을 구매자에게 알리고 동의를 받아야 합니다. (동의를 받은 사항이 변경되는 경우에도 같습니다.) 다만, 서비스제공에 관한 계약이행을 위해 필요하고 구매자의 편의증진과 관련된 경우에는 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」에서 정하고 있는 방법으로 개인정보 취급방침을 통해 알림으로써 고지절차와 동의절차를 거치지 않아도 됩니다.
  제10조 (계약의 성립)
    ①  “몰”은 제9조와 같은 구매신청에 대하여 다음 각 호에 해당하면 승낙하지 않을 수 있습니다. 다만, 미성년자와 계약을 체결하는 경우에는 법정대리인의 동의를 얻지 못하면 미성년자 본인 또는 법정대리인이 계약을 취소할 수 있다는 내용을 고지하여야 합니다.
      1. 신청 내용에 허위, 기재누락, 오기가 있는 경우
      2. 미성년자가 담배, 주류 등 청소년보호법에서 금지하는 재화 및 용역을 구매하는 경우
      3. 기타 구매신청에 승낙하는 것이 “몰” 기술상 현저히 지장이 있다고 판단하는 경우
    ② “몰”의 승낙이 제12조제1항의 수신확인통지형태로 이용자에게 도달한 시점에 계약이 성립한 것으로 봅니다.
    ③ “몰”의 승낙의 의사표시에는 이용자의 구매 신청에 대한 확인 및 판매가능 여부, 구매신청의 정정 취소 등에 관한 정보 등을 포함하여야 합니다.
  제11조(지급방법) “몰”에서 구매한 재화 또는 용역에 대한 대금지급방법은 다음 각 호의 방법중 가용한 방법으로 할 수 있습니다. 단, “몰”은 이용자의 지급방법에 대하여 재화 등의 대금에 어떠한 명목의 수수료도  추가하여 징수할 수 없습니다.
      1. 폰뱅킹, 인터넷뱅킹, 메일 뱅킹 등의 각종 계좌이체 
      2. 선불카드, 직불카드, 신용카드 등의 각종 카드 결제
      3. 온라인무통장입금
      4. 전자화폐에 의한 결제
      5. 수령 시 대금지급
      6. 마일리지 등 “몰”이 지급한 포인트에 의한 결제
      7. “몰”과 계약을 맺었거나 “몰”이 인정한 상품권에 의한 결제  
      8. 기타 전자적 지급 방법에 의한 대금 지급 등
  제12조(수신확인통지․구매신청 변경 및 취소)
    ① “몰”은 이용자의 구매신청이 있는 경우 이용자에게 수신확인통지를 합니다.
    ② 수신확인통지를 받은 이용자는 의사표시의 불일치 등이 있는 경우에는 수신확인통지를 받은 후 즉시 구매신청 변경 및 취소를 요청할 수 있고 “몰”은 배송 전에 이용자의 요청이 있는 경우에는 지체 없이 그 요청에 따라 처리하여야 합니다. 다만 이미 대금을 지불한 경우에는 제15조의 청약철회 등에 관한 규정에 따릅니다.
  제13조(재화 등의 공급)
    ① “몰”은 이용자와 재화 등의 공급시기에 관하여 별도의 약정이 없는 이상, 이용자가 청약을 한 날부터 7일 이내에 재화 등을 배송할 수 있도록 주문제작, 포장 등 기타의 필요한 조치를 취합니다. 다만, “몰”이 이미 재화 등의 대금의 전부 또는 일부를 받은 경우에는 대금의 전부 또는 일부를 받은 날부터 3영업일 이내에 조치를 취합니다.  이때 “몰”은 이용자가 재화 등의 공급 절차 및 진행 사항을 확인할 수 있도록 적절한 조치를 합니다.
    ② “몰”은 이용자가 구매한 재화에 대해 배송수단, 수단별 배송비용 부담자, 수단별 배송기간 등을 명시합니다. 만약 “몰”이 약정 배송기간을 초과한 경우에는 그로 인한 이용자의 손해를 배상하여야 합니다. 다만 “몰”이 고의․과실이 없음을 입증한 경우에는 그러하지 아니합니다.
  제14조(환급) “몰”은 이용자가 구매신청한 재화 등이 품절 등의 사유로 인도 또는 제공을 할 수 없을 때에는 지체 없이 그 사유를 이용자에게 통지하고 사전에 재화 등의 대금을 받은 경우에는 대금을 받은 날부터 3영업일 이내에 환급하거나 환급에 필요한 조치를 취합니다.
  제15조(청약철회 등)
    ① “몰”과 재화등의 구매에 관한 계약을 체결한 이용자는 「전자상거래 등에서의 소비자보호에 관한 법률」 제13조 제2항에 따른 계약내용에 관한 서면을 받은 날(그 서면을 받은 때보다 재화 등의 공급이 늦게 이루어진 경우에는 재화 등을 공급받거나 재화 등의 공급이 시작된 날을 말합니다)부터 7일 이내에는 청약의 철회를 할 수 있습니다. 다만, 청약철회에 관하여 「전자상거래 등에서의 소비자보호에 관한 법률」에 달리 정함이 있는 경우에는 동 법 규정에 따릅니다. 
    ② 이용자는 재화 등을 배송 받은 경우 다음 각 호의 1에 해당하는 경우에는 반품 및 교환을 할 수 없습니다.
      1. 이용자에게 책임 있는 사유로 재화 등이 멸실 또는 훼손된 경우(다만, 재화 등의 내용을 확인하기 위하여 포장 등을 훼손한 경우에는 청약철회를 할 수 있습니다)
      2. 이용자의 사용 또는 일부 소비에 의하여 재화 등의 가치가 현저히 감소한 경우
      3. 시간의 경과에 의하여 재판매가 곤란할 정도로 재화등의 가치가 현저히 감소한 경우
      4. 같은 성능을 지닌 재화 등으로 복제가 가능한 경우 그 원본인 재화 등의 포장을 훼손한 경우
    ③ 제2항제2호 내지 제4호의 경우에 “몰”이 사전에 청약철회 등이 제한되는 사실을 소비자가 쉽게 알 수 있는 곳에 명기하거나 시용상품을 제공하는 등의 조치를 하지 않았다면 이용자의 청약철회 등이 제한되지 않습니다.
    ④ 이용자는 제1항 및 제2항의 규정에 불구하고 재화 등의 내용이 표시·광고 내용과 다르거나 계약내용과 다르게 이행된 때에는 당해 재화 등을 공급받은 날부터 3월 이내, 그 사실을 안 날 또는 알 수 있었던 날부터 30일 이내에 청약철회 등을 할 수 있습니다.
  제16조(청약철회 등의 효과)
    ① “몰”은 이용자로부터 재화 등을 반환받은 경우 3영업일 이내에 이미 지급받은 재화 등의 대금을 환급합니다. 이 경우 “몰”이 이용자에게 재화등의 환급을 지연한때에는 그 지연기간에 대하여 「전자상거래 등에서의 소비자보호에 관한 법률 시행령」제21조의2에서 정하는 지연이자율을 곱하여 산정한 지연이자를 지급합니다.
    ② “몰”은 위 대금을 환급함에 있어서 이용자가 신용카드 또는 전자화폐 등의 결제수단으로 재화 등의 대금을 지급한 때에는 지체 없이 당해 결제수단을 제공한 사업자로 하여금 재화 등의 대금의 청구를 정지 또는 취소하도록 요청합니다.
    ③ 청약철회 등의 경우 공급받은 재화 등의 반환에 필요한 비용은 이용자가 부담합니다. “몰”은 이용자에게 청약철회 등을 이유로 위약금 또는 손해배상을 청구하지 않습니다. 다만 재화 등의 내용이 표시·광고 내용과 다르거나 계약내용과 다르게 이행되어 청약철회 등을 하는 경우 재화 등의 반환에 필요한 비용은 “몰”이 부담합니다.
    ④ 이용자가 재화 등을 제공받을 때 발송비를 부담한 경우에 “몰”은 청약철회 시 그 비용을  누가 부담하는지를 이용자가 알기 쉽도록 명확하게 표시합니다.
  제17조(개인정보보호)
    ① “몰”은 이용자의 개인정보 수집시 서비스제공을 위하여 필요한 범위에서 최소한의 개인정보를 수집합니다. 
    ② “몰”은 회원가입시 구매계약이행에 필요한 정보를 미리 수집하지 않습니다. 다만, 관련 법령상 의무이행을 위하여 구매계약 이전에 본인확인이 필요한 경우로서 최소한의 특정 개인정보를 수집하는 경우에는 그러하지 아니합니다.
    ③ “몰”은 이용자의 개인정보를 수집·이용하는 때에는 당해 이용자에게 그 목적을 고지하고 동의를 받습니다. 
    ④ “몰”은 수집된 개인정보를 목적외의 용도로 이용할 수 없으며, 새로운 이용목적이 발생한 경우 또는 제3자에게 제공하는 경우에는 이용·제공단계에서 당해 이용자에게 그 목적을 고지하고 동의를 받습니다. 다만, 관련 법령에 달리 정함이 있는 경우에는 예외로 합니다.
    ⑤ “몰”이 제2항과 제3항에 의해 이용자의 동의를 받아야 하는 경우에는 개인정보관리 책임자의 신원(소속, 성명 및 전화번호, 기타 연락처), 정보의 수집목적 및 이용목적, 제3자에 대한 정보제공 관련사항(제공받은자, 제공목적 및 제공할 정보의 내용) 등 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 제22조제2항이 규정한 사항을 미리 명시하거나 고지해야 하며 이용자는 언제든지 이 동의를 철회할 수 있습니다.
    ⑥ 이용자는 언제든지 “몰”이 가지고 있는 자신의 개인정보에 대해 열람 및 오류정정을 요구할 수 있으며 “몰”은 이에 대해 지체 없이 필요한 조치를 취할 의무를 집니다. 이용자가 오류의 정정을 요구한 경우에는 “몰”은 그 오류를 정정할 때까지 당해 개인정보를 이용하지 않습니다.
    ⑦ “몰”은 개인정보 보호를 위하여 이용자의 개인정보를 취급하는 자를  최소한으로 제한하여야 하며 신용카드, 은행계좌 등을 포함한 이용자의 개인정보의 분실, 도난, 유출, 동의 없는 제3자 제공, 변조 등으로 인한 이용자의 손해에 대하여 모든 책임을 집니다.
    ⑧ “몰” 또는 그로부터 개인정보를 제공받은 제3자는 개인정보의 수집목적 또는 제공받은 목적을 달성한 때에는 당해 개인정보를 지체 없이 파기합니다.
    ⑨ “몰”은 개인정보의 수집·이용·제공에 관한 동의 란을 미리 선택한 것으로 설정해두지 않습니다. 또한 개인정보의 수집·이용·제공에 관한 이용자의 동의거절시 제한되는 서비스를 구체적으로 명시하고, 필수수집항목이 아닌 개인정보의 수집·이용·제공에 관한 이용자의 동의 거절을 이유로 회원가입 등 서비스 제공을 제한하거나 거절하지 않습니다.
  제18조(“몰“의 의무)
    ① “몰”은 법령과 이 약관이 금지하거나 공서양속에 반하는 행위를 하지 않으며 이 약관이 정하는 바에 따라 지속적이고, 안정적으로 재화․용역을 제공하는데 최선을 다하여야 합니다.
    ② “몰”은 이용자가 안전하게 인터넷 서비스를 이용할 수 있도록 이용자의 개인정보(신용정보 포함)보호를 위한 보안 시스템을 갖추어야 합니다.
    ③ “몰”이 상품이나 용역에 대하여 「표시․광고의 공정화에 관한 법률」 제3조 소정의 부당한 표시․광고행위를 함으로써 이용자가 손해를 입은 때에는 이를 배상할 책임을 집니다.
    ④ “몰”은 이용자가 원하지 않는 영리목적의 광고성 전자우편을 발송하지 않습니다.
  제19조(회원의 ID 및 비밀번호에 대한 의무)
    ① 제17조의 경우를 제외한 ID와 비밀번호에 관한 관리책임은 회원에게 있습니다.
    ② 회원은 자신의 ID 및 비밀번호를 제3자에게 이용하게 해서는 안됩니다.
    ③ 회원이 자신의 ID 및 비밀번호를 도난당하거나 제3자가 사용하고 있음을 인지한 경우에는 바로 “몰”에 통보하고 “몰”의 안내가 있는 경우에는 그에 따라야 합니다.
  제20조(이용자의 의무) 이용자는 다음 행위를 하여서는 안 됩니다.
      1. 신청 또는 변경시 허위 내용의 등록
      2. 타인의 정보 도용
      3. “몰”에 게시된 정보의 변경
      4. “몰”이 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신 또는 게시
      5. “몰” 기타 제3자의 저작권 등 지적재산권에 대한 침해
      6. “몰” 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위
      7. 외설 또는 폭력적인 메시지, 화상, 음성, 기타 공서양속에 반하는 정보를 몰에 공개 또는 게시하는 행위
  제21조(연결“몰”과 피연결“몰” 간의 관계)
    ① 상위 “몰”과 하위 “몰”이 하이퍼링크(예: 하이퍼링크의 대상에는 문자, 그림 및 동화상 등이 포함됨)방식 등으로 연결된 경우, 전자를 연결 “몰”(웹 사이트)이라고 하고 후자를 피연결 “몰”(웹사이트)이라고 합니다.
    ② 연결“몰”은 피연결“몰”이 독자적으로 제공하는 재화 등에 의하여 이용자와 행하는 거래에 대해서 보증 책임을 지지 않는다는 뜻을 연결“몰”의 초기화면 또는 연결되는 시점의 팝업화면으로 명시한 경우에는 그 거래에 대한 보증 책임을 지지 않습니다.
  제22조(저작권의 귀속 및 이용제한)
    ① “몰“이 작성한 저작물에 대한 저작권 기타 지적재산권은 ”몰“에 귀속합니다.
    ② 이용자는 “몰”을 이용함으로써 얻은 정보 중 “몰”에게 지적재산권이 귀속된 정보를 “몰”의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안됩니다.
    ③ “몰”은 약정에 따라 이용자에게 귀속된 저작권을 사용하는 경우 당해 이용자에게 통보하여야 합니다.
  제23조(분쟁해결)
    ① “몰”은 이용자가 제기하는 정당한 의견이나 불만을 반영하고 그 피해를 보상처리하기 위하여 피해보상처리기구를 설치․운영합니다.
    ② “몰”은 이용자로부터 제출되는 불만사항 및 의견은 우선적으로 그 사항을 처리합니다. 다만, 신속한 처리가 곤란한 경우에는 이용자에게 그 사유와 처리일정을 즉시 통보해 드립니다.
    ③ “몰”과 이용자 간에 발생한 전자상거래 분쟁과 관련하여 이용자의 피해구제신청이 있는 경우에는 공정거래위원회 또는 시·도지사가 의뢰하는 분쟁조정기관의 조정에 따를 수 있습니다.
  제24조(재판권 및 준거법)
    ① “몰”과 이용자 간에 발생한 전자상거래 분쟁에 관한 소송은 제소 당시의 이용자의 주소에 의하고, 주소가 없는 경우에는 거소를 관할하는 지방법원의 전속관할로 합니다. 다만, 제소 당시 이용자의 주소 또는 거소가 분명하지 않거나 외국 거주자의 경우에는 민사소송법상의 관할법원에 제기합니다.
    ② “몰”과 이용자 간에 제기된 전자상거래 소송에는 한국법을 적용합니다.
          `;
      } else {
        return `
  Article 1 (Purpose) These Terms and Conditions are intended to regulate the rights, obligations, and responsibilities of the cyber mall and users in using the Internet-related services (hereinafter referred to as “Services”) provided by the OO Cyber ​​Mall (hereinafter referred to as “Mall”) operated by OO Company (an e-commerce business operator).
  ※「These Terms and Conditions shall apply to e-commerce using PC communication, wireless communication, etc., unless they are in conflict with their nature.」
  Article 2 (Definitions)
  ① “Mall” refers to a virtual business establishment established by OO Company to enable users to trade goods, etc. using information and communication equipment such as computers in order to provide goods or services (hereinafter referred to as “Goods, etc.”) to users, and is also used to refer to the business operator operating the cyber mall.
  ② “User” refers to members and non-members who access the “Mall” and receive services provided by the “Mall” in accordance with these Terms and Conditions.
  ③ “Member” refers to a person who has registered as a member of the “Mall” and can continuously use the services provided by the “Mall.” ④ ‘Non-member’ refers to a person who uses the services provided by the “Mall” without registering as a member.
  Article 3 (Specification, explanation and revision of terms and conditions, etc.)
  ① The “Mall” shall post the contents of these terms and conditions, the name and representative name, address of the business location, telephone number, e-mail address, business registration number, mail-order business report number, personal information management officer, etc. on the initial service screen (front page) so that users can easily see them. However, the contents of the terms and conditions may be made available for users to view through a link screen.
  ② The “Mall” shall obtain the user’s confirmation by providing a separate link screen or pop-up screen so that users can understand important contents stipulated in the terms and conditions, such as cancellation of subscription, delivery responsibility, and refund conditions, before the user agrees to the terms and conditions. ③ “Mall” may revise these Terms and Conditions to the extent that it does not violate related laws such as the Act on Consumer Protection in Electronic Commerce, etc., the Act on Regulation of Terms and Conditions, the Electronic Documents and Electronic Transactions Basic Act, the Electronic Financial Transactions Act, the Electronic Signature Act, the Act on Promotion of Information and Communications Network Utilization and Information Protection, etc., the Act on Door-to-Door Sales, etc., and the Consumer Protection Act.
  ④ When “Mall” revises the Terms and Conditions, it shall post the effective date and the reason for the revision on the Mall’s home screen along with the current Terms and Conditions from 7 days prior to the effective date to the day before the effective date. However, in case the contents of the Terms and Conditions are changed in a way that is disadvantageous to the user, it shall post a notice at least 30 days in advance. In this case, the “Mall” clearly compares the contents before and after the revision and displays them so that users can easily understand them.
  ⑤ If the “Mall” revises the terms and conditions, the revised terms and conditions will only apply to contracts concluded after the date of application, and the terms and conditions before the revision will be applied to contracts already concluded before that date. However, if a user who has already concluded a contract wishes to be subject to the revised terms and conditions and sends a notice to the “Mall” within the notice period for the revised terms and conditions under Paragraph 3 and receives the consent of the “Mall,” the revised terms and conditions will be applied.
  ⑥ Matters not specified in these terms and conditions and the interpretation of these terms and conditions shall be governed by the Act on Consumer Protection in Electronic Commerce, etc., the Act on Regulation of Terms and Conditions, the Consumer Protection Guidelines in Electronic Commerce, etc. established by the Fair Trade Commission, and related laws and regulations or customary practices.
  Article 4 (Provision and Change of Services)
  ① The “Mall” shall perform the following tasks:
  1. Provision of information on goods or services and conclusion of purchase contracts
  2. Delivery of goods or services for which a purchase contract has been concluded
  3. Other Business determined by the “Mall”
  ② In the event of a shortage of goods or services or changes in technical specifications, etc., the “Mall” may change the content of goods or services to be provided under a contract to be concluded in the future. In this case, the content of the changed goods or services and the date of provision shall be immediately announced in the place where the content of the current goods or services is posted.
  ③ In the event that the “Mall” changes the content of services that the user has contracted to provide due to reasons such as the shortage of goods, etc. or changes in technical specifications, etc., the “Mall” shall immediately notify the user of the reason at a notifiable address.
  ④ In the case of the preceding paragraph, the “Mall” shall compensate for any damages incurred by the user as a result. However, this shall not apply if the “Mall” proves that there was no intent or negligence.
  Article 5 (Suspension of Services)
  ① The “Mall” may temporarily suspend the provision of services in the event of maintenance, inspection, replacement, and failure of information and communication equipment such as computers, or interruption of communications.
  ② The “Mall” shall not be liable for any damages incurred by the user or a third party due to the temporary suspension of service provision for the reasons set forth in Paragraph 1. Compensation. However, this does not apply if the “Mall” proves that there was no intent or negligence.
  ③ In the event that the service cannot be provided due to reasons such as a change in business type, abandonment of business, or integration between companies, the “Mall” shall notify the user in the manner specified in Article 8 and compensate the consumer according to the conditions initially presented by the “Mall.” However, if the “Mall” does not notify the compensation criteria, etc., the “Mall” shall pay the user’s mileage or accumulated points, etc. in kind or in cash equivalent to the currency value used in the “Mall.”
  Article 6 (Membership Registration)
  ① Users apply for membership by filling out the membership information in the registration form specified by the “Mall” and expressing their consent to these terms and conditions.
  ② The “Mall” shall register as a member any user who has applied for membership as specified in Paragraph 1, unless he or she falls under any of the following items. 1. If the applicant has previously lost membership qualifications in accordance with Article 7, Section 3 of these Terms and Conditions, however, this does not apply if 3 years have passed since the loss of membership qualifications in accordance with Article 7, Section 3 and the “Mall” has approved the re-registration of the member.
  2. If there are any false, omitted, or incorrect entries in the registration information
  3. If it is determined that registering as a member significantly interferes with the technology of the “Mall”
  ③ The time of establishment of the membership contract is when the “Mall”’s approval reaches the member.
  ④ If there is a change in the information registered at the time of membership registration, the member must notify the “Mall” of the change within a reasonable period of time by means of modifying the member information, etc.
  Article 7 (Withdrawal of membership and loss of qualification, etc.)
  ① Members may request withdrawal from the “Mall” at any time, and the “Mall” will immediately process the withdrawal.
  ② If a member falls under any of the following reasons, the “Mall” may restrict or suspend the member’s qualification.
  1. If false information is registered when applying for membership
  2. If the member does not pay the price of goods purchased using the “Mall” or other debts related to the use of the “Mall” by the due date
  3. If the member threatens the order of e-commerce by interfering with another person’s use of the “Mall” or stealing information
  4. If the “Mall” is used to commit acts prohibited by law or these Terms and Conditions or against public order and morals
  ③ If the “Mall” restricts or suspends the member’s qualification, and the same act is repeated more than twice or the reason is not corrected within 30 days, the “Mall” may revoke the member’s qualification.
  ④ If the “Mall” revoke the member’s qualification, the member registration will be canceled. In this case, the member will be notified and given at least 30 days to explain before the membership is cancelled.
  Article 8 (Notice to Members)
  ① When the “Mall” notifies a member, it may do so by sending an email to the address designated by the member in advance through an agreement with the “Mall.”
  ② In the case of a notice to an unspecified number of members, the “Mall” may substitute individual notice by posting on the “Mall” bulletin board for at least one week. However, individual notice will be given for matters that have a significant impact on the member’s own transactions.
  Article 9 (Purchase Application and Consent to Provision of Personal Information, etc.)
  ① “Mall” users apply for purchases on the “Mall” by the following or similar methods, and the “Mall” must provide the following information in an easily understandable manner when the user applies for purchase.
  1. Search and select goods, etc.
  2. Enter the recipient's name, address, phone number, email address (or mobile phone number), etc.
  3. Confirm the terms and conditions, services with limited right of cancellation, and cost burden such as delivery and installation fees
  4. Agree to these terms and conditions and confirm or reject the matters in item 3 above
  (e.g., mouse click)
  5. Apply for purchase of goods, etc. and confirm this or consent to the confirmation of the "mall"
  6. Select payment method
  ② In case the "mall" needs to provide the purchaser's personal information to a third party, the "mall" must notify the purchaser of 1) the recipient of the personal information, 2) the purpose of use of the personal information by the recipient of the personal information, 3) the items of personal information provided, and 4) the period of retention and use of the personal information by the recipient of the personal information and obtain consent. (The same applies when the matters for which consent has been given are changed.)
  ③ When the “Mall” entrusts a third party with handling the purchaser’s personal information, it must notify the purchaser of 1) the person entrusted with handling personal information, and 2) the details of the work for which personal information handling is being entrusted, and obtain consent. (The same applies when the matters for which consent has been given are changed.) However, in cases where it is necessary for the performance of a contract for the provision of services and is related to the promotion of the purchaser’s convenience, the notification procedure and consent procedure may be omitted by notifying the purchaser through the personal information handling policy in the manner prescribed in the “Act on Promotion of Information and Communications Network Utilization and Information Protection, etc.”
  Article 10 (Establishment of a Contract)
  ① The “Mall” may not accept a purchase application under Article 9 in the following cases. However, when concluding a contract with a minor, it must notify the purchaser that the minor or the legal representative may cancel the contract if the consent of the legal representative is not obtained. 1. If there is any false information, omission, or error in the application
  2. If a minor purchases goods or services prohibited by the Youth Protection Act, such as cigarettes or alcohol
  3. If it is judged that accepting other purchase applications significantly interferes with the technology of the “Mall”
  ② The contract is deemed to have been established when the “Mall’s” acceptance reaches the user in the form of a receipt confirmation notice under Article 12, Paragraph 1.
  ③ The “Mall’s” expression of acceptance must include information such as confirmation of the user’s purchase application, whether the product is available for sale, correction or cancellation of the purchase application, etc.
  Article 11 (Payment Method) Payment for goods or services purchased from the “Mall” may be made using any of the available methods listed below. However, the “Mall” may not collect any additional fees for the price of goods, etc. for the user’s payment method. 1. Various account transfers such as phone banking, internet banking, and mail banking
  2. Various card payments such as prepaid cards, debit cards, and credit cards
  3. Online bank transfer
  4. Payment using electronic money
  5. Payment upon receipt
  6. Payment using points paid by the “mall” such as mileage
  7. Payment using gift certificates that have been contracted with the “mall” or approved by the “mall”
  8. Payment using other electronic payment methods, etc.
  Article 12 (Notice of Confirmation of Receipt, Change and Cancellation of Purchase Application)
  ① When the “mall” receives a purchase application from a user, it sends the user a notice of confirmation of receipt.
  ② When a user who has received a notice of confirmation of receipt finds a discrepancy in the expression of intent, etc., he or she may immediately request a change or cancellation of the purchase application after receiving the notice of confirmation of receipt, and the “mall” shall, without delay, process such request prior to delivery if requested by the user. However, if payment has already been made, the provisions of Article 15 on withdrawal of subscription, etc. shall apply. Article 13 (Supply of Goods, etc.)
  ① Unless there is a separate agreement between the “Mall” and the user regarding the timing of supply of goods, etc., the “Mall” shall take necessary measures such as custom manufacturing, packaging, etc. so that the goods, etc. can be delivered within 7 days from the date the user made the application. However, if the “Mall” has already received all or part of the payment for the goods, etc., the “Mall” shall take measures within 3 business days from the date of receipt of all or part of the payment. In this case, the “Mall” shall take appropriate measures so that the user can check the supply procedure and progress of the goods, etc.
  ② The “Mall” shall specify the means of delivery, the party responsible for the delivery cost by means, and the delivery period by means for the goods purchased by the user. If the “Mall” exceeds the agreed delivery period, it shall compensate the user for any damages incurred as a result. However, this shall not apply if the “Mall” proves that there was no intent or negligence. Article 14 (Refund) If the “Mall” cannot deliver or provide the goods, etc. that the user has requested to purchase due to reasons such as out of stock, it shall promptly notify the user of the reason and, if the payment for the goods, etc. has been received in advance, refund the payment within 3 business days from the date of receipt or take necessary measures for a refund.
  Article 15 (Cancellation of subscription, etc.)
  ① A user who has entered into a contract with the “Mall” for the purchase of goods, etc. may cancel the subscription within 7 days from the date of receipt of the written contract in accordance with Article 13, Paragraph 2 of the Act on Consumer Protection in Electronic Commerce, etc. (if the supply of goods, etc. is made later than the date of receipt of the written contract, it shall refer to the date of receipt of the goods, etc. or the start of the supply of goods, etc.). However, if the Act on Consumer Protection in Electronic Commerce, etc. provides otherwise regarding cancellation of subscription, the provisions of the Act shall apply.
  ② If the user has received the goods, etc., he/she may not return or exchange them in any of the following cases: 1. If the goods, etc. are lost or damaged due to a reason attributable to the user (however, if the packaging, etc. is damaged in order to check the contents of the goods, etc., the subscription may be cancelled)
  2. If the value of the goods, etc. is significantly reduced due to the use or partial consumption of the user
  3. If the value of the goods, etc. is significantly reduced to the extent that resale is difficult due to the passage of time
  4. If the original goods, etc. can be copied with goods, etc. of the same performance, if the packaging of the goods, etc. is damaged
  ③ In the cases of subparagraphs 2 through 4 of paragraph 2, if the “mall” did not take measures such as indicating the fact that subscription cancellation, etc. is restricted in a place where the consumer can easily see it in advance or providing trial products, the user’s subscription cancellation, etc. is not restricted.
  ④ Notwithstanding the provisions of paragraphs 1 and 2, if the contents of the goods, etc. are different from the displayed or advertised contents or are performed differently from the contractual contents, the user may cancel the subscription, etc. within 3 months from the date of receipt of the goods, etc., or within 30 days from the date on which the user learned or could have learned of the fact.
  Article 16 (Effect of Cancellation of Subscription, etc.)
  ① If the “Mall” receives a return of goods, etc. from a user, it shall refund the price of the goods, etc. already paid within 3 business days. In this case, if the “Mall” delays the refund of the goods, etc. to the user, it shall pay the delayed interest calculated by multiplying the delayed interest rate stipulated in Article 21-2 of the “Enforcement Decree of the Act on Consumer Protection in E-Commerce, etc.” by the delay period.
  ② When refunding the above amount, if the user paid the price of the goods, etc. using a payment method such as a credit card or electronic money, the “Mall” shall request the business operator who provided the payment method to suspend or cancel the claim for the price of the goods, etc. without delay.
  ③ In the case of cancellation of subscription, etc., the user shall bear the cost required to return the goods, etc. supplied. The “Mall” shall not claim a penalty or damages from the user for reasons such as cancellation of subscription. However, if the content of the goods, etc. is different from the displayed/advertised content or is performed differently from the contract, the cost of returning the goods, etc. will be borne by the “Mall”.
  ④ If the user pays the shipping cost when receiving the goods, etc., the “Mall” will clearly indicate who will bear the cost when canceling the subscription so that the user can easily understand.
  Article 17 (Personal Information Protection)
  ① When collecting the user’s personal information, the “Mall” collects the minimum amount of personal information necessary to provide the service.
  ② When registering as a member, the “Mall” does not collect in advance the information necessary for the performance of the purchase contract. However, this does not apply when collecting the minimum amount of specific personal information in cases where identity verification is required prior to the purchase contract in order to fulfill obligations under relevant laws and regulations.
  ③ When collecting and using the user’s personal information, the “Mall” will notify the user of the purpose and obtain consent.
  ④ The “Mall” cannot use the collected personal information for purposes other than the intended purpose, and when a new purpose of use arises or when providing it to a third party, the “Mall” will notify the user of the purpose and obtain consent at the stage of use/provision. However, if the relevant laws provide otherwise, there are exceptions.
  ⑤ In cases where the “Mall” must obtain the user’s consent pursuant to Paragraphs 2 and 3, the identity of the person in charge of personal information management (affiliation, name, phone number, and other contact information), the purpose of collecting and using information, matters related to the provision of information to third parties (recipient, purpose of provision, and content of information to be provided), etc., as stipulated in Article 22 Paragraph 2 of the “Act on Promotion of Information and Communications Network Utilization and Information Protection, etc.” must be specified or notified in advance, and the user may withdraw this consent at any time.
  ⑥ The user may request to view or correct errors in his/her personal information held by the “Mall” at any time, and the “Mall” is obligated to take necessary measures without delay. If the user requests correction of an error, the “Mall” shall not use the relevant personal information until the error is corrected. ⑦ “Mall” shall limit the number of persons handling the personal information of users to the minimum in order to protect personal information, and shall be fully responsible for any damage suffered by users due to loss, theft, leakage, provision to a third party without consent, alteration, etc. of the personal information of users, including credit cards, bank accounts, etc.
  ⑧ “Mall” or a third party that has received personal information from it shall destroy the personal information without delay when the purpose of collection or provision of the personal information has been achieved.
  ⑨ “Mall” shall not set the consent box for collection, use, and provision of personal information as pre-selected. In addition, “Mall” shall specifically state the services that will be restricted if the user refuses to consent to the collection, use, and provision of personal information, and shall not restrict or refuse the provision of services, such as membership registration, due to the user’s refusal to consent to the collection, use, and provision of personal information that is not a mandatory collection item.
  Article 18 (Obligations of “Mall”)
  ① “Mall” shall not engage in any acts prohibited by laws and regulations or these Terms and Conditions or contrary to public order and morals, and shall do its best to provide goods and services continuously and stably in accordance with the provisions of these Terms and Conditions. ② “Mall” must have a security system to protect users’ personal information (including credit information) so that users can safely use Internet services.
  ③ “Mall” shall be responsible for compensating users for damages incurred due to unfair labeling or advertising practices as defined in Article 3 of the Act on Fair Labeling and Advertising regarding products or services.
  ④ “Mall” shall not send users unsolicited commercial advertising e-mails.
  Article 19 (Member’s Obligations Regarding ID and Password)
  ① Except for the cases in Article 17, members are responsible for managing their ID and password.
  ② Members shall not allow third parties to use their ID and password.
  ③ If a member becomes aware that his/her ID and password have been stolen or is being used by a third party, he/she shall immediately notify “Mall” and follow the instructions provided by “Mall”.
  Article 20 (User’s Obligations) Users shall not perform the following acts: 1. Registration of false information when applying or changing
  2. Theft of others’ information
  3. Change of information posted on the “Mall”
  4. Transmission or posting of information (computer programs, etc.) other than information specified by the “Mall”
  5. Infringement of intellectual property rights such as copyrights of the “Mall” or other third parties
  6. Acts that damage the reputation of the “Mall” or other third parties or interfere with their business
  7. Acts of disclosing or posting obscene or violent messages, images, voices, or other information that violates public order and morals on the mall
  Article 21 (Relationship between the linked “Mall” and the linked “Mall”)
  ① When the upper “Mall” and the lower “Mall” are connected by a method such as a hyperlink (e.g., the target of the hyperlink includes text, pictures, and moving images), the former is called the linked “Mall” (website) and the latter is called the linked “Mall” (website). ② If the connected “mall” clearly states on the initial screen of the connected “mall” or on a pop-up screen at the time of connection that it does not assume warranty responsibility for transactions between users and the connected “mall” regarding goods, etc. independently provided by the connected “mall,” then the connected “mall” will not assume warranty responsibility for such transactions.
  Article 22 (Attribution of Copyright and Restrictions on Use)
  ① The copyright and other intellectual property rights for works created by the “mall” belong to the “mall.”
  ② Users may not use information obtained by using the “mall” for profit purposes or allow third parties to use such information by means of reproduction, transmission, publication, distribution, broadcasting, or other methods without the prior consent of the “mall.”
  ③ The “mall” must notify the user in question when using the copyright belonging to the user according to the agreement.
  Article 23 (Dispute Resolution)
  ① The “mall” establishes and operates a damage compensation processing organization to reflect the legitimate opinions or complaints raised by users and compensate for the damages. ② “Mall” will give priority to complaints and opinions submitted by users. However, if prompt processing is difficult, the user will be notified immediately of the reason and processing schedule.
  ③ In the event of a request for damage relief from a user in connection with an e-commerce dispute between “Mall” and a user, the dispute may be subject to the mediation of the Fair Trade Commission or a dispute resolution agency commissioned by the city/provincial governor.
  Article 24 (Jurisdiction and Governing Law)
  ① Litigation regarding e-commerce disputes between “Mall” and a user shall be under the exclusive jurisdiction of the local court with jurisdiction over the user’s address at the time of filing, or if there is no address, the user’s place of residence. However, if the user’s address or place of residence is unclear at the time of filing, or if the user is a foreign resident, the case shall be filed with the competent court under the Civil Procedure Act.
  ② law shall apply to e-commerce lawsuits filed between “Mall” and a user.
      `;
      }
    }
  
    getTerms_Privacy() {
      if (isKorea()) {
        return `
  회사명('레슨유')는 개인정보 보호법 제30조에 따라 정보 주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리지침을 수립, 공개합니다.
  제1조 (개인정보의 처리목적)
  회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
  1. 홈페이지 회원 가입 및 관리
  회원 가입 의사 확인, 회원자격 유지․관리, 서비스 부정 이용 방지, 각종 고지․통지, 고충 처리 등을 목적으로 개인정보를 처리합니다.
  2. 재화 또는 서비스 제공
  서비스 제공, 콘텐츠 제공, 맞춤서비스 제공, 요금 결제 및 정산 등을 목적으로 개인정보를 처리합니다.
  3. 고충 처리
  민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락․통지, 처리 결과 통보 등의 목적으로 개인정보를 처리합니다.
  제2조 (개인정보의 처리 및 보유기간)
  ① 회사는 법령에 따른 개인정보 보유, 이용 기간 또는 정보주체로부터 개인정보를 수집 시에 동의 받은 개인정보 보유, 이용 기간 내에서 개인정보를 처리, 보유합니다.
  ② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.
  1. 홈페이지 회원 가입 및 관리 : 사업자/단체 홈페이지 탈퇴 시까지
  다만, 다음의 사유에 해당하는 경우에는 해당 사유 종료 시까지
  1) 관계 법령 위반에 따른 수사, 조사 등이 진행 중인 경우에는 해당 수사, 조사 종료 시까지
  2) 홈페이지 이용에 따른 채권 및 채무관계 잔존 시에는 해당 채권, 채무 관계 정산 시까지
  2. 재화 또는 서비스 제공 : 재화․서비스 공급완료 및 요금결제․정산 완료 시까지
  다만, 다음의 사유에 해당하는 경우에는 해당 기간 종료 시까지
  1) 「전자상거래 등에서의 소비자 보호에 관한 법률」에 따른 표시․광고, 계약내용 및 이행 등 거래에 관한 기록
  - 표시․광고에 관한 기록 : 6월
  - 계약 또는 청약 철회, 대금결제, 재화 등의 공급기록 : 5년
  - 소비자 불만 또는 분쟁 처리에 관한 기록 : 3년
  2) 「통신비밀보호법」 제41조에 따른 통신사실확인자료 보관
  - 가입자 전기통신일시, 개시․종료 시간, 상대방 가입자 번호, 사용도수, 발신기지국 위치추적자료 : 1년
  - 컴퓨터 통신, 인터넷 로그 기록자료, 접속지 추적자료 : 3개월
  제5조(이용자 및 법정대리인의 권리와 그 행사 방법)
  ① 정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.
  1. 개인정보 열람 요구
  2. 오류 등이 있을 경우 정정 요구
  3. 삭제요구
  4. 처리정지 요구
  ② 제1항에 따른 권리 행사는 회사에 대해 전화, 전자우편 등을 통하여 하실 수 있으며 회사는 이에 대해 지체없이 조치하겠습니다.
  ③ 정보주체가 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한 경우에는 회사는 정정 또는 삭제를 완료할 때까지 당해 개인정보를 이용하거나 제공하지 않습니다.
  ④ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다. 이 경우 개인정보 보호법 시행규칙 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.⑤ 정보주체는 개인정보 보호법 등 관계 법령을 위반하여 회사가 처리하고 있는 정보주체 본인이나 타인의 개인정보 및 사생활을 침해하여서는 아니 됩니다.
  제6조(처리하는 개인정보 항목)
  회사는 다음의 개인정보 항목을 처리하고 있습니다.
  1. 홈페이지 회원 가입 및 관리
  필수항목 : <이름, 이메일주소>
  2. 재화 또는 서비스 제공
  필수항목 : <이름, 이메일주소>
  3. 인터넷 서비스 이용과정에서 아래 개인정보 항목이 자동으로 생성되어 수집될 수 있습니다.
  IP주소, 쿠키, MAC주소, 서비스 이용기록, 방문기록, 불량 이용기록 등
  제7조(개인정보의 파기)
  ① 회사는 개인정보 보유 기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.
  ② 정보주체로부터 동의받은 개인정보 보유 기간이 경과하거나 처리목적이 달성되었음에도 불구하고 다른 법령에 따라 개인정보를 계속 보존하여야 하는 경우에는, 해당 개인정보를 별도의 데이터베이스(DB)로 옮기거나 보관장소를 달리하여 보존합니다.
  ③ 개인정보 파기의 절차 및 방법은 다음과 같습니다.
  1. 파기 절차
  회사는 파기 사유가 발생한 개인정보를 선정하고, 회사의 개인정보 보호책임자의 승인을 받아 개인정보를 파기합니다.
  2. 파기 방법
  회사는 전자적 파일 형태로 기록․저장된 개인정보는 기록을 재생할 수 없도록 로우레밸포멧(Low Level Format) 등의 방법을 이용하여 파기하며, 종이 문서에 기록․저장된 개인정보는 분쇄기로 분쇄하거나 소각하여 파기합니다.
  제8조(개인정보의 안전성 확보조치)
  회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 하고 있습니다.
  1. 관리적 조치 : 내부관리계획 수립 및 시행, 정기적 직원 교육 등
  2. 기술적 조치 : 개인정보처리시스템 등의 접근 권한 관리, 접근통제시스템 설치, 고유 식별정보
  등의 암호화, 보안프로그램 설치
  3. 물리적 조치 : 전산실, 자료보관실 등의 접근통제
  제9조(개인정보 자동 수집 장치의 설치∙운영 및 거부에 관한 사항)
  ① 회사는 이용자에게 개별적인 맞춤 서비스를 제공하기 위해 이용정보를 저장하고 수시로 불러오는 ‘쿠키(cookie)’를 사용합니다.
  ② 쿠키는 웹사이트를 운영하는데 이용되는 서버(http)가 이용자의 컴퓨터 브라우저에 보내는 소량의 정보이며 이용자들의 컴퓨터 내의 하드디스크에 저장되기도 합니다.
  가. 쿠키의 사용 목적: 이용자가 방문한 각 서비스와 웹 사이트들에 대한 방문 및 이용형태, 인기 검색어, 보안접속 여부, 등을 파악하여 이용자에게 최적화된 정보 제공을 위해 사용됩니다.
  나. 쿠키의 설치∙운영 및 거부 : 웹브라우저 상단의 도구>인터넷 옵션>개인정보 메뉴의 옵션 설정을 통해 쿠키 저장을 거부 할 수 있습니다.
  다. 쿠키 저장을 거부할 경우 맞춤형 서비스 이용에 어려움이 발생할 수 있습니다.
  제10조(개인정보 보호책임자)
  ① 회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만 처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
  ▶ 개인정보 보호책임자
  성명 : 김진환
  직책 : 대표
  연락처 : 070-8121-2971, support@tumpla.com
  ② 정보주체께서는 회사의 서비스(또는 사업)을 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만 처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다. 회사는 정보주체의 문의에 대해 지체없이 답변 및 처리해드릴 것입니다.
  제12조(권익침해 구제 방법)
  정보주체는 아래의 기관에 대해 개인정보 침해에 대한 피해구제, 상담 등을 문의하실 수 있습니다.
  ▶ 개인정보 침해신고센터 (한국인터넷진흥원 운영)
  - 소관 업무 : 개인정보 침해사실 신고, 상담 신청
  - 홈페이지 : privacy.kisa.or.kr
  - 전화 : (국번없이) 118
  - 주소 : (58324) 전남 나주시 진흥길 9(빛가람동 301-2) 3층 개인정보침해신고센터
  ▶ 개인정보 분쟁조정위원회
  - 소관업무 : 개인정보 분쟁조정신청, 집단분쟁조정 (민사적 해결)
  - 홈페이지 : www.kopico.go.kr
  - 전화 : (국번없이) 1833-6972
  - 주소 : (03171)서울특별시 종로구 세종대로 209 정부서울청사 4층
  ▶ 대검찰청 사이버범죄수사단 : 02-3480-3573 (www.spo.go.kr)
  ▶ 경찰청 사이버안전국 : 182 (http://cyberbureau.police.go.kr)
  제13조(개인정보 처리방침 시행 및 변경)
  이 개인정보 처리방침은 2024. 10. 21부터 적용됩니다.
          `;
      } else {
        return `
  The company name ('LessonYou') establishes and discloses the following personal information processing guidelines in accordance with Article 30 of the Personal Information Protection Act to protect the personal information of the information subject and to promptly and smoothly process complaints related thereto.
  Article 1 (Purpose of personal information processing)
  The company processes personal information for the following purposes. The personal information being processed will not be used for purposes other than the following, and if the purpose of use changes, necessary measures such as obtaining separate consent in accordance with Article 18 of the Personal Information Protection Act will be taken.
  1. Website membership registration and management
  Personal information is processed for the purposes of confirming the intention to register as a member, maintaining and managing membership qualifications, preventing unauthorized use of services, various notifications and notices, and handling complaints.
  2. Provision of goods or services
  Personal information is processed for the purposes of providing services, providing content, providing customized services, payment and settlement of fees, etc.
  3. Complaint handling
  Personal information is processed for the purposes of verifying the identity of the complainant, confirming the complaint, contacting and notifying for fact-finding, and notifying the results of processing. Article 2 (Processing and retention period of personal information)
  ① The company processes and retains personal information within the retention and use period of personal information stipulated by law or within the retention and use period of personal information agreed upon by the information subject when collecting personal information.
  ② The processing and retention period of each personal information is as follows. 1. Website membership registration and management: Until withdrawal from the business/organization website
  However, in the following cases, until the end of the reason
  1) In the case of an investigation or inquiry due to violation of relevant laws and regulations, until the end of the investigation or inquiry
  2) In the case of remaining credit and debt relationships due to website use, until the settlement of the credit and debt relationships
  2. Provision of goods or services: Until the completion of the supply of goods and services and the completion of payment and settlement
  However, in the following cases, until the end of the period
  1) Records of transactions such as display and advertisement, contract contents and performance in accordance with the 「Act on Consumer Protection in E-commerce, etc.」
  - Records of display and advertisement: 6 months
  - Records of contract or subscription withdrawal, payment, supply of goods, etc.: 5 years
  - Records of consumer complaints or dispute resolution: 3 years
  2) Retention of communication fact confirmation data in accordance with Article 41 of the 「Communications Secrets Protection Act」
  - Subscriber telecommunication date and time, start and end time, other party subscriber number, number of uses, base station of transmission Location tracking data: 1 year
  - Computer communication, Internet log records, access location tracking data: 3 months
  Article 5 (User and legal representative rights and methods of exercising them)
  ① The information subject may exercise the following personal information protection rights against the company at any time.
  1. Request to view personal information
  2. Request for correction in case of errors, etc.
  3. Request for deletion
  4. Request for suspension of processing
  ② The rights under paragraph 1 may be exercised against the company by phone, e-mail, etc., and the company will take action without delay.
  ③ If the information subject requests correction or deletion of personal information due to errors, etc., the company will not use or provide the personal information until the correction or deletion is completed.
  ④ The rights under paragraph 1 may be exercised through the information subject's legal representative or agent, etc. In this case, you must submit a power of attorney in the format of Appendix 11 of the Enforcement Regulations of the Personal Information Protection Act. ⑤ The information subject shall not infringe upon the personal information or privacy of the information subject or others that the company is processing in violation of the Personal Information Protection Act or other related laws.
  Article 6 (Items of personal information processed)
  The company is processing the following personal information items.
  1. Website membership registration and management
  Required items: <Name, email address>
  2. Provision of goods or services
  Required items: <Name, email address>
  3. The following personal information items may be automatically generated and collected during the use of Internet services.
  IP address, cookies, MAC address, service usage records, visit records, records of improper use, etc.
  Article 7 (Destruction of personal information)
  ① When personal information becomes unnecessary due to the expiration of the personal information retention period, achievement of the processing purpose, etc., the company will destroy the relevant personal information without delay. ② In cases where the retention period of personal information agreed upon by the information subject has expired or the purpose of processing has been achieved, but personal information must be retained in accordance with other laws and regulations, the personal information shall be transferred to a separate database (DB) or stored in a different location.
  ③ The procedures and methods for destroying personal information are as follows.
  1. Destruction Procedure
  The company selects personal information for which a reason for destruction has arisen and destroys the personal information with the approval of the company's personal information protection officer.
  2. Destruction Method
  The company destroys personal information recorded and stored in electronic file formats using methods such as low-level formatting so that the records cannot be reproduced, and destroys personal information recorded and stored in paper documents by shredding or incineration.
  Article 8 (Measures to Ensure the Security of Personal Information)
  The company is taking the following measures to ensure the security of personal information. 1. Administrative measures: Establishment and implementation of internal management plan, regular employee training, etc.
  2. Technical measures: Management of access rights to personal information processing systems, installation of access control systems, encryption of unique identification information, etc., installation of security programs
  3. Physical measures: Access control to computer rooms, data storage rooms, etc.
  Article 9 (Installation/operation and refusal of automatic personal information collection devices)
  ① The company uses ‘cookies’ to store and periodically retrieve usage information in order to provide customized services to users.
  ② Cookies are small amounts of information that the server (http) used to operate the website sends to the user’s computer browser and are also stored on the hard disk of the user’s computer.
  A. Purpose of cookie use: Used to provide optimized information to users by identifying the visit and usage patterns, popular search terms, and whether or not the user has accessed each service and website visited.
  B. Installation/operation and refusal of cookies: You can refuse cookie storage by setting options in the Tools>Internet Options>Privacy menu at the top of the web browser.
  D. If you refuse to store cookies, you may experience difficulties in using customized services.
  Article 10 (Personal Information Protection Officer)
  ① The company is responsible for the overall management of personal information processing, and has designated a personal information protection officer as follows to handle complaints and provide remedies for damages from information subjects related to personal information processing.
  ② Information subjects may inquire about all personal information protection-related inquiries, complaint handling, and remedies that arise while using the company's services (or business) to the personal information protection officer and the department in charge. The company will promptly respond and process inquiries from information subjects.
  ▶ Personal Information Protection Officer
  Name: Jin-Hwan Kim
  Position: CEO
  Contact: 070-8121-2971, support@tumpla.com
  Article 12 (Methods of Remedy for Infringement of Rights)
  Information subjects may inquire about remedies for damages and consultations related to personal information infringement to the following organizations. ▶ Personal Information Infringement Report Center (operated by Korea Internet & Security Agency)
  Article 13 (Enforcement and Change of Personal Information Processing Policy)
  This personal information processing policy is effective from October 21, 2024.
        `;
      }
    }
  
    getTerms_Refund() {
      if (isKorea()) {
        return `
  1. 환불 정책
  회사명('레슨유')는 신뢰있는 서비스를 제공할 수 있도록 소비자기본법에서 정하고 있는 소비자분쟁해결기준을 참고하여 환불 정책을 시행하고 있습니다.
  따라서 사용자는 본 정책에서 안내하는 개별 반환 사유를 이유로 환불을 신청할 수 있고, 당사는 본 정책에서 안내하는 반환 사유를 이유로 환불을 할 수 있습니다.
  2. 환불 정책의 범위
  환불 정책은 멤버쉽과 구매한 웹사이트 템플릿, 컴포넌트 및 환불 요청 가능기간 안에 구매한 전체 결제 내역을 포함할 수 있으며 그 외의 서비스는 본 정책의 범위에 포함되지 않습니다.
  3. 멤버십 환불
  환불 가능 기간: 멤버십은 구독 시작 후 7일 이내에 환불 요청이 가능합니다. 단, 해당 기간 내에 서비스 사용량이 많을 경우 환불이 반려될 수 있습니다.
  환불 요청 방법: 고객센터 이메일( support@tumpla.com )로 환불 요청을 보내주시기 바랍니다.
  요청하실 때에는 회원 email, 이름, 구매 내역 및 환불 사유를 포함해 주시기 바랍니다.
  4. 웹사이트 템플릿 및 컴포넌트 환불
  환불 불가: 웹사이트 템플릿과 컴포넌트는 다운로드 후 사용이 가능한 디지털 상품이므로, 구매 후 단순 변심 사유로 환불이 불가능합니다. 
  구매하시기 전에 템플릿 및 컴포넌트의 데모 버전을 확인하시기를 권장합니다.
  문제 발생 시 지원: 템플릿 사용 중 문제가 발생할 경우, 저희 고객 지원 팀에 문의해 주시면 최대한 빠르게 문제를 해결하도록 돕겠습니다.
  웹사이트 템플릿과 컴포넌트에 에러나 버그로 사용할 수 없는 경우 구매후 15일 이내에 환불 요청이 가능합니다.
  5. 환불 처리 과정
  환불 요청이 접수되면, 저희는 요청을 검토한 후 5영업일 이내에 답변을 드리겠습니다. 환불이 승인되면, 환불 처리에는 최대 10영업일이 소요될 수 있습니다.
  6. 고객 문의
  환불 정책에 대한 추가 질문이나 환불 요청이 필요하신 경우, 저희 고객센터로 언제든지 문의해 주세요. 저희는 고객님의 요청에 최선을 다해 응대하겠습니다.
  7. 환불 요청 방법
  환불을 원하실 경우, 다음 절차를 따르시기 바랍니다:
  고객센터 이메일( support@tumpla.com )로 환불 요청을 보내주시기 바랍니다.
  요청하실 때에는 회원 email, 이름, 구매 내역 및 환불 사유를 포함해 주시기 바랍니다.
  8. 결제 수수료
  환불 처리 시 결제 수수료는 고객님에게 부담될 수 있습니다. 이에 대한 자세한 내용은 고객센터 이메일로 문의해 주시기 바랍니다.
  9. 고객 문의
  환불 정책에 대한 추가 질문이 있으시거나, 환불 요청이 필요하신 경우, 언제든지 문의 주시기 바랍니다. 저희는 고객님의 요청에 최선을 다해 응대하겠습니다.
          `;
      } else {
        return `
  1. Refund Policy
  The company name ('LessonYou') implements a refund policy by referring to the consumer dispute resolution standards stipulated in the Consumer Basic Act in order to provide a reliable service.
  Therefore, users can apply for a refund for individual reasons for return as guided in this policy, and the company can provide a refund for reasons for return as guided in this policy.
  2. Scope of the refund policy
  The refund policy may include membership, purchased website templates, components, and the entire payment history purchased within the refund request period, and other services are not included in the scope of this policy.
  3. Membership refund
  Refund period: Membership can be requested for a refund within 7 days of subscription start. However, if the service usage is high during the period, the refund may be rejected.
  How to request a refund: Please send a refund request to the customer center email (support@tumpla.com).
  When requesting, please include the member email, name, purchase history, and reason for refund. 4. Website Templates and Components Refunds
  No refunds: Website templates and components are digital products that can be downloaded and used, so refunds are not possible after purchase due to simple changes of mind.
  We recommend that you check the demo versions of templates and components before purchasing.
  Support in case of problems: If you encounter problems while using the templates, please contact our customer support team and we will help you resolve the issue as quickly as possible.
  If the website templates and components cannot be used due to errors or bugs, you can request a refund within 15 days of purchase.
  5. Refund Process
  Once a refund request is received, we will review the request and respond within 5 business days. If the refund is approved, it may take up to 10 business days to process the refund.
  6. Customer Inquiries
  If you have any additional questions about the refund policy or need to request a refund, please contact our customer support center at any time. We will do our best to respond to your request.
  7. How to request a refund
  If you would like a refund, please follow the steps below:
  Send a refund request to our customer support center (support@tumpla.com). When requesting, please include your member email, name, purchase history, and reason for refund.
  8. Payment Fee
  Payment fees may be charged to customers when processing refunds. For more information, please contact our customer service email.
  9. Customer Inquiry
  If you have any additional questions about our refund policy or need to request a refund, please contact us at any time. We will do our best to accommodate your request.
        `;
      }
    }
  }
  
  let g_pTerms = new Terms();