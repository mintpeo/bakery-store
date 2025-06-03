package com.example.fullstackweb.service;

import com.example.fullstackweb.models.Avatar;
import com.example.fullstackweb.repository.AvatarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AvatarService {
    @Autowired
    private AvatarRepository avatarRepository;

    public List<Avatar> getAllAvatar() {
        return avatarRepository.findAll();
    }

}
