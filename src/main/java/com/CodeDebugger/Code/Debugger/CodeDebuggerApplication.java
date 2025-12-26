package com.CodeDebugger.Code.Debugger;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = {
		org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration.class,
		org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration.class,
		SecurityAutoConfiguration.class
})
public class CodeDebuggerApplication {
	public static void main(String[] args) {
		SpringApplication.run(CodeDebuggerApplication.class, args);
	}
}