/*
 * This class generates a Service (Activity) which can be used in a Process or a Rule.
 */
package com.vyom.service.conversion;

import org.json.*;

import javax.validation.constraints.NotNull;
import org.hibernate.validator.constraints.NotBlank;
import com.bmc.arsys.rx.application.common.ServiceLocator;
import com.bmc.arsys.rx.services.RxException;
import com.bmc.arsys.rx.services.association.AssociationService;
import com.bmc.arsys.rx.services.common.DataPage;
import com.bmc.arsys.rx.services.common.DataPageQueryParameters;
import com.bmc.arsys.rx.services.common.QueryPredicate;
import com.bmc.arsys.rx.services.common.domain.Scope;
import com.bmc.arsys.rx.services.record.RecordService;
import com.bmc.arsys.rx.services.record.domain.RecordInstance;
import com.bmc.arsys.rx.services.action.domain.Action;
import com.bmc.arsys.rx.services.action.domain.ActionParameter;
import com.bmc.arsys.rx.services.common.Service;


/*
 * You need to create a class that implements the BMC Service.
 */
public class DataConversionService implements Service {

    /**
     * This action takes a String as an Input Parameter and returns an object.
     *
     * @param userName (String) the user name. The parameter must not be empty.
     * @return a TestMe object with the username and the new password.
     */
    @Action(name = "convertXMLToJSON", scope = Scope.PUBLIC, displayName = "" , isDeprecated = false , deprecatedText="")
    public String convertXMLToJSON(@ActionParameter(name = "xmlData") @NotBlank @NotNull String xmlData) {
        String jsonString = "";
            try {  
            JSONObject json = XML.toJSONObject(xmlData);   
                    jsonString = json.toString(4);  
                    System.out.println(jsonString);  
              return jsonString;
            }catch (JSONException e) {  
            // TODO: handle exception  
            return e.toString();
            }
        
    }
}
