package io.blackbeat.opendoors.service.impl;

import io.blackbeat.opendoors.db.entity.Static.Review;
import io.blackbeat.opendoors.db.repository.ReviewRepo;
import io.blackbeat.opendoors.service.ReviewService;
import io.blackbeat.opendoors.service.SpotService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Arrays;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class ReviewServiceImpl implements ReviewService {
    private final ReviewRepo reviewRepo;
    @Override
    public Review saveReview(Review review) {
        log.info("장소 {}에 {}가 작성한 리뷰가 데이터베이스에 저장합니다." , review.getSpotId() , review.getUsername());
        return reviewRepo.save(review);
    }

    @Override
    public List<Review> findReviewByName(String username) {
        System.out.println(Arrays.toString(reviewRepo.findAllByUsername(username).toArray()));
        return reviewRepo.findAllByUsername(username);
    }

    @Override
    public List<Review> findReviewByUserId(Long userId) {
        return reviewRepo.findAllByUserId(userId);
    }

    @Override
    public Review findReviewById(Long id) {
        return reviewRepo.findById(id).orElseThrow();
    }

}
