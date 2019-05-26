/**
 * Auto Delete All Facebook Messages
 *
 * You can run this code from the console, but the best way to run it is by
 * saving it as bookmark in your bookmark bar. Look at the gists comments for
 * instructions on how to save it as a bookmark.
 *
 * @link   http://matthewdunham.net
 * @link   http://linkedin.com/in/matthewdunham
 * @author Matthew Dunham <matt@matthewdunham.net>
 */
(function($){
    var 
        stepOne = function(){
            if (null !== $('div[aria-label="Conversation actions"]')) {
                $('div[aria-label="Conversation actions"]').click();
                setTimeout(stepTwo, 200);
            } else {
                console.log('There are no messages to delete');
            }
        },
        stepTwo = function(){
            var elements = document.evaluate('//span[text()="Delete"]', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
            for (var i = 0; i < elements.snapshotLength; i++) {
                elements.snapshotItem(i).click();
            }
            setTimeout(stepThree, 200);
        },
        stepThree = function(){
            //This line not working on Popup, So i have changed it and working properly now.
            //$('em[data-intl-translation="Delete"]').parentNode.click();
            
            $('div._59s7[aria-label="Dialog content"] ._3quh._30yy._2t_._3ay_._5ixy').click();
            if (null !== $('div[aria-label="Conversation actions"]')) {
                setTimeout(stepOne, 600);
            } else {
                console.log('No more messages to delete');
            }
        };
    
    console.log('Deleting all Facebook messages - By: Matthew Dunham');
    stepOne();
})(function(sel){ return document.querySelector(sel); });
