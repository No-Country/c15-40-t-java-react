package com.NoCountry.educ.ar.util;

import java.util.Arrays;
import java.util.List;

public enum Role {

    READER(Arrays.asList(Permission.READ_ALL_INSTITUTIONS)),
    ADMINISTRATOR(Arrays.asList(Permission.SAVE_ONE_INSTITUTION,Permission.READ_ALL_INSTITUTIONS));

    private List<Permission> permissions;

    Role(List<Permission> permissions) {
        this.permissions = permissions;
    }

    public List<Permission> getPermissions() {
        return permissions;
    }

    public void setPermissions(List<Permission> permissions) {
        this.permissions = permissions;
    }

}
