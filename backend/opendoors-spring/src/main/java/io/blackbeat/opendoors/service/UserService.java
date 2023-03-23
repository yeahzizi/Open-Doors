package io.blackbeat.opendoors.service;


import io.blackbeat.opendoors.db.entity.Role;
import io.blackbeat.opendoors.db.entity.User;

import java.util.Collection;
import java.util.List;

public interface UserService {
    User saveUser(User user);
    Role saveRole(Role role);
    void addRoleToUser(String username , String roleName);
    void addSfInfoToUser(Long userId , Collection<Long> sfInfoIds);
    User getUser(String username);
    List<User> getUsers();
}
