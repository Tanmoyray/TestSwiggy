package MyRunner;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features ="C:\\Users\\tanmoyrayvst\\eclipse-workspace\\TestCucumber\\src\\test\\java\\Features",
		glue= "StepDefinitions",
		tags = {"@smokeTest"},
		plugin= {"pretty","html:test-output"},
		dryRun= false ,
		monochrome = true,
		strict=false
		)


public class TestRunner {
	
	
	
}
