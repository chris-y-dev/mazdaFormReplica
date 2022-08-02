import { Body } from "./Body";
import { Drivetrain } from "./Drivetrain";
import { Engine } from "./Engine";
import { Grade } from "./Grade";
import { Wheels } from "./Wheels";
import { Exterior } from "./Exterior";
import { Transmission } from "./Transmission";
import { Interior } from "./Interior";
<<<<<<< HEAD
=======
import { Extra } from "./Extra";
>>>>>>> ca23571ba0c9fe3317aa8f9e30c06d650f66f9f5

export interface FormData {

    details: {
        model: string,
        country: string
    }

    body: Body[];

    grade: Grade[];

    drivetrain: Drivetrain[];

    transmission: Transmission[];

    engine: Engine[];

    exterior: Exterior[];

    interior: Interior[];

    wheels: Wheels[];
<<<<<<< HEAD
=======

    extras: Extra[];
>>>>>>> ca23571ba0c9fe3317aa8f9e30c06d650f66f9f5
}










