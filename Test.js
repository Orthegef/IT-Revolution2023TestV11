jQuery('document').ready(function(){
	var arr =[0];
	var name="ors";
	var size;
	var inform;
	var email;
	var telephone;
	var elementsToHide;
	var show=-1;
	
	jQuery('#next').on('click', function(){
		elementsToHide=document.querySelectorAll('.visual1');
		for(var i=0;i<elementsToHide.length;i++)
		{
			elementsToHide[i].style.display='none';
		}
		elementsToHide=document.querySelectorAll('.visual2');
		for(var i=0;i<elementsToHide.length;i++)
		{
			elementsToHide[i].style.display='block';
		}
	});
	
	jQuery('#restart').on('click', function(){
		elementsToHide=document.querySelectorAll('.item');
		for(var i=0;i<elementsToHide.length;i++)
		{
			elementsToHide[i].style.display='block';
		}
		elementsToHide=document.querySelectorAll('.visual1');
		for(var i=0;i<elementsToHide.length;i++)
		{
			elementsToHide[i].style.display='block';
		}
		elementsToHide=document.querySelectorAll('.visual3');
		for(var i=0;i<elementsToHide.length;i++)
		{
			elementsToHide[i].style.display='none';
		}
		
	});
	
	jQuery('#massive').on('click', function(){
		show=show*-1;
		element=document.getElementById("clon");
		if(show<0)
		{
			elementsToHide=document.querySelectorAll('.masive');
			for(var i=0;i<elementsToHide.length;i++)
			{
				elementsToHide[i].style.display='none';
			}
		}
		else
		{
			elementsToHide=document.querySelectorAll('.masive');
			for(var i=0;i<elementsToHide.length;i++)
			{
				elementsToHide[i].style.display='block';
			}
		}
	});
	
	jQuery('#but2').on('click', function(){
		name=jQuery('#val1').val();
		email=jQuery('#val2').val();
		telephone=jQuery('#val3').val();
		
		if(jQuery('#rad1').prop('checked'))
		{
			size="Мала";
		}
		if(jQuery('#rad2').prop('checked'))
		{
			size="Середня";
		}
		if(jQuery('#rad3').prop('checked'))
		{
			size="Велика";
		}
		
		if (name!='' && email!='' && telephone!='')
		{
			arr[0]=arr[0]+1;
			ID=arr[0]
			arr.push([ID, name, email, telephone]);
			inform=jQuery('#clon1').clone();//append(arr);
			jQuery('#array').append(inform);
			
			elementsToHide=document.querySelectorAll('.visual2');
			for(var i=0;i<elementsToHide.length;i++)
			{
				elementsToHide[i].style.display='none';
			}
			elementsToHide=document.querySelectorAll('.item');
			for(var i=0;i<elementsToHide.length;i++)
			{
				elementsToHide[i].style.display='none';
			}
			elementsToHide=document.querySelectorAll('.visual3');
			for(var i=0;i<elementsToHide.length;i++)
			{
				elementsToHide[i].style.display='block';
			}
			inform=jQuery('#clon').append('<br>');
			inform=jQuery('#clon').append(ID,' ',name,' ',email,' ',telephone,' ',size,' ');
			if(jQuery('#chek1').prop('checked'))
			{
				inform=jQuery('#clon').append('Моцарела ');
			}
			if(jQuery('#chek2').prop('checked'))
			{
				inform=jQuery('#clon').append('Шинка ');
			}
			if(jQuery('#chek3').prop('checked'))
			{
				inform=jQuery('#clon').append('Помідори ');
			}
			if(jQuery('#chek4').prop('checked'))
			{
				inform=jQuery('#clon').append('Базилік ');
			}
			
			if(jQuery('#chek5').prop('checked'))
			{
				inform=jQuery('#clon').append('Пармезан ');
			}
			if(jQuery('#chek6').prop('checked'))
			{
				inform=jQuery('#clon').append('Салямі ');
			}
			if(jQuery('#chek7').prop('checked'))
			{
				inform=jQuery('#clon').append('Перець ');
			}
			if(jQuery('#chek8').prop('checked'))
			{
				inform=jQuery('#clon').append('Орегано ');
			}
			
			if(jQuery('#chek9').prop('checked'))
			{
				inform=jQuery('#clon').append('Чедер ');
			}
			if(jQuery('#chek10').prop('checked'))
			{
				inform=jQuery('#clon').append('Курка ');
			}
			if(jQuery('#chek11').prop('checked'))
			{
				inform=jQuery('#clon').append('Цибуля ');
			}
			if(jQuery('#chek12').prop('checked'))
			{
				inform=jQuery('#clon').append('Петрушка ');
			}
			
			if(jQuery('#chek13').prop('checked'))
			{
				inform=jQuery('#clon').append('Філе ');
			}
			if(jQuery('#chek14').prop('checked'))
			{
				inform=jQuery('#clon').append('Гриби ');
			}
			if(jQuery('#chek15').prop('checked'))
			{
				inform=jQuery('#clon').append('Часникова сіль ');
			}
			
			if(jQuery('#chek16').prop('checked'))
			{
				inform=jQuery('#clon').append('Ковбаски ');
			}
			if(jQuery('#chek17').prop('checked'))
			{
				inform=jQuery('#clon').append('Оливки ');
			}
			
			if(jQuery('#chek18').prop('checked'))
			{
				inform=jQuery('#clon').append('Креветки ');
			}
			if(jQuery('#chek19').prop('checked'))
			{
				inform=jQuery('#clon').append('Ананаси ');
			}
			
			
			jQuery('#array').append(inform);
			elementsToHide=document.querySelectorAll('.masive');
			for(var i=0;i<elementsToHide.length;i++)
			{
				elementsToHide[i].style.display='none';
			}
		}
		else
		{
			if (name=='')
			{
				alert ("Введіть Ім'я");
			}
			if (email=='')
			{
				alert ("Введіть Адресу");
			}
			if (telephone=='')
			{
				alert ("Введіть Номер телефону");
			}
		}
	});
	
});


