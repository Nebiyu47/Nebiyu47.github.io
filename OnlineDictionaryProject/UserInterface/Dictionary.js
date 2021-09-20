$(document).ready(function () {
    const sample = [
        {
            "word": "King",
            "wordtype": "n.",
            "definition": "A Chinese musical instrument, consisting of resonant stones\n   or metal plates, arranged according to their tones in a frame of wood,\n   and struck with a hammer."
        },
        {
            "word": "King",
            "wordtype": "n.",
            "definition": "A chief ruler; a sovereign; one invested with supreme\n   authority over a nation, country, or tribe, usually by hereditary\n   succession; a monarch; a prince."
        },
        {
            "word": "King",
            "wordtype": "n.",
            "definition": "One who, or that which, holds a supreme position or rank; a\n   chief among competitors; as, a railroad king; a money king; the king of\n   the lobby; the king of beasts."
        },
        {
            "word": "King",
            "wordtype": "n.",
            "definition": "A playing card having the picture of a king; as, the king of\n   diamonds."
        },
        {
            "word": "King",
            "wordtype": "n.",
            "definition": "The chief piece in the game of chess."
        },
        {
            "word": "King",
            "wordtype": "n.",
            "definition": "A crowned man in the game of draughts."
        },
        {
            "word": "King",
            "wordtype": "n.",
            "definition": "The title of two historical books in the Old Testament."
        },
        {
            "word": "King",
            "wordtype": "v. i.",
            "definition": "To supply with a king; to make a king of; to raise to\n   royalty."
        }
    ];

    $("#lookup").click(function () {
        let serachText = $("#serachText").val().trim();
        $.ajax({   
            type: "GET",
            url: "http://localhost:5000/?word="+serachText,         
            success: function(response){
                $("#result").empty();
                let result = response;

                for (let i = 0; i < result.length; i++) {
                    $("#result").append(`
                    <p> ${i+1} (${result[i].wordtype}) ${result[i].definition}</p>
                    `);
                }
            },
            error:function(err){
                console.log(err);
            }

        });
       
    })
})