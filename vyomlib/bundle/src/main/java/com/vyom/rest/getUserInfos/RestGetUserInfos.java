
package com.vyom.rest.getUserInfos;

import com.bmc.arsys.rx.services.common.DataPage;
import com.bmc.arsys.rx.services.common.DataPageQueryParameters;
import com.bmc.arsys.rx.services.common.RestfulResource;
import com.bmc.arsys.rx.services.common.annotation.AccessControlledMethod;
import com.bmc.arsys.rx.services.common.annotation.RxDefinitionTransactional;
import com.bmc.arsys.rx.services.record.RecordService;
import com.bmc.arsys.rx.application.common.ServiceLocator;
import com.bmc.arsys.rx.services.user.UserService;
import com.bmc.arsys.rx.services.user.domain.User;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Arrays;
import java.util.HashMap;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;


@Path("restUserInfos")
public class RestGetUserInfos implements RestfulResource {
	private static final String QUERY_TYPE_RECORD_DATA = "com.bmc.arsys.rx.application.record.datapage.RecordInstanceDataPageQuery";
  
    @GET
    @Path("/getMyInfos")
    @RxDefinitionTransactional(readOnly = true)
    @AccessControlledMethod(authorization = AccessControlledMethod.AuthorizationLevel.ValidUser)
    @Produces(MediaType.APPLICATION_JSON)
    public UserInfos getUserInfos() {
        UserInfos myUserInfos = new UserInfos();

        // We get the current user context (actually the user Service)
        UserService userService = ServiceLocator.getUserService();
        // We ask for the information of the currently logged in user.
        // We do not have a getCurrentUser() method but we can use the keyword $USER$
        // which is the current user.
        User user = userService.getUser("$USER$");
        
        // Getting the user information and sending them back
        myUserInfos.setEmailAddress(user.getEmailAddress());
        myUserInfos.setFullName(user.getFullName());
        myUserInfos.setId(user.getId());
        myUserInfos.setLoginName(user.getLoginName());
        myUserInfos.setUserId(user.getUserId());
        myUserInfos.setFunctionalRole(user.getGroups().toString());

        return myUserInfos;
    }
    @GET
    @Path("/getMyAdditionalInfos/{fieldid}")
    @RxDefinitionTransactional(readOnly = true)
    @AccessControlledMethod(authorization = AccessControlledMethod.AuthorizationLevel.ValidUser)
    @Produces(MediaType.APPLICATION_JSON)
   public List<Object> getAdditionalUserInfos(@PathParam("fieldid") String fieldid) {
    	
        String recordDefinitionName="com.bmc.arsys.rx.foundation:Person";
        UserAdditionalInformation myinfo=new UserAdditionalInformation();
        
        RecordService recordService = ServiceLocator.getRecordService();
        Map<String, List<String>> dataPageParams = new HashMap<String, List<String>>();
        int nb_records = 1;
        String myQualification = "";

        
        dataPageParams.put("dataPageType", new ArrayList<String>(Arrays.asList(QUERY_TYPE_RECORD_DATA)));
        dataPageParams.put("pageSize", new ArrayList<String>(Arrays.asList(Integer.toString(nb_records))));
        List<String> propertySelections = new ArrayList<String>();
        propertySelections.add(fieldid);
        dataPageParams.put("propertySelection", new ArrayList<String>(propertySelections));
        dataPageParams.put("recorddefinition", new ArrayList<String>(Arrays.asList(recordDefinitionName)));
        dataPageParams.put("startIndex", new ArrayList<String>(Arrays.asList("0")));
        
        
        myQualification = "'4'=$USER$";
       
        dataPageParams.put("queryExpression", new ArrayList<String>(Arrays.asList(myQualification)));
        
        DataPage response =recordService.getRecordInstancesByIdDataPage(new DataPageQueryParameters(dataPageParams));
        List<Object> records=(List<Object>) response.getData();
        
       

        return records;
    }
}
