function get_is_data_correct(base_element=document) {
    let elements = [];

    
    for (element of base_element.getElementsByTagName("input")) {
      if (element.attributes["data-is-correct"] && element.attributes["data-is-correct"].value == "True") {
          elements.push(element);
       }
    }

    return elements;
}



function is_more_then_one_correct_answer(option) {
    return get_is_data_correct(option.parentElement).length > 1;
}


for (option in get_is_data_correct()) {
    if (is_more_then_one_correct_answer(option)){
        console.log("The script has failed :(");
        console.log("It seems that this page has some question without one right answer...");
        console.log("You will have to go over it manually :( ");
        break;
    }

    option.click();
}

