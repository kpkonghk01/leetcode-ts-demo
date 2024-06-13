# Q

There is a board with 15 slots, initially there are 14 balls occupying the slots except for slot 5 which is an empty slot. In each move, you can choose a ball and jump through an adjacent ball, an adjacent ball is defined as any two balls connected with a line as shown in the diagram. The chosen ball must be landed on an empty slot. If the adjacent slot is empty, you cannot jump through it. If the landing slot is occupied, you can’t jump through it either. After jumping through a ball, the stepping ball will be removed.

For example, when ball 14 jump to slot 5, ball 9 will be removed. However, you cannot jump from 12 to 14 in the first step because slot 14 is occupied.

Your goal is to find a way to keep one ball, but remove the rest(Remove 13 balls). You should print the state of the board in each step. If there are multiple ways to solve, print any one of them.

You may choose any way to represent the state.
