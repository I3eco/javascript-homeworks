var personalData = ["Име", "Фамилия", "Години", "Занимание"];

document.write(personalData[0] + " " + personalData[1] + " " + personalData[2] + " " + personalData[3]);

personalData.splice(3, 3, "Желаете ли да станете добър програмист");

document.write("</br>" + personalData[0] + " " + personalData[1] + " " + personalData[2] + " " + personalData[3]);