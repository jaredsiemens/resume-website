package com.resume.api.model;

import java.util.List;
import java.util.Map;

public record Resume(
        List<Experience> experience,
        Education education,
        Map<String, List<String>> skills,
        List<Award> awards,
        List<Activity> activities) {
    public record Experience(String title, String company, String period, List<String> bullets) {
    }

    public record Education(String degree, String institution, String date) {
    }

    public record Award(String title, String description) {
    }

    public record Activity(String name, List<String> bullets) {
    }
}
