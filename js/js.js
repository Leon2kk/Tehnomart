        /*Таб контент, без jQuerry*/
        var tabButton  = "tab-links__btn";
        var contentID  = "data-content";
        var tabContent = "tab-contents";
        var hidenClass = "hidden"; 

        var buttonclick =  document.getElementsByClassName(tabButton);        
        for (var key in buttonclick) {
                buttonclick[key].onclick = function(){
                for (var key in buttonclick) {
                    buttonclick[key].disabled = false;
                }
                showTabContent(this.getAttribute(contentID));
                this.disabled = true;
                }
        }
        function showTabContent(id){
            var tabelement =  document.getElementsByClassName(tabContent);
            Object.entries(tabelement).forEach(([key, value]) => {
                if (!tabelement[key].classList.contains(hidenClass))
                    tabelement[key].classList.add(hidenClass);
            })
            var element =  document.getElementById(id);
            element.classList.remove(hidenClass);
        }

        $('.slider').slick({dots: true, dotsClass: 'slider-nav'});

        $(".showpopup").fancybox({
            padding : 0,		
        });
        
        $('.sort-caption-showfilter').click(function() {
            $('.filter-form').slideToggle('300');          
        });