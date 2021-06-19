package panko.codefield.controllers;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api")
public class MainController {

    @GetMapping
    public String api() {
        return "index.html";
    }
}
