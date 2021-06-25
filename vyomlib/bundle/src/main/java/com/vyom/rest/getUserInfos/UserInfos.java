package com.vyom.rest.getUserInfos;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UserInfos {
    @JsonProperty
    private String loginName = "";
    @JsonProperty
    private String userId = "";
    @JsonProperty
    private String fullName = "";
    @JsonProperty
    private String emailAddress = "";
    @JsonProperty
    private String id = "";
     @JsonProperty
    private String functionalRole = "";

    public void setLoginName(String loginName) {
        this.loginName = loginName;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
    }

    public void setId(String id) {
        this.id = id;
    }
    public void setFunctionalRole(String functionalRole) {
        this.functionalRole = functionalRole;
    }
}
