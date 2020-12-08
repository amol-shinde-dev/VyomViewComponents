package com.vyom.rest.getUserInfos;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UserAdditionalInformation {
	@JsonProperty
    private List<String> response = null;

	public void setResponse(List<? extends Object> list) {
		this.response = (List<String>) list;
	}

	
}