/*
jQuery('document').ready(function(){	//буде виконуватись вже після того як ми матимемо весь документ
	var name,addres,email,size,intgredient[]
	name="Name"
	var Test = prompt('input You name:','');
	jQuery('#result').html(Test);
	jQuery('button').on('click', function(){	//реакція на натиснення кнопки
	alert ('CLICK');
		var name=jQuery('#val1').val();		//отримання данних від поля val1
		var addres=jQuery('#val2').val();
		var email=jQuery('#val3').val();
		//value1=parseInt(value1);	переводить value1 в int
		jQuery('#result').html(value3);
		alert ('CLICK');
		alert ('Result:\n',' name',name,'\n addres',addres,'\n email',email,'\n size',size,'\n intgredient[]');
	});
	*/
/*	
	function saveTextAsFile(textToWrite, fileNameToSaveAs) {
    var textFileAsBlob = new Blob([textToWrite], { type: 'text/plain' });
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL != null) {
        // для Chrome
        downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    }
    else {
        // для інших браузерів
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        downloadLink.onclick = destroyClickedElement;
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
    }

    downloadLink.click();
}
document.querySelector('button').addEventListener('click', function() {
    var textToWrite = "Це текст, який буде записаний у файл";
    var fileNameToSaveAs = "example.txt";

    saveTextAsFile(textToWrite, fileNameToSaveAs);
});*/
/*	
	//jQuery('body').append('<a href="http://google.com">go to GOOGLE</a>');  //додає силку на гугл
	
	//jQuery('div').remove();	//видаляє даний елемент із сайту
	
	//var zminna;	//оголошення змінної
	zminna=jQuery('p').clone();	//клонування всіх елементів "р"
	jQuery('body').append(zminna);
	
	var p1,p2;
	p1=5;
	p2=5;
	
	var test1 = prompt('input You name:','');
	jQuery('#resultat').html(test1);
	
	var test2 = confirm('Delete?');
	
	jQuery('button').on('click', function(){	//реакція на натиснення кнопки
		var value1=jQuery('#val1').val();		//отримання данних від поля val1
		var value2=jQuery('#val2').val();
		value1=parseInt(value1);
		value2=parseInt(value2);
		var value3=value1+value2;
		//value1=parseInt(value1);	переводить value1 в int
		jQuery('#resultat').html(value3);
		alert ('CLICK');
		alert ('Result:\n'+value1*value2);
	});
});*/

//alert("Text ALERT");	//аналог прінта через меседж бокс