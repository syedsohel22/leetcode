# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeElements(self, head: Optional[ListNode], val: int) -> Optional[ListNode]:
        tmp = ListNode(-1, head)
        prev = tmp
        while prev.next:
            if prev.next.val != val:
                prev = prev.next
            else:
                prev.next = prev.next.next
      
        
        return tmp.next