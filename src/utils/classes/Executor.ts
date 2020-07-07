/* The class that will execute a regex operation into an input string */

interface ExecutorInterface {
    readonly regex: RegExp;
    readonly input: string;
    exec: () => RegExpExecArray[];
}

class Executor implements ExecutorInterface {
    readonly regex: RegExp;
    readonly input: string;

    constructor(regexString: string, input: string, flags: string) {
        this.regex = new RegExp(regexString, flags);
        console.log(this.regex);
        this.input = input;
    }

    exec(): RegExpExecArray[] {
        //see if with the y flag we get the lastIndex as argument.
        let match: RegExpExecArray | null;
        if (this.regex.global) {
            //g flag
            let matches: RegExpExecArray[] = [];
            while ((match = this.regex.exec(this.input)) !== null) {
                matches.push(match);
            }
            return matches;
        } else {
            match = this.regex.exec(this.input);
            return match ? [match] : [];
        }
    }
}

export default Executor;
