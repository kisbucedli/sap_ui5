sap.ui.define([], function () {
	"use strict";
	return {
		addressFull:function(street, houseNum, zipCode, city){
            var aText=[];
            aText.push([street, houseNum].join(" ").trim());
            aText.push([zipCode,city].join(" ").trim());
            return aText.filter(function(el){ return el != "" }).join(", ");			
		},
		messageText: function (sStatus) {
			var resourceBundle = this.getView().getModel("i18n").getResourceBundle();
			switch (sStatus) {
				case "E":
					return resourceBundle.getText("msgError");
				case "W":
					return resourceBundle.getText("msgWarning");
				case "S":
					return resourceBundle.getText("msgSuccess");
				default:
					return sStatus;
			}
		},
		
		messageIcon: function(sStatus) {
		    //Message type: S Success, E Error, W Warning, I Info, A Abort
            switch(sStatus){
                case 'E': return "sap-icon://message-error";
                case 'W': return "sap-icon://message-warning";
                case 'S': return "sap-icon://message-success";
                case 'I': return "sap-icon://message-info";
                case 'A': return "sap-icon://error";
            }		    
		},
		
		messageColor: function(sStatus) {
		    //Message type: S Success, E Error, W Warning, I Info, A Abort
            switch(sStatus){
                case 'E': return "#FF0000"; //Red
                case 'W': return "#FFD700"; //yellow
                case 'S': return "#008000"; //green
            }		    
		},
		statusIcon: function(sStatus) {
		    //Message type: S Success, E Error, W Warning, I Info, A Abort
            switch(sStatus){
                case 'D': return "sap-icon://group"; //Duplicate
                case 'W': return "sap-icon://message-warning";
                case 'S': return "sap-icon://messge-success";
                case 'I': return "sap-icon://messge-info";
                case 'A': return "sap-icon://error";
            }		    
		},	
		statusColor: function(sStatus) {
		    //Message type: S Success, E Error, W Warning, I Info, A Abort
            switch(sStatus){
                case 'E': return "#FF0000"; //Red
                case 'D': return "#FFD700"; //yellow
                case 'S': return "#008000"; //green
            }		    
		},
		dateIn: function(oValue) {
            if (oValue === undefined || oValue === "") {
                return;
            }
            return new Date(oValue);
		},	
		dateJS: function( oDate ){
		    //var rDate = new Date(oDate.getFullYear(), oDate.getMonth(), oDate.getDay() );
		    if (oDate !== null) {
		      oDate.setHours( 0 );
		    }
		    return oDate;
		},
		dateOut: function( oDate ){
		  if(oDate){
    		  var date = oDate.toLocaleDateString("de-DE");
    		  return date;
		  }
		},
		parseInt : function( oString ){
		    var int = parseInt( oString, 10 );
		    if (isNaN(int)) { return 0 }
		    return int;
		},
		getOverviewButton:function(oVal){
			return Boolean(oVal) ;
		},
		//get the memtype from the first item, is this only for leading?
		getMemType:function(oVal){
			if(oVal){
				return this.getModel().getProperty("/"+oVal.toHeadquarter.__list[0]+"/MemType");
			}
		},
		getAddButtonVisible:function(oVal){
			if(!oVal)return ;
			var aData=this.byId("idTableStruct").getModel('struct').getData();
			var iGroupStartIndex='';
			var iLength=0;
			var sPartner=oVal.Partner;
			//fist index by bp partner id
			for(var i in aData){
				if(aData[i].Partner===sPartner){
					iGroupStartIndex = i;
					break;	
				}
			}
			//get the length
			for(var j=iGroupStartIndex;j<aData.length;j++) {
				if(aData[j].Partner===sPartner){
					iLength++;
				}else{
					break;
				}
			}
			var iContext=aData.indexOf(oVal);
			return iContext == Number(iGroupStartIndex)+(iLength-1);
//			return aData.indexOf(oEvt) == aData.length -1;
		}
	}
});
