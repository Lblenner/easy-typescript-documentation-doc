import { ClassDesc, ClassName, Doc } from "easy-typescript-documentation"

@Doc
@ClassName("@Doc")
@ClassDesc("Register a class to be used by the functions. <br/> Nothing will be outputed by the functions if this is not present.")
export class mockDoc {

}

@Doc
@ClassName("@ClassName")
@ClassDesc("Take a string as argument. <br/> Add a name to a class to be displayed.")
export class mockClassName {

}

@Doc
@ClassName("@ClassDesc")
@ClassDesc("Take a string as argument. <br/> Add a description to a class to be displayed.")
export class mockClassdesc {

}


@Doc
@ClassName("@Name")
@ClassDesc("Take a string as argument. <br/> Add a name to a propertie to be displayed.")
export class mockName {

}

@Doc
@ClassName("@Desc")
@ClassDesc("Take a string as argument. <br/> Add a description to a propertie to be displayed.")
export class mockDesc {

}

@Doc
@ClassName("@Note")
@ClassDesc("Take a string as argument. <br/> Add a note to a propertie to be displayed.")
export class mockNote {

}

@Doc
@ClassName("@Color")
@ClassDesc("Take a DOC_COLOR as argument. ('red','orange','grey','none') <br/> Add a color highlight to a propertie.")
export class mockColor {

}

@Doc
@ClassName("getJson")
@ClassDesc(`Take an Object as argument. <br/>
    Output a list of object representing the objects decorated by @Doc in the argument object. <br/>
    The structure is available <a href="https://github.com/Lblenner/easy-typescript-documentation/tree/master">here</a>.`)
export class mockGetJson {

}



@Doc
@ClassName("getDocPage")
@ClassDesc(`Take a name (string), an object containing class decorated with @Dodc and an optonal description (string) as arguments. <br/>
    Output an html page as a string. <br/>`)
export class mockGetDoc {

}


@Doc
@ClassName("createClassAnnotation")
@ClassDesc(`Take up to 3 string argument. <br/>
    Those arguements can be typed like so: createClassAnnotation<string,string,string>("arg0","arg1","arg3"). <br/>
    Output a decorator for a class that will take as many argument as specified. <br/>
    The string arguments will be the key at which the values will be available in the json generated by getJson.`)
export class mockCreateClass {
}


@Doc
@ClassName("createPropertieAnnotation")
@ClassDesc(`Take up to 3 string argument. <br/>
    Those arguements can be typed like so: createPropertieAnnotation<string,string,string>("arg0","arg1","arg3"). <br/>
    Output a decorator for a arguments that will take as many argument as specified. <br/>
    The string arguments will be the key at which the values will be available in the json generated by getJson.`)
export class mockCreatePropertie {
}

