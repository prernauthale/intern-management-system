package com.internmanagement.utils;

import java.time.LocalDate;

public class IdGenerator {

    public static String generateInternId(String type, LocalDate doj, int count) {

        String prefix = type.equalsIgnoreCase("Premium") ? "EMP" : "TDA";

        String date = doj.toString().replace("-", "");

        String number = String.format("%03d", count);

        return prefix + date + "-" + number;
    }
}